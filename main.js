var input = document.getElementById('input');
var text = document.getElementById('text');
var image = document.getElementById('image');


input.addEventListener('change', () =>{
    var inputVal = input.value;

    var date = new Date(inputVal);
    var mois = date.getMonth()+1;
    var jour = date.getDate();
    
    
    if(mois == 1 && jour >= 21 || mois == 2 && jour <= 18){
        console.log('Votre signe astrologique est VERSEAU!');
        text.innerHTML = 'Votre signe astrologique est VERSEAU!';
        image.setAttribute('src','images/verseau.jpg');
    }
    if(mois == 2 && jour >= 19 || mois == 3 && jour <= 20){
        console.log('Votre signe astrologique est POISSON!');
        text.innerHTML = 'Votre signe astrologique est POISSON!';
        image.setAttribute('src','images/poisson.jpg');
    }
    if(mois == 3 && jour >= 21 || mois == 4 && jour <= 20){
        console.log('Votre signe astrologique est BELIER!');
        text.innerHTML = 'Votre signe astrologique est BELIER!';
        image.setAttribute('src','images/belier.jpg');
    }
    if(mois == 4 && jour >= 21 || mois == 5 && jour <= 20){
        console.log('Votre signe astrologique est TAUREAU!');
        text.innerHTML = 'Votre signe astrologique est TAUREAU!';
        image.setAttribute('src','images/taureau.jpg');
    }
    if(mois == 5 && jour >= 21 || mois == 6 && jour <= 21){
        console.log('Votre signe astrologique est GEMEAUX!');
        text.innerHTML = 'Votre signe astrologique est GEMEAUX!';
        image.setAttribute('src','images/gemeaux.jpg');
    }
    if(mois == 6 && jour >= 22 || mois == 7 && jour <= 22){
        console.log('Votre signe astrologique est CANCER!');
        text.innerHTML = 'Votre signe astrologique est CANCER!';
        image.setAttribute('src','images/cancer.jpg');
    }
    if(mois == 7 && jour >= 23 || mois == 8 && jour <= 22){
        console.log('Votre signe astrologique est LION!');
        text.innerHTML = 'Votre signe astrologique est LION!';
        image.setAttribute('src','images/lion.jpg');
    }
    if(mois == 8 && jour >= 23 || mois == 9 && jour <= 22){
        console.log('Votre signe astrologique est VIERGE!');
        text.innerHTML = 'Votre signe astrologique est VIERGE!';
        image.setAttribute('src','images/vierge.jpg');
    }
    if(mois == 9 && jour >= 23 || mois == 10 && jour <= 22){
        console.log('Votre signe astrologique est BALANCE!');
        text.innerHTML = 'Votre signe astrologique est BALANCE!';
        image.setAttribute('src','images/balance.jpg');
    }
    if(mois == 10 && jour >= 23 || mois == 11 && jour <= 22){
        console.log('Votre signe astrologique est SCORPION!');
        text.innerHTML = 'Votre signe astrologique est SCORPION!';
        image.setAttribute('src','images/scorpion.jpg');
    }
    if(mois == 11 && jour >= 22 || mois == 12 && jour <= 21){
        console.log('Votre signe astrologique est SAGITTAIRE!');
        text.innerHTML = 'Votre signe astrologique est SAGITTAIRE!';
        image.setAttribute('src','images/sagittaire.jpg');
    }
    if(mois == 12 && jour >= 22 || mois == 1 && jour <= 20){
        console.log('Votre signe astrologique est CAPRICORNE!');
        text.innerHTML = 'Votre signe astrologique est CAPRICORNE!';
        image.setAttribute('src','images/capricorne.jpg');
    }
})