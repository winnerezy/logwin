import { Request, Response, NextFunction } from "express"

export default function logwin(req: Request, res: Response, next: NextFunction){

  const errorCodes = [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511];

  const start = new Date().getTime();
  res.on("finish", ()=> {
    const finish = new Date().getTime();
    console.log({
      route: req.url,
      method: req.method,
      statusCode: res.statusCode,
      time: `${finish - start}ms`,
      duration: new Date(),
      ip: req.ip,
      "user-agent": req.header("user-agent"),
      error: errorCodes.includes(res.statusCode) ? res.statusMessage : null
  })
  })
  next && next()
}



