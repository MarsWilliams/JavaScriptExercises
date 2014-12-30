function warningMaker( obstacle ){
  var count = 0;
  return function ( number, location ) {
    count++;
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
          " danger."
         );
  };
}
