



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