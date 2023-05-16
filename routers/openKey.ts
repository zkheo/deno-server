import { Router } from "https://deno.land/x/oak/mod.ts";
import OpenKeyController from "../controller/openKeyController.ts";

const router = new Router({prefix: '/aaa'});

router.get('/bbb/:y', OpenKeyController.saveKey);

export default router;

