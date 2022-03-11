fetch('/api')
  .then(response => response.json())
  .then(data => pageBuilder(data));

  function pageBuilder(array) {
      var clippedSection = document.getElementById("section");
      console.log(array)

    for (var i in array) {
        let divCreation = document.createElement("aside");
        // array[i].id

        var idNum = 1
        divCreation.setAttribute("id", idNum);
        divCreation.innerText = JSON.stringify(array[i].name)
        console.log(array[i])
        divCreation.addEventListener("click", click);
        clippedSection.appendChild(divCreation)

    }
      


  }
 
  function click(){
    fetch('/api', {
        method: 'POST'
    })
      .then(response => response.json())
      .then(data => pageBuilder(data));
    
      function pageBuilder(array) {
        // let myForm = document.getElementById('myform');
        // let formData = new FormData(myForm);
        const formData = new FormData(document.querySelector('myform'))
        console.log(formData);
          var clippedSection = document.getElementById("section");
          console.log(array)
    
        for (var i in array) {
            let divCreation = document.createElement("aside");
            // array[i].id
    
            var idNum = 1
            divCreation.setAttribute("id", idNum);
            divCreation.innerText = JSON.stringify(array[i].name)
            console.log(array[i])
            divCreation.addEventListener("click", click2);
            clippedSection.appendChild(divCreation)
    
        }
          
    
    
      }
    
     
    
  }
  
  function click2(){
    
    while(document.getElementById('1') !== null) {
        div = document.getElementById("1");
        div.parentNode.removeChild(div);
          console.log('shit IS here'); 
  }
  console.log('all names deleted');
  
    
  
}
  

