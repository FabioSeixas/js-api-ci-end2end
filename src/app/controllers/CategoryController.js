const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'category not found' });
    }

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExist = await CategoriesRepository.findById(id);

    if (!categoryExist) {
      return response.status(404).json({ error: 'category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const categoryById = await CategoriesRepository.findById(id);

    if (categoryById && categoryById.name === name) {
      return response
        .status(400)
        .json({ error: 'this name is already in use' });
    }

    const category = await CategoriesRepository.update(id, {
      name,
    });

    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoriesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
