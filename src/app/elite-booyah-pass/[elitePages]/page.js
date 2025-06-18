import ElitePages from '@/components/ElitePages'
import React from 'react'

const page = async ({ params }) => {
    const { elitePages } = await params;
    return (
        <ElitePages name={elitePages} />
    )
}

export default page