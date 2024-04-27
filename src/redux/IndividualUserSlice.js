import {createSlice} from "@reduxjs/toolkit";

const IndividualUsers = [
    {
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        email: "john.doe@example.com",
        contactNumber: "1234567890",
        password: "password1",
        address: "123 Main St",
        area: "Downtown",
        governorate: "Cairo"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        gender: "Female",
        email: "jane.doe@example.com",
        contactNumber: "0987654321",
        password: "password2",
        address: "456 Elm St",
        area: "Uptown",
        governorate: "Alexandria"
    },
]

const initialState = {
    IndividualUsers: IndividualUsers,
};

const IndividualUserSlice = createSlice({
    name: "IndividualUser",
    initialState,
    reducers: {
        addIndUser: (state, action) => {
            state.IndividualUsers.push(action.payload.user);
        }
    },
});

export const { addIndUser } = IndividualUserSlice.actions;
export default IndividualUserSlice.reducer;