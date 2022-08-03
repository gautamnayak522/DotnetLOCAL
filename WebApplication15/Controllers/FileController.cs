using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication15.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post(List<IFormFile> files)
        {
            var file = files.First();
            var fileName = string.Format("./Uploads/{0}", file.FileName);
            var fileStream = new FileStream(fileName, FileMode.Append);
            file.CopyTo(fileStream);
            fileStream.Close();
            return Ok(file.Name);
        }

        [HttpGet]
        public IActionResult Get(string fileName)
        {
          var  filePath = string.Format("./Uploads/{0}", fileName);
            var fileStream = new FileStream(filePath, FileMode.Open);
            var bytes = fileStream.ReadAllBytes();
            return  File(bytes, "text/csv",fileName);
        }


    }
    public static class StreamExtensions
    {
        public static byte[] ReadAllBytes(this Stream instream)
        {
            if (instream is MemoryStream)
                return ((MemoryStream)instream).ToArray();

            using (var memoryStream = new MemoryStream())
            {
                instream.CopyTo(memoryStream);
                return memoryStream.ToArray();
            }
        }
    }
}
