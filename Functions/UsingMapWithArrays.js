var passengers = [ ["Thomas", "Meeks"], 
                   ["Gregg", "Pollack"], 
                   ["Christine", "Wong"], 
                   ["Dan", "McGaw"] ];
var modifiedNames = passengers.map (function (nameCell) {
  return nameCell.join(" ");
}
                                    );
