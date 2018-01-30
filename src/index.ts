import {User} from './affixus/core/user';
import {UserController} from './affixus/core/user.controller';


class Main {
    public static main(): void{

        let user = UserController.getInstance().getUser();
        console.log(user);

        let userList = UserController.getInstance().getUserList();
        console.log(userList);
    }
}

Main.main();