import { useEffect } from 'react'
import axios from 'axios'
import useSWR from "swr";

import styles from '../../styles/Home.module.css'
import { API_URL } from '../config'

export default function Home() {
  const { data, error } = useSWR(`${API_URL}/users`, async (url) => {
    const response = await axios.get(url)

    return response
  })

  console.log('data', data)

  return (
    <div className={styles.container}>
      <div><a href="/api/auth/login">ログインする</a></div>
    </div>
  )
}

