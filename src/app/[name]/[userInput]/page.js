import SubmitFile from '@/components/SubmitFile'
import React from 'react'

const page = async ({ params }) => {
  const { userInput } = await params;

  return (
    <SubmitFile name={userInput} defaultNum={2} />
  )
}

export default page