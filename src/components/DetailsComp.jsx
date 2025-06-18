'use client'
import React, { useState } from 'react'
import Header from './Header'
// import CommonAdsComp from './CommonAdsComp'
import CommonButton from './CommonButton'
import { useRouter, useSearchParams } from 'next/navigation'
import data from '../../public/data.json'
// import CommonModal from './CommonModal'
// import Link from 'next/link'

const DetailsComp = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const type = searchParams.get("type");
    const id = searchParams.get("id");
    const weaponType = searchParams.get("weaponType");
    const allData = (type === "weapons" ? data[type].find(x => x.name === weaponType).innerData?.find(x => x._id === id) : data[type]?.find(x => x._id === id))
    const router = useRouter()

    // const [isOpenModal, setIsOpenModal] = useState(false)
    // const nextPageOpen = () =>{
    //     setIsOpenModal(true)
    // }
    
    const nextPageOpen = () =>{
        router.push(`/${name}`)
    }

    return (
        // <section className='relative min-h-screen'>
        <>
            <section>
                <Header name={name.replaceAll("-", " ")} />

                <div className='flex justify-center items-center px-8 mt-4'>
                    {
                        type === "emotes" ?
                            <img className='max-w-full h-auto max-h-48 object-contain bg-transparent' src={`/emotes/${allData.key}.png`} alt={allData.name} />
                            :
                            <img className='max-w-full h-auto max-h-48 object-contain bg-transparent' src={allData.image} alt={allData.name} />
                    }
                </div>

                {/* Multiplex Add  */}
                {/* <div className='px-6 pt-6 pb-28 '>
                    <div className='flex justify-center items-center'>
                        <CommonAdsComp width={'360px'} height={'400px'} adFormat="autorelaxed" adSlot={"8951696909"} />
                    </div>
                </div> */}

                <div className="bg-[url('/bg-details.png')] bg-no-repeat bg-cover bg-top px-6 pb-6 pt-7 rounded-t-3xl fixed left-0 bottom-0 w-full md:w-[375px] md:left-1/2 md:-translate-x-1/2">
                    <div>
                        <CommonButton onClick={() => nextPageOpen()} name={'Apply Now'} />
                    </div>
                </div>
                {/* <div className="bg-[url('/bg-details.png')] bg-no-repeat bg-cover bg-top px-6 py-10 rounded-t-3xl fixed left-0 bottom-0 w-full md:w-[375px] md:left-1/2 md:-translate-x-1/2">
                <div>
                    <div className='flex justify-center items-center'>
                        {
                            type === "emotes" ?
                                <img className='w-40 h-auto max-h-72 object-contain bg-transparent' src={`/emotes/${allData.key}.png`} alt={allData.name} />
                                :
                                <img className='w-40 h-auto max-h-72 object-contain bg-transparent' src={allData.image} alt={allData.name} />
                        }
                    </div>

                    <CommonButton onClick={() => router.push(`/${name}`)} name={'Apply Now'} />
                </div>
            </div> */}
            </section>


            {/* <CommonModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} onClick={() => router.push(`/${name}`)} /> */}
        </>
    )
}

export default DetailsComp