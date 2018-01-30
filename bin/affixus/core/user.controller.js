"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class UserController {
    static getInstance() {
        return UserController.userConrollerInstance;
    }
    getUser() {
        let user = new user_1.User();
        user.setName("Hari");
        return user;
    }
    getUserList() {
        let list = [];
        let user1 = new user_1.User();
        user1.setName("Affixus");
        let user2 = new user_1.User();
        user2.setName("Nitin");
        list.push(user1);
        list.push(user2);
        return list;
    }
}
UserController.userConrollerInstance = new UserController();
exports.UserController = UserController;
;
//# sourceMappingURL=user.controller.js.map