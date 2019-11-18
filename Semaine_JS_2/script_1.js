// Fonctionnalité 1 et 1bis

    var footer = document.getElementsByTagName('footer') ;
    var count = 1 ;
    var onButtonClick = function() {
        console.log('clic numéro ' + count);
        count += 1 ;
    } ;
    footer[0].addEventListener("click", onButtonClick) ;

// Fonctionnalité 2 

    var head = document.getElementById("navbarHeader");
    var hamburger = document.getElementsByClassName("navbar-toggler-icon");
    var hamburgerclick = function(){
        head.className = "bg-dark"
    };
    hamburger[0].addEventListener('click', hamburgerclick);

// Fonctionnalité 3 

    var texte = document.getElementsByClassName("card-text");
    var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
    var cardClick = function(){
        texte[0].style.color = "red"
    };
    edit[0].addEventListener('click', cardClick);

// Fonctionnalité 4

    var texte2 = document.getElementsByClassName("card-text");
    var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
    var cardClick1 = function(){
        if (texte2[1].style.color === 'green'){
            texte2[1].style.color = 'black' ;
            }
        else (texte2[1].style.color = "green")
    };
    edit2[1].addEventListener('click', cardClick1);

// Fonctionnalité 5 

    var lien = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    var navbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow");
    var link = document.querySelector('link');
    var coucou = document.getElementsByTagName('h4');
    var changelink = function(){
        if (link.href === lien){
            link.removeAttribute('href');
            coucou[0].textContent = "Cliquez deux fois ici pour reco <Bootstrap> !";
            coucou[0].style.backgroundColor = 'aqua';
            }
        else {
            link.setAttribute('href', lien);
        }
    };
    navbar[0].addEventListener('dblclick', changelink);
    coucou[0].addEventListener('dblclick', changelink);

// Fonctionnalité 6

    

    