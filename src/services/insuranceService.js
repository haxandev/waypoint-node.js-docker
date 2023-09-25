
  function calculateInsurance(waypoints) {
    let distanceSpeeding = 0;
    let durationSpeeding = 0;
    let totalDistance = 0;
    let totalDuration = 0;
    let prevWaypoint = null;
  
    for (const waypoint of waypoints) {
      totalDistance += calculateDistance(prevWaypoint, waypoint);
      totalDuration += calculateDuration(prevWaypoint, waypoint);
  
      if (waypoint.speed > waypoint.speed_limit) {
        distanceSpeeding += calculateDistance(prevWaypoint, waypoint);
        durationSpeeding += calculateDuration(prevWaypoint, waypoint);
      }
  
      prevWaypoint = waypoint;
    }
  
    return {
      distanceSpeeding,
      durationSpeeding,
      totalDistance,
      totalDuration,
    };
  }
  
  function calculateDistance(waypoint1, waypoint2) {
    if (!waypoint1 || !waypoint2) {
      return 0;
    }

    // Find out this formula for calculating the distance but we can also use google 
    // apis GET https://maps.googleapis.com/maps/api/distancematrix/json
    // ?origins=latitude1,longitude1
    // &destinations=latitude2,longitude2
    // &key=YOUR_API_KEY
  
    const earthRadius = 6371e3; // meters
    const lat1 = waypoint1.position.latitude * (Math.PI / 180);
    const lat2 = waypoint2.position.latitude * (Math.PI / 180);
    const lon1 = waypoint1.position.longitude * (Math.PI / 180);
    const lon2 = waypoint2.position.longitude * (Math.PI / 180);
  
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return earthRadius * c;
  }
  
  function calculateDuration(waypoint1, waypoint2) {
    if (!waypoint1 || !waypoint2) {
      return 0;
    }
  
    const timestamp1 = new Date(waypoint1.timestamp);
    const timestamp2 = new Date(waypoint2.timestamp);
  
    return (timestamp2 - timestamp1) / 1000; // Convert to seconds
  }


  module.exports = {
    calculateInsurance,
  };