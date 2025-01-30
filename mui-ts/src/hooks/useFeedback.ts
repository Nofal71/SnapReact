import { useDispatch, useSelector } from "react-redux";
import { AddNewComponent, CONFIRM_content, SET_Alert, SET_SnackBar, TOGGLE_Theme } from "../config/redux/slices/feedbackSlice";
import { RootState } from "../config/redux/store"; // Adjust this import based on your store configuration

interface Alert {
  message: string | null;
  type: 'success' | 'error' | 'info' | null;
}

interface Confirm {
  open: boolean;
  title: string | null;
  content: string | null;
  actions: { label: string | null; handler: () => void; sx?: any }[];
  component?: React.ReactNode;
}

interface SnackBar {
  open: boolean;
  message: string | null;
  callback?: () => void;
}

const useFeedBacks = () => {
  const Alert_isOpen = useSelector((state: RootState) => state.feedbacks.Alert);
  const theme_mode = useSelector((state: RootState) => state.feedbacks.Theme);
  const confirm_Open = useSelector((state: RootState) => state.feedbacks.Confirm?.open);
  const snackbar_Open = useSelector((state: RootState) => state.feedbacks.SnackBar);
  const confirmContent = useSelector((state: RootState) => state.feedbacks.Confirm);
  const dispatch = useDispatch();

  const setAlert = (message: string | null, type: 'success' | 'error' | 'info' | null) => {
    const action: Alert = { message, type };
    dispatch(SET_Alert(action));
  };

  const toggleTheme = () => {
    dispatch(TOGGLE_Theme());
  };

  const setConfirm = (open: boolean, title: string | null, content: string | null, actions: { label: string | null; handler: () => void; sx?: any }[]) => {
    const action: Confirm = { open, title, content, actions };
    dispatch(CONFIRM_content(action));
  };

  const setNewConfirm = (open: boolean, Component: React.ReactNode) => {
    const action = { open, component: Component };
    dispatch(AddNewComponent(action));
  };

  const setSnackBar = (open: boolean, message: string | null, callback?: () => void) => {
    const action: SnackBar = { open, message, callback };
    dispatch(SET_SnackBar(action));
  };

  return { setAlert, Alert_isOpen, theme_mode, toggleTheme, setConfirm, confirmContent, confirm_Open, setNewConfirm, setSnackBar, snackbar_Open };
};

export default useFeedBacks;
