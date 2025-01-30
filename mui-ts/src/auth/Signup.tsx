import { useEffect, useRef, useState } from 'react';
import {
    Box, Button, Divider, FormLabel, FormControl, Typography, IconButton, InputAdornment
} from '@mui/material';
// import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { Card, InputField, SignUpContainer } from '../theme/ThemeConfig';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface FormData {
    name: string;
    email: string;
    password: string;
}

export default function SignUp() {
    const [hidePassword, setHidePassword] = useState(true);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (passwordRef.current) {
            passwordRef.current.type = hidePassword ? 'password' : 'text';
        }
    }, [hidePassword]);

    return (
        <SignUpContainer direction="column" justifyContent="space-between">
            <motion.div
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeIn' }}
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
                                {...register("name", { required: "Name is required" })}
                                helperText={errors.name?.message}
                                error={!!errors.name}
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
                                {...register("email", { required: "Email is required" })}
                                helperText={errors.email?.message}
                                error={!!errors.email}
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
                                {...register("password", { required: "Password is required" })}
                                helperText={errors.password?.message}
                                error={!!errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={() => setHidePassword(!hidePassword)}>
                                                {/* {hidePassword ? <Visibility /> : <VisibilityOff />} */}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                        <Button type="submit" fullWidth variant="contained" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Sign up'}
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
                            <Link to={'/login'} variant="body2" sx={{ alignSelf: 'center' }}>
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </motion.div>
        </SignUpContainer>
    );
}
