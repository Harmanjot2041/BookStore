using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable
//Scaffold-DbContext 'Data Source=(localdb)\MSSQLLocalDB;Database=BookStore;User ID=Harman;Password=Happy@123;' Microsoft.EntityFrameworkCore.SqlServer -force -context BookStoreDbContext -OutputDir Entities
namespace BookEntities.Entities
{
    public partial class BookStoreDbContext : DbContext
    {
        public BookStoreDbContext()
        {
        }

        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Book { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Cmnt> Cmnt { get; set; }
        public virtual DbSet<Login> Login { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>(entity =>
            {
                entity.Property(e => e.BookId).HasColumnName("BookID");

                entity.Property(e => e.AuthorName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.BookImage).IsRequired();

                entity.Property(e => e.BookName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.Discription)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Book)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Book_Category");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cmnt>(entity =>
            {
                entity.Property(e => e.CmntId).HasColumnName("CmntID");

                entity.Property(e => e.BookId).HasColumnName("BookID");

                entity.Property(e => e.Cmnt1)
                    .IsRequired()
                    .HasColumnName("Cmnt")
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.HasOne(d => d.Book)
                    .WithMany(p => p.Cmnt)
                    .HasForeignKey(d => d.BookId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Cmnt_Cmnt");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.Property(e => e.LoginId).HasColumnName("LoginID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(1000)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
