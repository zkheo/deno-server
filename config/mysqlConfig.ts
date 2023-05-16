import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
    hostname: "mysql.sqlpub.com",
    username: "wolikezk",
    db: "zkbase",
    password: "f25f6b04b8c49c8b",
});

export default client;
