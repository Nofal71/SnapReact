import React, { useEffect, useRef, useState } from 'react';
import {
    Box, Button, Checkbox, FormControlLabel, Divider,
    FormLabel, FormControl, Typography, IconButton,
    InputAdornment
} from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { Card, InputField, SignInContainer } from '../theme/ThemeConfig';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



export default function SignIn() {

    const [hidePassword, setHidePassword] = useState(true)
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm()
    const passwordRef = useRef(null)

    const onSubmit = async (data) => {
        try {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(3000);
            console.log(data);
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
        <SignInContainer direction="column" justifyContent="space-between">
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
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <InputField
                                type="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
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
                                placeholder="••••••"
                                type="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                helperText={errors?.password && errors.password.message}
                                variant="outlined"
                                error={errors?.password}
                                inputRef={passwordRef}
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            {isSubmitting ? 'Submitting.....' : 'Sign in'}
                        </Button>
                        <Link
                            component="button"
                            type="button"
                            variant="body2"
                            sx={{ alignSelf: 'center' }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>
                    <Divider>or</Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Google')}
                            startIcon={<Google />}
                        >
                            Sign in with Google
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Don&apos;t have an account?{' '}
                            <Link
                                to={'/signup'}
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </motion.div>
        </SignInContainer>
    );
}