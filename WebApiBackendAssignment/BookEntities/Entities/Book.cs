using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookEntities.Entities
{
    public partial class Book
    {
        public Book()
        {
            Cmnt = new HashSet<Cmnt>();
        }

        public long BookId { get; set; }
        public long CategoryId { get; set; }
        public string BookName { get; set; }
        public string AuthorName { get; set; }
        public long BookPrice { get; set; }
        public long NoOfBooks { get; set; }
        public bool ShippingAllowed { get; set; }
        public string BookImage { get; set; }
        public string Discription { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Cmnt> Cmnt { get; set; }
    }
}
