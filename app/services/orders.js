
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ordersService {
    constructor(){
    }

    async createOrder(data){
        // const response = await models.Order.create(data);
        // return response;
        const customer = await models.Customer.findAll({
          where: {
            '$user.id$': data.customerId
          },
          include: ['user']
        });
        if(!customer){
          throw boom.notFound('Customer not found');
        }
        const dataOrder = {
          customerId: customer[0].id,
        }
        const newOrder = await models.Order.create(dataOrder);
        return newOrder;
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
    async findByUser(userId) {
      const orders = await models.Order.findAll({
        where: {
          '$customer.user.id$' : userId
        },
        include: [{
          association: 'customer',
          include: ['user']
        }]
      });
      return orders;
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
