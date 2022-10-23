import  React  from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import  AuthenticateLayout  from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
export default function Index({auth}) {
    const {data, setData, post, processing, reset, errors} = useForm({
        message: ''
    })
    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'), {onSuccess: () => reset()});
    }
    return (
    <AuthenticateLayout auth={auth}>
        <Head title='Chips' />
        <div className='max-w-2xl mx-auto p-4 sm:p-6 le:p-8'>
            <form onSubmit={submit}>
                <textarea
                value={data.message}
                placeholder="Quel est ton idée ?"
                className='block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                onChange={e => setData('message', e.target.value)}
                >
                </textarea>
                <InputError message={errors.message} className="mt-2"/>
                <PrimaryButton className='mt-4' disabled={processing}>Chirp</PrimaryButton>
            </form>
        </div>
    </AuthenticateLayout>
    )
}