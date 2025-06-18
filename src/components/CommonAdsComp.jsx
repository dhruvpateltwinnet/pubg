// 'use client'
// import React, { useEffect } from 'react'

// const CommonAdsComp = ({ height, width, adFormat, adSlot }) => {
//     const addShow = process.env.NEXT_PUBLIC_ADD_SHOW;
//     console.log(addShow);
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             (window.adsbygoogle = window.adsbygoogle || []).push({})
//         }
//     }, [])
//     return (
//         <>
//             <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5404067225744032"
//                 crossOrigin="anonymous"></script>

//             <div style={{ width: width, height: height }}>
//                 {/* <div style={{ width: width, height: height , background:"gray" }}> */}

//                 <ins className="adsbygoogle"
//                     style={{ display: "block", height: height, width: width }}
//                     data-ad-client="ca-pub-5404067225744032"
//                     data-ad-slot={adSlot}
//                     data-ad-format={adFormat}
//                     data-full-width-responsive="true"
//                 ></ins>
//             </div>
//         </>
//     )
// }

// export default CommonAdsComp


// 'use client'
// import React from 'react'

// const CommonAdsComp = ({ height, width, adFormat, adSlot }) => {
//     const addShow = process.env.NEXT_PUBLIC_ADD_SHOW;
//     return (
//         <>
//             <div style={{ width: width, height: height, maxWidth: "100%" }}>
//                 {
//                     addShow === "true" ?
//                         <amp-ad width={width} height={height}
//                             type="adsense"
//                             data-ad-client="ca-pub-5404067225744032"
//                             data-ad-slot={adSlot}
//                             data-auto-format={adFormat}
//                             data-full-width="">
//                             <div overflow=""></div>
//                         </amp-ad>
//                         : null
//                 }
//             </div>
//         </>
//     )
// }

// export default CommonAdsComp
'use client'
import React, { useEffect } from 'react'

const CommonAdsComp = ({ height, width, adFormat, adSlot, autoWidthFalse }) => {
    const addShow = process.env.NEXT_PUBLIC_ADD_SHOW;
    // console.log(addShow);
    useEffect(() => {
        if (typeof window !== "undefined" && addShow === "true") {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        }
    }, [addShow])
    return (
        <>
            {
                addShow === "true" ?
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5404067225744032"
                        crossOrigin="anonymous"></script>
                    : null
            }

            <div style={{ width: width, height: height, maxWidth: "100%" }}>
                {/* <div style={{ width: width, height: height , background:"gray" }}> */}
                {
                    addShow === "true" ?
                        <ins className="adsbygoogle"
                            style={{ display: "block", height: height, width: width }}
                            data-ad-client="ca-pub-5404067225744032"
                            data-ad-slot={adSlot}
                            data-ad-format={adFormat}
                            data-full-width-responsive={'true'}
                            // data-full-width-responsive={autoWidthFalse ? 'false' : 'true'}
                        ></ins>
                        : null
                }
            </div>
        </>
    )
}

export default CommonAdsComp