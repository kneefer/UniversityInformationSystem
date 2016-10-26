using System.Collections.Generic;

namespace UniversityInformationSystem.DALInterfaces.Models
{
    public class ExtendedTabletDTO : TabletDTO
    {
        public List<ContentDTO> HistoricalContents { get; set; }
    }
}
