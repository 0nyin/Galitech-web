import {useRef} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from '@emailjs/browser';
import "./Contact.css"


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

export default function Contacts() {

  

        const form = useRef()

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
          .sendForm('service_m5g1ku8',
           'template_cevuazh', 
           form.current,
            'XS3vO9PXYO4xV5fb9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
        };

  return (
    <>
    <div className="container"
    style={{marginTop:"50px", width:"50%", 
    backgroundImage:`url('https://img.freepik.com/premium-photo/dark-wall-empty-room-with-plants-floor-3d-rendering_41470-3847.jpg?w=996')` ,
    backgroundSize:"Auto"
    
    
    }}> 
     <h3 style={{marginTop:'25px'}}>Email Us and keep up to date with our latest news</h3>
        
      <form ref={form} onSubmit={sendEmail}
        className="row" style={{marginTop: "25px"}}  >
        <label> NAME 
          <input 
          type="text"
           name="user_name" 
           placeholder='Enter full name'
          className="form-control" 
          style={{marginBottom: "10px"}} 
          required
          />
        </label>

        <label> EMAIL
          <input 
          type="email" 
          name="user_email" 
          placeholder='Enter Email Address'
          className="form-control" 
          style={{marginBottom: "10px"}} 
          required
            />
        </label>

          <label> Phone/Mobile
          <input 
          type="datetime-local433"
          name="user_number"
          placeholder='i.e +234 7034989904'
          className="form-control" 
          style={{marginBottom: "10px"}}
          required 
             />
          </label>

        <label > Select Services
        <select   className="form-control"  style={{marginBottom: "10px"}} placeholder='click to select'>
         <option selected value="click to select" > click to select</option>
          <option value="Consultancy">Consultancy </option>
          <option value="IT Assest Purchase">IT Assest Purchase</option>
          <option  value="IT Training"> IT Training</option>
          <option value="Solution Deployment">Solution Deployment </option>
          <option value="IT Service Migration">IT Service Migration </option>
          <option value="IT Service Support">IT Service Support</option>
        </select>
        </label>

       <label> Message 
        <textarea 
        name="message" 
        rows="4"
         className="form-control" 
          placeholder="kindly provid comment for immediate feed back" 
           style={{marginBottom: "20px"}}
           />
         <input type="Submit" value="send"   className="form-control btn btn-danger"
           
          />
          </label>
        </form>
    </div>
    </>
  )
}













































































