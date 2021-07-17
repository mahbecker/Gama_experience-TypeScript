import { createArrowFunction } from "typescript";

// Módulo 06 - Type Script - 10 - Classes

class Data{
    // defined properties
    
    //public dia:number;
    //private mes:number;
    //ano:number;

    constructor(public dia:number, private mes:number, public ano:number = 1970){
        this.dia=dia;
        this.mes=mes;
        this.ano=ano;
    }
}

const data = new Data(1,1,2021);
console.log(data.dia);
//console.log(data.mes); //not possible to access because it is a private.//

const data2=new Data(4,5); //04/05/1970 because year was set


//--------------------------------------------------------------------------------------------------------
// Módulo 06 - Type Script - 12 - Utilizando Modificadores de Acesso; 13 - Herança
class Car{
    private speedActual: number=0;

    constructor(
        public marca: String,
        public modelo: String,
        private speedMax: number =180
    ) {}

    private alterarVelocidade(delta: number){
        // soma ou diminui a velocidade e verifica se é acima da velocidade máxima ou abaixo de zero.
        this.speedActual+=delta;

        if(this.speedActual >= this.speedMax){
            this.speedActual+=this.speedMax;
        }

        else if(this.speedActual<= 0){
            this.speedActual=0;
        }

        
    

    }

    acelerar(){ //método
        this.alterarVelocidade(5);
        
    }
    frear(){
        this.alterarVelocidade(-5);
        
    }        

    
}

const carro = new Car('Fiat', 'Uno', 250);
carro.acelerar();

class Camaro extends Car{
    private turbo = false;
    constructor (){
        super( 'Chevrolet', 'Camaro', 300);
    }

    ligarTurbo(){
        this.turbo = true;
    }

}

const camaro= new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
//  camaro.turbo = true; -> não é possível mudar pois turbo é privado.
camaro.ligarTurbo();













