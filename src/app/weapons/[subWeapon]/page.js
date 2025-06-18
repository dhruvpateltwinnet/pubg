import Header from '@/components/Header'
import TypeComponent from '@/components/TypeComponent'
import React from 'react'

const page = async ({ params }) => {
    const { subWeapon } = await params;
    return (
        <section>
            <Header name={subWeapon} />
            <TypeComponent type={'weapons'} category={subWeapon} />
        </section>
    )
}

export default page