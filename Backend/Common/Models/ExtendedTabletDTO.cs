using System.Collections.Generic;

namespace UniversityInformationSystem.Common.Models
{
    public class ExtendedTabletDTO : TabletDTO
    {
        public ContentDTO CurrentContent { get; set; }
        public List<ContentDTO> PastContents { get; set; }
    }
}
