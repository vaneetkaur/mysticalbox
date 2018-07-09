export default (app, controller) => {
  app.get('/', (req, res) => res.send('Hello to the world of mysticalBoxes!'));
  app.get('/users', controller.getUsers);
  console.log('listening on port 3000');
  app.listen(3000);
};
