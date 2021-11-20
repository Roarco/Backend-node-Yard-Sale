
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ordersProductsService {
  constructor(){
  }

  async getOrderProducts(id){
    const response = await models.OrderProduct.findOne({
      where: {
        id: id
      }
    });
    if(response === null){
      throw boom.notFound('No se encontro el pedido');
    }
    return response;
  }

  async createOrderProduct(data){
    const response = await models.OrderProduct.create(data);
    return response;
  }
}

module.exports = ordersProductsService;
