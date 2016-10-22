# Self elevation
if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs; exit }

##### Configuration START #####
$mongoInstallerUrl = "https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.10-signed.msi"

$mongoInstallLocation = "C:\Program Files\MongoDB\Server\3.2"
$logLocationDirFullPath = "C:\data\log"
$dbLocationDirFullPath = "C:\data\db"
##### Configuration END #####

$msiInstallerName = Split-Path -Path $mongoInstallerUrl -Leaf
$mongodFullPath = Join-Path -Path $mongoInstallLocation -ChildPath "\bin\mongod.exe"

# Go to the temp location
Set-Location -Path ([System.IO.Path]::GetTempPath())

# Get MongoDB installer
Invoke-RestMethod -Uri $mongoInstallerUrl -OutFile $msiInstallerName

# Install MongoDB
$installArguments = "/q /i $msiInstallerName INSTALLLOCATION=`"$mongoInstallLocation`" ADDLOCAL=`"all`""
Start-Process -FilePath "msiexec.exe" -ArgumentList $installArguments -Wait -Passthru

# Add MongoDB directory to PATH variable
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";$(Join-Path -Path $mongoInstallLocation -ChildPath '\bin')", [EnvironmentVariableTarget]::User)

# Create directories for logs and db files
New-Item -ItemType Directory -Path @($logLocationDirFullPath, $dbLocationDirFullPath) -Force

# Remove old MongoDB Windows Service
$installArguments = "--remove"
Start-Process -FilePath $mongodFullPath -ArgumentList $installArguments -Wait -PassThru

# Install MongoDB Windows Service
$logFileFullPath = Join-Path -Path $logLocationDirFullPath -ChildPath "mongod.log"
$installArguments = "--dbpath `"$dbLocationDirFullPath`" --logpath `"$logFileFullPath`" --install"
Start-Process -FilePath $mongodFullPath -ArgumentList $installArguments -Wait -PassThru

# Start MongoDB Windows Service
Start-Service -Name "MongoDB"