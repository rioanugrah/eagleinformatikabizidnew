export default function Pdf() {
    return (
        <>
            <div class='mx-auto my-6 max-w-3xl rounded bg-white p-6 shadow-sm' id='invoice'>
                <div class='grid grid-cols-2 items-center'>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' alt='company-logo' height='100' width='100' />
                    </div>
                    <div class='text-right'>
                        <p>PT Eagle Media Informatika</p>
                        <p class='text-sm text-gray-500'>marketing@eagleinformatika.biz.id</p>
                        <p class='mt-1 text-sm text-gray-500'>+62 881-0801-78055</p>
                        <p class='mt-1 text-sm text-gray-500'>VAT: -</p>
                    </div>
                </div>
            </div>
        </>
    );
}
