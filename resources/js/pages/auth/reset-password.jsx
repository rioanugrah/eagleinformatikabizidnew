import { useEffect } from 'react';
import InputError from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import GuestLayout from '@/Layouts/guest-layout';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <form onSubmit={submit}>
            <div>
                <Label htmlFor='email'>Email </Label>

                <Input id='email' type='email' name='email' value={data.email} className='mt-1 block w-full' autoComplete='username' onChange={(e) => setData('email', e.target.value)} />

                <InputError message={errors.email} className='mt-2' />
            </div>

            <div className='mt-4'>
                <Label htmlFor='password'>Password</Label>

                <Input id='password' type='password' name='password' value={data.password} className='mt-1 block w-full' autoComplete='new-password' autoFocus onChange={(e) => setData('password', e.target.value)} />

                <InputError message={errors.password} className='mt-2' />
            </div>

            <div className='mt-4'>
                <Label htmlFor='password_confirmation'>Confirm Password</Label>

                <Input type='password' name='password_confirmation' value={data.password_confirmation} className='mt-1 block w-full' autoComplete='new-password' onChange={(e) => setData('password_confirmation', e.target.value)} />

                <InputError message={errors.password_confirmation} className='mt-2' />
            </div>

            <div className='mt-4 flex items-center justify-end'>
                <Button className='ml-4' disabled={processing}>
                    Reset Password
                </Button>
            </div>
        </form>
    );
}
ResetPassword.layout = (page) => <GuestLayout title={'Reset Password'} description={'Please insert your new password before continuing.'} children={page} />;
