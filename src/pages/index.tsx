import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import axios from 'axios'

import styles from '../../styles/Home.module.css'
import { API_URL } from '../config'

export default function Home() {
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${API_URL}/users`)
      console.log('response', response)
    })()
  }, [])

  return (
    <div className={styles.container}>
      <div><a href="/api/auth/login">ログインする</a></div>
    </div>
  )
}
