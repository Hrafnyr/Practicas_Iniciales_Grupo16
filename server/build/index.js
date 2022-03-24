"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //Dependencias para desarrollo
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config(); //Llama la configuracion
        this.routes(); //Lama las rutas
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //Asignacion de puerto, si hay uno predeterminado lo asigna, si no entonces se va la puerto 3000
    }
    routes() {
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        });
    }
}
const server = new Server(); //Guardar el server en una constante
server.start();
