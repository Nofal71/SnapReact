import React from 'react'
import ThemeConfig from './Theme/ThemeConfig'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import MUI_Alert from './Components/common/Alert'
import AlertDialog from './Components/common/Modal'

const HOC = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <ThemeConfig>
                    <MUI_Alert />
                    <AlertDialog />
                    {children}
                </ThemeConfig>
            </Provider>
        </>
    )
}

export default HOC
