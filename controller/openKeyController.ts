import Result from "../model/result.ts";
import {
    decode,
    encode,
} from "https://deno.land/std@0.187.0/encoding/base64.ts";

import sqlClient from "../config/mysqlConfig.ts"

class OpenKeyController {
    //value 方式传参
    static async saveKey(ctx: any) {
        if (!ctx.params.y) {
            return
        }
        var key = ctx.params.y;
        key = atob(key);
        console.log(`OpenKeyController.saveKey:${key}`);
        const keyInfo = await sqlClient.execute(
            "select * from `open_key` where `key` = ?" ,[key]
        );
        console.log(`keyInfo:${JSON.stringify(keyInfo.rows)}`);
        if (keyInfo.rows.length > 0) {
            return ctx.response.body = Result.success(null);
        }
        await sqlClient.execute(
            "INSERT INTO `open_key` (`key`) VALUES (?)" ,[key]
        );
        ctx.response.body = Result.success("ok");
    }
}

export default OpenKeyController;
