"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Módulo 06 - Type Script - 10 - Classes
var Data = /** @class */ (function () {
    // defined properties
    //public dia:number;
    //private mes:number;
    //ano:number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2021);
console.log(data.dia);
//console.log(data.mes); //not possible to access because it is a private.//
var data2 = new Data(4, 5); //04/05/1970 because year was set
//--------------------------------------------------------------------------------------------------------
// Módulo 06 - Type Script - 12 - Utilizando Modificadores de Acesso; 13 - Herança
var Car = /** @class */ (function () {
    function Car(marca, modelo, speedMax) {
        if (speedMax === void 0) { speedMax = 180; }
        this.marca = marca;
        this.modelo = modelo;
        this.speedMax = speedMax;
        this.speedActual = 0;
    }
    Car.prototype.alterarVelocidade = function (delta) {
        // soma ou diminui a velocidade e verifica se é acima da velocidade máxima ou abaixo de zero.
        this.speedActual += delta;
        if (this.speedActual >= this.speedMax) {
            this.speedActual += this.speedMax;
        }
        else if (this.speedActual <= 0) {
            this.speedActual = 0;
        }
    };
    Car.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Car.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Car;
}());
var carro = new Car('Fiat', 'Uno', 250);
carro.acelerar();
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, 'Chevrolet', 'Camaro', 300) || this;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = true;
    };
    return Camaro;
}(Car));
var camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
//  camaro.turbo = true; -> não é possível mudar pois turbo é privado.
camaro.ligarTurbo();
