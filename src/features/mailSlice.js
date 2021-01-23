import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "mail",
	initialState: {
		sendMessageIsOpen: false,
	},
	reducers: {
		openSendMessage: (state) => {
			state.openSendMessage = true;
		},
		closeSendMessage: (state) => {
			state.closeSendMessage = false;
		},
	},
});

export const { openSendMessage, closeSendMessage } = counterSlice.actions;

export const selectMail = (state) => state.mail.value;

export default mailSlice.reducer;
