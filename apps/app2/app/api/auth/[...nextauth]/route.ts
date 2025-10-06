import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client'
import { Session } from "inspector/promises";
// import { NEXT_AUTH } from "@/app/lib/auth";

import { NEXT_AUTH } from "../../../../../../packages/auth/next-auth.config"


// const prisma = new PrismaClient()

const handler = NextAuth(NEXT_AUTH)  


export const GET = handler
export const POST = handler