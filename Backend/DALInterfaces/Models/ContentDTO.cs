using System;

namespace UniversityInformationSystem.DALInterfaces.Models
{
    public class ContentDTO
    {
        public string Id { get; set; }
        public DateTime SetTime { get; set; }
        public TemplateDTO Template { get; set; }
        public string HtmlContent { get; set; }
    }
}
