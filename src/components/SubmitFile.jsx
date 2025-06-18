'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CommonButton from './CommonButton'
import CommonAdsComp from './CommonAdsComp'
import Link from 'next/link'
import Header from './Header'
import data from '../../public/data.json'

const SubmitFile = ({ name, defaultNum }) => {



    const router = useRouter()
    const [inputValue, setInputValue] = useState(''); // Manages the input content

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const submitInput = () => {
        // const ele = document.querySelector(".input-tag")
        // if (ele) {
        //     if (ele.value) {
        //         router.push(`/${name}/${name}/${name}`)
        //     } else {
        //         alert("Enter user details")
        //     }
        // } else {
        // }
        router.push(`/${name}/${name}/${name}`)
    }
    // const submitInput = () => {
    //     const ele = document.querySelector(".input-tag")
    //     if (ele) {
    //         if (ele.value) {
    //             router.push(`/${name}/${name}/${name}`)
    //         } else {
    //             alert("Enter user details")
    //         }
    //     } else {
    //         router.push(`/${name}/${name}/${name}`)
    //     }
    // }

    const handleKeyDown = (e) => {
        // Check if 'Enter' key (on desktop) or the "Done" button (on mobile) is pressed
        if (e.key === 'Enter') {
            submitInput();
        }
    };

    return (
        <>
            <section>
                <Header name={name.replaceAll("-", " ")} />
                {
                    defaultNum === 2 ?
                        <div className='border-y border-white/15 backdrop-blur pt-6 pb-3 px-6 mt-3 mb-6 relative overflow-hidden'>
                            <div className='text-white text-base font-semibold pe-3'>
                                Enter your <span className='text-[#8574E0]'>Username</span> or <br /> <span className='text-[#8574E0]'>User ID</span> to Unlock Rewards.
                            </div>
                            <div className='mt-5'>
                                <div className='input-div'>
                                    <div className='flex items-center gap-3 flex-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M8.5 8.50033C10.456 8.50033 12.0417 6.91467 12.0417 4.95866C12.0417 3.00265 10.456 1.41699 8.5 1.41699C6.54399 1.41699 4.95833 3.00265 4.95833 4.95866C4.95833 6.91467 6.54399 8.50033 8.5 8.50033Z" fill="#979797" />
                                            <path d="M8.5 10.2705C4.95125 10.2705 2.06125 12.6505 2.06125 15.583C2.06125 15.7813 2.21708 15.9372 2.41542 15.9372H14.5846C14.7829 15.9372 14.9387 15.7813 14.9387 15.583C14.9387 12.6505 12.0487 10.2705 8.5 10.2705Z" fill="#979797" />
                                        </svg>

                                        <input className='input-tag flex-1' placeholder='Enter user details' onKeyDown={handleKeyDown} onChange={handleInputChange} value={inputValue} />
                                    </div>
                                    {/* <div onClick={() => submitInput()} className='flex-shrink-0 text-xs font-bold text-[#FF003B] cursor-pointer'>
                                        SUBMIT
                                    </div> */}
                                    {/* <svg onClick={() => submitInput()} className={`${inputValue ? 'w-5 fill-black scale-110' : 'w-4 fill-[#979797]'} delay-500 transition-all cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                        <path d="M15.3031 6.42988C15.2339 6.68594 15.0649 6.87021 14.8841 7.05218C13.1644 8.78547 11.4482 10.5222 9.73012 12.2578C9.41294 12.5784 9.01218 12.6736 8.69234 12.4321C8.40098 12.2121 8.13698 11.9388 7.91286 11.6482C7.7028 11.3756 7.76282 10.9887 7.98428 10.7211C8.02796 10.6685 8.07582 10.6193 8.12369 10.571C9.10753 9.57937 10.0914 8.58853 11.0752 7.59731C11.1113 7.56084 11.1447 7.52207 11.1998 7.46179C11.1143 7.46179 11.0577 7.46179 11.0015 7.46179C7.77611 7.46179 4.55071 7.46179 1.32531 7.46179C0.707275 7.46179 0.379455 7.13241 0.379075 6.51088C0.379075 6.34389 0.378695 6.17689 0.379075 6.01028C0.379835 5.43021 0.698918 5.10467 1.26985 5.10467C2.92149 5.1039 4.57312 5.10429 6.22476 5.10429C7.8084 5.10429 9.39204 5.10429 10.9753 5.10429C11.0281 5.10429 11.0805 5.10429 11.1694 5.10429C11.1143 5.04593 11.0805 5.00831 11.0452 4.97261C10.0572 3.97179 9.06802 2.97174 8.08076 1.97016C7.76966 1.65459 7.67697 1.23768 7.91476 0.918279C8.13356 0.624215 8.40402 0.358174 8.69234 0.132827C8.96774 -0.0825387 9.35444 -0.0207313 9.62338 0.208455C9.67542 0.252603 9.72366 0.301358 9.77152 0.349729C11.4718 2.06767 13.1713 3.78714 14.8738 5.50315C15.0577 5.68858 15.2328 5.87438 15.3023 6.13582C15.3031 6.23333 15.3031 6.3316 15.3031 6.42988Z" />
                                    </svg> */}
                                </div>
                                <div onClick={submitInput} className='flex bg-[#34A852] rounded-[42px] items-center justify-center mt-4 py-3'>
                                    <div className='text-white text-base font-bold leading-5'>
                                        SUBMIT
                                    </div>
                                </div>
                            </div>

                            <svg style={{ transform: "rotate(8deg)" }} className='w-72 h-[72px] absolute -right-12 -top-4 ' xmlns="http://www.w3.org/2000/svg" width="218" height="63" viewBox="0 0 218 63" fill="none">
                                <path d="M272.695 57.5302C270.217 62.3025 263.628 63.6582 258.507 61.9543C253.386 60.2504 249.395 56.3009 245.584 52.4933C241.772 48.6857 237.73 44.7695 232.573 43.1786C226.771 41.3872 220.506 42.8201 214.438 42.5255C195.308 41.6075 179.337 23.7829 160.267 25.5452C150.322 26.4631 141.789 32.6111 133.347 37.9267C124.907 43.2379 115.059 48.0656 105.302 45.9499C93.9213 43.4816 85.9113 32.2089 74.4275 30.2827C68.1099 29.2251 61.6183 31.1858 55.26 30.4374C44.5446 29.1727 36.3908 20.7004 28.5602 13.3123C20.7395 5.92221 10.7015 -1.30094 0.119889 0.803124L14.6133 -53L285.845 19.2908L272.695 57.5302Z" fill="white" fillOpacity="0.04" />
                            </svg>
                        </div>
                        : null
                }
                <div className='flex justify-center items-center'>
                    {
                        defaultNum === 1 ?
                            <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"2957537140"} />
                            :
                            defaultNum === 2 ?
                                <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"4026010575"} />
                                :
                                defaultNum === 3 ?
                                    <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"8961776512"} />
                                    : null
                    }
                </div>
                <div className='px-6 py-6'>
                    {
                        defaultNum === 1 ?
                            <div className='flex flex-col gap-4'>
                                <CommonButton onClick={() => router.push(`/${name}/${name}`)} name={'Current Simulator'} />
                                <CommonButton onClick={() => router.push(`/${name}/${name}`)} name={'Other User ID'} />
                            </div>
                            :
                            null
                    }

                    {
                        defaultNum === 3 ?
                            <>
                                <div className='flex flex-col gap-6 items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 77 77" fill="none">
                                        <g filter="url(#filter0_d_7_69310)">
                                            <ellipse cx="38.3289" cy="38.4065" rx="29.387" ry="28.6702" fill="url(#paint0_linear_7_69310)" />
                                        </g>
                                        <path d="M26.3843 37.9236L34.4517 46.0005L50.615 29.8467" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="38.5" cy="38.5" r="37.5" stroke="url(#paint1_linear_7_69310)" strokeLinecap="round" strokeDasharray="4 4" />
                                        <defs>
                                            <filter id="filter0_d_7_69310" x="4.94189" y="5.73633" width="66.7739" height="65.3408" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_69310" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_69310" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_7_69310" x1="-4.26876" y1="-12.4179" x2="66.5689" y2="-24.0447" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00939447" stopColor="#FE652D" />
                                                <stop offset="1" stopColor="#FF8A26" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_7_69310" x1="-15.8578" y1="-27.9773" x2="74.6508" y2="-42.4704" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00939447" stopColor="#FE652D" />
                                                <stop offset="1" stopColor="#FF8A26" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className='text-white text-xl font-semibold text-center'>
                                        We will review it and <br /> update within 30 minutes.
                                    </div>
                                    <div className='flex flex-col gap-4 w-full'>
                                        <CommonButton onClick={() => router.push("/")} name={'Home Screen'} />
                                        <CommonButton onClick={() => router.push("/elite-booyah-pass")} name={'Elite Pass & Booyah Pass'} />
                                        <CommonButton onClick={() => router.push("/free-diamonds-coin")} name={'Get Daily Free Coin & Diamond'} />
                                    </div>
                                </div>


                                <div className='grid grid-cols-2 justify-between gap-x-6 gap-y-9 mt-6'>
                                    {
                                        data['characters'].slice(1, 3).map((obj, objIndex) => {
                                            return (
                                                <Link key={objIndex} href={{
                                                    pathname: '/details', query: {
                                                        name: obj.name.replaceAll(" ", "-"),
                                                        id: obj._id,
                                                        type: 'characters',
                                                        ...(obj.weaponType ? { weaponType: obj.weaponType } : {})
                                                    }
                                                }} className='block'>
                                                    <div key={objIndex} className='flex justify-center relative'>
                                                        <div className={`h-36 w-[67px] bg-transparent relative z-20`}>
                                                            <img className='h-full w-full object-contain bg-transparent' src={obj.image} alt={obj.name} />
                                                        </div>
                                                        <div className='z-10 absolute left-0 bottom-0 border border-white/50 bg-white/15 backdrop-blur-[6px] w-full h-[95px] rounded-2xl overflow-hidden'>

                                                        </div>
                                                        <div className='border border-t-0 border-white/50 rounded-b-2xl z-30 absolute w-full bottom-0 left-0 py-1 text-center text-white text-base leading-5 tracking-[0.64px] uppercase font-normal bg-type-name'>
                                                            {obj.name}
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </>
                            :
                            null
                    }
                </div>

            </section>
        </>
    )
}

export default SubmitFile