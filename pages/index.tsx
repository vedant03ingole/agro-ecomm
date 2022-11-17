import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../redux/calcStore'
import type { RootState } from '../redux/store'

export default function Home() {

  const dispatch = useDispatch()
  // const { value } = useSelector((state: number) => state.calc )
  const value = useSelector((state: RootState) => state.calc.value)

  const add = () => {
    dispatch(increment())
  }
  const sub = () => {
    dispatch(decrement())
  }

  return (
    <div className={styles.container}>
      <h1 className='font-mono text-xl'>Redux dev</h1>
        <p>{value}</p>
        <button onClick={add}> + </button>
        <button onClick={sub}> - </button>
    </div>
  )
}
