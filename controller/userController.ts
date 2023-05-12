import Result from "../model/result.ts";

class UserController {
    //value 方式传参
    static async getValue(ctx: any) {
        var id = ctx.params.id;
        var name = ctx.params.name;
        var res = {id: `${id}`, name: `${name}`};
        console.log(`res-getValue:${JSON.stringify(res)}`);
        ctx.response.body = Result.success(res);
    }

    //key-value 方式传参
    static async getKeyValue(ctx: any) {
        var id = ctx.request.url.searchParams.get("id");
        var name = ctx.request.url.searchParams.get("name");
        var res = {id: `${id}`, name: `${name}`};
        console.log(`res-getKeyValue:${JSON.stringify(res)}`);
        ctx.response.body = Result.success(res);
    }

    //body 传参
    static async postBody(ctx: any){
        var body = await ctx.request.body();
        console.log(`type=` + body.type)
        if (body.type == 'json') {
            const {id, name} = await body.value;
            ctx.response.body= Result.success({id: id, name: name});
        } else if (body.type == 'form-data') {
            const data =(await body.value.read()).fields;
            const id = data['id'];
            const name = data['name'];
            ctx.response.body= Result.success({id: id, name: name});
        }
    }

    //header 传参
    static async header(ctx: any){
        var id = ctx.request.headers.get("id");
        var name =  ctx.request.headers.get("name");
        ctx.response.body= Result.success({id: id, name: name});
    }

}

export default UserController;
