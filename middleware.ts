import { auth } from './auth'

export default auth((req) => {
	// 这里可以添加额外的中间件逻辑
})

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
