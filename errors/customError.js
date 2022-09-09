

class CustomAPIError extends Error{
constructor(msg,statusCode){
super(msg)
this.statusCode=statusCode

}

}

const createError=(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}


module.exports={createError,CustomAPIError}