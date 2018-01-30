"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.city = "Mumbai";
    }
    User.prototype.setTitle = function (title) {
        this.title = title;
    };
    User.prototype.getTitle = function () {
        return this.title;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setNumber = function (id) {
        this.id = id;
    };
    User.prototype.getNumber = function () {
        return this.id;
    };
    User.prototype.setCity = function (city) {
        this.city = city;
    };
    User.prototype.getCity = function () {
        return this.city;
    };
    return User;
}());
exports.User = User;
;
//# sourceMappingURL=user.js.map