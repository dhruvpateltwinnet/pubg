import SubmitFile from '@/components/SubmitFile'
import React from 'react'

const page = async ({ params }) => {
  const { name } = await params;

  return (
    <SubmitFile name={name} defaultNum={1} />
  )
}

export default page