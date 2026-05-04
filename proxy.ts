import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js 16 Proxy Middleware
 * Replaces middleware.ts with a dedicated network boundary layer.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Logging (Dev Only)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[PROXY] ${request.method} ${pathname}`);
  }

  // 2. Routing Logic (Commented out until needed for complex auth/routing)
  // const allowedRoutes = ['/', '/projects', '/about', '/contact'];
  // const isAllowed = allowedRoutes.some(route => pathname === route || pathname.startsWith(route + '/'));

  // 3. CORS Headers (Example)
  const response = NextResponse.next();
  
  if (pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
