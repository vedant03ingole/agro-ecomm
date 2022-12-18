import React from 'react'
import getCommerce from '../lib/commerce'

const Subcat = ({ categories }) => {
    return (
        <div>
        <div>
            {/* {
                categories.children.map((category) => {
                    return (
                        <div key={category.id}>
                            {category.name}
                        </div>
                    )
                })
            } */}
            {
                categories.map((category) => {
                    return (
                        <div key={category.id}>
                            <h1>{category.name}</h1>
                            {
                                category.children.map((subcat) => (
                                    <p key={subcat.name}>
                                        {subcat.name}
                                        {/* {console.log(subcat)} */}
                                    </p>
                                ))
                            }
                            <hr />
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Subcat


export async function getStaticProps() {

    const commerce = getCommerce()

    const { data: categories } = await commerce.categories.list()

    return {
        props: {
            categories
        }
    }
}