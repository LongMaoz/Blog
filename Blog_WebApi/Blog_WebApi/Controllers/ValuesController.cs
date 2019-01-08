using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Demo;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Blog_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [Route("")]
        [HttpGet]
        public ActionResult<IEnumerable<JsonResult>> Get()
        {
            Class1 demo = new Class1() {
                Id = 7,
                Name = "测试数据"
            };
            return new JsonResult(demo);
        }
        [Route("GetUserInfo")]
        [HttpGet]
        public ActionResult<IEnumerable<JsonResult>> GetUserInfo(int id)
        {
            Class1 demo = new Class1()
            {
                Id = id,
                Name = "原始数据"
            };
            return new JsonResult(demo);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public ActionResult<IEnumerable<JsonResult>> Post([FromBody]JObject jObject)
        {
            return new JsonResult(jObject);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<JsonResult>> Put([FromBody] JObject jObject)
        {
            return new JsonResult(jObject);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
