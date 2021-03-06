describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('starts the thermostat at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  
  it('increases the temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  thermostat.down();
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it ('if PMS is on, the maximum temperature is 25 degrees', function(){
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });
});