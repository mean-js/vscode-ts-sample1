import {User} from './user';

export class UserController {

    private static userConrollerInstance = new UserController();

    public static getInstance(): UserController {
        return UserController.userConrollerInstance;
    }
    
    public getUser(): User{
        let user = new User();
        user.setName("Hari");
        
        return user;
    }

    public getUserList(): User[]{
        let list:User[] = [];

        let user1 = new User();
        user1.setName("Affixus");

        let user2 = new User();
        user2.setName("Nitin");

        list.push(user1);
        list.push(user2);

        return list;
    }
};