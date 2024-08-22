const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    users:[]
}

const userSlices= createSlice({
    name:"users",
    initialState,
    reducers :{
        addUser:(state,action)=>{
            state.users=[...state.users,action.payload]
        },

        removeUser :(state,action) =>{
            const newSetofusers=state.users.filter((user)=>user.id !== action.payload)

            state.users=newSetofusers;
        },

        setUsers:(state,action)=>{
            state.users=[...action.payload]
        }

    }

});

export const {addUser,removeUser,setUsers}= userSlices.actions;

export default userSlices.reducer;