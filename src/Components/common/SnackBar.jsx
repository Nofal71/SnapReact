import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LinearProgress, Box } from '@mui/material';
import { snap_features } from 'snap-react';

export default function SnackBar() {
    const { setSnackBar, snackbar_Open } = snap_features();
    const [progress, setProgress] = useState(0);
    const timeoutRef = useRef(null)

    useEffect(() => {
        if (snackbar_Open?.open) {
            let start = 0;
            const interval = setInterval(() => {
                start += 100 / 60;
                setProgress(start);
                if (start >= 100) {
                    clearInterval(interval);
                }
            }, 100);

            return () => clearInterval(interval);
        } else {
            setProgress(0);
        }
    }, [snackbar_Open]);


    useEffect(() => {
        if (snackbar_Open) {
            timeoutRef.current = setTimeout(() => setSnackBar(false), 6000)
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
    }, [snackbar_Open, setSnackBar])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBar(false);
    };

    const handleUndo = () => {
        snackbar_Open?.callback && snackbar_Open?.callback();
        setSnackBar(false);
    };

    const action = (
        <>
            {snackbar_Open?.callback && (
                <Button color="secondary" size="small" onClick={handleUndo}>
                    UNDO
                </Button>
            )}
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        snackbar_Open && snackbar_Open.message && (
            <Box>
                <Snackbar
                    open={snackbar_Open.open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={snackbar_Open.message}
                    action={action}
                />
                {
                    snackbar_Open?.callback && (
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: 4,
                                backgroundColor: (theme) => theme.palette.grey[300],
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: (theme) => theme.palette.primary.main,
                                },
                            }}
                        />
                    )
                }

            </Box>
        )
    );
}
