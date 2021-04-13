using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookEntities.Entities
{
    public partial class Cmnt
    {
        public long CmntId { get; set; }
        public long BookId { get; set; }
        public string Cmnt1 { get; set; }

        public virtual Book Book { get; set; }
    }
}
