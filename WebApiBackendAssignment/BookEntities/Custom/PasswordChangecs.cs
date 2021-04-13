using System;
using System.Collections.Generic;
using System.Text;

namespace BookEntities.Custom
{
    public class PasswordChangecs
    {
        public long LoginId { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
