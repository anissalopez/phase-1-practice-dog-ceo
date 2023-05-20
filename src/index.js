

document.addEventListener("DOMContentLoaded", fetchImages);
let list = document.createElement('li')





function fetchImages (){
    fetch('https://dog.ceo/api/breeds/image/random/4' )
    .then(function(response){
        return response.json();
    })
    .then(function imgHandler (object){
            for (let i = 0; i<object.message.length; i++){
                let image = document.createElement('img');
                image.src = object.message[i];
                let imgContainer = document.getElementById("dog-image-container");
                imgContainer.appendChild(image);
            }
        });
}

document.addEventListener("DOMContentLoaded", function() {
    const breedContainer = document.getElementById("dog-breeds");
    const dropDown = document.getElementById("breed-dropdown");
  
    dropDown.addEventListener("change", function() {
      const selectedValue = dropDown.value.toLowerCase();
      filterBreeds(selectedValue);
    });
  
    function fetchBreed() {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          const breeds = object.message;
          populateBreeds(breeds);
        });
    }
  
    function populateBreeds(breeds) {
      breedContainer.innerHTML = ""; // Clear existing breed list
  
      for (const breed in breeds) {
        if (breeds[breed].length >= 1) {
          for (let i = 0; i < breeds[breed].length; i++) {
            const subBreed = breeds[breed][i];
            const subBreedList = document.createElement('li');
            subBreedList.textContent = `${subBreed} ${breed}`;
            breedContainer.appendChild(subBreedList);
            subBreedList.addEventListener("click", changeColor);
          }
        } else {
          const breedList = document.createElement('li');
          breedList.textContent = `${breed}`;
          breedContainer.appendChild(breedList);
          breedList.addEventListener("click", changeColor);
        }
      }
    }
  
    function filterBreeds(selectedValue) {
      const allBreeds = breedContainer.getElementsByTagName("li");
      for (const breed of allBreeds) {
        const breedText = breed.textContent.toLowerCase();
        if (breedText.startsWith(selectedValue)) {
          breed.style.display = "list-item";
        } else {
          breed.style.display = "none";
        }
      }
    }
  
    function changeColor(event) {
      // Modify the style/color of the clicked breed element as needed
      event.target.style.color = "red";
    }
  
    fetchBreed(); // Fetch and populate the breed list on page load
  });
  

  








