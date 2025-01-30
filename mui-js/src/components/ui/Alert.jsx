import { Alert, Snackbar } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { snap_features } from 'snap-react'

const MUI_Alert = () => {
    const { Alert_isOpen, setAlert } = snap_features()
    const timeoutRef = useRef(null)

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
