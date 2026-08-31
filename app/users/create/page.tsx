import { prisma } from "@/app/db/prismaconnection";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  async function saveData(formData: FormData) {
    "use server";
    const myObj = {
      username: formData.get("username")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      password_hash: formData.get("password_hash")?.toString() || "",
      display_name: formData.get("display_name")?.toString() || "",
      profile_picture: formData.get("profile_picture")?.toString() || "",
    };
    await prisma.users.create({
      data: myObj,
    });
    revalidatePath("/users");
    redirect("/users");
  }
  return (
    <div>
      <form action={saveData} method="post">
        <input type="text" placeholder="Enter Username" name="username" />
        <br />
        <input type="text" placeholder="Enter Email" name="email" />
        <br />
        <input type="text" placeholder="Enter Password" name="password_hash" />
        <br />
        <input type="text" placeholder="Enter Display" name="display_name" />
        <br />
        <input
          type="text"
          placeholder="Enter Profile Picture"
          name="profile_picture"
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <Link href={"/users"}>Back</Link>
    </div>
  );
}

export default page;
