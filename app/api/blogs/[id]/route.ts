import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const id = req.url.split("blogs/")[1];
  const filterData = await prisma.workers.findMany({
    where: {
      id,
    },
  });

  try {
    return NextResponse.json({ message: "OK", filterData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  try {
    const { name, email } = await req.json();
    const id = req.url.split("blogs/")[1];

    const updateData = await prisma.workers.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });

    return NextResponse.json({ message: "Ok", updateData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    const deleteData = await prisma.workers.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Ok", deleteData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
