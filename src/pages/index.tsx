/* eslint-disable @next/next/no-html-link-for-pages */
import axios from 'axios'
import useSWR from "swr";
import { useUser } from '@auth0/nextjs-auth0';

import { API_URL } from '../config'
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser()

  const { data } = useSWR(`${API_URL}/users`, async (url) => {
    const response = await axios.get(url)

    return response
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>トップページ</h1>
      <div>
        <Link href='/creators/new'>→ポートフォリオを作る</Link></div>
    </div>
  )
}

