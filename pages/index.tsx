import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../redux/calcStore'

export default function Home() {

  const dispatch = useDispatch()
  const { value } = useSelector(state => state.calc)

  return (
    <div className={styles.container}>
      <h1 className='font-mono text-xl'>Redux dev</h1>
        <p>{value}</p>
        <button onClick={() => dispatch(increment(value))}> + </button>
        <button onClick={() => dispatch(decrement(value))}> - </button>
    </div>
  )
}
