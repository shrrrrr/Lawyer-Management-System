import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [lawyerRegistrationNumber,setlawyerRegistrationNumber]=useState(0);
    const [practiseArea,setpractiseArea]=useState("");
    const [organization,setorganization]=useState("");
    const [location,setlocation]=useState("");
    const [yearsOfExperience,setyearsOfExperience]=useState("");
    const [language,setlanguage]=useState("");
  
  
      const navigate=useNavigate();
      const handleSubmit=(e)=>{
          e.preventDefault(); 
          navigate("/home");
         /* axios.post('http://localhost:4000/register',{name,email,lawyerRegistrationNumber,practiseArea,organization,location,yearsOfExperience,language})
          .then(result=>{
            console.log(result);
          }).catch(err=>{
            console.log(err);
          })*/
      }
      const handleback=(e)=>{
          navigate("/home")
  
      }
      const handlenext=(e)=>{
          navigate("/home");
      }
  
  return (


    <div style={{ 
        background: 'url("https://example.com/background.jpg") no-repeat center center', 
        backgroundSize: 'cover', 
        minHeight: '100vh', 
        padding: '50px 0',
        fontFamily: 'Arial, sans-serif'
    }}>



        <div className="container" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                Registration Form
            </h1>
            <nav className='navbar' style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                <button className="btn btn-secondary" style={{ marginRight: '10px' }}>Back</button>
                <button className="btn btn-secondary">Skip</button>
            </nav>
            <div className='background p-5 rounded' style={{ 
                background: '#FFFFFF', 
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px'
            }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputRegNo" className="form-label">Lawyer Registration Number</label>
                            <input type="text" className="form-control" id="exampleInputRegNo" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPracticeAreas" className="form-label">Practice Areas</label>
                            <input type="text" className="form-control" id="exampleInputPracticeAreas" required />
                        </div>
                    </form>
                </div>
                <div style={{ flex: 1 }}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputFirm" className="form-label">Law Firm/Organization</label>
                            <input type="text" className="form-control" id="exampleInputFirm" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputLocation" className="form-label">Location</label>
                            <input type="text" className="form-control" id="exampleInputLocation" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputExp" className="form-label">Years of Experience</label>
                            <input type="number" className="form-control" id="exampleInputExp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputLang" className="form-label">Preferred Languages</label>
                            <input type="text" className="form-control" id="exampleInputLang" required />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>

                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
 


)
}

export default RegistrationForm;
