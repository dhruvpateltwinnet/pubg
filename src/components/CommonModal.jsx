import React, { memo } from 'react'
import CommonAdsComp from './CommonAdsComp'

const CommonModal = ({ isOpenModal, onClick, setIsOpenModal }) => {
    return (
        <>
            {
                isOpenModal ?
                    <div className="relative z-50 md:w-[375px] md:mx-auto" /* aria-labelledby="modal-title" role="dialog" aria-modal="true" */>
                        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                        <div className="fixed inset-0 z-50 w-screen overflow-y-auto md:w-[375px] md:mx-auto">
                            <div className="relative flex z-50 min-h-full justify-center px-0.5 py-4 items-center">
                                <div className='rounded-2xl border border-white/50 bg-[#1C3355] backdrop-blur w-full'>
                                    <div className='flex justify-between px-5 py-4'>
                                        <div className='flex items-center gap-4'>
                                            <img src='/coin-claim.png' className='size-6 object-contain' alt='coins' />
                                            <div className='text-white text-base font-semibold leading-5'>
                                                Get Instant Rewards
                                            </div>
                                        </div>
                                        <div onClick={() => setIsOpenModal(false)} className='cursor-pointer size-6 rounded-full bg-[#525252] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                <path d="M4.72461 12.2764L12.2754 4.72559" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.2754 12.2764L4.72461 4.72559" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <CommonAdsComp width={'100%'} height={'315px'} adFormat={'auto'} /*  adFormat={'rspv'} */ adSlot={"3038940967"} autoWidthFalse={true} />
                                    </div>
                                    <div className='p-6'>
                                        <button onClick={onClick} className='bg-[#F27B1F] rounded-xl py-2.5 w-full'>
                                            <div className='uppercase text-white text-lg leading-6 font-bold'>
                                                claim now
                                            </div>
                                        </button>
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

export default memo(CommonModal)