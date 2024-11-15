import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  chats: [],
};

const ChatSlice = createSlice({
  name: 'chats_slice',
  initialState,
  reducers: {
    setChats: (state, {payload}) => {
      // console.log('yeh mera bhai', payload);
      const {chats} = state;
      state.chats = [...chats, payload];
    },
    setChatsSeen: (state, {payload}) => {
      const {chats} = state;
      const updatedChats = chats.map(message => {
        return {...message, seen: true};
      });
      state.chats = updatedChats;
    },
  },
  extraReducers: builder => {},
});
export const {setChats, setChatsSeen} = ChatSlice.actions;
export default ChatSlice.reducer;
