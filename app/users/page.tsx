import React from "react";
import { prisma } from "../db/prismaconnection";

async function UserList() {
  const data = await prisma.users.findMany();
  console.log(data);
  return <div></div>;
}

export default UserList;
