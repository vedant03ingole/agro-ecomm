import React from 'react'
import getCommerce from '../../lib/commerce'




export async function getServerSideProps({ params }) {
    
    const { slug } = params
    // console.log("slug", slug);
    const commerce = getCommerce()

    // if(commerce) {
      const category = await commerce?.categories.retrieve(slug, {type: "slug"})
      const { data : products } = await commerce?.products.list({ category_slug : slug})
    
    // console.log(products);

    return {
        props: {
            products,
            category
        },
    }
}

const CategoryPage =  ({category, products }) => {

  return (
    <div>
        <h1>{category.name}</h1>
        <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}

export default CategoryPage