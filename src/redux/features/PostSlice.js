import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const URL="http://localhost:8000";

export const getUser=createAsyncThunk('post/getUsers',async()=>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log('error while calling getuser api',error);
    }
    
});

export const addUser=createAsyncThunk('post/addPosts',async(data)=>{
    console.log( 'dfghjkj',data)
    try{
        return await axios.post(`${URL}/add`,data);
    }catch(error){
        console.log("error while calling add user api",error);
    }
});

const PostSlice=createSlice({
    name:'post',
    initialState:{
        loading:false,
        post:[],
        error:null
    },
    extraReducers:{
        [getUser.pending]:(state,action)=>{
            state.loading=true
        },
        [getUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.post=[action.payload];
        },
        [getUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },

        [addUser.pending]:(state,action)=>{
            state.loading=true
        },
        [addUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.post=[action.payload];
        },
        [addUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
    }
})

export default PostSlice.reducer