using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FileOps.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost]

        public IActionResult UploadFile(List<IFormFile> files)
        {
            var file = files.First();
            var filename = string.Format("./Uploads/{0}", file.FileName);
            var fileStrem = new FileStream(filename, FileMode.Append);
            file.CopyTo(fileStrem);
            fileStrem.Close();
            return Ok(file.Name);
        }

        [HttpGet]
        public IActionResult GetFileContent()
        {
            var filepath = string.Format("./Uploads/LOGIC.txt");
            var fileStream = new FileStream(filepath, FileMode.Open,FileAccess.Read);
            StreamReader sr = new StreamReader(fileStream);
            var data = sr.ReadToEnd();
            return Ok(data);
        }

        [HttpGet("{filename}")]
        public IActionResult DownloadFile(string filename)
        {
            var filepath = string.Format("./Uploads/{0}", filename);
            using (var fileStream = new FileStream(filepath, FileMode.Open))
            {

                var bytes = fileStream.ReadAllBytes();
            return File(bytes, "text/csv", filename);
            }
            
 

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
