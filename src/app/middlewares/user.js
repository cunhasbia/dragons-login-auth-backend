function validatePageParams(request, response, next) {
  const { page, limit } = request.query;

  if (!page || !limit) {
    return response.status(400).json({ message: 'Invalid pagination params' });
  }

  next();
}

function validateData(request, response, next) {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response.status(400).json({ error: 'Unfilled data' });
  }

  next();
}

export { validatePageParams, validateData };
