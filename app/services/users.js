const faker = require('faker');
const boom = require('@hapi/boom');
class UsersService {
    constructor(){
        this.users = [];
    }

    async createUser(data){
        const newUser = {
            id: faker.random.uuid(),
            ...data
        };
        this.users.push(newUser);
        return newUser;
    }

    async find(){
        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve(this.users);
            }, 4000);
        });
    }

    async update(id, changes){
      const index = this.users.findIndex(user => user.id === id);

      if(index === -1){
        throw boom.notFound('User not found');
      }else{
        const user = this.users[index]
        this.users[index] = {
          ...user,
          ...changes
        }
        return this.users[index];
      }
    }

    async delete(id){
      const index = this.users.findIndex(user => user.id === id);

      if(index === -1){
        throw boom.notFound('User not found');
      }else{
        this.users.splice(index, 1);
        return { id };
      }
    }
}

module.exports = UsersService;
