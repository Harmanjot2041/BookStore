using BookEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using BookEntities.Custom;
using System.Net;
using System.Net.Mail;

namespace BookDataAccess
{
    public class BookStoreDataAccess : IBookStoreDataAccess
    {
        private readonly BookStoreDbContext _context;
        public BookStoreDataAccess(BookStoreDbContext context)
        {
            _context = context;
        }
        public int AddBook(Book book)
        {
            _context.Book.Add(book);
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
            client.EnableSsl = true;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("Enter your mail from where you want to send mail", "your mail id password");
            MailMessage msgobj = new MailMessage();
            msgobj.To.Add("harmanjot.singh@netsolutions.com");
            msgobj.From = new MailAddress("harmanjotue173037cse@gmail.com");
            msgobj.Subject = "New Book :-)";
            msgobj.Body = "New Book is Added Please visite Book Store to read ..";
            client.Send(msgobj);
            return _context.SaveChanges();
        }

        public int AddCategory(Category category)
        {
            _context.Category.Add(category);
            return _context.SaveChanges();
        }

        public int DeleteBook(long id)
        {
            var temp = _context.Book.FirstOrDefault(x => x.BookId == id);
            _context.Book.Remove(temp);
            return _context.SaveChanges();
        }

        public int EditBook(Book book)
        {
            var temp = _context.Book.FirstOrDefault(x => x.BookId == book.BookId);
            temp.BookImage = book.BookImage;
            temp.BookName = book.BookName;
            temp.BookPrice = book.BookPrice;
            temp.CategoryId = book.CategoryId;
            temp.Discription = book.Discription;
            temp.NoOfBooks = book.NoOfBooks;
            temp.ShippingAllowed = book.ShippingAllowed;
            temp.AuthorName = book.AuthorName;
            _context.Book.Update(temp);
            return _context.SaveChanges();
        }

        public Book GetBookById(long id)
        {
            return _context.Book.FirstOrDefault(x => x.BookId == id); 
        }

        public List<Book> GetBooks()
        {
            return _context.Book.ToList();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public int SignUp(Login model)
        {
            model.IsActive = true;
            model.Role = 0;
            Login temp =  _context.Login.FirstOrDefault(x => x.Email == model.Email);
            if(temp!= null)
            {
                return 2;
            }
            _context.Login.Add(model);
            return _context.SaveChanges();
        }
        public List<Login> Users()
        {
            List<Login> activeUsers = _context.Login.Where(x => x.Role == 0 && x.IsActive == true).ToList();
            return activeUsers;
        }
        public Login LoginedUser(LoginedUser model)
        {
            Login temp = _context.Login.FirstOrDefault(x => x.Email == model.Email && x.Password == model.Password && x.IsActive == true);
            return temp;
        }

        public List<Book> SearchBook(string name)
        {
            
            List<Book> temp = _context.Book.Where(x => x.BookName.Contains(name)).ToList();
            return temp;
        }

        public List<Book> CategoryWiseBooks(long id)
        {
            List<Book> temp = _context.Book.Where(x => x.CategoryId == id).ToList();
            return temp;
        }
        public int AddCmnt(Cmnt model)
        {
            _context.Cmnt.Add(model);
            return _context.SaveChanges();
        }

        public List<Cmnt> GetCmntsById(long id)
        {
            List<Cmnt> temp = _context.Cmnt.Where(x => x.BookId == id).ToList();
            return temp;
        }
        public int MakeAdmin(long id)
        {
            Login temp = _context.Login.FirstOrDefault(x => x.LoginId == id);
            temp.Role = 1;
            _context.Login.Update(temp);
            return _context.SaveChanges();
        }
        public int BlockUser(long id)
        {
            Login temp = _context.Login.FirstOrDefault(x => x.LoginId == id);
            temp.IsActive = false;
            _context.Login.Update(temp);
            return _context.SaveChanges();
        }
        public int PasswordChange(PasswordChangecs model)
        {
            Login temp = _context.Login.FirstOrDefault(x => x.LoginId == model.LoginId);
            temp.Password = model.NewPassword;
            _context.Login.Update(temp);
            return _context.SaveChanges();
        }
        public int ForgetPassword(string email)
        {
            Login temp = _context.Login.FirstOrDefault(x => x.Email == email);
            if (temp == null)
                return 2;
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
            client.EnableSsl = true;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("Enter your mail from where you want to send mail", "your mail id password");
            MailMessage msgobj = new MailMessage();
            msgobj.To.Add("harmanjot.singh@netsolutions.com");
            msgobj.From = new MailAddress("same email here from wher u want to send mail");
            msgobj.Subject = "Password Change";
            msgobj.Body = "Please click on below given click to change password..  " +"http://localhost:4200/ForgetPassword/"+temp.LoginId;
            client.Send(msgobj);
            return 1;
        }
    }
}
