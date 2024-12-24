const AppWrapper = (fn: any) => {
    return async (req: any, res: any, next: any) => {
        fn(req, res, next).catch(next);
    }
}

export { AppWrapper };