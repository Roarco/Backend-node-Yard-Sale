

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class UsersService {
    constructor(){
        this.users = [];
    }

    async createUser(data){
        // const query = 'INSERT INTO public.users(name, email, password) VALUES($1, $2, $3) RETURNING *';
        // const values = [data.name, data.email, data.password];
        // const [user] = await SequelizeInstance.query(query , values);
        // return user;
    }

    async find(){
        const response = await models.User.findAll();
        return response;
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
