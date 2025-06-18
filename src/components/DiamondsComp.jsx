'use client'
import React, { useState } from 'react'
import Header from './Header'
import CommonAdsComp from './CommonAdsComp'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import CommonModal from './CommonModal'
// import { useRouter } from 'next/navigation'

const DiamondsComp = ({ name, defaultId }) => {
    const router = useRouter();
    // const [isOpenModal, setIsOpenModal] = useState(false)
    // const nextPageOpen = () =>{
    //     setIsOpenModal(true)
    // }
    
    const nextPageOpen = () =>{
        router.push(`/${name}`)
    }
    return (
        <>
            <section>
                <Header name={name} />
                <div className='flex justify-center items-center'>
                    {
                        defaultId === 2 ?
                            <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"4026010575"} />
                            :
                            defaultId === 3 ?
                                <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"8961776512"} />
                                :
                                null
                    }
                </div>
                <div className='px-6 py-6'>
                    {
                        name === "coins" ?
                            <div className='grid grid-cols-2 justify-between mt-6 gap-x-9 gap-y-6'>
                                <div onClick={nextPageOpen}>
                                    <img src='/elite/coin/coin-1.png' className='object-contain max-w-full' alt='' />
                                </div>
                                <div onClick={nextPageOpen}>
                                    <img src='/elite/coin/coin-2.png' className='object-contain max-w-full' alt='' />
                                </div>
                                <div onClick={nextPageOpen}>
                                    <img src='/elite/coin/coin-3.png' className='object-contain max-w-full' alt='' />
                                </div>
                                <div onClick={nextPageOpen}>
                                    <img src='/elite/coin/coin-4.png' className='object-contain max-w-full' alt='' />
                                </div>
                                <div onClick={nextPageOpen}>
                                    <img src='/elite/coin/coin-5.png' className='object-contain max-w-full' alt='' />
                                </div>
                                <div onClick={nextPageOpen}>
                                    <img src='/elite/coin/coin-6.png' className='object-contain max-w-full' alt='' />
                                </div>
                            </div>
                            :
                            <div className='grid grid-cols-2 justify-between mt-6 gap-x-9 gap-y-6'>
                                <div onClick={nextPageOpen} >
                                    <div style={{ boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset", background: "rgba(160, 29, 186, 1)" }} className='rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5'>
                                        <div className='h-7'>
                                            <img src='/heart.png' className='size-[27px] object-contain' alt='diamond' />
                                        </div>
                                        <div className='text-white text-xs font-medium mt-2.5'>
                                            Get Free Diamonds
                                        </div>
                                        <div className='mt-0.5 text-white text-[22px] font-medium leading-[29px]'>
                                            100
                                        </div>
                                    </div>
                                </div>
                                <div onClick={nextPageOpen} >
                                    <div style={{ boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset", background: "rgba(160, 29, 186, 1)" }} className='rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5'>
                                        <div className='h-7'>
                                            <img src='/heart.png' className='size-[27px] object-contain' alt='diamond' />
                                        </div>
                                        <div className='text-white text-xs font-medium mt-2.5'>
                                            Get Free Diamonds
                                        </div>
                                        <div className='mt-0.5 text-white text-[22px] font-medium leading-[29px]'>
                                            310
                                        </div>
                                    </div>
                                </div>
                                <div onClick={nextPageOpen} >
                                    <div style={{ boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset", background: "rgba(160, 29, 186, 1)" }} className='rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5'>
                                        <div className='h-7'>
                                            <img src='/heart.png' className='size-[27px] object-contain' alt='diamond' />
                                        </div>
                                        <div className='text-white text-xs font-medium mt-2.5'>
                                            Get Free Diamonds
                                        </div>
                                        <div className='mt-0.5 text-white text-[22px] font-medium leading-[29px]'>
                                            520
                                        </div>
                                    </div>
                                </div>
                                <div onClick={nextPageOpen} >
                                    <div style={{ boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset", background: "rgba(160, 29, 186, 1)" }} className='rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5'>
                                        <div className='h-7'>
                                            <img src='/heart.png' className='size-[27px] object-contain' alt='diamond' />
                                        </div>
                                        <div className='text-white text-xs font-medium mt-2.5'>
                                            Get Free Diamonds
                                        </div>
                                        <div className='mt-0.5 text-white text-[22px] font-medium leading-[29px]'>
                                            1060
                                        </div>
                                    </div>
                                </div>
                                <div onClick={nextPageOpen} >
                                    <div style={{ boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset", background: "rgba(160, 29, 186, 1)" }} className='rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5'>
                                        <div className='h-7'>
                                            <img src='/heart.png' className='size-[27px] object-contain' alt='diamond' />
                                        </div>
                                        <div className='text-white text-xs font-medium mt-2.5'>
                                            Get Free Diamonds
                                        </div>
                                        <div className='mt-0.5 text-white text-[22px] font-medium leading-[29px]'>
                                            2180
                                        </div>
                                    </div>
                                </div>
                                <div onClick={nextPageOpen} >
                                    <div style={{ boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 44px 30px inset", background: "rgba(160, 29, 186, 1)" }} className='rounded-2xl border-2 border-[#F67DF1] border-opacity-30 p-2.5'>
                                        <div className='h-7'>
                                            <img src='/heart.png' className='size-[27px] object-contain' alt='diamond' />
                                        </div>
                                        <div className='text-white text-xs font-medium mt-2.5'>
                                            Get Free Diamonds
                                        </div>
                                        <div className='mt-0.5 text-white text-[22px] font-medium leading-[29px]'>
                                            5600
                                        </div>
                                    </div>
                                </div>
                                {/* <div style={{ backgroundImage: 'url("/diamond-bg.png")' }} className='bg-contain bg-no-repeat h-[104px]'>
                        <img src='/diamond-bg.png' alt='' />
                        <div className='text-white text-xs font-medium mt-2.5'>
                            Get Free Diamonds
                        </div>
                        <div className='mt-0.5 text-white text-[22px] font-medium leading-[29px]'>
                            100
                        </div>
                    </div> */}

                            </div>
                    }
                </div>
            </section>
            {/* <CommonModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} onClick={() => router.push(`/${name}`)} /> */}
        </>
    )
}

export default DiamondsComp