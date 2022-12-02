import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../redux/calcStore'
// import type { RootState } from '../redux/store'
import { GetStaticProps } from 'next'
import Commerce from '@chec/commerce.js'

import getCommerce from '../lib/commerce'
import Products from '../components/products'
import Categories from '../components/CategoryPage'

export default function Home({ products, categories}) {

  console.log(products , categories)
  
  return (
    <div className={styles.container} >
      <Categories categories={categories} />
    </div>
  )
}


export const getStaticProps = async (context) => {

  //let commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY)
  
  const commerce = getCommerce()
  

  const { data: categories } = await commerce.categories.list()
  const { data: products } = await commerce.products.list()

  return {
    props: {
      categories,
      products
    }
  }

}





// const dispatch = useDispatch()
// // const { value } = useSelector((state: number) => state.calc )
// const value = useSelector((state: RootState) => state.calc.value)

// const add = () => {
  //   dispatch(increment())
  // }
  // const sub = () => {
    //   dispatch(decrement())
    // }
   
   
   
    {/* <h1 className='font-mono text-xl'>Redux dev</h1>
      <p>{value}</p>
      <button className="p-5 border border-spacing-2 m-5 rounded-lg" onClick={sub}> - </button>
      <button className="p-5 border border-spacing-2 m-5 rounded-lg" onClick={add}> + </button> */}