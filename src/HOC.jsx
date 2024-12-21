import React from 'react'
import ThemeConfig from './Theme/ThemeConfig'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store/store'
import MUI_Alert from './Components/common/Alert'
import AlertDialog from './Components/common/Modal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'
import SnackBar from './Components/common/SnackBar'

const HOC = ({ children }) => {
    const queryClient = new QueryClient()
    return (
        <>
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <QueryClientProvider client={queryClient}>
                        <ThemeConfig>
                            <MUI_Alert />
                            <AlertDialog />
                            <SnackBar />
                            {children}
                        </ThemeConfig>
                    </QueryClientProvider>
                </PersistGate>
            </Provider>
        </>
    )
}

export default HOC
