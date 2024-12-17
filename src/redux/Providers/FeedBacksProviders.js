import { useDispatch, useSelector } from "react-redux"
import { CONFIRM_content, SET_Alert, TOGGLE_Theme } from "../Slices/FeedBackSlice"

const useFeedBacks = () => {
    const Alert_isOpen = useSelector(state => state.feedbacks.Alert)
    const theme_mode = useSelector(state => state.feedbacks.Theme)
    const confirm_Open = useSelector(state => state.feedbacks.Confirm?.open)
    const confirmContent = useSelector(state => state.feedbacks.Confirm)
    const dispatch = useDispatch();


    const setAlert = (message, type) => {
        const action = { message, type }
        dispatch(SET_Alert(action))
    }

    const toggleTheme = (mode) => {
        dispatch(TOGGLE_Theme(mode))
    }

    const setConfirm = (open, title, content, actions) => {
        const action = { open, title, content, actions }
        dispatch(CONFIRM_content(action))
    }

    return { setAlert, Alert_isOpen, theme_mode, toggleTheme, setConfirm, confirmContent, confirm_Open }
}

export default useFeedBacks
