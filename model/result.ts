
class Result {
    code: number;
    data: any;
    message: string;

    static SUCCESS: number = 200;
    static FAIL: number = -1;
    constructor(code: number, data: any, message: string) {
        this.code = code;
        this.data = data;
        this.message = message;
    }


    static success(data: any){
        return new Result(this.SUCCESS, data, '');
    }
    static fail(msg: string){
        return new Result(this.FAIL, null, msg);
    }
}

export default Result;
