import ratelimit from "../config/upstash.js"


const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-rate-limit");
        if(!success){
           return res.status(429).json({
            message:"Rate limit Exceeded"
           })
            
        }
        next();
    } catch (error) {
        console.log(error);
        next(error);
        
    }
}

export default rateLimiter;