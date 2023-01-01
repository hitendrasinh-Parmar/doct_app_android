import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUser(state?: any, actions?: any) {
      console.log('setUser', actions?.payload);
      state.user = actions.payload;
    }
  },
})

const { actions, reducer } = userSlice;
export const { setUser } = actions
export default reducer