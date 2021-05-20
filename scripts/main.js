//Main app JS code goes here

//*****Challenge Page code*****//

//dynamically load script tag into head tag based on option selected from dropdown
function selectChallenge() {
  var file = document.getElementById("options").value;
  // To PREVENT CREATING AN INFINITE AMOUNT OF <SCRIPTS>s, check if the <head>'s current <script> has this id; if so, remove it before appending a new one
  if (document.head.lastChild.id == "challenge-script") {
    document.head.lastChild.remove();
  }
  var newScriptTag = document.createElement("script");
  newScriptTag.id = "challenge-script"; // IMPORTANT!!! THIS CODE assigns an id to all newly created <script>s (see above comment)
  newScriptTag.src = `scripts/${file}.js`;
  document.head.appendChild(newScriptTag);
}

function clearResult() {
  document.getElementById("result-box").innerHTML = ""; // Clears the "results" <div>
  document.getElementById("options").value = "-- Select Date --"; // Resets the drop-down list
  var newScriptTag = document.getElementById("challenge-script").remove(); // Removes the .js script from the DOM (POSSIBLY REDUNDANT?? selectChallenge()'s if statement serves same purpose)
}
