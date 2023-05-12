import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "../controller/userController.ts";

const router = new Router({prefix: '/users'});

router.get('/getValue/:id/:name', UserController.getValue);
router.get('/getKeyValue', UserController.getKeyValue);
router.post("/postBody",UserController.postBody);
router.post("/header",UserController.header);

export default router;

