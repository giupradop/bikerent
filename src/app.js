"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var rent_1 = require("./rent");
var App = /** @class */ (function () {
    function App() {
        this.users = [];
        this.bikes = [];
        this.rents = [];
    }
    // register bike
    // remove user
    // rent bike
    // return bike
    App.prototype.addBike = function (bike) {
        // ACHAR BIKE
        var B = this.bikes.find(function (b) { return b.name === bike.name; });
        // VERIFICA SE NAO EXISTE
        if (B === undefined)
            throw new Error('Bike not found');
        // ADICIONAR BIKE
        this.bikes.push(bike);
    };
    App.prototype.removeUser = function (user) {
        // ACHAR USUARIO
        var U = this.users.find(function (u) { return u.email === user.email; });
        // VERIFICA SE NAO EXISTE
        if (U === undefined)
            throw new Error('User not found');
        // DELETAR USUARIO
        this.users.splice(this.users.indexOf(U), 1);
    };
    App.prototype.rentBike = function (bike, user) {
        // ACHAR USUARIO  
        var U = this.users.find(function (u) { return u.email === user.email; });
        // VERIFICA SE NAO EXISTE
        if (U === undefined)
            throw new Error('User not found');
        // ACHAR BIKE
        var B = this.bikes.find(function (b) { return b.name === bike.name; });
        // VERIFICA SE NAO EXISTE
        if (B === undefined)
            throw new Error('Bike not found');
        // VERIFICA SE JA ESTA ALUGADA
        if (B.isRented)
            throw new Error('Bike already rented');
        // CRIAR ALUGUEL
        var R = rent_1.Rent.create(this.rents, U, B, new Date(), new Date());
        // ADICIONAR ALUGUEL
        this.rents.push(R);
        // MUDAR STATUS DA BIKE
        B.isRented = true;
    };
    App.prototype.returnBike = function (bike, user) {
        // ACHAR USUARIO
        var U = this.users.find(function (u) { return u.email === user.email; });
        // VERIFICA SE NAO EXISTE
        if (U === undefined)
            throw new Error('User not found');
        // ACHAR BIKE
        var B = this.bikes.find(function (b) { return b.name === bike.name; });
        // VERIFICA SE NAO EXISTE
        if (B === undefined)
            throw new Error('Bike not found');
        // VERIFICA SE JA ESTA ALUGADA
        if (B.isRented)
            throw new Error('Bike already rented');
        // CRIAR ALUGUEL
        var R = rent_1.Rent.create(this.rents, U, B, new Date(), new Date());
        // ADICIONAR ALUGUEL
        this.rents.push(R);
        // MUDAR STATUS DA BIKE
        B.isRented = true;
    };
    App.prototype.addUser = function (user) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var rUser = _a[_i];
            if (rUser.email === user.email) {
                throw new Error('User already exists');
            }
        }
        this.users.push(user);
    };
    App.prototype.listbikes = function () {
        return this.bikes;
    };
    App.prototype.listusers = function () {
        return this.users;
    };
    App.prototype.listrents = function () {
        return this.rents;
    };
    App.prototype.login = function (email, password) {
        var user = this.users.find(function (user) { return user.email === email; });
        if (user && user.password === password) {
            return user;
        }
        throw new Error('User not found');
    };
    return App;
}());
exports.App = App;
