import React from 'react'

const CommonButton = ({ name , onClick }) => {
    return (
        
        <button onClick={onClick} style={{ background: "linear-gradient(91deg, #A01DBA -2.11%, #74ACF9 152.78%)" }} className='flex items-center justify-center py-2.5 rounded-xl w-full'>
            <div className='text-white text-lg leading-6 font-bold text-center'>
                {name}
            </div>
        </button>
    )
}

export default CommonButton
