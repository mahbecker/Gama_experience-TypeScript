import { getParsedCommandLineOfConfigFile } from "typescript";

//--------------------------------------------------------------------------------------------------------
// Gama Experience Type Script

interface Usuario{
    nome:string;
    email:string;
    adress?:string;

}

function getUser(): Usuario{
    return{
        nome:'Ana',
        email: 'ana.mariaarrobagmail'
    }
}

function setUser(usuario:Usuario){
    // ...
}

