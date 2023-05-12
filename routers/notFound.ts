export default (ctx: any) => {
    ctx.response.status = 404;
    ctx.response.body = {
        success: false,
        message: "404 - Not found.",
    };
};
