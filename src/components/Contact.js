// import React from "react"
// import "../../App.css"
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import emailjs from "emailjs-com"
// // 


// export default function Contact() {
//     function sendEmail(e) {
//         // e.preventDefault();

//         emailjs.sendForm('service_m5g1ku8', 'template_0j2adjh',e.target,
//         'XS3vO9PXYO4xV5fb9'
//         ).then(res=>{
//             console.log(res);
//         }).catch(err=> console.log(err));
//     }

//     return (
//     <div className="container border"
//     style={{marginTop:"50px", width:"50%", 
//     backgroundImage:`url('https://img.freepik.com/premium-photo/dark-wall-empty-room-with-plants-floor-3d-rendering_41470-3847.jpg?w=996')` ,
//     backgroundSize:'cover'
//     }}> 
//         <h1 style={{marginTop:'25px'}}>Contact Form</h1>
        
//         <form className="row" style={{margin: "25px 85px 75px 100px"}} onSubmit={sendEmail} >
//             <label> Name</label>
//             <input type="text" name="name" className="form-control" />

//             <label> Email</label>
//             <input type="email" name="user_email"  className="form-control"/>


//             <label> Phone Number</label>
//             <input type="datetime-local433" name="phone-number" className="form-control" />


//             <label > Courses</label>
//             {/* <input type="text" name="name" placeholder="select" /> */}
//             <select className="form-control" >
//                 <option selected value="">Select Courses</option>
//                 <option value="asure practitioner">Asure </option>
//                 <option value="asure practitioner">AWS </option>
//                 <option  value="software">Software Development</option>
//                 <option value="asure practitioner">Web Development </option>
//                 <option value="asure practitioner">Google Cloud </option>
//                 <option value="">Data Analyst</option>
//             </select>


//             <label> Message </label>
//             <textarea name="message" rows="4" className="form-control"  placeholder="kindly provided details more details"/>
//             <input type="Submit" value="send"   className="form-control btn btn-secondary"
//             style={{marginTop: "30px",}}
//             />
//         </form>__
//     </div>
//  )
// }
