import React from 'react'
import Button from 'react-bootstrap/Button';
function Mfooter() {
  return (
  <>
  <hr /><div className='foot1'>
     <div className=' row divvv' style={{backgroundColor:'white'}}><br/><br/><br/><br/>
     <div className=" col-lg-4"><p><i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-pinterest-p"></i></p>
<h3>Sign Up For My Latest</h3><br/>
<p>Email*</p>
<form action="">
    
<input type="text" className="borderNone" /> <button className='button'  style={{marginLeft:'80px', width:'190px',height:'50px', border:'solid',textAlign:'center',alignItems:'center', border: '1px rgba(0, 0, 0, 0.05);' }} >join</button>

</form>
<br/><br/><br/><br/>
<h3>Collabs </h3>
<p style={{color:'grey'}}>For PR and commercial enquiries please contact: <br />info@mysite.com</p>

</div>
<div className="col-lg-2"> </div>
     <div className="col-lg-4">
        <p style={{color:'grey'}}>
You can also reach out directly to me</p><br />
<br />
<form action="">
    <label htmlFor="">First Name</label> 
    <label className='last' htmlFor="">Last Name</label>
    <br />
<input type="text" className="borderNone" /> <input type="text" className="borderNone1" /> 
<label className='email' htmlFor="">Email*</label> 
    <label className='last' htmlFor="">subject</label>
    <br />
<input type="text" className="borderNone" /> <input type="text" className="borderNone2" /> <br /><br />
<br />
 <button className='button'  style={{marginLeft:'0px', width:'190px',height:'50px', border:'solid',textAlign:'center',alignItems:'center', border: '1px rgba(0, 0, 0, 0.05);' }} >submit</button>

</form> </div>
    </div></div>
  </>
  )
}

export default Mfooter