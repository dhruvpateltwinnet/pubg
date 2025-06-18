import React from 'react'
import CommonAdsComp from './CommonAdsComp'
import Header from './Header'
import data from '../../public/data.json'
import Link from 'next/link'
const WeaponsComp = () => {
    const allData = data['weapons']
    return (
        <section>
            <Header name={'weapons'} />
            <div className='px-6 py-6'>
                <div className='flex justify-center items-center '>
                    <CommonAdsComp width={'300px'} height={'250px'} adFormat={'auto'} /* adFormat={'rspv'} */ adSlot={"4026010575"} />
                </div>
                <div className='mt-6 pb-10 flex flex-col gap-5'>
                    {
                        allData.map((obj, objIndex) => {
                            return (
                                <Link key={objIndex} href={`/weapons/${obj.name}`}>
                                    <div key={objIndex} className='flex justify-between items-center border border-white/50 bg-white/15 backdrop-blur-[6px] py-3.5 px-5 rounded-2xl'>
                                        <div className='text-white text-lg font-semibold leading-6'>
                                            {obj.name}
                                        </div>

                                        <img alt={obj.name} src={`/weapons/${obj.name}.png`} className='h-7 w-14 object-contain' />
                                    </div>
                                </Link>

                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default WeaponsComp