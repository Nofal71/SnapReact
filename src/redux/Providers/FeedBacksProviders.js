import { useDispatch, useSelector } from "react-redux"
import { AddNewComponent, CONFIRM_content, SET_Alert, SET_SnackBar, TOGGLE_Theme } from "../Slices/FeedBackSlice"

const useFeedBacks = () => {
    const Alert_isOpen = useSelector(state => state.feedbacks.Alert)
    const theme_mode = useSelector(state => state.feedbacks.Theme)
    const confirm_Open = useSelector(state => state.feedbacks.Confirm?.open)
    const snackbar_Open = useSelector(state => state.feedbacks.SnackBar)
    const confirmContent = useSelector(state => state.feedbacks.Confirm)
    const dispatch = useDispatch();


    const setAlert = (message, type) => {
        const action = { message, type }
        dispatch(SET_Alert(action))
    }

    const toggleTheme = () => {
        dispatch(TOGGLE_Theme())
    }

    const setConfirm = (open, title, content, actions) => {
        const action = { open, title, content, actions }
        dispatch(CONFIRM_content(action))
    }
    const setNewConfirm = (open, component) => {
        const action = {
            open,
            component: typeof component === "function" ? component : () => component
        };
        dispatch(AddNewComponent(action));
    };
    const setSnackBar = (open, message, callback) => {
        const action = { open, message, callback }
        dispatch(SET_SnackBar(action))
    }


    return { setAlert, Alert_isOpen, theme_mode, toggleTheme, setConfirm, confirmContent, confirm_Open, setNewConfirm, setSnackBar, snackbar_Open }
}

export default useFeedBacks
