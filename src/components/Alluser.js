import {useEffect,useState} from 'react';
import {getUser} from '../redux/features/PostSlice';
import {useDispatch,useSelector} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom';
import { Table, TableBody,TableHead,TableCell, TableRow,styled, Button} from "@mui/material";
// import {getUser,deleteUser} from '../service/api';

const StyledTable=styled(Table)`
 width:90%;
 margin: 50px auto 0 auto;
`
const THead=styled(TableRow)`
  background:black;
  & >th{
      color:white;
      font-size:20px;
  }
`
const TBody=styled(TableRow)`
   & >th{
       font-size:18px;
   }
`


function Alluser(){

    // const [users,setUsers]=useState([]);
    const dispatch=useDispatch()
    const {users}=useSelector(state=>state.app)
    useEffect(()=>{
       dispatch(getUser()) ; 
    },[]);

    // const getAllUsers=async()=>{
    //     let response= await getUser();
    //     setUsers(response.data);
    //     // console.log(response);
    // }
    // const deleteUserDetails=async(id)=>{
        
    //     await deleteUser(id);
    //     alert("Are you sure want to delete");
    //     getAllUsers();
    // }


    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                   users && users.map((user,i) =>{
                        return(
                        <TBody key={i}>
                            <TableCell>{i+1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.designation}</TableCell>
                            <TableCell>{user.salary}</TableCell>
                            <TableCell>
                                <Button  component={Link} to={`/edit/${user._id}`}>
                                    <EditIcon color="primary"></EditIcon>
                                </Button>
                                <Button>
                                     <DeleteIcon  style={{ color: "red" }} ></DeleteIcon>
                                     {/* onClick={()=>deleteUserDetails(user._id)}  */}
                                </Button>
                            </TableCell>
                        </TBody>
                        );
                    })
                }
            </TableBody>
        </StyledTable>
    )
}
export default Alluser