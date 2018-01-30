"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.getInstance = function () {
        return UserController.userConrollerInstance;
    };
    UserController.prototype.getUser = function () {
        var user = new user_1.User();
        user.setName("Hari");
        return user;
    };
    UserController.prototype.getUserList = function () {
        var list = [];
        var user1 = new user_1.User();
        user1.setName("Affixus");
        var user2 = new user_1.User();
        user2.setName("Nitin");
        list.push(user1);
        list.push(user2);
        return list;
    };
    UserController.userConrollerInstance = new UserController();
    return UserController;
}());
exports.UserController = UserController;
;
//# sourceMappingURL=user.controller.js.map