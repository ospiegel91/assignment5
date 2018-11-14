$(document).ready(function () {
    
    // music by Kanye West brought to you by Oren Spiegel;
    add_line();
    function add_line() {
        var line = document.createElement("audio");
        var head=document.getElementsByTagName('body')[0];
        line.type = "audio/mp3";
        line.src="./song/Amazing.mp3";
        line.id="bgSong";
        line.autoplay = true;
        line.style.display = "none";
        head.appendChild(line);
        }
    // the above will play Amazing by Kanye West, because that sounds like basketball;



    $(".outerContainer").css("display", "none");
    $("#bigThreesContainer").css("display", "none");
    $("#duosContainer").css("display", "none");

    $(".duosStart").on("click", duos);
    $(".ThreesStart").on("click", bigThrees);



    function duos() {
        $(".loading-page-outer-container").css("display", "none");
        $(".outerContainer").css("display", "flex");
        $("#duosContainer").css("display", "flex");

        

        let allCards = $(".duos > .card-container");
        allCards.addClass("cardClosedImg");
        let allCardsArr = [...allCards];

        for (var i = 0; i < allCardsArr.length; i++) {
            allCardsArr[i].addEventListener("click", displayCard);
        };

        const row1 = document.querySelector(".row1duo");
        const row2 = document.querySelector(".row2duo");
        const row3 = document.querySelector(".row3duo");
        const row4 = document.querySelector(".row4duo");
        startGame();
        function startGame() {
            var shuffledCards = shuffle(allCardsArr);
            for (var i = 0; i < shuffledCards.length/4; i++) {
                row1.appendChild(shuffledCards[i]);
            }
            
            for (var i = 6; i < shuffledCards.length/2; i++) {
                row2.appendChild(shuffledCards[i]);
            }
            for (var i = 12; i < shuffledCards.length/4*3; i++) {
                row3.appendChild(shuffledCards[i]);
            }
            for (var i = 18; i < shuffledCards.length; i++) {
                row4.appendChild(shuffledCards[i]);
            }
        }

    };



    function bigThrees() {
        $(".loading-page-outer-container").css("display", "none");
        $(".outerContainer").css("display", "flex");
        $("#bigThreesContainer").css("display", "flex");


        let allCards = $(".bigThrees > .card-container");
        allCards.addClass("cardClosedImg");
        let allCardsArr = [...allCards];

        for (var i = 0; i < allCardsArr.length; i++) {
            allCardsArr[i].addEventListener("click", displayCard);
        };

        const row1 = document.querySelector(".row1BT");
        const row2 = document.querySelector(".row2BT");
        const row3 = document.querySelector(".row3BT");
        const row4 = document.querySelector(".row4BT");
        const row5 = document.querySelector(".row5BT");
        startGame();
        function startGame() {
            var shuffledCards = shuffle(allCardsArr);
            for (var i = 0; i < shuffledCards.length/5; i++) {
                row1.appendChild(shuffledCards[i]);
            }
            
            for (var i = 6; i < shuffledCards.length/10*4; i++) {
                row2.appendChild(shuffledCards[i]);
            }
            for (var i = 12; i < shuffledCards.length/10*6; i++) {
                row3.appendChild(shuffledCards[i]);
            }
            for (var i = 18; i < shuffledCards.length/10*8; i++) {
                row4.appendChild(shuffledCards[i]);
            }
            for (var i = 24; i < shuffledCards.length; i++) {
                row5.appendChild(shuffledCards[i]);
            }
        }
        

    }



    function displayCard() {
        $(this).toggleClass("cardClosedImg");
        $(this).toggleClass("open");
        var playerPhotoId = event.target.getAttribute('data-player');
        $(this).css("background-image", playerPhotoId);
        $(this).toggleClass("disabled");
    }

    function shuffle(array) {
        var currentIndex = array.length;

        for (var i = currentIndex; i > 0; i--) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    }



});