class ExpressError extends Error{
    constructor(statusCode){
        super();
        this.statusCode = statusCode;
    }
}