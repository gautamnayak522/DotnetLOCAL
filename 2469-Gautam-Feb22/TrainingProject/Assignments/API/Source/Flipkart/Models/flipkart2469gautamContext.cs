using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Flipkart.Models
{
    public partial class flipkart2469gautamContext : DbContext
    {
        public flipkart2469gautamContext()
        {
        }

        public flipkart2469gautamContext(DbContextOptions<flipkart2469gautamContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cartitem> Cartitems { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderStatus> OrderStatuses { get; set; }
        public virtual DbSet<Orderitem> Orderitems { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductBrand> ProductBrands { get; set; }
        public virtual DbSet<ProductCategory> ProductCategories { get; set; }
        public virtual DbSet<ProductColour> ProductColours { get; set; }
        public virtual DbSet<ProductImage> ProductImages { get; set; }
        public virtual DbSet<ProductSize> ProductSizes { get; set; }
        public virtual DbSet<ProductSubcategory> ProductSubcategories { get; set; }
        public virtual DbSet<ProductsInventory> ProductsInventories { get; set; }
        public virtual DbSet<ShopingCart> ShopingCarts { get; set; }
        public virtual DbSet<State> States { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserAddress> UserAddresses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cartitem>(entity =>
            {
                entity.ToTable("cartitems");

                entity.Property(e => e.CartitemId).HasColumnName("cartitemID");

                entity.Property(e => e.CartId).HasColumnName("cartID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.Cartitems)
                    .HasForeignKey(d => d.CartId)
                    .HasConstraintName("FK_cartitems_cartID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Cartitems)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_cartitems_productID");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("orders");

                entity.Property(e => e.OrderId).HasColumnName("orderID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DeleveryAddressId).HasColumnName("deleveryAddressID");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.OrderDate)
                    .HasColumnType("datetime")
                    .HasColumnName("orderDate")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OrderNo)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("orderNo");

                entity.Property(e => e.OrderstatusId).HasColumnName("orderstatusID");

                entity.Property(e => e.TotalAmount).HasColumnName("totalAmount");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.DeleveryAddress)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.DeleveryAddressId)
                    .HasConstraintName("FK_Orders_delieveryAddress");

                entity.HasOne(d => d.Orderstatus)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.OrderstatusId)
                    .HasConstraintName("FK_Orders_orderstatusID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Orders_userID");
            });

            modelBuilder.Entity<OrderStatus>(entity =>
            {
                entity.ToTable("order_statuses");

                entity.Property(e => e.OrderstatusId).HasColumnName("orderstatusID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Orderitem>(entity =>
            {
                entity.ToTable("orderitems");

                entity.Property(e => e.OrderitemId).HasColumnName("orderitemID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.OrderId).HasColumnName("orderID");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Orderitems)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK_orderitems_orderID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Orderitems)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_orderitems_productID");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("products");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.BrandId).HasColumnName("brandID");

                entity.Property(e => e.CatId).HasColumnName("catID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("productName");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.BrandId)
                    .HasConstraintName("FK_products_brandID");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("FK_products_catID");
            });

            modelBuilder.Entity<ProductBrand>(entity =>
            {
                entity.HasKey(e => e.BrandId)
                    .HasName("PK__product___06B772B9CAB46880");

                entity.ToTable("product_brands");

                entity.Property(e => e.BrandId).HasColumnName("brandID");

                entity.Property(e => e.BrandName)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("brandName");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("thumbnail");
            });

            modelBuilder.Entity<ProductCategory>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PK__product___17B6DD26AB2520F7");

                entity.ToTable("product_category");

                entity.Property(e => e.CatId).HasColumnName("catID");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.CatName)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("catName");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("thumbnail");
            });

            modelBuilder.Entity<ProductColour>(entity =>
            {
                entity.HasKey(e => e.ProdColorId)
                    .HasName("PK__product___20CD4C1B3E630B5C");

                entity.ToTable("product_colours");

                entity.Property(e => e.ProdColorId).HasColumnName("prodColorID");

                entity.Property(e => e.Color)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("color");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IsAvailable)
                    .HasColumnName("isAvailable")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductColours)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_productColors_productID");
            });

            modelBuilder.Entity<ProductImage>(entity =>
            {
                entity.HasKey(e => e.ProdImgId)
                    .HasName("PK__product___CA31B84A3F32ED1B");

                entity.ToTable("product_images");

                entity.Property(e => e.ProdImgId).HasColumnName("prodImgID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ImageUrl)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("imageURL");

                entity.Property(e => e.IsMain)
                    .HasColumnName("isMain")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductImages)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_productImg_productID");
            });

            modelBuilder.Entity<ProductSize>(entity =>
            {
                entity.HasKey(e => e.ProdsizeId)
                    .HasName("PK__product___250222403E6A28D0");

                entity.ToTable("product_sizes");

                entity.Property(e => e.ProdsizeId).HasColumnName("prodsizeID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IsAvailable)
                    .HasColumnName("isAvailable")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.Size)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductSizes)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_productSizes_productID");
            });

            modelBuilder.Entity<ProductSubcategory>(entity =>
            {
                entity.HasKey(e => e.SubcatId)
                    .HasName("PK__product___B28CCD2C4C30E502");

                entity.ToTable("product_subcategory");

                entity.Property(e => e.SubcatId).HasColumnName("subcatID");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.CatId).HasColumnName("catID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.SubcatName)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("subcatName");

                entity.Property(e => e.Thumbnail)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("thumbnail");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.ProductSubcategories)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("FK_subcat_catID");
            });

            modelBuilder.Entity<ProductsInventory>(entity =>
            {
                entity.HasKey(e => e.ProdInvId)
                    .HasName("PK__products__F5B0A0ABCC2016AE");

                entity.ToTable("products_inventory");

                entity.Property(e => e.ProdInvId).HasColumnName("prodInvID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.ProductId).HasColumnName("productID");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductsInventories)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_productInv_productID");
            });

            modelBuilder.Entity<ShopingCart>(entity =>
            {
                entity.HasKey(e => e.CartId)
                    .HasName("PK__shoping___415B03D8DFA8F576");

                entity.ToTable("shoping_cart");

                entity.Property(e => e.CartId).HasColumnName("cartID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.TotalAmount).HasColumnName("totalAmount");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ShopingCarts)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Carts_userID");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("states");

                entity.Property(e => e.StateId).HasColumnName("stateID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.StateName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("stateName");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.EmailAddress, "UQ__users__347C3027E8A18DB5")
                    .IsUnique();

                entity.HasIndex(e => e.MobileNo, "UQ__users__4D7970A8E87E0B53")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("emailAddress");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("firstName");

                entity.Property(e => e.IsAdmin)
                    .HasColumnName("isAdmin")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("lastName");

                entity.Property(e => e.MobileNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("mobileNo");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.Otp)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("otp");

                entity.Property(e => e.Password)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<UserAddress>(entity =>
            {
                entity.HasKey(e => e.UserAddId)
                    .HasName("PK__user_Add__47A94CE99CDEC972");

                entity.ToTable("user_Addresses");

                entity.Property(e => e.UserAddId).HasColumnName("userAddID");

                entity.Property(e => e.Addressline1).IsUnicode(false);

                entity.Property(e => e.Addressline2).IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IsHome)
                    .HasColumnName("isHome")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.IsOffice)
                    .HasColumnName("isOffice")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.LandMark)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("landMark");

                entity.Property(e => e.ModifiedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("modified_at");

                entity.Property(e => e.Pin).HasColumnName("pin");

                entity.Property(e => e.StateId).HasColumnName("stateID");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.UserAddresses)
                    .HasForeignKey(d => d.StateId)
                    .HasConstraintName("FK_UserAddress_stateID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserAddresses)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_UserAddresses_userID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
