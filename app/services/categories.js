

const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');


class CategoriesService {

  constructor () {
    this.categories = []
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.error(err);
  })

  }

    async create(data) {
      const query = 'INSERT INTO public.categories(name, image) VALUES ($1, $2) RETURNING *';
      const result = await this.pool.query(query, [data.name, data.image]);
      return result.rows[0];
    }

  async find() {
    const query = 'SELECT * FROM public.categories';
    const result = await this.pool.query(query);
    return result.rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM public.categories WHERE id = $1';
    const result = await this.pool.query(query, [id]);
      if (!result.rows[0]) {
        throw boom.notFound('Categorie not found');
      }else {
        return result.rows[0];
      }

  }
  async update(id, changes) {
    const query = 'UPDATE public.categories SET name = $1, image = $2 WHERE id = $3 RETURNING *';
    const result = await this.pool.query(query, [changes.name, changes.image, id]);

    // const index = this.categories.findIndex(category => category.id === id);

    if (result.rows[0] === undefined) {
      throw boom.notFound('Categorie not found');
    }else {
      return result.rows[0];
    }

  }

}

module.exports = CategoriesService;
