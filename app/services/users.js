

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class UsersService {
    constructor(){
        this.users = [];
    }

    async createUser(data){
        const response = await models.User.create(data);
        return response;
    }

    async find(){
        const response = await models.User.findAll();
        return response;
    }

    async update(id, changes){
      const response = await models.User.update(changes, {
        where: {
          id
        }
      });
      if(response[0] === 0){
        throw boom.notFound('User not found');
      }else{
        return { id };
      }
    }

    async delete(id){
      const response = await models.User.destroy({
        where: {
          id
        }
      });
      if(response === 0){
        throw boom.notFound('User not found');
      }else{
        return { id };
      }
    }
}

module.exports = UsersService;
