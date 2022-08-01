using System;
using System.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ToyCompanyConsole.Models
{
    public partial class TOY_MAF_COMPANYContext : DbContext
    {
        public TOY_MAF_COMPANYContext()
        {
        }

        public TOY_MAF_COMPANYContext(DbContextOptions<TOY_MAF_COMPANYContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CompanySchem> CompanySchems { get; set; }
        public virtual DbSet<CustAddress> CustAddresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderedItem> OrderedItems { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<ToyCompany> ToyCompanies { get; set; }
        public virtual DbSet<ToyType> ToyTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings["TOY_MAF_COMPANY"].ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CompanySchem>(entity =>
            {
                entity.HasKey(e => e.SchemeId)
                    .HasName("PK__CompanyS__DB7E1A42EFF3924A");

                entity.Property(e => e.SchemeId).HasColumnName("SchemeID");

                entity.Property(e => e.CretedOn)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ExpireOn).HasColumnType("date");

                entity.Property(e => e.SchemeName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustAddress>(entity =>
            {
                entity.HasKey(e => e.AddressId)
                    .HasName("PK__Cust_Add__091C2A1BE490DC84");

                entity.ToTable("Cust_Addresses");

                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.CustAddresses)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK_Address_CustID");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PK__Customer__049E3A895DECD959");

                entity.HasIndex(e => e.CustEmail, "UQ__Customer__263FA28D12EE534F")
                    .IsUnique();

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.CustEmail)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CustName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.AppliedSchemeId).HasColumnName("AppliedSchemeID");

                entity.Property(e => e.CustId).HasColumnName("CustID");

                entity.Property(e => e.OrderDate)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.AddtoDelieverNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.AddtoDeliever)
                    .HasConstraintName("FK_Orders_AddID");

                entity.HasOne(d => d.AppliedScheme)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.AppliedSchemeId)
                    .HasConstraintName("FK_AppScheme_SchemeID");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK_Orders_CustID");
            });

            modelBuilder.Entity<OrderedItem>(entity =>
            {
                entity.HasKey(e => e.OrderItemId)
                    .HasName("PK__OrderedI__57ED06A1031A5130");

                entity.Property(e => e.OrderItemId).HasColumnName("OrderItemID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.ToyId).HasColumnName("ToyID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderedItems)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK_OrderItem_OrderID");

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.OrderedItems)
                    .HasForeignKey(d => d.ToyId)
                    .HasConstraintName("FK_OrderItem_ToyID");
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.Property(e => e.ToyId).HasColumnName("ToyID");

                entity.Property(e => e.ToyMafAt).HasColumnName("Toy_mafAt");

                entity.Property(e => e.ToyName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.ToyMafAtNavigation)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.ToyMafAt)
                    .HasConstraintName("FK_Toy_PlantID");
            });

            modelBuilder.Entity<ToyCompany>(entity =>
            {
                entity.HasKey(e => e.PlantId)
                    .HasName("PK__ToyCompa__98FE395C77CB99CD");

                entity.Property(e => e.PlantAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PlantName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ToyTypeId).HasColumnName("ToyTypeID");

                entity.HasOne(d => d.ToyType)
                    .WithMany(p => p.ToyCompanies)
                    .HasForeignKey(d => d.ToyTypeId)
                    .HasConstraintName("FK_Comp_ToyType");
            });

            modelBuilder.Entity<ToyType>(entity =>
            {
                entity.Property(e => e.ToyTypeId).HasColumnName("ToyTypeID");

                entity.Property(e => e.ToyType1)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ToyType");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
