import {editUser,oneUser} from '../service/api'
import { FormControl, FormGroup, Input,Button, InputLabel,styled} from "@mui/material"
import {useState,useEffect} from 'react';

import {useNavigate,useParams} from 'react-router-dom';
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

function EditUser(){
    const[user,setUser]=useState(defaultvalue);

    const navigate=useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        readUser();
    },[])

    const readUser= async()=>
    {
        const response= await oneUser(id);
        setUser(response.data);
   } 


    const onValue = (e)=>{
       setUser({...user,[e.target.name]:e.target.value});
       console.log(user)
    }
const editUserDetails = async()=>{
     await editUser(user,id);
     navigate('/all');
}    
    return(
        <Container>
            <h1>Edit User</h1>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Designation</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="designation"value={user.designation} />
            </FormControl>
            <FormControl>
                <InputLabel>Salary</InputLabel>
                <Input onChange={(e)=>onValue(e)} name="salary" value={user.salary}/>
            </FormControl>
            <FormControl>
                <Button  onClick={()=> editUserDetails()} variant="contained">Edit User</Button>
            </FormControl>
        </Container>
    )
}
export default EditUser