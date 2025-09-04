"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./lib/db";
import { revalidatePath } from "next/cache";

export async function postData(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Ensure the user exists in your DB
  let dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email ?? "",
        firstname: user.given_name ?? "",
        lastName: user.family_name ?? "",
      },
    });
  }

  // Now safely create guestbook entry
  await prisma.guestBookEntry.create({
    data: {
      userId: dbUser.id,
      message: formData.get("message") as string,
    },
  });

  revalidatePath("/guestbook");
}
