import Header from '@/components/Header'
import TypeComponent from '@/components/TypeComponent'
import React from 'react'

// const page = (props) => {
const page = async ({ params }) => {
    const { type } = await params;
    return (
        <section>
            <Header name={type} />
            <TypeComponent type={type} />
        </section>
    )
}

export default page