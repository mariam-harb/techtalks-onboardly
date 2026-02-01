import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Mock API received:", body);

  return NextResponse.json(
    {
      message: "Mock experience saved",
      data: body,
    },
    { status: 201 }
  );
}
