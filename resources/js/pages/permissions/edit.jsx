import { Button } from '@/components/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Icon } from '@/components/icon';
import AppLayout from '@/Layouts/appLayout';;
import AppNewLayout from '@/Layouts/user_layout/appnew-layout';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit(data) {

    const {errors} = usePage().props;
    const [permission_name, setPermissionName] = useState(data.permission.name);
    const [permission_guard_name, setPermissionGuardName] = useState(data.permission.guard_name);
    const [loading, setLoading] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        router.post(route('permissions.update',[data.permission.id]), {
            name:permission_name,
            guard_name:permission_guard_name,
        },{
            onFinish: () => {
                setLoading(false);
                // alert('ok');
            }
        });
        // alert('OK');
        // setLoading(false);
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Permission</CardTitle>
                </CardHeader>
                <form onSubmit={handlerSubmit}>
                <CardContent>
                    <div className='mb-3'>
                        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                        <input type='text' value={permission_name} onChange={(e) => setPermissionName(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' placeholder='Permission Name' />
                        {
                            errors.name && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.name}</p>
                        }
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Guard Name</label>
                        <select value={permission_guard_name} onChange={(e) => setPermissionGuardName(e.target.value)} class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
                            <option selected>-- Select Guard Name --</option>
                            <option value='web'>WEB</option>
                            <option value='api'>API</option>
                        </select>
                        {
                            errors.name && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.guard_name}</p>
                        }
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href={route('permissions.index')} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Back</Link>
                    {
                        loading ?
                        <button disabled type="button" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                            Loading...
                        </button>
                        :
                        <button className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
                    }
                </CardFooter>
                </form>
            </Card>
        </>
    );
}

Edit.layout = (page) => <AppLayout title={'Edit Permissions'} children={page} />;
