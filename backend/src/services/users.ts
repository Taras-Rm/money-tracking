import type { User } from "@prisma/client";
import prisma from "../db/index.ts";

const findUserById = async (id: number): Promise<User | null> => {
    return await prisma.user.findFirst({
        where: {
            id,
        },
    });
};

export default { findUserById }