'use client';
import React, { Fragment, useState } from 'react'
import Header from './Header'
import CommonAdsComp from './CommonAdsComp'
import Link from 'next/link';
// import CommonModal from './CommonModal';
import { useRouter } from 'next/navigation';

const data = {
    "elite": [
        {
            name: "Exclusive Skins",
            description: "Unique character outfits"
        },
        {
            name: "Accessories",
            description: "Backpacks, hats, masks, and more"
        },
        {
            name: "Emotes",
            description: "Special dance moves and gestures"
        },
        {
            name: "Vehicle Skins",
            description: "Custom vehicles for in-game"
        },
        {
            name: "Pet Skins",
            description: "Stylish looks for pets"
        },
        {
            name: "Vouchers",
            description: "Free spins for Luck Royale."
        },
        {
            name: "Avatars and Banners",
            description: "Personalized profile decorations"
        },
        {
            name: "Tokens",
            description: "Used to redeem exclusive rewards"
        },
    ],
    "booyah": [
        {
            name: "Exclusive Outfits",
            description: "Special character costumes"
        },
        {
            name: "Weapon Skins",
            description: "Custom designs for weapons"
        },
        {
            name: "Vehicle Skins",
            description: "Unique styles for in-game vehicles"
        },
        {
            name: "Emotes",
            description: "Special animations or dance"
        },
        {
            name: "Backpack Skins",
            description: "Stylish designs for backpacks"
        },
        {
            name: "Pet Skins",
            description: "Exclusive looks for pets"
        },
        {
            name: "Profile Decorations",
            description: "Avatars, banners & backgrounds"
        },
        {
            name: "BOOYAH Crates",
            description: "Mystery crates exclusive item"
        },
    ],
    "reward": [
        {
            name: "Weapon Skins",
            description: "Custom designs for weapons"
        },
        {
            name: "Vehicle Skins",
            description: "Unique styles for in-game vehicles"
        },
        {
            name: "Emotes",
            description: "Special animations or dance"
        },
        {
            name: "Pet Skins",
            description: "Stylish designs for backpacks"
        },
        {
            name: "Pet Skins",
            description: "Exclusive looks for pets"
        },
        {
            name: "Outfits",
            description: "Special character costumes"
        }
    ]
}

const ElitePages = ({ name }) => {
    const router = useRouter()
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
                <Header name={`${name} Pass`} />
                <div className='flex justify-center items-center '>
                    <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"8961776512"} />
                </div>
                <div className='mt-6 flex flex-col px-6 pb-6 gap-6'>
                    {data[name]?.map((item, itemIndex) => {
                        return (
                            <div key={`${itemIndex}-${item.name.replaceAll(" ", "-")}`} onClick={nextPageOpen} style={{ backgroundImage: "url('/elite/bg-elite.png')", backgroundSize: "100% 100%" }} className='bg-no-repeat bg-black py-4 ps-3 pe-5 overflow-hidden rounded-xl'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <div className={`${name === "elite" ? 'text-[#A8C5F3]' : name === "booyah" ? 'text-[#BC9CD4]' : 'text-[#DBA47D]'} text-lg leading-6 font-bold`}>
                                            {item.name}
                                        </div>
                                        <div className='text-xs text-white font-semibold'>
                                            {item.description}
                                        </div>
                                    </div>
                                    {
                                        name === "elite" ?
                                            <img key={"elite"} src='/elite/elite-btn.png' className='object-contain w-[91px] cursor-pointer' alt='' />
                                            :
                                            name === "booyah" ?
                                                <img key={"booyah"} src='/elite/booyah-btn.png' className='object-contain w-[110px] cursor-pointer' alt='' />
                                                :
                                                name === "reward" ?
                                                    <img key={"reward"} src='/elite/reward-btn.png' className='object-contain w-[87px] cursor-pointer' alt='' />
                                                    : null

                                    }
                                </div>
                            </div>
                            // <Link
                            //     // key={item.id + itemIndex}
                            //     key={`${itemIndex}-${item.name.replaceAll(" ", "-")}`}
                            //     href={`/${name}`}
                            //     className='block'>
                            // </Link>
                        )
                    })}
                </div>
            </section>

            {/* <CommonModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} onClick={() => router.push(`/${name}`)} /> */}
        </>
    )
}

export default ElitePages