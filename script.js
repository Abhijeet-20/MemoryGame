const cards = document.querySelectorAll('.card');
let cardOne,cardTwo;
let disabledesk = false;
let matched = 0;

function flipcard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardOne  && !disabledesk){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disabledesk = true;

        let cardOneImg = cardOne.querySelector("img").src;
        let cardTwoImg = cardTwo.querySelector("img").src;
        
        matchCards(cardOneImg,cardTwoImg);
    }
}

function matchCards(Img1,Img2){
    if(Img1 === Img2){
        matched++;  
        if(matched == 8){
            setTimeout(()=>{
                return shuffleCard();
            },1000)
        }
        cardOne.removeEventListener("click",flipcard);
        cardTwo.removeEventListener("click",flipcard);
        cardOne = cardTwo = "";
        return disabledesk = false;
    }
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    },400);

    setTimeout(()=>{
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake","flip");
        cardOne = cardTwo = "";
        disabledesk = false;
    },1000)
}

function shuffleCard(){
    disabledesk = false;
    matched = 0;
    cardOne = cardTwo = "";
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(()=> Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card , index)=>{
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `img-${arr[index]}.png`
        card.addEventListener("click",flipcard);
    });
}
shuffleCard();

cards.forEach(card=>{
    // card.classList.add("flip");
    card.addEventListener("click",flipcard);
});


