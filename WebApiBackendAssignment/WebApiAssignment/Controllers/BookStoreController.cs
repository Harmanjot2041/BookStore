using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookStoreBussinessLayer;
using BookEntities.Entities;

namespace WebApiAssignment.Controllers
{
    
    [ApiController]
    [Route("[controller]/[action]")]
    public class BookStoreController : ControllerBase
    {
        private readonly IBookStoreComponent _bookStoreComponent;
        public BookStoreController(IBookStoreComponent bookStoreComponent)
        {
            _bookStoreComponent = bookStoreComponent;
        }
        // GET: api/BookStore
        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(_bookStoreComponent.GetBooks());
        }

        [HttpGet]
        public IActionResult GetBookById(long id)
        {
            return Ok(_bookStoreComponent.GetBookById(id));
        }

        // POST: api/BookStore
        [HttpPost]
       public IActionResult AddBook(Book book)
        {
            return Ok(_bookStoreComponent.AddBook(book));
        }
        
        [HttpPost]
        public IActionResult EditBook(Book book)
        {
            return Ok(_bookStoreComponent.EditBook(book));
        }

        // DELETE
        [HttpDelete()]
        public IActionResult Delete(int id)
        {
            return Ok(_bookStoreComponent.DeleteBook(id));
        }
        [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(_bookStoreComponent.GetCategories());
        }
        [HttpPost]
        public IActionResult AddCategory(Category category)
        {
            return Ok(_bookStoreComponent.AddCategory(category));
        }
        [HttpGet]
        public IActionResult Users()
        {
            return Ok(_bookStoreComponent.Users());
        }
        [HttpGet]
        public IActionResult SearchBook(string name)
        {
            return Ok(_bookStoreComponent.SearchBook(name));
        }
        [HttpGet]
        public IActionResult CategoryWiseBooks(long id)
        {
            return Ok(_bookStoreComponent.CategoryWiseBooks(id));
        }
        [HttpPost]
        public IActionResult AddCmnt(Cmnt model)
        {
            return Ok(_bookStoreComponent.AddCmnt(model));
        }
        [HttpGet]
        public IActionResult GetCmntsById(long id)
        {
            return Ok(_bookStoreComponent.GetCmntsById(id));
        }
        [HttpGet]
        public IActionResult MakeAdmin(long id)
        {
            return Ok(_bookStoreComponent.MakeAdmin(id));
        }
        [HttpGet]
        public IActionResult BlockUser(long id)
        {
            return Ok(_bookStoreComponent.BlockUser(id));
        }



    }
}
