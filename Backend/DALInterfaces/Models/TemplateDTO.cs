using System.Collections.Generic;

namespace UniversityInformationSystem.DALInterfaces.Models
{
    public class TemplateDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string HtmlContent { get; set; }
        public List<TokenDTO> Tokens { get; set; }
    }
}
