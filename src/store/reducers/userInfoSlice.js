import { createSlice, current } from "@reduxjs/toolkit";



export const userInfoSlice = createSlice({
    name: "users",
    initialState: {    
            users: [
                // {
                //     counter:1,
                //     fname: "rafa",
                //     value: "1234"
                // }
            ],
            userValues: [],
            singleUsersInfo:[],
            id:0
    },
    reducers: {
        setUserInformation: (state, action) => {
            state.users.push(action.payload);
            // console.log(state.users.push(action.payload));
        },
        addValue:(state, action) => {
            state.userValues.push(action.payload);
        },
        increaseIdValue:(state) => {
            state.id++;
        },
        updateCounterValue:(state,action) => {
            state.id=action.payload;
        },
        handleExcessiveUser: (state, action)=>{
           
           const {users}= current(state); 
        //    console.log(current(state))
            const userValue= action.payload;
            state.singleUsersInfo = users.find(user=> user.value==userValue);
            const {singleUsersInfo} = current(state);
            // console.log(singleUsersInfo.counter)
            state.users= state.users.filter(user=> user.counter !== singleUsersInfo.counter);
            
        }
    }
})

export const {setUserInformation,addValue,handleExcessiveUser,increaseIdValue,updateCounterValue} = userInfoSlice.actions;

export default userInfoSlice.reducer;