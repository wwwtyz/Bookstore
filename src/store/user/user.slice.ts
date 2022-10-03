import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  token: null,
  id: null
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      console.log(action);
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.id = null;
    }
  }
});

export const { reducer: userReducer, actions: userActions } = userSlice;
