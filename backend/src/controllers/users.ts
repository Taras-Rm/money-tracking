import type { Request, Response } from "express"
import usersService from "../services/users.ts"
import type { RequestWithParams } from "../types/request.ts"
import { HTTP_STATUS } from "../constants/httpStatuses.ts"

const createUser = (req: Request, res: Response) => {
    res.send("Create user call")
}

const getUser = async (req: RequestWithParams<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params;

        // Validate ID parameter
        if (!id || isNaN(parseInt(id, 10))) {
            return res.status(HTTP_STATUS.BAD_REQUSET).json({
                success: false,
                message: "Invalid user ID provided"
            });
        }

        const userId = parseInt(id, 10);

        const user = await usersService.findUserById(userId);

        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                success: false,
                message: `User with ID ${userId} not found`
            });
        }

        return res.status(HTTP_STATUS.SUCCESS).json({
            success: true,
            data: user
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(HTTP_STATUS.SERVER_ERROR).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export default { createUser, getUser }