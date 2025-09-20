import type { Request } from "express";

export type RequestWithQuery<T> = Request<{}, {}, {}, T>;
export type RequestWithParams<T> = Request<T>;
export type RequestWithBody<T> = Request<{}, {}, T>;
export type RequestWithParamsAndBody<T, B> = Request<T, {}, B>;