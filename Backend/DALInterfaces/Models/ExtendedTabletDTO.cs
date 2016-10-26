using System.Collections.Generic;

namespace UniversityInformationSystem.DALInterfaces.Models
{
    public class ExtendedTabletDTO : TabletDTO
    {
        public ContentDTO CurrentContent { get; set; }
        public List<ContentDTO> PastContents { get; set; }
    }
}
