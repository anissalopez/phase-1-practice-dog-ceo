document.addEventListener("DOMContentLoaded", fetchImages);
document.addEventListener("DOMContentLoaded", fetchBreeds);


let dogImages;
let dogBreeds;
const dogBreedUl = document.querySelector('#dog-breeds');
const dogDiv = document.querySelector('#dog-image-container');
const dropDown = document.querySelector('#breed-dropdown');

dropDown.addEventListener("change", filterBreeds);

function filterBreeds(){
 const filteredBreeds = dogBreeds.filter((breed) => {
   return dropDown.value === breed.charAt(0);
  })
 dogBreedUl.textContent = "";
 appendBreeds(filteredBreeds);
  
}


function fetchImages(){
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then((data) => {
    dogImages = data.message;
    appendImages(dogImages);
  });
};

function fetchBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then((data) => {
    let dogBreedsObject = data.message;
    dogBreeds = Object.keys(dogBreedsObject)
    appendBreeds(dogBreeds);
  })
}

function appendImages(dogImages){
  dogImages.forEach((image) => {
    const imageElem = document.createElement('img');
    imageElem.src = image;
    dogDiv.appendChild(imageElem);
  })
}

function appendBreeds(dogBreeds){
  dogBreeds.forEach((breed)=>{
    const dogBreedLi = document.createElement('li');
    dogBreedLi.textContent = breed;
    dogBreedUl.appendChild(dogBreedLi)
    dogBreedLi.addEventListener("click", () => { 
      dogBreedLi.style.color = "red";
    });
  });
};

  








