export default (store) => {
  const getUsers = () => store.getUsers();
  return {
    getUsers,
  };
};
