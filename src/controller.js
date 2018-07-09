export default (domain) => {
  const getUsers = (req, res, next) => Promise.resolve()
    .then(() => domain.getUsers())
    .then((data) => res.json(data))
    .catch(next);

  return {
    getUsers,
  };
};
