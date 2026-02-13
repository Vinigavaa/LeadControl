/*import { withAuth } from "@/lib/auth-helper";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export const GET = withAuth(async (request: NextRequest, userId: string) => {
    const lead = await prisma.lead.findMany({
        where: {
            userId: userId
        }
    })
}) */