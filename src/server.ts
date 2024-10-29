import express from "express";
import http from "http";
import logging from "./config/logging";
import { routeNotFound } from "./middleware/routeNotFound";
import { SERVER } from "./config/config";
import { loggingHandler } from "./middleware/loggingHandler";
import { corsHandler } from "./middleware/corsHandler";
import "reflect-metadata"


export const app = express();

export let httpServer : ReturnType<typeof http.createServer>


export const Main = () => {
    logging.info('----------------------------------------------------------------');
    logging.info('Initialize API server')    
    logging.info('----------------------------------------------------------------');
    

    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());

    logging.info('----------------------------------------------------------------');
    logging.info('logging and configuration')
    logging.info('----------------------------------------------------------------');
    app.use(corsHandler)
    app.use(loggingHandler)
   

    logging.info('----------------------------------------------------------------');
    logging.info('Controller Routing')
    logging.info('----------------------------------------------------------------');

    app.use

    logging.info('----------------------------------------------------------------');
    logging.info('Define Route Not Found')
    logging.info('----------------------------------------------------------------');
    app.use(routeNotFound)

    logging.info('----------------------------------------------------------------');
    logging.info('Start Server')
    logging.info('----------------------------------------------------------------');
    httpServer = http.createServer(app);
    httpServer.listen(SERVER.SERVER_PORT || 3000, () => {
        logging.info(`Server is running on port ${SERVER.SERVER_PORT || 3000}`);
    });
}

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);
Main();

