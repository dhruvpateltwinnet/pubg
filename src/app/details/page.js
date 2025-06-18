import DetailsComp from '@/components/DetailsComp'
import React, { Suspense } from 'react'

const page = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsComp />
    </Suspense>
  )
}

export default page