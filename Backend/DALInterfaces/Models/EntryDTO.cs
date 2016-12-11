using System;
using System.Collections.Generic;

namespace UniversityInformationSystem.DALInterfaces.Models
{
    public class EntryDTO
    {
        public string Id { get; set; }
        public DateTime Date { get; set; }
        public string HtmlContent { get; set; }
        public List<TokenDTO> Tokens { get; set; }
    }
}
