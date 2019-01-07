const Lab = require('lab');
const Chai = require('chai');
const Server = require('../../server');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;


lab.experiment('Basic ping pong tests ', () => {
  lab.test('should successfully reply pong on ping', async () => {
    const pingRequest = {
      method: 'GET',
      url: '/ping',
    };
    const response = await Server.inject(pingRequest);
    expect(response.statusCode).to.equal(200);
    expect(response.result).to.equal('pong');
  });
});
