"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./affixus/core/user.controller");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var user = user_controller_1.UserController.getInstance().getUser();
        console.log(user);
        var userList = user_controller_1.UserController.getInstance().getUserList();
        console.log(userList);
    };
    return Main;
}());
Main.main();
//# sourceMappingURL=index.js.map