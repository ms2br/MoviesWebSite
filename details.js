const id = new URLSearchParams(location.search).get("id")
const infos = document.querySelector("#carouselContainer")

axios.get(`https://api.tvmaze.com/shows/${id}`)
.then ((res)=> {
    const movies = res.data;
    infos.innerHTML =`
    <div class="info">
        <div class ="image">   
        <img src="${movies.image.original}" alt="" style = "border-radius:22px"> </div>
        <div class = "letters">
             <h5 class = "card-main"> <b style="font-style:italic"> Name of the Film: </b> ${movies.name}</h5>
            <br>
        <p class = "card-letter" style="margin-left:30px"> <b style="font-style:italic"> The main idea of Film: </b></p>
        <p class = "card-letter px-5"  > ${movies.summary}</p>    
    <p class = "card-letter"> <b style="font-style:italic"> Rating of the Film: </b> ${movies.rating.average}</p>
    <p class = "card-letter"> <b style="font-style:italic" > Genres of Film: </b> ${movies.genres}</p>
    <p class = "card-letter"> <b style="font-style:italic"> Year of Premiered of the Film: </b> ${movies.premiered}</p>
    
    <p class = "card-letter"> <b style="font-style:italic">Year of Ended of the Film:</b> ${movies.ended}</p>
    <p class = "card-letter"> <b style="font-style:italic"> Language of the Film: </b> ${movies.language}</p>

    
    <p class = "card-letter"> <b style="font-style:italic"> Type of Movie: </b> ${movies.type}</p>
    
    <a href="${movies.officialSite}" class="btn btn-danger" style="margin:32px">Watching for Site</a>
    <a href="./index.html" class="btn btn-success" style="margin:32px">Go Back </a>
    </div>
    
    </div>`
    
})