import User from '../models/User';

class UserController {
  async index(request, response) {
    try {
      const { page, limit } = request.query;

      const users = await User.findAndCountAll({
        attributes: ['uid', 'name', 'email'],
        limit,
        offset: limit * (page - 1),
      });

      return response.json(users);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async show(request, response) {
    try {
      const { uid } = request.params;

      const user = await User.findOne({
        where: { uid },
        attributes: ['uid', 'name', 'email'],
      });

      if (!user) {
        return response.status(404).json({ error: 'Ops! User not found' });
      }

      return response.json(user);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async store(request, response) {
    try {
      const { name, email, password } = request.body;

      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return response
          .status(400)
          .json({ error: 'Ops! Email already registered' });
      }

      const user = await User.create({ name, email, password });

      return response.json(user);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async update(request, response) {
    try {
      const { uid } = request.params;
      const { name, email, password } = request.body;

      const user = await User.update(
        {
          name,
          email,
          password,
        },
        {
          where: { uid },
          returning: true,
        }
      );

      if (!user[0]) {
        return response.status(404).json({ error: 'Ops! User not found' });
      }

      return response.json(user[1]);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async delete(request, response) {
    try {
      const { uid } = request.params;

      const user = await User.destroy({ where: { uid } });

      if (!user) {
        return response.status(404).json({ error: 'Ops! User not found' });
      }

      return response.sendStatus(202);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new UserController();
