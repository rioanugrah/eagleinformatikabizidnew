import { Button } from '@/components/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Icon } from '@/components/icon';
import AppLayout from '@/Layouts/administrator/app-layout';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit(data) {
    const { errors } = usePage().props;
    // const { data: custom_permission, meta, links } = data.custom_permission;

    const [role_name, setRoleName] = useState(data.role.name);
    const [role_guard_name, setRoleGuardName] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setRoleGuardName({
            ...role_guard_name,
            [event.target.id]: event.target.checked,
        });
    };

    const handleChangeNormalSelect = e => {
        const updatedOptions = [...e.target.options]
            .filter(option => option.selected)
            .map(x => x.value);
        console.log("updatedOptions", updatedOptions);
        setRoleGuardName(updatedOptions);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        // console.log(role_guard_name);
        setLoading(true);
        router.post(
            route('roles.store'),
            {
                name: role_name,
                permission: role_guard_name,
            },
            {
                onFinish: () => {
                    setLoading(false);
                    // alert('ok');
                },
            },
        );
        // alert('OK');
        // setLoading(false);
    };
    console.log(role_guard_name);
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Update Roles</CardTitle>
                </CardHeader>
                <form onSubmit={handlerSubmit}>
                    <CardContent>
                        <div className='mb-3'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                            <input type='text' value={role_name} onChange={(e) => setRoleName(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' placeholder='Roles Name' />
                            {errors.role_name && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.role_name}</p>}
                        </div>
                        <div className='mb-3'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Guard Name</label>
                            {/* <ul className='w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex'>
                                {data.custom_permission.map((item, i) => (
                                    <li className='w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r'>
                                        <div className='flex items-center ps-3'> */}
                                        {/* <input
                                            id={parseInt(i+1)}
                                            type="checkbox"
                                            name='permission[]'
                                            checked={role_guard_name[item.id]}
                                            onChange={handleChange}
                                        /> */}
                                        {/* {data.role.permissions[i].name}
                                        {item.name} */}
                                        {/* <input id={parseInt(i+1)} type='checkbox' value={item.id} onChange={handleChange} checked={data.role.permissions[i].name === item.name ? true : false} className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700' />
                                            <label for={parseInt(i+1)} className='ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                                                {item.name}
                                            </label> */}
                                        {/* <input
                                            id={parseInt(i+1)}
                                            type="checkbox"
                                            name='permission[]'
                                            checked={role_guard_name[item.id]}
                                            onChange={handleChange}
                                        />
                                            <input id={item.name + i} type='checkbox' value={item.id} checked={role_guard_name[item]} onChange={handleChange} className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700' />
                                            <label for={parseInt(i+1)} className='ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                                                {item.name}
                                            </label> */}
                                        {/* </div>
                                    </li>
                                ))}
                            </ul> */}
                            <select multiple value={role_guard_name} onChange={handleChangeNormalSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Choose Permission</option>
                                {data.custom_permission.map((item, i) => (
                                    <option value={item.name} selected={data.role.permissions[i].name === item.name ? true : false}>{item.name}</option>
                                ))}
                            </select>
                            {/* <p>
                                Selected veggies:{" "}
                                {Object.entries(role_guard_name).filter(([key, value]) => value)}{" "}
                            </p>{" "} */}
                            {errors.role_guard_name && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.role_guard_name}</p>}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href={route('roles.index')} className='mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700'>
                            Back
                        </Link>
                        {loading ? (
                            <button disabled type='button' className='me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                                <svg aria-hidden='true' role='status' className='me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                                    <path
                                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                        fill='#1C64F2'
                                    />
                                </svg>
                                Loading...
                            </button>
                        ) : (
                            <button className='mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800'>Submit</button>
                        )}
                    </CardFooter>
                </form>
            </Card>
        </>
    );
}

Edit.layout = (page) => <AppLayout title={'Edit Roles'} children={page} />;
