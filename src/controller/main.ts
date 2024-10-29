import { NextFunction, Request, Response } from "express";
import { Controller } from "../decorators/controller";
import { Route } from "../decorators/route";


@Controller()
class MainController {
    @Route('get', '/healthcheck')
    getHealthCheck(req: Request, res: Response, next: NextFunction){
        logging.info('Healthcheck called successfully');
        return res.status(200).json({hello: 'Hello HealthCheck'})
    }
}

export default MainController;