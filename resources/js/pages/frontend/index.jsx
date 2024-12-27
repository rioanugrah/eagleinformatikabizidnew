import AppLayout from '@/Layouts/frontend/app-layout';
import { useState } from 'react';

import { Radio, RadioGroup } from '@headlessui/react';
import { CheckIcon, XMarkIcon, LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { Head } from '@inertiajs/react';

export default function Index() {
    const frequencies = [
        { value: 'monthly', label: 'Monthly' },
        { value: 'lifetime', label: 'Lifetime' },
    ];
    const tiers = [
        {
            name: 'Startup',
            id: 'tier-startup',
            href: '#',
            featured: false,
            description: '-',
            price: { monthly: '700.000', lifetime: '5.500.000' },
            mainFeatures: [
                'Domain /tahun (**.co.id/.com)',
                'Hosting pertahun (15GB)',
                'Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha'
            ],
        },
        {
            name: 'Profesional',
            id: 'tier-profesional',
            href: '#',
            featured: true,
            description: '-',
            price: { monthly: '1.200.000', lifetime: '14.000.000' },
            mainFeatures: ['Domain /tahun (**.co.id/.com)', 'Hosting pertahun (45GB)', 'Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha'],
        },
        {
            name: 'Eksklusif',
            id: 'tier-eksklusif',
            href: '#',
            featured: false,
            description: '-',
            price: { monthly: '1.850.000', lifetime: '22.000.000' },
            mainFeatures: ['Domain /tahun (**.co.id/.com)', 'Hosting per 2 tahun (45GB)', 'Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha'],
        },
    ];
    const sections = [
        {
            name: 'Catered for business',
            features: [
                {
                    name: 'Unlimited Inode',
                    tiers: {
                        Startup: true,
                        Profesional: true,
                        Eksklusif: true,
                    },
                },
                {
                    name: 'Bandwidth',
                    tiers: {
                        Startup: 'Unlimited',
                        Profesional: 'Unlimited',
                        Eksklusif: 'Unlimited',
                    },
                },
                {
                    name: 'Database',
                    tiers: {
                        Startup: 'Unlimited',
                        Profesional: 'Unlimited',
                        Eksklusif: 'Unlimited',
                    },
                },
                {
                    name: 'Addon Domain',
                    tiers: {
                        Startup: 'Unlimited',
                        Profesional: 'Unlimited',
                        Eksklusif: 'Unlimited',
                    },
                },
                {
                    name: 'Sub Domain',
                    tiers: {
                        Startup: 'Unlimited',
                        Profesional: 'Unlimited',
                        Eksklusif: 'Unlimited',
                    },
                },
                {
                    name: 'Storage',
                    tiers: {
                        Startup: '15GB',
                        Profesional: '45GB',
                        Eksklusif: 'per 2 tahun (45GB)',
                    },
                },
                {
                    name: 'Backup',
                    tiers: {
                        Startup: true,
                        Profesional: true,
                        Eksklusif: true,
                    },
                },
                {
                    name: 'SEO',
                    tiers: {
                        Startup: true,
                        Profesional: true,
                        Eksklusif: true,
                    },
                },
            ],
        },
        {
            name: 'Fitur Email',
            features: [
                {
                    name: 'Email Account',
                    tiers: {
                        Startup: 'Unlimited',
                        Profesional: 'Unlimited',
                        Eksklusif: 'Unlimited',
                    },
                },
                {
                    name: 'Attachment',
                    tiers: {
                        Startup: '50MB E-mail Attachment',
                        Profesional: '50MB E-mail Attachment',
                        Eksklusif: '50MB E-mail Attachment',
                    },
                },
                {
                    name: 'Fitur Lain',
                    tiers: {
                        Startup: 'POP3 / IMAP, SMTP, Anti Spam, MailChannel',
                        Profesional: 'POP3 / IMAP, SMTP, Anti Spam, MailChannel',
                        Eksklusif: 'POP3 / IMAP, SMTP, Anti Spam, MailChannel',
                    },
                },
            ],
        },
    ];

    const [frequency, setFrequency] = useState(frequencies[0]);

    const cards = [
        {
            name: 'Sales',
            description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
            icon: PhoneIcon,
        },
        {
            name: 'Technical Support',
            description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
            icon: LifebuoyIcon,
        },
        {
            name: 'Media Inquiries',
            description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
            icon: NewspaperIcon,
        },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <>
            <Head title='Eagle Media Informatika' />
            <div className='bg-indigo-100'>
                <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Analisa Keamanan
                        <br />
                        Untuk Data Besar.
                    </h2>
                    <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
                        <a href='#' className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            Get started
                        </a>
                        <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                            Learn more <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
                <img alt='' src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply' className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center' />
                <div className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'>
                    <div
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                    />
                </div>
                <div className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'>
                    <div
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                    />
                </div>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl lg:mx-0'>
                        <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Tentang Kami</h2>
                        <p className='mt-6 text-lg leading-8 text-gray-300'>Eagle Media Informatika adalah perusahaan pembuatan website dan aplikasi yang berdedikasi untuk membantu bisnis Anda tumbuh secara online. kami memahami bahwa website adalah wajah bisnis Anda di dunia digital, oleh karena itu kami berkomitmen untuk menciptakan website yang tidak hanya menarik secara visual, tetapi juga mudah digunakan dan efektif dalam mencapai tujuan bisnis Anda.</p>
                    </div>
                    {/* <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
                                    {cards.map((card) => (
                                        <div key={card.name} className='flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10'>
                                            <card.icon aria-hidden='true' className='h-7 w-5 flex-none text-indigo-400' />
                                            <div className='text-base leading-7'>
                                                <h3 className='font-semibold text-white'>{card.name}</h3>
                                                <p className='mt-2 text-gray-300'>{card.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                </div>
            </div>

            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-between pb-16 pt-8'>
                    <div className='hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto' data-wow-delay='.2s'>
                        <div className='bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20'>
                            <svg className='h-8 w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path>
                            </svg>
                        </div>
                        <div className='ml-2 sm:ml-6 sm:py-2'>
                            <span className='font-heading font-bold sm:text-2xl'>+ </span>
                            <span className='font-heading count font-bold sm:text-2xl'>10</span>
                            <p className='text-blueGray-400 text-xs sm:text-base'>Mitra Kami</p>
                        </div>
                    </div>
                    <div className='hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto' data-wow-delay='.2s'>
                        <div className='bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20'>
                            <svg className='h-8 w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'></path>
                            </svg>
                        </div>
                        <div className='ml-2 sm:ml-6 sm:py-2'>
                            <span className='font-heading font-bold sm:text-2xl'>+ </span>
                            <span className='font-heading count font-bold sm:text-2xl'>57</span>
                            <span className='font-heading font-bold sm:text-2xl'> </span>
                            <p className='text-blueGray-400 text-xs sm:text-base'>Project Selesai</p>
                        </div>
                    </div>
                    <div className='hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto' data-wow-delay='.2s'>
                        <div className='bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20'>
                            <svg className='h-8 w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'></path>
                            </svg>
                        </div>
                        <div className='ml-2 sm:ml-6 sm:py-2'>
                            <span className='font-heading font-bold sm:text-2xl'>+ </span>
                            <span className='font-heading count font-bold sm:text-2xl'>10</span>
                            <p className='text-blueGray-400 text-xs sm:text-base'>Klien</p>
                        </div>
                    </div>
                    <div className='hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto' data-wow-delay='.2s'>
                        <div class='bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20'>
                            <svg class='h-8 w-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'></path>
                            </svg>
                        </div>
                        <div class='ml-2 sm:ml-6 sm:py-2'>
                            <span class='font-heading font-bold sm:text-2xl'>+ </span>
                            <span class='font-heading count font-bold sm:text-2xl'>320</span>
                            <p class='text-blueGray-400 text-xs sm:text-base'>Pekerjaan Penelitian</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='isolate overflow-hidden'>
                <div className='flow-root bg-gray-900 pb-16 pt-24 sm:pt-32 lg:pb-0'>
                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                        <div className='relative z-10'>
                            <h2 className='mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white'>Jasa Website Company Profile</h2>
                            {/* <p className='mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.</p> */}
                            <div className='mt-16 flex justify-center'>
                                <fieldset aria-label='Payment frequency'>
                                    <RadioGroup value={frequency} onChange={setFrequency} className='grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white'>
                                        {frequencies.map((option) => (
                                            <Radio key={option.value} value={option} className='cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-indigo-500'>
                                                {option.label}
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>
                        </div>
                        <div className='relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3'>
                            <svg viewBox='0 0 1208 1024' aria-hidden='true' className='absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0'>
                                <ellipse cx={604} cy={512} rx={604} ry={512} fill='url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)' />
                                <defs>
                                    <radialGradient id='d25c25d4-6d43-4bf9-b9ac-1842a30a4867'>
                                        <stop stopColor='#7775D6' />
                                        <stop offset={1} stopColor='#E935C1' />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div aria-hidden='true' className='hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10' />
                            {tiers.map((tier) => (
                                <div key={tier.id} className={classNames(tier.featured ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10' : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0', 'relative rounded-2xl')}>
                                    <div className='p-8 lg:pt-12 xl:p-10 xl:pt-14'>
                                        <h3 id={tier.id} className={classNames(tier.featured ? 'text-gray-900' : 'text-white', 'text-sm font-semibold leading-6')}>
                                            {tier.name}
                                        </h3>
                                        <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch'>
                                            <div className='mt-2 flex items-center gap-x-4'>
                                                <p className={classNames(tier.featured ? 'text-gray-900' : 'text-white', 'text-4xl font-bold tracking-tight')}>{tier.price[frequency.value]}</p>
                                                <div className='text-sm leading-5'>
                                                    <p className={tier.featured ? 'text-gray-900' : 'text-white'}>IDR</p>
                                                    <p className={tier.featured ? 'text-gray-500' : 'text-gray-400'}>{`Billed ${frequency.value}`}</p>
                                                </div>
                                            </div>
                                            <a href={tier.href} aria-describedby={tier.id} className={classNames(tier.featured ? 'bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white', 'rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2')}>
                                                Buy this plan
                                            </a>
                                        </div>
                                        <div className='mt-8 flow-root sm:mt-10'>
                                            <ul role='list' className={classNames(tier.featured ? 'divide-gray-900/5 border-gray-900/5 text-gray-600' : 'divide-white/5 border-white/5 text-white', '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0')}>
                                                {tier.mainFeatures.map((mainFeature) => (
                                                    <li key={mainFeature} className='flex gap-x-3 py-2'>
                                                        <CheckIcon aria-hidden='true' className={classNames(tier.featured ? 'text-indigo-600' : 'text-gray-500', 'h-6 w-5 flex-none')} />
                                                        {mainFeature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='relative bg-gray-50 lg:pt-14'>
                    <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
                        {/* Feature comparison (up to lg) */}
                        <section aria-labelledby='mobile-comparison-heading' className='lg:hidden'>
                            <h2 id='mobile-comparison-heading' className='sr-only'>
                                Feature comparison
                            </h2>

                            <div className='mx-auto max-w-2xl space-y-16'>
                                {tiers.map((tier) => (
                                    <div key={tier.id} className='border-t border-gray-900/10'>
                                        <div className={classNames(tier.featured ? 'border-indigo-600' : 'border-transparent', '-mt-px w-72 border-t-2 pt-10 md:w-80')}>
                                            <h3 className={classNames(tier.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-semibold leading-6')}>{tier.name}</h3>
                                            <p className='mt-1 text-sm leading-6 text-gray-600'>{tier.description}</p>
                                        </div>

                                        <div className='mt-10 space-y-10'>
                                            {sections.map((section) => (
                                                <div key={section.name}>
                                                    <h4 className='text-sm font-semibold leading-6 text-gray-900'>{section.name}</h4>
                                                    <div className='relative mt-6'>
                                                        {/* Fake card background */}
                                                        <div aria-hidden='true' className='absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block' />

                                                        <div className={classNames(tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10', 'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0')}>
                                                            <dl className='divide-y divide-gray-200 text-sm leading-6'>
                                                                {section.features.map((feature) => (
                                                                    <div key={feature.name} className='flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0'>
                                                                        <dt className='pr-4 text-gray-600'>{feature.name}</dt>
                                                                        <dd className='flex items-center justify-end sm:justify-center sm:px-4'>
                                                                            {typeof feature.tiers[tier.name] === 'string' ? (
                                                                                <span className={tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900'}>{feature.tiers[tier.name]}</span>
                                                                            ) : (
                                                                                <>
                                                                                    {feature.tiers[tier.name] === true ? <CheckIcon aria-hidden='true' className='mx-auto h-5 w-5 text-indigo-600' /> : <XMarkIcon aria-hidden='true' className='mx-auto h-5 w-5 text-gray-400' />}

                                                                                    <span className='sr-only'>{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                                                                                </>
                                                                            )}
                                                                        </dd>
                                                                    </div>
                                                                ))}
                                                            </dl>
                                                        </div>

                                                        {/* Fake card border */}
                                                        <div aria-hidden='true' className={classNames(tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10', 'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block')} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Feature comparison (lg+) */}
                        <section aria-labelledby='comparison-heading' className='hidden lg:block'>
                            <h2 id='comparison-heading' className='sr-only'>
                                Feature comparison
                            </h2>

                            <div className='grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block'>
                                {tiers.map((tier) => (
                                    <div key={tier.id} aria-hidden='true' className='-mt-px'>
                                        <div className={classNames(tier.featured ? 'border-indigo-600' : 'border-transparent', 'border-t-2 pt-10')}>
                                            <p className={classNames(tier.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-semibold leading-6')}>{tier.name}</p>
                                            <p className='mt-1 text-sm leading-6 text-gray-600'>{tier.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='-mt-6 space-y-16'>
                                {sections.map((section) => (
                                    <div key={section.name}>
                                        <h3 className='text-sm font-semibold leading-6 text-gray-900'>{section.name}</h3>
                                        <div className='relative -mx-8 mt-10'>
                                            {/* Fake card backgrounds */}
                                            <div aria-hidden='true' className='absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block'>
                                                <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                                                <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                                                <div className='h-full w-full rounded-lg bg-white shadow-sm' />
                                            </div>

                                            <table className='relative w-full border-separate border-spacing-x-8'>
                                                <thead>
                                                    <tr className='text-left'>
                                                        <th scope='col'>
                                                            <span className='sr-only'>Feature</span>
                                                        </th>
                                                        {tiers.map((tier) => (
                                                            <th key={tier.id} scope='col'>
                                                                <span className='sr-only'>{tier.name} tier</span>
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {section.features.map((feature, featureIdx) => (
                                                        <tr key={feature.name}>
                                                            <th scope='row' className='w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900'>
                                                                {feature.name}
                                                                {featureIdx !== section.features.length - 1 ? <div className='absolute inset-x-8 mt-3 h-px bg-gray-200' /> : null}
                                                            </th>
                                                            {tiers.map((tier) => (
                                                                <td key={tier.id} className='relative w-1/4 px-4 py-0 text-center'>
                                                                    <span className='relative h-full w-full py-3'>
                                                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                                                            <span className={classNames(tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900', 'text-sm leading-6')}>{feature.tiers[tier.name]}</span>
                                                                        ) : (
                                                                            <>
                                                                                {feature.tiers[tier.name] === true ? <CheckIcon aria-hidden='true' className='mx-auto h-5 w-5 text-indigo-600' /> : <XMarkIcon aria-hidden='true' className='mx-auto h-5 w-5 text-gray-400' />}

                                                                                <span className='sr-only'>{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                                                                            </>
                                                                        )}
                                                                    </span>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            {/* Fake card borders */}
                                            <div aria-hidden='true' className='pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block'>
                                                {tiers.map((tier) => (
                                                    <div key={tier.id} className={classNames(tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10', 'rounded-lg')} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/* <div className='bg-white py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
                        <img alt='Transistor' src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg' width={158} height={48} className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' />
                        <img alt='Reform' src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg' width={158} height={48} className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' />
                        <img alt='Tuple' src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg' width={158} height={48} className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' />
                        <img alt='SavvyCal' src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg' width={158} height={48} className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1' />
                        <img alt='Statamic' src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg' width={158} height={48} className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' />
                    </div>
                </div>
            </div> */}
        </>
    );
}

Index.layout = (page) => <AppLayout title={'Eagle Media Informatika'} children={page} />;
