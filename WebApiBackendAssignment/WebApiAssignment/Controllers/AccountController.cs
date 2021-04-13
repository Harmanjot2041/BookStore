using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BookStoreBussinessLayer;
using BookEntities.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using BookEntities.Custom;

namespace WebApiAssignment.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IBookStoreComponent _bookStoreComponent;
        private readonly IConfiguration _config;
        public AccountController(IBookStoreComponent bookStoreComponent, IConfiguration config)
        {
            _bookStoreComponent = bookStoreComponent;
            _config = config;
        }

        [HttpPost]
        public IActionResult Login(LoginedUser model)
        {

            var userInfo = _bookStoreComponent.LoginedUser(model);
            if(userInfo == null)
            {
                return BadRequest( new { message = " UserName or Password is Incorrect" });
            }
            var token = GenerateJSONWebToken(userInfo);
            return Ok(new { token , userInfo});
        }
        [HttpPost]
        public IActionResult SignUp(Login model)
        {
            int temp = _bookStoreComponent.SignUp(model);
            if (temp == 2)
                return BadRequest(new { message = " Email Already Exist " });
            return Ok(temp);
        }
        [HttpPost]
        public IActionResult PasswordChange(PasswordChangecs model)
        {
            return Ok(_bookStoreComponent.PasswordChange(model));
        }
        [HttpPost]
        public IActionResult ForgetPassword(Login model)
        {
            int ans =_bookStoreComponent.ForgetPassword(model.Email);
            if(ans == 2)
                return BadRequest(new { message = " This Email Does not exist. Please check your email id." });
            return Ok();
        }
        private string GenerateJSONWebToken(Login userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            string role;
            if (userInfo.Role == 0)
                role = "User";
            else
                role = "Admin";
            var claims = new[] { new Claim(ClaimTypes.Name, userInfo.Name), new Claim(ClaimTypes.Role, role) };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}