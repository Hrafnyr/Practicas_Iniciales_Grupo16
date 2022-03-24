import { response, Router } from "express"; 'express'; //Importar router, metodo que devuelve un objeto con las rutas

class UsuariosRoutes{
    public router: Router = Router(); //Almacena un objeto que devuelve el método router

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', (req,res) => res.send('Usuarios xd'), ) //Ruta inicial de la aplicación
    }
}

const usuariosR = new UsuariosRoutes();
export default usuariosR.router;