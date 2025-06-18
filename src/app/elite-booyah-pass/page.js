import CommonAdsComp from '@/components/CommonAdsComp'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section>
            <Header name={'Elite Pass & Booyah Pass'} showHome={true} />
            <div className='flex justify-center items-center '>
                <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"2957537140"} />
            </div>
            <div className='mt-3 px-6 pb-6'>
                <div className='text-center text-white text-xl font-bold'>
                    Choose Pass & Rewards
                </div>
                <div className='mt-6 flex items-center justify-between gap-3.5'>
                    <Link href={'/elite-booyah-pass/elite'} className=''>
                        <img src='/elite/elite.png' alt='Elite Pass' className='object-contain max-w-full' />
                    </Link>
                    <Link href={'/elite-booyah-pass/booyah'} className=''>
                        <img src='/elite/booyah-pass.png' alt='Booyah Pass' className='object-contain max-w-full' />
                    </Link>
                    <Link href={'/elite-booyah-pass/reward'} className=''>
                        <img src='/elite/reward.png' alt='Reward' className='object-contain max-w-full' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default page