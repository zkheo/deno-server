// import { Client } from "https://deno.land/x/mysql/mod.ts";
//
// const client = await new Client().connect({
//     hostname: "aws.connect.psdb.cloud",
//     username: "yn46of4gql8pfene5occ",
//     db: "mybase",
//     password: "pscale_pw_B10ZUYdFRwM3xZZWRTUayVZYF3JvuJZKFk53eWB9A5s",
// });
//
//
// export default client;

import { connect } from "npm:@planetscale/database";
const config = {
    host: 'aws.connect.psdb.cloud',
    username: 'yn46of4gql8pfene5occ',
    password: 'pscale_pw_B10ZUYdFRwM3xZZWRTUayVZYF3JvuJZKFk53eWB9A5s',
};
const client = connect(config);

export default client;
