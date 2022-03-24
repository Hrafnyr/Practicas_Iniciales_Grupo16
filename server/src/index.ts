import express, { Application } from 'express'; //Dependencias para desarrollo

class Server {

    public app: Application; //Declaracion de aplicacion, se indica que es de tipo aplicacion

    constructor(){ //Constructor para que al momento de iniciar se ejecuta primero
        this.app = express();
        this.config(); //Llama la configuracion
        this.routes(); //Lama las rutas
    }

    config():void{ 
        this.app.set('port', process.env.PORT ||3000) //Asignacion de puerto, si hay uno predeterminado lo asigna, si no entonces se va la puerto 3000
    }

    routes():void{  //Guarda las rutas

    }

    start():void{ //Inicia el servidor
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port',this.app.get('port'));
        });
    }
}

const server = new Server(); //Guardar el server en una constante

server.start()