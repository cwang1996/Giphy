window.addEventListener('load', function(){
    const api = `http://api.giphy.com/v1/gifs/trending?api_key=8tHmonrwdDf1DmEpFTsEgarq8yttrCAV`;
    const api2 = `http://api.giphy.com/v1/gifs/random?api_key=8tHmonrwdDf1DmEpFTsEgarq8yttrCAV`;
    const api3 = `http://api.giphy.com/v1/gifs/trending?api_key=8tHmonrwdDf1DmEpFTsEgarq8yttrCAV`;
        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            console.log(data);
            const div = document.querySelector('.image-container');
            const div2 = document.querySelector('.image-container2');
            for(let i =0; i<=5; i++){
            const imgPath = data.data[i].images.fixed_height.url;
            const img = document.createElement("img");
            img.setAttribute('src', imgPath);
            div.appendChild(img);
            }
        })

        fetch(api2)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            console.log(data);
            const div2 = document.querySelector('.image-container2');
            for(let i =0; i<=5; i++){
            const imgPath = data.data.images.fixed_height.url;
            const img2 = document.createElement("img");
            img2.setAttribute('src', imgPath);
            div2.appendChild(img2);
            }
        })

        
        fetch(api3)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            console.log(data);
            const div3 = document.querySelector('.image-container3');
            for(let i =0; i<=47; i++){
            const imgPath = data.data[i].images.fixed_height.url;
            const img3 = document.createElement("img");
            img3.setAttribute('src', imgPath);
            div3.appendChild(img3);
            }
        })
    });

window.onscroll = function() {
    myFunction();
}

const stickynav = document.querySelector('.searchbar-container');
const sticky = stickynav.offsetTop;

function myFunction(){
    if(window.pageYOffset >= sticky) {
        stickynav.classList.add("sticky");
    } else {
        stickynav.classList.remove("sticky");
    }
}