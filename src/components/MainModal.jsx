'use client'
import React, { memo, useState } from 'react'
import CommonAdsComp from './CommonAdsComp'

const MainModal = () => {
    const [isModalTrue, setIsModalTrue] = useState(true)
    const closeModal = () => {
        setIsModalTrue(false)
    }
    // const [isModalTrue, setIsModalTrue] = useState()

    // useEffect(() => {
    //     // Check localStorage on initial load
    //     const modalState = localStorage.getItem('isModalTrue');
    //     if (modalState === 'false') {
    //         setIsModalTrue(false);
    //     } else {
    //         setIsModalTrue(true); // Default to true if localStorage is empty
    //     }
    // }, []);

    // const closeModal = () => {
    //     localStorage.setItem('isModalTrue', 'false');
    //     setIsModalTrue(false)
    // }

    return (
        <>
            {
                isModalTrue === true ?
                    <div className="relative z-50 md:w-[375px] md:mx-auto" /* aria-labelledby="modal-title" role="dialog" aria-modal="true" */>
                        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                        <div className="fixed inset-0 z-50 w-screen overflow-y-auto md:w-[375px] md:mx-auto">
                            <div className="relative z-50 flex min-h-full justify-center px-0.5 py-4 items-center">
                                <div className='rounded-2xl border border-white/50 bg-[#1C3355] backdrop-blur py-3 w-full'>
                                    <div className='flex justify-end px-3'>
                                        <div onClick={closeModal} className='cursor-pointer size-6 rounded-full bg-[#525252] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                <path d="M4.72461 12.2764L12.2754 4.72559" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.2754 12.2764L4.72461 4.72559" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='mt-3 mb-6'>
                                        <CommonAdsComp width={'100%'} height={'300px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"7964066215"} autoWidthFalse={true} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    : null
            }
        </>
    )
}

export default memo(MainModal)