import { createSlice } from "@reduxjs/toolkit";

let likedSlice = createSlice({
    name:'liked',
    initialState:[],
    reducers:{
        AddLiked:(state,action)=>{
            let exist = state.find((song)=>song.songIndex==action.payload.songIndex)
            if(!exist){
                state.push(action.payload)
            }
            return;
        },
        Removeliked:(state,action)=>{
            return state.filter((song)=>(song.songIndex!==action.payload))
        }
    }
})

export const {AddLiked,Removeliked}= likedSlice.actions;
export default likedSlice.reducer