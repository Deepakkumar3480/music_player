import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name:"playlist",
    initialState:[],
    reducers:{
        AddSong:(state,action)=>{
            let exist = state.find((song)=>song.songIndex==action.payload.songIndex)
            if(!exist){
                state.push(action.payload)
            }
            return;
        },
        RemoveSong:(state,action)=>{
            return state.filter((song)=>(song.songIndex!==action.payload))
        }
    }
})

export const {AddSong,RemoveSong}=playlistSlice.actions;
export default playlistSlice.reducer