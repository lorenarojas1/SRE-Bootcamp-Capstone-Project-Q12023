export const health = (req, res, next) => {
    res.status(200).render('health');
    next();
  };