var Trip = require('../trip');
var Activity = require('../activity');
var assert = require('assert');

describe('trip', function() {
  it('should have a name', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.name, 'Distillery Tour 2016');
  });

  it('should have an owner', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.owner, 'Ross');
  });

  it('should have a budget', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.budget, 500);
  });

  it('should have start date', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.start_date, "December 17, 2016 12:00:00");
  });

  it('should have end date', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    assert.equal(trip.end_date, "December 25, 2016 12:00:00");
  });

  it('should have duration', function() {
    var trip = new Trip({name:'Distillery Tour 2016',owner:'Ross',budget:500, start_date: "December 17, 2016 12:00:00", end_date: "December 25, 2016 12:00:00"});
    trip.getDuration();
    assert.equal(trip.duration, 8);
  });

  it('should start off with no activities ', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    assert.equal(0, trip.activities.length);
  });

  it('should convert kilometers to miles ', function() {
    var trip = new Trip({name:'Distillery Tour 2016'});
    trip.distanceKm = 1
    trip.getMiles()
    assert.equal(1.6, trip.distanceMiles);
  });

});