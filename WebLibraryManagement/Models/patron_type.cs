//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebLibraryManagement.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class patron_type
    {
        public patron_type()
        {
            this.patrons = new HashSet<patron>();
        }
    
        public int Id { get; set; }
        public string code { get; set; }
        public string name { get; set; }
        public Nullable<int> order_number { get; set; }
        public Nullable<int> status { get; set; }
        public string create_by { get; set; }
        public Nullable<System.DateTime> create_date { get; set; }
        public string update_by { get; set; }
        public Nullable<System.DateTime> update_date { get; set; }
        public Nullable<int> active_fag { get; set; }
    
        public virtual ICollection<patron> patrons { get; set; }
    }
}
