import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async (req: Request, res: Response) => {
  try {
    const getData = await prisma.workers.findMany();

    return NextResponse.json({ message: "OK", getData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { name, email } = await req.json();
  try {
    const post = { name, email, id: Date.now().toString() };
    await prisma.workers.create({
      data: post,
    });
    return NextResponse.json({ message: "OK", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
