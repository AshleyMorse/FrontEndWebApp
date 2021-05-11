describe('menuItem', function () {

  var menuItem;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuItem = $injector.get('SignUpService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should be found in menu', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/L13.json').respond('L13');
    menuItem.getMenuItem("L13").then(function(response) {
      expect(response).toEqual('L13');
    });
    $httpBackend.flush();
  });

  it('should not be found in menu', function() {
    $httpBackend.expectGET(ApiPath + '/menu_items/CU99.json').respond('ERROR');
    menuItem.getMenuItem("CU99").then(function(response) {
      expect(response).toEqual('ERROR');
    });
    $httpBackend.flush();
  });

});
