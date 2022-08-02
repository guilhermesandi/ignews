import type { NextPage } from 'next'

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <h1 className={styles.title}>
      Hello World
    </h1>
  )
}

export default Home
