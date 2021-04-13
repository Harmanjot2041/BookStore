using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookEntities.Entities
{
    public partial class Login
    {
        public long LoginId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Role { get; set; }
        public bool? IsActive { get; set; }
        public string Name { get; set; }
    }
}
