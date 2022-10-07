using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Flipkart.Models
{
    public partial class ProductImage
    {
        public int ProdImgId { get; set; }
        public int? ProductId { get; set; }
        public string ImageUrl { get; set; }
        public bool? IsMain { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        [JsonIgnore]
        public virtual Product Product { get; set; }
    }
}
