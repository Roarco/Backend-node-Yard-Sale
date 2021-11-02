const faker = require('faker');
class UsersService {
    constructor(){
        this.users = [];
    }

    createUser(data){
        const newUser = {
            id: faker.random.uuid(),
            ...data
        };
        this.users.push(newUser);
        return newUser;
    }

    find(){
        return this.users;
    }

    update(id, changes){
      const index = this.users.findIndex(user => user.id === id);

      if(index === -1){
        throw new Error('User not found');
      }else{
        const user = this.users[index]
        this.users[index] = {
          ...user,
          ...changes
        }
        return this.users[index];
      }
    }

    delete(id){
      const index = this.users.findIndex(user => user.id === id);

      if(index === -1){
        throw new Error('User not found');
      }else{
        this.users.splice(index, 1);
        return { id };
      }
    }
}

module.exports = UsersService;
