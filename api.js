'use strict'

function headerImages(){
     // API'dan verileri almak için fetch kullanıyoruz
     fetch("https://api.tvmaze.com/shows")
     .then(response => response.json())
     .then(data => {
       // Carousel için gerekli HTML içeriğini oluşturuyoruz
       let carouselHtml = '';

       // API'dan gelen her bir dizi öğesi için bir carousel slaytı oluşturuyoruz
       data.forEach((show, index) => {
         const imageSrc = show.image ? show.image.original : 'placeholder.jpg';
         const activeClass = index === 0 ? 'active' : '';

         carouselHtml += `
           <div class="carousel-item ${activeClass}">
             <img src="${imageSrc}" class="d-block" alt="Show Image">           
           </div>
         `;
       });
       document.querySelector("#carouselContainer .carousel-inner").innerHTML = carouselHtml;
     })
}
headerImages();

function getCharacters(link)
{
    return fetch(link)
        .then(res=>res.json())
}

toHtml(1);

async function toHtml(page = 1)
{
    let link = `https://api.tvmaze.com/shows`;
    let response = await getCharacters(link);
    fillHTML(response)
}

function getCharacters(link)
{
    return fetch(link)
        .then(res=>res.json())
}

function fillHTML(datas){
    let result = '';
    const charList = document.getElementById('NewReleases');
    datas.forEach(el=>{
        result += 
        `<div class="movie-list">
            <div class="movie-list-item">
            <a href="./details.html?id=${el.id}" class="btn-custom">
                <img class="movie-list-item-img" src="${el.image.medium}" alt="" style="height: auto; width: 60%;"> 
            </a>
        </div>
        </div>`
    })
    const detailButton = document.querySelectorAll(".btn-custom");
    detailButton.forEach((button, index) => {
      button.addEventListener("click", () => showDetails(datas[index]));
    })
    charList.innerHTML = result;
}

