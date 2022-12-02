import React from 'react'
import getCommerce from '../../lib/commerce'

export async function getServerSideProps({ params }) {

    const { permalink } = params
    const commerce = getCommerce()

    const product = await commerce.products.retrieve(permalink, { type: 'permalink'})

    return { 
        props: {
            product
        }
    }
} 


const ProductPage = ({ product }) => {
    // console.log(product);
  return (
    <div>
        <h1>ProductPage</h1>
        <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  )
}

export default ProductPage