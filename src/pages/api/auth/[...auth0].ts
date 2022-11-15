import { handleAuth } from '@auth0/nextjs-auth0'

// 下記URLを自動生成する
// /api/auth/login
// /api/auth/logout
// /api/auth/callback
// /api/auth/me
export default handleAuth()