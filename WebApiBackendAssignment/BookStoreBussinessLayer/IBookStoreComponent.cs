using BookEntities.Custom;
using BookEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStoreBussinessLayer 
{
    public interface IBookStoreComponent
    {
        List<Book> GetBooks();
        Book GetBookById(long id);
        int AddBook(Book book);
        int EditBook(Book book);
        int DeleteBook(long id);
        List<Category> GetCategories();
        int AddCategory(Category category);
        int SignUp(Login model);
        List<Login> Users();
        Login LoginedUser(LoginedUser model);
        List<Book> SearchBook(string name);
        List<Book> CategoryWiseBooks(long id);
        int AddCmnt(Cmnt model);
        List<Cmnt> GetCmntsById(long id);
        int MakeAdmin(long id);
        int BlockUser(long id);
        int PasswordChange(PasswordChangecs model);
        int ForgetPassword(string email);
    }
}
