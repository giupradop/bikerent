"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rent = void 0;
var bike_1 = require("./bike");
var user_1 = require("./user");
var Rent = /** @class */ (function () {
    function Rent(user, bike, dateFrom, dateTo, dateReturned) {
        this.user = user;
        this.bike = bike;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateReturned = dateReturned;
    }
    Rent.create = function (rents, user, bike, startDate, endDate) {
        var canCreate = Rent.canRent(rents, startDate, endDate);
        if (canCreate) {
            return new Rent(user, bike, startDate, endDate);
        }
        throw new Error('Rent not available');
    };
    Rent.canRent = function (rents, startDate, endDate) {
        return !rents.some(function (rent) {
            return startDate <= rent.dateTo &&
                endDate >= rent.dateFrom;
        });
    };
    return Rent;
}());
exports.Rent = Rent;
var bike = new bike_1.Bike('bike1', 'mountain', 30, 100.5, 100, 'mydesc', 5, []);
var user = new user_1.User('teste', 'teste@gmail.com', '123');
var today = new Date();
var twodaysLater = new Date();
twodaysLater.setDate(twodaysLater.getDate() + 2);
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var twodaysAfterTomorrow = new Date();
twodaysAfterTomorrow.setDate(twodaysAfterTomorrow.getDate() + 2);
var rent1 = Rent.create([], user, bike, today, twodaysLater);
//const rent2 = Rent.create([rent1], user, bike, today,twodaysLater);
console.log(rent1);
