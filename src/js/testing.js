var chai = require('chai');
var chaiHttp = require('chai-http');

var should = chai.should();

chai.use(chaiHttp);

describe('BBALL BATTLE', function() {
    it('should list items on get');
    it('should add an item on post');
    it('should edit an item on put');
    it('should delete an item on delete');
});
