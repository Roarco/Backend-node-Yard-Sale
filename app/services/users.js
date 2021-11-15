
//const faker = require('faker');
const boom = require('@hapi/boom');
const getConection = require('../libs/postgres');
class UsersService {
    constructor(){
        this.users = [];
    }

    async createUser(data){
        // const newUser = {
        //     id: faker.random.uuid(),
        //     ...data
        // };
        // this.users.push(newUser);
        // return newUser;
        const client = await getConection();
        const result = await client.query('INSERT INTO public.users(name, email, password) VALUES($1, $2, $3) RETURNING *', [data.name, data.email, data.password]);
        return result.rows[0];
    }

    async find(){
        const client = await getConection();
        const result = await client.query('SELECT * FROM public.users');
        return result.rows;
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
