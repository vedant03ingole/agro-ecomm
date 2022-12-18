import React from 'react'
import { useState } from 'react'
import getCommerce from '../../lib/commerce'





export async function getStaticPaths() {

  const commerce = getCommerce()
  const { data: categories } = await commerce.categories.list()

  const paths = categories.map(category => {
    return {
      params: {
        slug: category.slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const { slug } = params

  const commerce = getCommerce()

  // if(commerce) {
  const category = await commerce.categories.retrieve(slug, { type: "slug" })
  const { data: products } = await commerce.products.list({ category_slug: slug })

  // console.log(products);

  return {
    props: {
      products,
      category
    },
  }
}


const CategoryPage = ({ category, products }) => {

  const [catArr, setCatArr ] = useState([])
  // console.log(catArr)


  //filter products according to subcategory

  const productFilter = (subcatId) => {
    const productPerSubcat = () => products.filter((product) => product.categories.find((cat) => cat.id === subcatId))
    setCatArr(productPerSubcat)
    }

  return (
    <div>
      <h1>{category.name}</h1>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      {
        category.children.map((subcat) => (
          <h2
            key={subcat.name}
            // onClick={() => console.log(subcat.slug)}
            onClick={() => productFilter(subcat.id)}
          >
            {subcat.name}
          </h2>
        ))
      }


      <hr />
      {
        products.map((product) => (
          <section
            key={product.id}
          >
          <p >{product.name} </p>
            {/* {console.log(product)} */}
            {/* <p>
              {product.categories.map((cat) => (
                  <h3 key={cat.id}> {cat.name}</h3>
              ))}
              <hr />
            </p> */}
          </section>
        ))
      }
     
      <hr />
      {
        catArr.map((product) => (
          <section
            key={product.id}
          >
          <p >{product.name} </p>
            {/* {console.log(product)} */}
            {/* <p>
              {product.categories.map((cat) => (
                  <h3 key={cat.id}> {cat.name}</h3>
              ))}
              <hr />
            </p> */}
          </section>
        ))
      }

    </div>
  )
}

export default CategoryPage








// export async function getServerSideProps({ params }) {

//     const { slug } = params
//     // console.log("slug", slug);
//     const commerce = getCommerce()

//     // if(commerce) {
//       const category = await commerce?.categories.retrieve(slug, {type: "slug"})
//       const { data : products } = await commerce?.products.list({ category_slug : slug})

//     // console.log(products);

//     return {
//         props: {
//             products,
//             category
//         },
//     }
// }