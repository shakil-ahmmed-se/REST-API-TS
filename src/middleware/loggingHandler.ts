import { NextFunction, Request, Response } from "express";


export function loggingHandler(req: Request, res: Response, next: NextFunction){
    logging.log(`Incoming - Method: ${req.method} - URL: ${req.url} -IP: ${req.socket.remoteAddress}`);

    res.on('finish', ()=>{
        logging.log(`Response - Method: ${req.method} - URL: ${req.url} - IP: ${req.socket.remoteAddress} - Status: ${res.statusCode}`);
    })

    next();
}
