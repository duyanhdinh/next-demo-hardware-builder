import {verifyUser} from "@fire/admin";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

export async function POST(request: Request) {
    const body: RequestCookie = await request.json();

    const response = await verifyUser(body.value);

    return Response.json({isAuth: response});
}