import supertest from 'supertest-as-promised';
import expect from 'expect.js';
import server from '../../src/server';

describe('MysticalBox', () => {
  let request;
  before(() => {
    request = supertest(server);
  });

  it('returns a response on the default endpoint', () => request.get('/')
    .expect(200)
    .then((res) => {
      expect(res.text).to.eql('Hello to the world of mysticalBoxes!');
    }));
});
