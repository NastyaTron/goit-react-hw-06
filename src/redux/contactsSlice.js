import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      },
      prepare(id) {
        return { payload: id };
      },
    },
  },
});
export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
