export default (app) => {
  app.get('/', (req, res) => res.send('Hello to the world of mysticalBoxes!'));
  console.log('listening on port 3000');
  app.listen(3000);
};
