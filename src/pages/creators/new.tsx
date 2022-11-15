/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>ポートフォリオ新規作成</h1>
      <div><Link href="/">トップページに戻る</Link></div>
      <div><a href="/api/auth/logout">ログアウト</a></div>
    </div>
  )
}


export const getServerSideProps = withPageAuthRequired();
