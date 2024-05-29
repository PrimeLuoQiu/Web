const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

const Photo = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

for(var i = 0; i < Photo.length; i ++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', image/Photo[i].jpg);
newImage.setAttribute('alt', image/Photo[i].jpg);
thumbBar.appendChild(newImage);

newImage.addEventListener("click", () => {
    style = Photo[i].style;
    displayedImage = style;
}) 

}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });

/* Wiring up the Darken/Lighten button */
