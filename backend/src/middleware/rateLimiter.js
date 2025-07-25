import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const {success} = await rateLimit.limit("userId-as-id");
    if(!success) {
      return res.status(429).json({message:"Too many request, please try again later"});
    }
    next();
  } catch (error) {
    console.log("\nRate limiter error\n\n", error);
    next();
  }
}

export default rateLimiter;
