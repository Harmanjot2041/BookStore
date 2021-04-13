using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookEntities.Entities
{
    public partial class Category
    {
        public Category()
        {
            Book = new HashSet<Book>();
        }

        public long CategoryId { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Book> Book { get; set; }
    }
}
