import CommonAdsComp from '@/components/CommonAdsComp'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section>
            <Header name={'FF TOOL'} showHome={true} />
            <div className='flex justify-center items-center '>
                <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"4026010575"} />
            </div>
            <div className='px-6 flex flex-col gap-6 pt-6 pb-10'>
                <Link href={'/tools/characters'} className='block'>
                    <img src="/category/charecter.png" className='w-full object-contain' alt="" />
                </Link>
                <Link href={'/weapons'} className='block'>
                    <img src="/category/weapons.png" className='w-full object-contain' alt="" />
                </Link>
                <Link href={'/tools/pets'} className='block'>
                    <img src="/category/pets.png" className='w-full object-contain' alt="" />
                </Link>

                <div className='flex justify-center items-center my-4'>
                    <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"4858728012"} />
                </div>

                <Link href={'/tools/emotes'} className='block'>
                    <img src="/category/emotes.png" className='w-full object-contain' alt="" />
                </Link>
                <Link href={'/free-diamonds-coin/diamonds'} className='block'>
                    <img src="/category/diamonds.png" className='w-full object-contain' alt="" />
                </Link>
            </div>
        </section>
    )
}

export default page