export { default } from "next-auth/middleware"

// 保护所有页面，除了 API 路由和静态文件
export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了：
     * 1. /api/auth (NextAuth 认证路由)
     * 2. _next/static (静态文件)
     * 3. _next/image (图片优化)
     * 4. favicon.ico (图标)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
}
