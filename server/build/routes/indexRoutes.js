"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
'express'; //Importar router, metodo que devuelve un objeto con las rutas
class indexRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Almacena un objeto que devuelve el método router
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Holi')); //Ruta inicial de la aplicación
    }
}
const indexR = new indexRoutes();
exports.default = indexR.router;
