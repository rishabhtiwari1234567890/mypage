import React ,{useState} from 'react';
import index from './index.css';
import {mystyle,login,form} from'./mystyle';

    <div>
      <mystyle />
      <login/>
      <form/>
    </div>

const App=()=>{
  const[email,setEmail]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const[password,setPassword]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const[dataInput,setdataInput]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

 
   const submitThis=()=>{
     const info={email:email,password:password,dataInput:dataInput};
     setdataInput([info]);
    }
    
  return(
    
    <div style={form}>
       <p >Please enter your credentials to login.</p>
      <form action=""onSubmit={submitThis}>
      <h1>Login</h1>
<div class="social-container">
<a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
<a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
</div>
<span>or use your account</span>
        <div>
         
          <input style={mystyle} type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <br>
        </br>
        <div> 
				
			<input style={mystyle} type="text"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
			</div>  <br></br>
			<button style ={ login} type="submit" >Login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  )

   
  
}

export default App;
