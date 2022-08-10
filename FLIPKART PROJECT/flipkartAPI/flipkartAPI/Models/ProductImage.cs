﻿using System;
using System.Collections.Generic;

#nullable disable

namespace flipkartAPI.Models
{
    public partial class ProductImage
    {
        public int ProdImgId { get; set; }
        public int? ProductId { get; set; }
        public string ImageUrl { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Product Product { get; set; }
    }
}