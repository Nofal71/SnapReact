import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: '25px',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

const InputField = styled(TextField)(({ }) => ({
    '& .MuiInputBase-root': {
        height: '42px',
    },
    '& .MuiInputBase-input': {
        padding: '6px 10px',
        fontSize: '14px',
    },
    '& .MuiFormLabel-root': {
        fontSize: '14px',
    },
    '& .MuiFormHelperText-root': {
        fontSize: '12px',
    },
}));

export default function SignUp() {

    const [hidePassword, setHidePassword] = useState(true)
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const passwordRef = useRef(null)

    const onSubmit = (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (hidePassword) {
            if (passwordRef.current) {
                passwordRef.current.type = 'password'
            }
        } else {
            if (passwordRef.current) {
                passwordRef.current.type = 'text'
            }
        }
    }, [hidePassword, passwordRef])

    return (
        <SignUpContainer direction="column" justifyContent="space-between">
            <motion.div
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .65, ease: 'easeIn' }}
            >
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="name">Full name</FormLabel>
                            <InputField
                                autoComplete="name"
                                required
                                fullWidth
                                placeholder="Jon Snow"
                                {...register("name", {
                                    required: "name is required",
                                })}
                                helperText={errors?.name && errors.name.message}
                                error={errors?.name}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <InputField
                                required
                                fullWidth
                                placeholder="your@email.com"
                                autoComplete="email"
                                variant="outlined"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                helperText={errors?.email && errors.email.message}
                                error={errors?.email}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <InputField
                                required
                                fullWidth
                                placeholder="••••••"
                                type="password"
                                autoComplete="new-password"
                                variant="outlined"
                                inputRef={passwordRef}
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                helperText={errors?.password && errors.password.message}
                                error={errors?.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={() => setHidePassword(!hidePassword)} >
                                                {hidePassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Sign up
                        </Button>
                    </Box>
                    <Divider>
                        <Typography sx={{ color: 'text.secondary' }}>or</Typography>
                    </Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign up with Google')}
                            startIcon={<Google />}
                        >
                            Sign up with Google
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Already have an account?{' '}
                            <Link
                                to={'/login'}
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </motion.div>
        </SignUpContainer>
    );
}