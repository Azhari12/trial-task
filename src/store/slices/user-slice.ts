import { UserType } from "@/types/UserType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	user: UserType;
}

const initialState: UserState = {
	user: {
		email: "",
		name: "",
		role: "",
	},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType>) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
