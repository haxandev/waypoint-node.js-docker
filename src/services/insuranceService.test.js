const {calculateInsurance} = require('./insuranceService');

describe('calculateInsurance', () => {
  it('calculates distance correctly', () => {
    const waypoints = [
        {
            "timestamp": "2016-06-21T12:00:00.000Z",
            "position": {
              "latitude": 59.334,
              "longitude": 18.0667 
            },
            "speed": 6.3889,
            "speed_limit": 8.33
          },
          {
            "timestamp": "2016-06-21T12:00:05.000Z",
            "position": {
              "latitude": 59.3337,
              "longitude": 18.0662
            },
            "speed": 9.4,
            "speed_limit": 8.33
          }

    ];

    const distance = calculateInsurance(waypoints);

    // Define your expected total distance value here
    const expectedDistance = 43.78227098711582;

    expect(distance.totalDistance).toBeCloseTo(expectedDistance); // Use toBeCloseTo for floating-point values
  });
  
});