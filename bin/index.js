"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./affixus/core/user.controller");
class Main {
    static main() {
        let user = user_controller_1.UserController.getInstance().getUser();
        console.log(user);
        let userList = user_controller_1.UserController.getInstance().getUserList();
        console.log(userList);
    }
}
Main.main();
//# sourceMappingURL=index.js.map