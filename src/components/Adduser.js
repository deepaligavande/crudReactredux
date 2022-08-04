// import {addUser} from '../service/api'
import { FormControl, FormGroup, Input,Button, InputLabel,styled} from "@mui/material"
import {addUser} from '../redux/features/PostSlice';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
 const Container=styled(FormGroup)`
     width:50%;
     margin:5% auto 0 auto;
     & >div{
         margin-top:20px;
     }
 `
 const defaultvalue={
     name:'',
     email:'',
     designation:'',
     salary:''
 }

function Adduser(){
    const[user,setUser]=useState(defaultvalue);
    const dispatch= useDispatch()
    const navigate=useNavigate();

    const onValue = (e)=>{
       setUser({...user,[e.target.name]:e.target.value});
       console.log(user)
    }
const addUserDetails =(e)=>{
     dispatch(addUser(user));
     navigate('/all');
}    
    return(
        <Container>
            <h1>Add User</h1>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Designation</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="designation" />
            </FormControl>
            <FormControl>
                <InputLabel>Salary</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="salary"/>
            </FormControl>
            <FormControl>
                <Button  onClick={()=> addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>
    )
}
export default Adduser