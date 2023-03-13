import React from "react";
import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth";
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">send it.</h1>
      </Link>

      <ul className="flex items-center gap-6">
        <Login />
      </ul>
    </nav>
  );
}
