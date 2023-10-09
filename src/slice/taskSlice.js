import { createSlice } from '@reduxjs/toolkit'

const initialState = [];
const  taskSlice = createSlice({
    name:"task",
    initialState:initialState,
    reducers:{
        addNew(task_state,action){
           task_state.push(action.payload)
        },
        deleteTask(task_state,action){
           task_state.splice(action.payload,1) 
        }

    }

})

export default taskSlice;
export const {addNew,deleteTask} = taskSlice.actions;

