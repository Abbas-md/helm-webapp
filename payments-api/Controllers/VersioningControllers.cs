using Microsoft.AspNetCore.Mvc;

namespace payments_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VersioningController : ControllerBase
    {
        private class Response
        {
            public string Version { get; set; }
            public bool Value { get; set; }
        }

        [HttpGet]
        public IActionResult GetVersion()
        {
            return Ok(new Response
            {
                Version = "1.0.0",
                Value = true
            });
        }
    }
}

