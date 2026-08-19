Step 01: Install prisma
npm i prisma
npm i @prisma/client

Step 02: Initialise prisma
npx prisma init

Step 03: change datasource in schema.prisma file
datasource db {
provider = "mysql"
}

Step 04: change connection string in .env
DATABASE_URL="mysql://db_user:db_pass@localhost:3306/database_name”

Step 05: pull database schema
npx prisma db pull

Step 06: verify schema loaded in schema.prisma file

Step 07: generate prisma client
npx prisma generate

Step 08: install mysql adapter
npm install @prisma/adapter-mariadb

Step 09: create a connector (app/db/prismaconnection.ts)

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
host: "localhost",
port: 3306,
connectionLimit: 5,
user: "root",
password: "",
database: "address_book",
});
const prisma = new PrismaClient({ adapter });
export { prisma };

Step 10: create a page at app/users/page.tsx

import { prisma } from "../db/prismaconnection";

async function UserList() {
const data = await prisma.users.findMany();
console.log(data);
return <div></div>;
}
