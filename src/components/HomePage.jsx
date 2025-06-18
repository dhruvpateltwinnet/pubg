'use client';
import React, { useEffect } from 'react'
import CommonAdsComp from './CommonAdsComp'
import Link from 'next/link'

const HomePage = () => {
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         (window.adsbygoogle = window.adsbygoogle || []).push({})
    //     }
    // }, [])
    return (
        <section className='overflow-y-auto pb-6'>
            {/* <section className='px-6 flex overflow-y-auto flex-col justify-between py-24 gap-24'> */}
            <div className='flex justify-center items-center'>
                <CommonAdsComp height={'315px'} width={'100%'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"2957537140"} />
                {/* <div style={{ width: '300px', height: '250px' }}>
                    <script data-adbreak-test="on" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5404067225744032"
                        crossOrigin="anonymous"></script>
                    <ins className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-5404067225744032"
                        data-ad-slot="2957537140"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        {(adsbygoogle = window.adsbygoogle || []).push({})};
                    </script>

                </div> */}
            </div>
            <div className='px-6 mt-6'>
                <div className='flex items-center justify-center mb-4'>
                    <img src="/home/active-game.png" className='w-full object-contain max-w-56' alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                    <Link href={'/tools'} className='block'>
                        <img src="/home/home-btn.png" className='w-full object-contain' alt="" />
                    </Link>
                    <Link href={'/elite-booyah-pass'} className='block'>
                        <img src="/home/elite-home.png" className='w-full object-contain' alt="" />
                    </Link>
                    <Link href={'/free-diamonds-coin'} className='block'>
                        <img src="/home/coin-home.png" className='w-full object-contain' alt="" />
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default HomePage