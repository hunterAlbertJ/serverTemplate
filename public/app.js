start();
function start() {
  while (document.getElementById("4") !== null) {
    div = document.getElementById("4");
    div.parentNode.removeChild(div);
    console.log("Finished Char link delete sequence.");
  }
  while (document.getElementById("1") !== null) {
    div = document.getElementById("1");
    div.parentNode.removeChild(div);
    console.log("Starting card delete sequence.");
  }
 
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
      divCreation.setAttribute("class", array[i].id);
      divCreation.innerText = array[i].name;
      var tempChar = array[i].name[0];

      if (nameArr.indexOf(tempChar) < 0) {
        nameArr.push(array[i].name[0]);
      }

      divCreation.addEventListener("click", removeAll);
      clippedSection.appendChild(divCreation);
    }
    nameArr.sort();
    for (e in nameArr) {
      console.log('building char link ' + nameArr[e])
      let linkLetterParent = document.createElement("a");
      let linkLetterChild = document.createElement("i");
      var tempLetter = nameArr[e];
      linkLetterChild.addEventListener("click", specificChar);
      linkLetterChild.innerText = nameArr[e];
      linkLetterChild.setAttribute("id", 4)
      linkLetterParent.appendChild(linkLetterChild);
      document.getElementById("textCenter").appendChild(linkLetterParent);
    }
    console.log("All cards loaded and appended to DOM");
    let t1 = performance.now();
    console.log(`Operation finished in: ${t1 - t0} milliseconds`);
    console.log("\n");
  }
}
function gimmie() {
  removeAll();
  fetch("/api")
    .then((response) => response.json())
    .then((data) => allButtonBuilder(data));
}

function removeAll() {
  var classId = event.target.className;
  console.log(classId, "Jay doesnt believe me");

  while (document.getElementById("1") !== null) {
    div = document.getElementById("1");
    div.parentNode.removeChild(div);
    console.log("Starting card delete sequence.");
  }
  console.log("all cards deleted");
  individualInfo(classId);
}

function specificChar() {
  removeAll();
  while (document.getElementById("2") !== null) {
    div = document.getElementById("2");
    div.parentNode.removeChild(div);
    console.log("Starting button delete sequence.");
  }
  var currentChar = event.target.innerText;
  console.log(`Now displaying all cards starting with letter ${currentChar}`);

  fetch("/api")
    .then((response) => response.json())
    .then((data) => specificCharSubMenu(data));

  function specificCharSubMenu(array) {
    var clippedSection = document.getElementById("section");
    console.log(array);
    var nameArr = [];

    for (var i in array) {
      let divCreation = document.createElement("aside");
      var idNum = 1;
      divCreation.setAttribute("id", idNum);
      divCreation.setAttribute("class", array[i].id);
      divCreation.innerText = array[i].name;
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

var allButton = document.getElementById("all");
allButton.addEventListener("click", gimmie);

function allButtonBuilder(array) {
  var clippedSection = document.getElementById("section");
  console.log("All cards have been called from database");
  var nameArr = [];

  while (document.getElementById("2") !== null) {
    div = document.getElementById("2");
    div.parentNode.removeChild(div);
    console.log("Starting card delete sequence from All Button.");

  }
  searchBox()

  for (var i in array) {
    let divCreation = document.createElement("aside");
    var idNum = 1;
    divCreation.setAttribute("id", idNum);
    divCreation.setAttribute("class", array[i].id);
    divCreation.innerText = array[i].name;
    var tempChar = array[i].name[0];

    if (nameArr.indexOf(tempChar) < 0) {
      nameArr.push(array[i].name[0]);
    }

    divCreation.addEventListener("click", removeAll);
    clippedSection.appendChild(divCreation);
  }
}
var globalVar = ''
function individualInfo(cardId) {
  console.log(
    "individual info function invoked on card ID:",
    cardId,
    event.target.innerText

  );
  globalVar = cardId

  fetch("/api")
    .then((response) => response.json())
    .then((data) => oneCardPull(data));

  function oneCardPull(oneArray) {
    for (var i in oneArray) {
      var idNum = oneArray[i].id;
      if (idNum == cardId) {
        console.log(oneArray[i], "here is");
        for (e in oneArray[i]) {
          if(e === 'photo') {

            let divCreation = document.createElement("aside");
            divCreation.setAttribute("id", 1);

            let photo = document.createElement("img");
            photo.setAttribute("id", 1);
          var clippedSection = document.getElementById("section");
          photo.setAttribute("src", oneArray[i][e]);

          divCreation.appendChild(photo);
          clippedSection.appendChild(divCreation);
          } else if(e === 'id'){
            console.log(e)

          } else {
          
          let divCreation = document.createElement("aside");
          var clippedSection = document.getElementById("section");

          divCreation.setAttribute("id", 1);
          divCreation.innerText = e.toUpperCase() + ": " + oneArray[i][e];

          clippedSection.appendChild(divCreation);
          }
        }
        var header = document.getElementById("buttonRow")
        var updateButtonDynamic = document.createElement("button");
        updateButtonDynamic.setAttribute('id', 2)
        updateButtonDynamic.innerText = "Update"
        updateButtonDynamic.addEventListener('click', updateContact)

        var header = document.getElementById("buttonRow")
        var deleteButtonDynamic = document.createElement("button");
        deleteButtonDynamic.setAttribute('id', 2)
        deleteButtonDynamic.innerText = "Delete"
        deleteButtonDynamic.addEventListener('click', deleteContact)

        header.prepend(deleteButtonDynamic)
        header.appendChild(updateButtonDynamic)

      }
    }
  }
}
var pagelistener = document.getElementById("search");
pagelistener.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    searchFunctionRequest();
    console.log("click");
  }
});
function formTest() {
  console.log("good form test");
}
var form = document.getElementById("searchButton");
form.addEventListener("click", searchFunctionRequest);

function searchFunctionRequest() {
  removeAll();

  console.log("from search: individual info function invoked on card ID:");

  fetch("/api")
    .then((response) => response.json())
    .then((data) => searchPull(data));

  function searchPull(oneArray) {
    var counter = 0;
    var searchedText = document.getElementById("search").value;
    if (searchedText === "") {
      let divCreation = document.createElement("aside");
      var clippedSection = document.getElementById("section");
      divCreation.innerText = "Search Request Does Not Exist";
      divCreation.setAttribute("id", 1);
      clippedSection.appendChild(divCreation);
      counter++;
    }
    if(searchedText === "RANDOM"){
      let divCreation = document.createElement("aside");
      var clippedSection = document.getElementById("section");
      divCreation.innerText = "A new friend appears!";
      divCreation.setAttribute("id", 1);
      clippedSection.appendChild(divCreation);
      counter++;

      fetch("/api/1", {
        method: "POST",
        body: JSON.stringify({
          value: "RANDOM"
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => start());
    }
    for (var i in oneArray) {
      var idNum = oneArray[i].name;
      if (idNum == searchedText) {
        counter++
        console.log(oneArray[i].id, 'attempts id');
        globalVar = oneArray[i].id
        console.log(oneArray[i], "here is");
        while (document.getElementById("2") !== null) {
          div = document.getElementById("2");
          div.parentNode.removeChild(div);
          console.log("Starting card delete sequence.");
        }

        var header = document.getElementById("buttonRow")
        var updateButtonDynamic = document.createElement("button");
        updateButtonDynamic.setAttribute('id', 2)
        updateButtonDynamic.innerText = "Update"
        updateButtonDynamic.addEventListener('click', updateContact)
        header.prepend(updateButtonDynamic)

        var header = document.getElementById("buttonRow")
        var deleteButtonDynamic = document.createElement("button");
        deleteButtonDynamic.setAttribute('id', 2)
        deleteButtonDynamic.innerText = "Delete"
        deleteButtonDynamic.addEventListener('click', deleteContact)
        header.prepend(deleteButtonDynamic)
        header.appendChild(updateButtonDynamic)

        for (e in oneArray[i]) {
          let divCreation = document.createElement("aside");
          var clippedSection = document.getElementById("section");

          divCreation.setAttribute("id", 1);
          if(e === 'photo') {

            let divCreation = document.createElement("aside");
            divCreation.setAttribute("id", 1);

            let photo = document.createElement("img");
            photo.setAttribute("id", 1);
          var clippedSection = document.getElementById("section");
          photo.setAttribute("src", oneArray[i][e]);

          divCreation.appendChild(photo);
          clippedSection.appendChild(divCreation);
          } else if(e === 'id'){
            console.log(e)

          } else {
          divCreation.innerText = e.toUpperCase() + ": " + oneArray[i][e];
          clippedSection.appendChild(divCreation);
          }
        }
      }
        
    }
    console.log(counter, 'this is the count')
    if (counter === 0) {
      let divCreation = document.createElement("aside");
      var clippedSection = document.getElementById("section");
      divCreation.innerText = "Search Request Does Not Exist";
      divCreation.setAttribute("id", 1);
      clippedSection.appendChild(divCreation);
    }
  }
}
var allButton = document.getElementById("new");
allButton.addEventListener("click", postin);
function postin() {
  while (document.getElementById("2") !== null) {
    div = document.getElementById("2");
    div.parentNode.removeChild(div);
    console.log("Starting card delete sequence From New button.");
  }
  var page = document.getElementById("newSpace")
  var label = document.createElement("label");
  label.innerText = ("New Contact");
  label.setAttribute("id", 2);

  var nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "Name");
  nameInput.setAttribute('id', 'newName');

  var addressInput = document.createElement("input");
  addressInput.setAttribute("placeholder", "Address");
  addressInput.setAttribute('id', 'newAddress');

  var phoneInput = document.createElement("input");
  phoneInput.setAttribute("placeholder", "Phone Number");
  phoneInput.setAttribute('id', 'newNumber');
  phoneInput.setAttribute('step', 1);
  phoneInput.setAttribute('type', 'number');

  var photoInput = document.createElement("input");
  photoInput.setAttribute("placeholder", "Photo(link)");
  photoInput.setAttribute('id', 'newPhoto');
  
  label.appendChild(nameInput);
  label.appendChild(addressInput);
  label.appendChild(phoneInput);
  label.appendChild(photoInput);
  
  var submitNewPerson = document.createElement("button");
  submitNewPerson.innerText = "Add Contact"
  submitNewPerson.addEventListener("click", post);
  label.appendChild(submitNewPerson)

  page.insertAdjacentElement('afterend', label);
  
}
function updateContact(){
  while (document.getElementById("2") !== null) {
    div = document.getElementById("2");
    div.parentNode.removeChild(div);
    console.log("Finished prev button link delete sequence.");
  }
  var page = document.getElementById("newSpace")
  var label = document.createElement("label");
  label.innerText = ("Update Contact");
  label.setAttribute("id", 2);

  var nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "Name");
  nameInput.setAttribute('id', 'newName');

  var addressInput = document.createElement("input");
  addressInput.setAttribute("placeholder", "Address");
  addressInput.setAttribute('id', 'newAddress');

  var phoneInput = document.createElement("input");
  phoneInput.setAttribute("placeholder", "Phone Number");
  phoneInput.setAttribute('id', 'newNumber');
  phoneInput.setAttribute('step', 1);
  phoneInput.setAttribute('type', 'number');

  var photoInput = document.createElement("input");
  photoInput.setAttribute("placeholder", "Photo(link)");
  photoInput.setAttribute('id', 'newPhoto');
  
  label.appendChild(nameInput);
  label.appendChild(addressInput);
  label.appendChild(phoneInput);
  label.appendChild(photoInput);
 
  var updateNewPerson = document.createElement("button");
  updateNewPerson.innerText = "Update Contact"
  updateNewPerson.addEventListener("click", patch);
  label.appendChild(updateNewPerson)
  page.insertAdjacentElement('afterend', label);
  console.log(globalVar);

}
function deleteContact(){
  while (document.getElementById("2") !== null) {
    div = document.getElementById("2");
    div.parentNode.removeChild(div);
    console.log("Finished prev button link delete sequence.");
  }
  var page = document.getElementById("newSpace")
  var label = document.createElement("label");
  label.setAttribute("id", 2);

  var deleteNewPerson = document.createElement("button");
  deleteNewPerson.setAttribute("id", 4);
  deleteNewPerson.innerText = "Delete Contact Confirm";
  deleteNewPerson.addEventListener("click", deleteFunction);
  label.appendChild(deleteNewPerson);
  page.insertAdjacentElement('afterend', label);
  console.log(globalVar);
}
function post(){
  var nameValue = document.getElementById("newName").value
  var newAddress = document.getElementById("newAddress").value
  var newNumber = document.getElementById("newNumber").value
  console.log(newNumber)

fetch("/api", {
    method: "POST",
    body: JSON.stringify({
      name: nameValue,
      address: newAddress,
      phone: newNumber
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => start());
}

function patch(){
  var nameValue = document.getElementById("newName").value
  var newAddress = document.getElementById("newAddress").value
  var newNumber = document.getElementById("newNumber").value
  var newPhoto = document.getElementById("newPhoto").value
  console.log(globalVar, 'patch request sent with global var');

  console.log(nameValue)
fetch("/api", {
    method: "PATCH",
    body: JSON.stringify({
      id: globalVar,
      name: nameValue,
      address: newAddress,
      phone: newNumber,
      photo: newPhoto
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => start())
  
}
function searchBox(){
  while (document.getElementById("2") !== null) {
    div = document.getElementById("2");
    div.parentNode.removeChild(div);
    console.log("Starting card delete sequence.");
  }
  var placeholder = document.getElementById("firstPlace");
  var searchBoxHeader = document.createElement("h1");
  var searchLabel = document.createElement("label");
  var searchInput = document.createElement("input");
  var frameworkSearchButton = document.createElement("button");

  searchLabel.innerText = 'Name Search:';
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('id', 'search');
  frameworkSearchButton.innerText = "Search";
  frameworkSearchButton.setAttribute('id', 'searchButton');
  frameworkSearchButton.addEventListener("click", searchFunctionRequest);
  searchBoxHeader.setAttribute("id", 2);
  searchInput.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      searchFunctionRequest();
      console.log("click");
    }
  });
  searchBoxHeader.appendChild(searchLabel);
  searchBoxHeader.appendChild(searchInput);
  searchBoxHeader.appendChild(frameworkSearchButton);
  placeholder.insertAdjacentElement('afterend', searchBoxHeader);
}

function deleteFunction(){
  console.log(globalVar, 'DELETE request sent with global var');
fetch("/api", {
    method: "DELETE",
    body: JSON.stringify({
      id: globalVar
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => start())
}