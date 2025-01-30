import { Alert, Snackbar } from '@mui/material'
import { useEffect, useRef } from 'react';
import { snap_features } from 'snap-react'

interface AlertState {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
}

const MUI_Alert: React.FC = () => {
    const { Alert_isOpen, setAlert } = snap_features()
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (Alert_isOpen) {
            timeoutRef.current = setTimeout(() => setAlert(null), 5000)
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [Alert_isOpen, setAlert])

    return (
        <>
            {
                Alert_isOpen && Alert_isOpen.message && (
                    <Snackbar
                        open={Alert_isOpen !== null}
                        autoHideDuration={5000}
                        onClose={() => setAlert(null)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Alert
                            severity={Alert_isOpen.type}
                            onClose={() => setAlert(null)}
                        >
                            {Alert_isOpen.message}
                        </Alert>
                    </Snackbar>
                )
            }
        </>
    )
}

export default MUI_Alert
