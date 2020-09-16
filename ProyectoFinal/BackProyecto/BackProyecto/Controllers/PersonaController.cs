using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackProyecto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace BackProyecto.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly AplicationDbContext _context; 
            
        public PersonaController (AplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<PersonaController>
        [HttpGet]
        public ActionResult<List<Persona>> Get()
        {
            try
            {
                var listPersona = _context.Persona.ToList();
                return Ok(listPersona);
            } 
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<PersonaController>/5
        [HttpGet("{id}")]
        public ActionResult<Persona> Get(int id)
        {
            try
            {
                var persona = _context.Persona.Find(id);
                if(persona == null)
                {
                    return NotFound();
                }
                   
                return Ok(persona);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<PersonaController>
        [HttpPost]
        public ActionResult Post([FromBody] Persona persona)
        {
            try
            {
                _context.Add(persona);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<PersonaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Persona persona)
        {
            try
            {
                if(id != persona.Id)
                {
                    return BadRequest();
                }
                _context.Entry(persona).State = EntityState.Modified;
                _context.Update(persona);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<PersonaController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var persona = _context.Persona.Find(id);
                if(persona == null)
                {
                    return NotFound();
                }
                _context.Remove(persona);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
