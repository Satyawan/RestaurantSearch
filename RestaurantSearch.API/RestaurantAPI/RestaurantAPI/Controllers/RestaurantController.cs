using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RestaurantAPI.Models;

namespace RestaurantAPI.Controllers
{
    public class RestaurantController : ApiController
    {
        // GET api/values/5
        public List<Restaurant> Get(string zip)
        {
            //for now just return dummy restaurants.
            return new List<Restaurant>()
            {
                new Restaurant() {Address="Address1",Name="RestaurantA",Zip=zip },
                new Restaurant() {Address="Address2",Name="RestaurantA",Zip=zip },
                new Restaurant() {Address="Address3",Name="RestaurantA",Zip=zip }
            };
        }
    }

}
