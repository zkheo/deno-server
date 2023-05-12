import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router({prefix: '/posts'});

router
    // .get("/", (ctx) => {
    //     ctx.response.body = "this is posts page";
    // })
    .get("/:postId", (ctx) => {
        var postId = ctx.params.postId;
        ctx.response.body = `PostId is ${postId}`;
    })
    .post("/add", async (ctx) => {
        if (ctx.request.hasBody) {
            let body = await ctx.request.body();
            ctx.response.body = body.value;
        } else {
            ctx.response.status = 400;
            ctx.response.body = {error: "Request body cannot be empty"};
        }
    });

export default router;

