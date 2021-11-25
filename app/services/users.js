

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class UsersService {
    constructor(){
        this.users = [];
    }

    async createUser(data){
        const response = await models.User.create(data);
        delete response.dataValues.password;
        return response;
    }

    async find(){
        const response = await models.User.findAll(
          {include: ['customer']}
        );
        return response;
    }
    async findOne(id){
      const user = await models.User.findByPk(id);
      if(!user){
        throw boom.notFound('User not found');
      }
      return user;
    }
    async findByEmail(email){
      const response = await models.User.findOne(
        {
          where: { email },
        }
      );
      return response;
  }

    async update(id, changes){
      const user = await this.findOne(id);
      const response = await user.update(changes);
      return response;
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
