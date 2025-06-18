import CommonAdsComp from '@/components/CommonAdsComp'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section>
            <Header name={' Diamond & Coin '} showHome={true} />
            <div className='flex justify-center items-center '>
                <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"2957537140"} />
            </div>
            <div className='mt-3 px-6 pb-6'>
                <div className='text-center text-white text-xl font-bold'>
                    Choose Pass & Rewards
                </div>
                <div className='mt-6 flex items-center justify-between gap-4'>
                    <Link href={'/free-diamonds-coin/diamonds'} className=''>
                        <img src='/elite/unlock-diamond.png' className='object-contain max-w-full' alt='' />
                    </Link>
                    <Link href={'/free-diamonds-coin/coin'} className=''>
                        <img src='/elite/unlock-coin.png' className='object-contain max-w-full' alt='' />
                    </Link>

                    {/* <div className='relative border border-[#B5026D] backdrop-blur-lg bg-black/5 rounded-xl w-28 h-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute -top-1/2 -left-1/2' width="93" height="93" viewBox="0 0 93 93" fill="none">
                            <g opacity="0.25">
                                <circle cx="46.5" cy="46.5" r="46.5" fill="url(#paint0_linear_72_51012)" fill-opacity="0.1" />
                            </g>
                            <circle opacity="0.25" cx="47.3" cy="46.3" r="40.3" fill="url(#paint1_linear_72_51012)" fill-opacity="0.25" />
                            <circle opacity="0.25" cx="47.3031" cy="46.2992" r="34.1" fill="url(#paint2_linear_72_51012)" fill-opacity="0.25" />
                            <circle opacity="0.25" cx="47.2984" cy="46.3004" r="27.9" fill="url(#paint3_linear_72_51012)" fill-opacity="0.25" />
                            <circle opacity="0.25" cx="47.3016" cy="46.2996" r="21.7" fill="url(#paint4_linear_72_51012)" fill-opacity="0.25" />
                            <g filter="url(#filter0_f_72_51012)">
                                <circle cx="47.3008" cy="46.3008" r="15.5" fill="url(#paint5_linear_72_51012)" />
                            </g>
                            <defs>
                                <filter id="filter0_f_72_51012" x="6.80078" y="5.80078" width="81" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_72_51012" />
                                </filter>
                                <linearGradient id="paint0_linear_72_51012" x1="-22.948" y1="-29.7891" x2="149.368" y2="-14.7138" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8751D5" />
                                    <stop offset="1" stop-color="#FE3472" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_72_51012" x1="-12.8883" y1="-19.8172" x2="136.453" y2="-6.75193" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8751D5" />
                                    <stop offset="1" stop-color="#FE3472" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_72_51012" x1="-3.62544" y1="-9.64613" x2="122.74" y2="1.40913" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8751D5" />
                                    <stop offset="1" stop-color="#FE3472" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_72_51012" x1="5.62961" y1="0.526927" x2="109.019" y2="9.57214" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8751D5" />
                                    <stop offset="1" stop-color="#FE3472" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_72_51012" x1="14.8925" y1="10.698" x2="95.3068" y2="17.7332" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8751D5" />
                                    <stop offset="1" stop-color="#FE3472" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_72_51012" x1="24.1514" y1="20.8711" x2="81.5902" y2="25.8962" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#8751D5" />
                                    <stop offset="1" stop-color="#FE3472" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default page