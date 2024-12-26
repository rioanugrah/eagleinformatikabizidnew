import AppLayout from "@/Layouts/frontend/app-layout";
import { Head } from "@inertiajs/react";

export default function Services()
{
    return(
        <>
            <Head title="Services" />
        </>
    )
}

Services.layout = (page) => <AppLayout title={'Services'} children={page} />;
