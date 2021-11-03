import React,{useState} from 'react'
import {Form,Button,Card} from 'react-bootstrap'
import {
    Link,
    useHistory
 } from "react-router-dom";
 
 export default function AUTH() {
   
        const[email,setEmail]=useState("");
        const[password,setPassword]=useState("");
    const[allEntry,setAllEntry]=useState([]);
    const submitForm=()=>{
        const newEntry={email:email,password:password};
        setAllEntry([...allEntry,newEntry]);

    }
   
   /**const Click=()=>{
       const history=useHistory();
       history.push("/projects");
   }**/
    
    return (
        <div className="addIcon">
        <div class="col d-flex justify-content-center">
        <Card style={{width:"18em"}} align="center">
            <Form onSubmit={submitForm}>
                <div>
            <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div>
              <Form.Label>Password </Form.Label>
                < Form.Control type="password" placeholder="Enter password" value={password}  onChange={(e)=>setPassword(e.target.value)}/> 
                
            
            <br/><br/>
            <div>
           <Link to="/projects"><Button type="submit">Login</Button></Link>
            
            </div></div></Form>
            </Card>
            </div>
        </div>
    )
}





