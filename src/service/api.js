import axios from 'axios';

const URL="http://localhost:8000";

// export const addUser=async(data)=>{
//     console.log( 'dfghjkj',data)
//     try{
//         return await axios.post(`${URL}/add`,data);
//     }catch(error){
//         console.log("error while calling add user api",error);
//     }
// }
// get api
// export const getUser=async()=>{
//     try{
//         return await axios.get(`${URL}/all`);
//     }catch(error){
//         console.log('error while calling getuser api',error);
//     }
    
// }
//particular user details
export const oneUser = async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log('error while calling oneUser api',error);
    }
}
//edit user
export const editUser=async(user,id)=>{
    try{
       return await axios.post(`${URL}/${id}`,user);
    }catch(error){
        console.log('error while calling editUser api',error);
    }
}
//delete user
export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('error while calling deleteUser api',error);
    }
}
