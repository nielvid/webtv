popularMovies()



function toggleMenu(){
    let menu = document.getElementById('nav-menu')

    menu.classList.toggle('menus')
}


function hideList(){
    let list = document.getElementById('mymenu')
    list.style.display  = 'none'
}

 function showModal(){
     setTimeout((function(){
        let modal = document.getElementById('modal-box')
        modal.style.display = 'block'
     }), 5000)

    
}

function hideModal(){
    let modal = document.getElementById('modal-box')
            modal.style.display = 'none'
        
    }

   
        const API_KEY = "79434ed98e8baff189e3363a55c40b9b"

        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY).then((response) => {
            const info = response.data.results




            info.forEach(item => {


                /* let background = document.getElementById('text')*/
                let span = document.querySelector('.sliders span')
                let sliders = document.querySelector('.sliders h1')
                let paragraph = document.querySelector('.sliders p')



                /* background.style.background = "https://image.tmdb.org/t/p/w500" + item.poster_path*/
                span.innerHTML = item.vote_average
                sliders.innerHTML = item.title
                paragraph.innerHTML = item.overview

console.log(item.title)

            })



        }).catch(err => console.log(err))

   
       
    


  

/* function to fecth movies from tmdb*/
   function popularMovies(){
    const API_KEY = "79434ed98e8baff189e3363a55c40b9b"
  
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key="+ API_KEY).then((response)=>{
        const movies = response.data.results
  
        let data =''
   
        movies.forEach(item => {
           
            
         data += ` <!--movies box starts here-->
            <div class="movies">
                <div class="img-thumb">
                    <a href="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movies to watch"><img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movies to watch" /> </a>
                    <a class="movie-title" href="https://image.tmdb.org/t/p/w500${item.poster_path}">${item.title}</a>
                 </div>
                    <div class="details">
                        <p>2020</p>
                         <div class="reactions" >
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                        <p><i class="fas fa-star"></i>${item.vote_count}</p>
                    </div>
            </div>
            <!--movies box ends here-->
            `
            
           
        });
        
        let container = document.querySelector('.movie-container')
        container.innerHTML = data
    }).catch(err => console.log(err))
}
    