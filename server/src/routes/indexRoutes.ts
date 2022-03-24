import { response, Router } from "express"; 'express'; //Importar router, metodo que devuelve un objeto con las rutas

class indexRoutes{
    public router: Router = Router(); //Almacena un objeto que devuelve el método router

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', (req,res) => res.send('Holi'), ) //Ruta inicial de la aplicación
    }
}

const indexR = new indexRoutes();
export default indexR.router;