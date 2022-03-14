start()
function start(){
fetch("/api")
  .then((response) => response.json())
  .then((data) => pageBuilder(data));



function pageBuilder(array) {
  let t0 = performance.now();
  var clippedSection = document.getElementById("section");
  console.log("Initiating page build.");
  var nameArr = [];

  for (var i in array) {
    let divCreation = document.createElement("aside");
    var idNum = 1;

    divCreation.setAttribute("id", idNum);
    divCreation.setAttribute("class", array[i].id)
    divCreation.innerText = (array[i].name);
    var tempChar = array[i].name[0];

    if (nameArr.indexOf(tempChar) < 0) {
      nameArr.push(array[i].name[0]);
    }

    divCreation.addEventListener("click", removeAll);
    clippedSection.appendChild(divCreation);
  }
  nameArr.sort();
  for (e in nameArr) {
    let linkLetterParent = document.createElement("a");
    let linkLetterChild = document.createElement("i");
    var tempLetter = nameArr[e];
    linkLetterChild.addEventListener("click", specificChar);
    linkLetterChild.innerText = nameArr[e];
    linkLetterParent.appendChild(linkLetterChild);
    document.getElementById("textCenter").appendChild(linkLetterParent);
    
  }
  console.log("All cards loaded and appended to DOM");
  let t1 = performance.now();
  console.log(`Operation finished in: ${(t1-t0)} milliseconds`)
  console.log('\n')
}
}
function gimmie() {
  removeAll()
  fetch("/api")
    .then((response) => response.json())
    .then((data) => allButtonBuilder(data));
}


function removeAll() {
  var classId = event.target.className;
  
  while (document.getElementById("1") !== null) {
    div = document.getElementById("1");
    div.parentNode.removeChild(div);
    console.log("Starting card delete sequence.");
  }
  console.log("all cards deleted");
  individualInfo(classId);
  // console.log('\n')
}

function specificChar() {
  removeAll();
  var currentChar = event.target.innerText;
  console.log(`Now displaying all cards starting with letter ${currentChar}`)

  fetch("/api")
    .then((response) => response.json())
    .then((data) => pageBuilder2(data));

  function pageBuilder2(array) {
    var clippedSection = document.getElementById("section");
    console.log(array);
    var nameArr = [];

    for (var i in array) {
      let divCreation = document.createElement("aside");
      var idNum = 1;
      divCreation.setAttribute("id", idNum);
      divCreation.setAttribute("class", array[i].id)
      divCreation.innerText = (array[i].name);
      var tempChar = array[i].name[0];

      if (nameArr.indexOf(tempChar) < 0) {
        nameArr.push(array[i].name[0]);
      }
      if (tempChar === currentChar) {
        divCreation.addEventListener("click", removeAll);
        clippedSection.appendChild(divCreation);
      }
    }
  }
}

var allButton = document.getElementById('all');
allButton.addEventListener('click', gimmie )


function allButtonBuilder(array) {
  
  var clippedSection = document.getElementById("section");
  console.log('All cards have been called from database');
  var nameArr = [];

  for (var i in array) {
    let divCreation = document.createElement("aside");
    var idNum = 1;
    divCreation.setAttribute("id", idNum);
    divCreation.setAttribute("class", array[i].id)
    divCreation.innerText = (array[i].name);
    var tempChar = array[i].name[0];

    if (nameArr.indexOf(tempChar) < 0) {
      nameArr.push(array[i].name[0]);
    }

    divCreation.addEventListener("click", removeAll);
    clippedSection.appendChild(divCreation);
  }
}


function postin(){
  fetch("/api", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        name: 'testo'
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
}

var allButton = document.getElementById('new');
allButton.addEventListener('click', postin )




function individualInfo(cardId){
  
  console.log('individual info function invoked on card ID:', cardId, event.target.innerText)

  fetch("/api")
  .then((response) => response.json())
  .then((data) => oneCardPull(data));
  
  function oneCardPull(oneArray){

  

  // removeAll()
  // fetch("/api")
  //   .then((response) => response.json())
  //   .then((data) => buildOneCard(data));
  // function buildOneCard(array) {
  //   var clippedSection = document.getElementById("section");
  //   console.log(array);
  //   var nameArr = [];
  
    for (var i in oneArray) {
      var idNum = oneArray[i].id;
      if (idNum == cardId) {
        // nameArr.push(array[i]);
        // let divCreation = document.createElement("aside");
        console.log(oneArray[i], "here is")
        

        for(e in oneArray[i]){
          let divCreation = document.createElement("aside");
              var clippedSection = document.getElementById("section");
          
          divCreation.setAttribute("id", 1);
          divCreation.innerText = (e.toUpperCase() + ": " + oneArray[i][e]);
      
          
      
          // divCreation.addEventListener("click", removeAll);
          clippedSection.appendChild(divCreation);
        }
      }
      
  }
}
}

