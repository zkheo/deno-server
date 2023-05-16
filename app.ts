import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {PORT, HOST} from "./config.ts";

import UsersRoute from "./routers/users.ts";
import OpenKeyRoute from "./routers/openKey.ts";
import notFound from "./routers/notFound.ts";

const env = Deno.env.toObject();
const port = env.PORT || PORT;

const router = new Router();
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.use(UsersRoute.routes());
app.use(UsersRoute.allowedMethods());
app.use(OpenKeyRoute.routes());
app.use(OpenKeyRoute.allowedMethods());

app.use(notFound);

app.use(async (ctx, next) => {
  console.log(`${ctx.request.url} ${ctx.request.method}`)
  await next();
});

console.log(`Deno App Run>>${HOST}:${port}`);
app.listen(`${HOST}:${port}`)


router.get("/", (ctx) => {
  ctx.response.body = "this is deno / api";
})
