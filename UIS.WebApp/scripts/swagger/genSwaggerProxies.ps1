$swaggerGenLibDownloadUrl = "https://oss.sonatype.org/content/repositories/releases/io/swagger/swagger-codegen-cli/2.3.1/swagger-codegen-cli-2.3.1.jar"
$swaggerGenLibName = $swaggerGenLibDownloadUrl.Split('/')[-1]

$swaggerDocLocation = "http://localhost:56873/swagger/v1/swagger.json"

$scriptLocation = $PSScriptRoot
if(!($scriptLocation)) {
    $scriptLocation = (Get-Location).Path
}

$destDirectoryLocation = "$scriptLocation\..\..\src\app\api-proxy"
$swaggerGenLibLocation = "$scriptLocation\$swaggerGenLibName"

# Prepare destination location paths

Push-Location

Write-Host "Swagger Proxy Generator initialized! API doc location address: $swaggerDocLocation"

# Download Swagger script if not exists
if (!(Test-Path -Path $swaggerGenLibLocation)) {
    Write-Host "Downloading swagger generator..."
    Invoke-RestMethod -Uri $swaggerGenLibDownloadUrl -OutFile $swaggerGenLibLocation
}

# Prepare temporary directory for generated files
Write-Host "Preparing temporary directory for generated proxies..."
if(Test-Path -PathType Container -Path $destDirectoryLocation) {
    Remove-Item -Recurse -Path $destDirectoryLocation -Force | Out-Null
}

New-Item -ItemType Directory -Path $destDirectoryLocation | Out-Null
Set-Location $destDirectoryLocation

# Generating swagger proxies
Write-Host "Generating swagger proxies for angular..."
java -jar "`"$swaggerGenLibLocation`"" generate -i $swaggerDocLocation -l typescript-angular | Out-Null

if((Get-ChildItem -Path (Get-Location)).Length -eq 0) {
    Write-Warning "No proxies generated. Make sure swagger API doc endpoint ($swaggerDocLocation) is accessible. Backend API is not launched?"
    return
}

Pop-Location

Write-Host "Done."
