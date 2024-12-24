import { Response, Request } from "express";

import { LoginCase } from "./cases/login";
import { loginSchema } from "./dtos/login.dto";
import { LogoutCase } from "./cases/logout";
import { logoutSchema } from "./dtos/logout.dto";
import { RefreshCase } from "./cases/refresh";
import { refreshSchema } from "./dtos/refresh.dto";
import { CheckAuthCase } from "./cases/check-auth";
import { checkAuthSchema } from "./dtos/check-auth.dto";
import { CreateUserSchema } from "./dtos/create-user.dto";
import { CreateUserCase } from "./cases/create-user";
import { paginateQuerySchema } from "./dtos/paginate.dto";
import { PaginateUsersCase } from "./cases/paginate-users";
import { checkUserPermissionSchema } from "./dtos/check-user-permission.dto";
import { CheckUserPermissionCase } from "./cases/check-user-permission";
import { showUserSchema } from "./dtos/show-user.dto";
import { ShowUser } from "./cases/show-user";


const store = async (req: Request, res: Response) => {
    const payload = CreateUserSchema.parse(req.body);
    
    const createUserCase = new CreateUserCase();
    const result = await createUserCase.execute(payload);

    return res.status(201).json(result);
}

const show = async (req: Request, res: Response) => {
    const payload = showUserSchema.parse(req.params);
    
    const showUserCase = new ShowUser();
    const result = await showUserCase.execute(payload.userId);

    return res.json(result);
}

const index = async (req: Request, res: Response) => {
    const { page, perPage } = paginateQuerySchema.parse(req.query);

    const paginateUsersCase = new PaginateUsersCase();
    const result = await paginateUsersCase.execute({ page, perPage });

    return res.json(result);
}

const checkPermission = async (req: Request, res: Response) => {
    const payload = checkUserPermissionSchema.parse(req.params);

    const checkPermissionCase = new CheckUserPermissionCase();
    const result = await checkPermissionCase.execute(payload);

    return res.json(result);
}

const login = async (req: Request, res: Response) => {
    const payload = loginSchema.parse(req.body);
    
    const loginCase = new LoginCase();
    const result = await loginCase.execute(payload);

    return res.json(result);
}

const logout = async (req: Request, res: Response) => {
    const payload = logoutSchema.parse(req.body);
    
    const logoutCase = new LogoutCase();
    const result = await logoutCase.execute(req.user_id, payload);

    return res.json(result);
}

const me = async (req: Request, res: Response) => {
    const meCase = new ShowUser();
    const result = await meCase.execute(req.user_id);

    return res.json(result);
}

const refresh = async (req: Request, res: Response) => {
    const payload = refreshSchema.parse(req.body);
    
    const refreshCase = new RefreshCase();
    const result = await refreshCase.execute(payload);

    return res.json(result);
}

const checkAuth = async (req: Request, res: Response) => {
    const payload = checkAuthSchema.parse(req.body);
    const checkAuthCase = new CheckAuthCase();
    const result = await checkAuthCase.execute(payload);

    return res.json(result);
}

export default { store, index, checkPermission, login, logout, me, refresh, checkAuth, show };