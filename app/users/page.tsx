import React from "react";
import { prisma } from "../db/prismaconnection";
import Link from "next/link";

async function UserList() {
  const data = await prisma.users.findMany();
  const arrayData = data.map((d: any) => {
    return <li>{d.display_name}</li>;
  });
  return (
    <div>
      <Link href={"/users/create"}>Add New</Link>
      <ul>{arrayData}</ul>
    </div>
  );
}

export default UserList;
