import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const onlyGuestPath = ['/sign-in'];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    if (onlyGuestPath.includes(request.nextUrl.pathname)) {
        const token = request.cookies.get('userToken');

        if (!token) return NextResponse.next();

        const {isAuth} = await (await fetch(process.env.URL + '/api/auth/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token)
        })).json();

        if (!isAuth) {
            request.cookies.delete('userToken');
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL('/', request.url));
    }
}