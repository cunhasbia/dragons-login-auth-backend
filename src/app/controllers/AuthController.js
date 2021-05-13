import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class AuthController {
  async store(request, response) {
    try {
      const { email, password } = request.body;

      const user = await User.findOne({ where: { email } });

      if (!user || !(await user.checkPassword(password))) {
        return response
          .status(401)
          .json({ message: 'Invalid credentials. Try again' });
      }

      return response.json({
        message: 'Login success',
        user: {
          uid: user.uid,
          name: user.name,
          email: user.email,
        },
        token: jwt.sign({ uid: user.uid }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new AuthController();
