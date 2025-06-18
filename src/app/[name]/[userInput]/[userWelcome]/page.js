import SubmitFile from '@/components/SubmitFile'
import React from 'react'

const page = async ({ params }) => {
    const { userWelcome } = await params;

    return (
        <SubmitFile name={userWelcome} defaultNum={3} />
    )
}

export default page