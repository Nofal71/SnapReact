import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the state
interface AlertState {
  message: string | null;
  type: string | null;
}

interface ConfirmState {
  open: boolean;
  title: string | null;
  content: string | null;
  actions: { label: string | null; handler: (() => void) | null; sx: any }[];
  component?: React.ReactNode;
}

interface SnackBarState {
  open: boolean;
  message: string | null;
  callback?: () => void;
}

interface FeedBackState {
  Alert: AlertState | null;
  Confirm: ConfirmState;
  Theme: 'light' | 'dark';
  SnackBar: SnackBarState;
}

const initialState: FeedBackState = {
  Alert: null,
  Confirm: { open: false, title: null, content: null, actions: [{ label: null, handler: null, sx: null }] },
  Theme: 'dark',
  SnackBar: { open: false, message: null, callback: undefined }
};

const AlertReducer = {
  SET_Alert: (state: FeedBackState, action: PayloadAction<AlertState | null>) => {
    state.Alert = action.payload;
  }
};

const ThemeReducer = {
  TOGGLE_Theme: (state: FeedBackState) => {
    state.Theme = state.Theme === 'light' ? 'dark' : 'light';
  }
};

const ConfirmReducer = {
  CONFIRM_content: (state: FeedBackState, action: PayloadAction<ConfirmState | null>) => {
    if (action.payload) {
      state.Confirm = action.payload;
    } else {
      state.Confirm = { open: false, title: null, content: null, actions: [{ label: null, handler: null, sx: null }] };
    }
  },
  AddNewComponent: (state: FeedBackState, action: PayloadAction<{ open: boolean; component?: React.ReactNode }>) => {
    const { open, component } = action.payload;
    state.Confirm = { open, component };
  }
};

const SnackBarReducer = {
  SET_SnackBar: (state: FeedBackState, action: PayloadAction<SnackBarState>) => {
    state.SnackBar = action.payload;
  }
};

export const FeedBackSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    ...AlertReducer,
    ...ThemeReducer,
    ...ConfirmReducer,
    ...SnackBarReducer
  }
});

export const { SET_Alert, TOGGLE_Theme, CONFIRM_content, AddNewComponent, SET_SnackBar } = FeedBackSlice.actions;
export const FeedBackReducer = FeedBackSlice.reducer;
