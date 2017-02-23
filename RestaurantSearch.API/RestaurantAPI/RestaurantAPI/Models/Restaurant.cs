using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestaurantAPI.Models
{
    public class Restaurant
    {
        public string Name { get; set; }
        public string Zip { get; set; }
        public string Address { get; set; }
    }
}