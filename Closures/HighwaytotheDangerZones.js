function warningMaker( obstacle ){
  var count = 0;
  var zone = [];
  return function ( number, location ) {
    count++;
    zone.push(location);
    var list = "";
    for (var i = 0; i<zone.length; i++) {
      list = list + "\n" + zone[i];
    }
    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger." +
          "Current danger zones are:\n" +
          list
         );
  };
}

