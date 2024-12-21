import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    Alert: null,     // { message: null, type: null },
    Confirm: { open: false, title: null, content: null, actions: [{ lable: null, handler: null, sx: null }] },
    Theme: 'dark',
    SnackBar: { open: false, message: null, callback: null }
}


const AlertReducer = {
    SET_Alert: (state, action) => {
        state.Alert = action.payload
    },
}


const ThemeReducer = {
    TOGGLE_Theme: (state) => {
        state.Theme = state.Theme === 'light' ? 'dark' : 'light'
    }
}

const ConfirmReducer = {
    CONFIRM_content: (state, action) => {
        if (action.payload) {
            state.Confirm = action.payload;
        } else {
            state.Confirm = { open: false };
        }
    },
    AddNewComponent: (state, action) => {
        const { open, component } = action.payload;
        state.Confirm = { open, component };
    }
};

const SnackBarReducer = {
    SET_SnackBar: (state, action) => {
        state.SnackBar = action.payload;
    }
}



export const FeedBackSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        ...AlertReducer,
        ...ThemeReducer,
        ...ConfirmReducer,
        ...SnackBarReducer
    }

})

export const { SET_Alert, TOGGLE_Theme, CONFIRM_content, AddNewComponent, SET_SnackBar } = FeedBackSlice.actions;
export const FeedBackReducer = FeedBackSlice.reducer;