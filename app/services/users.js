
class UsersService {
    constructor(){
        this.users = [];
    }

    createUser(user){
        this.users.push(user);
    }

    find(){
        return this.users;
    }
}

module.exports = UsersService;
