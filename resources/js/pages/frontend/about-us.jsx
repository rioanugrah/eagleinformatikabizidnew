import AppLayout from "@/Layouts/frontend/app-layout";
import { Head } from "@inertiajs/react";

export default function AboutUs()
{
    return(
        <>
            <Head title="Tentang Kami" />
        </>
    )
}

AboutUs.layout = (page) => <AppLayout title={'Tentang Kami'} children={page} />;
