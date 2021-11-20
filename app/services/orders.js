
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ordersService {
    constructor(){
    }

    async createOrder(data){
        const response = await models.Order.create(data);
        return response;
    }

    async find(){
        const response = await models.Order.findAll(
          {include: ['customer']}
        );
        return response;
    }

    async findById(id){
        const response = await models.Order.findOne({
          where: {
            id: id
          },
          include: [{
            association: 'customer',
            include: ['user']
          },
          'items'
        ],
        });
        if(response === null){
          throw boom.notFound('Order not found');
        }
        return response;
    }

    async update(id, changes){
      const response = await models.Order.update(changes, {
        where: {
          id
        }
      });
      if(response === 0){
        throw boom.notFound('Order not found');
      }
      return { id };
    }

    async delete(id){
      const response = await models.Order.destroy({
        where: {
          id
        }
      });
      if(response === 0){
        throw boom.notFound('Order not found');
      }
      return { id };
    }

}

module.exports = ordersService;
