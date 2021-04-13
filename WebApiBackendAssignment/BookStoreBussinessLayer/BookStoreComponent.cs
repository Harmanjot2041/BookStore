using BookDataAccess;
using BookEntities.Custom;
using BookEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStoreBussinessLayer
{
    public class BookStoreComponent : IBookStoreComponent
    {
        private readonly IBookStoreDataAccess _bookStoreDataAccess;
        public BookStoreComponent(IBookStoreDataAccess bookStoreDataAccess)
        {
            _bookStoreDataAccess = bookStoreDataAccess;
        }
        public int AddBook(Book book)
        {
            return _bookStoreDataAccess.AddBook(book);
        }

        public int AddCategory(Category category)
        {
            return _bookStoreDataAccess.AddCategory(category);
        }

        public int AddCmnt(Cmnt model)
        {
            return _bookStoreDataAccess.AddCmnt(model);
        }

        public int BlockUser(long id)
        {
            return _bookStoreDataAccess.BlockUser(id);
        }

        public List<Book> CategoryWiseBooks(long id)
        {
            return _bookStoreDataAccess.CategoryWiseBooks(id);
        }

        public int DeleteBook(long id)
        {
            return _bookStoreDataAccess.DeleteBook(id);
        }

        public int EditBook(Book book)
        {
            return _bookStoreDataAccess.EditBook(book);
        }

        public Book GetBookById(long id)
        {
            return _bookStoreDataAccess.GetBookById(id);
        }

        public List<Book> GetBooks()
        {
            return _bookStoreDataAccess.GetBooks();
        }

        public List<Category> GetCategories()
        {
            return _bookStoreDataAccess.GetCategories();
        }

        public List<Cmnt> GetCmntsById(long id)
        {
            return _bookStoreDataAccess.GetCmntsById(id);
        }

        public Login LoginedUser(LoginedUser model)
        {
            return _bookStoreDataAccess.LoginedUser(model);
        }

        public int MakeAdmin(long id)
        {
            return _bookStoreDataAccess.MakeAdmin(id);
        }

        public List<Book> SearchBook(string name)
        {
            return _bookStoreDataAccess.SearchBook(name);
        }

        public int SignUp(Login model)
        {
            return _bookStoreDataAccess.SignUp(model);
        }

        public List<Login> Users()
        {
           return _bookStoreDataAccess.Users();
        }
        public int PasswordChange(PasswordChangecs model)
        {
            return _bookStoreDataAccess.PasswordChange(model);
        }
        public int ForgetPassword(string email)
        {
            return _bookStoreDataAccess.ForgetPassword(email);
        }
    }
}
