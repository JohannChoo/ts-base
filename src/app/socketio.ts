import { socketLogger } from "@common/middleware/expressLogger";
import { validateSocketConnection } from "@common/middleware/hash";
import { Server } from "socket.io";

/**
 * 
 * Sample client-side connection properties (more to be added):
 * {
 *  extraHeaders: {
 *    nonce: new Date().getTime()
 *  }
 * }
 */
export function createSocket(httpServer: any) {
    const io = new Server(httpServer, {
        cors: {
            origin: '*',
            allowedHeaders: ['Content-Type', 'Authorization', 'nonce']
        }
    });

    io.use(socketLogger);
    io.use(validateSocketConnection);

    return io;
}