'use client'
import React from 'react'
import data from '../../public/data.json'
import Link from 'next/link'
import CommonAdsComp from './CommonAdsComp'
const TypeComponent = ({ type, category }) => {
    const allData = (category ? data[type].find(x => x.name === category).innerData : data[type]) || []
    return (
        <>
            <div className='flex justify-center items-center'>
                <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"8961776512"} />
            </div>

            <div className='grid grid-cols-2 justify-between py-6 px-6 gap-x-6 gap-y-9'>
                {
                    allData.slice(0, 8).map((obj, objIndex) => {
                        return (
                            <Link key={objIndex} href={{
                                pathname: '/details', query: {
                                    name: obj.name.replaceAll(" ", "-"),
                                    id: obj._id,
                                    type: type,
                                    ...(obj.weaponType ? { weaponType: obj.weaponType } : {})
                                }
                            }} className='block'>
                                <div key={objIndex} className='flex justify-center relative'>
                                    <div className={`${type === "weapons" ? 'w-full h-28' : 'h-36 w-[67px]'} bg-transparent relative z-20`}>
                                        {
                                            type === "emotes" ?
                                                <img className='h-full w-full object-contain bg-transparent' src={`/emotes/${obj.key}.png`} alt={obj.name} />
                                                :
                                                <img className='h-full w-full object-contain bg-transparent' src={obj.image} alt={obj.name} />
                                        }
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
            <div className='flex justify-center items-center my-6'>
                <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"6818403870"} />
            </div>
            <div className='grid grid-cols-2 justify-between py-6 px-6 gap-x-6 gap-y-9'>
                {
                    allData.slice(8).map((obj, objIndex) => {
                        return (
                            <Link key={objIndex} href={{
                                pathname: '/details', query: {
                                    name: obj.name.replaceAll(" ", "-"),
                                    id: obj._id,
                                    type: type,
                                    ...(obj.weaponType ? { weaponType: obj.weaponType } : {})
                                }
                            }} className='block'>
                                <div key={objIndex} className='flex justify-center relative'>
                                    <div className={`${type === "weapons" ? 'w-full h-28' : 'h-36 w-[67px]'} bg-transparent relative z-20`}>
                                        {
                                            type === "emotes" ?
                                                <img className='h-full w-full object-contain bg-transparent' src={`/emotes/${obj.key}.png`} alt={obj.name} />
                                                :
                                                <img className='h-full w-full object-contain bg-transparent' src={obj.image} alt={obj.name} />
                                        }
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
    )
}

export default TypeComponent