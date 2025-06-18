'use client'
import React, { memo, useEffect } from 'react'

const GoogleTag = () => {

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments) }
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ID);
    }, [])

    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-4C9WSVYQK8"></script>
        </>
    )
}

export default memo(GoogleTag)