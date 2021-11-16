

const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
class UsersService {
    constructor(){
        this.users = [];
        this.pool = pool;
        this.pool.on('error', (err) => {
            console.error(err);
    })
    }

    async createUser(data){
        const query = 'INSERT INTO public.users(name, email, password) VALUES($1, $2, $3) RETURNING *';
        const values = [data.name, data.email, data.password];
        const result = await this.pool.query(query, values);
        return result.rows[0];
    }

    async find(){
        const query = 'SELECT * FROM public.users';
        const result = await this.pool.query(query);
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
