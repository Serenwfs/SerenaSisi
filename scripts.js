// Want to impliment a carousel to slide through my song 
document.addEventListener('DOMContentLoaded', (event) => {
    // create a lits of object for the songs image, link and title links to flip throught them
    const slidesData = [ 
        {
            imgage: "images/SoullessCover.jpeg",
            title: "Soulless",
            link: "https://lnk.to/soulless"
        },
        {
            imgage: "images/SoSCover.jpeg",
            title: "SoS",
            link: "https://lnk.to/SoSbibi"
        },
        {
            imgage: "images/OverdoseCover.jpg",
            title: "Overdose",
            link: "https://li.sten.to/tsd5kh3o"
        },

        {
            imgage: "images/AlienCover.jpeg",
            title: "Alien",
            link: "https://lnk.to/AlienBibi"
        },
        {
            imgage: "images/HeartOfGlassCover.jpeg",
            title: "Heart Of Glass",
            link: "https://li.sten.to/tsd5kh3o"
        },

        {
            imgage: "images/psychosisCover.jpeg",
            title: "Psychosis ?",
            link: "https://lnk.to/psychosisSisi"
        },

        {
            imgage: "images/Lowcover.jpeg",
            title: "Low",
            link: "https://lnk.to/lowsisis"
        },

        {
            imgage: "images/BleedingHearts.jpg",
            title: "Bleeding Hearts",
            link: "https://lnk.to/bleedinhearts"
        },
        
    ];

    let currentSlideIndex = 0;

    function createSlideElement(slide) {
        const li = document.createElement("li");
        li.className = "music-item";
        // Start code chat gpt of how to include HTML 
        li.innerHTML = `
            <figure>
                <img src="${slide.imgage}" alt="${slide.title}">
                <figcaption>${slide.title}</figcaption>
                <a href="${slide.link}" class="play-link" target="_blank">
                    <img src="images/play.png" alt="Play" class="play-icon">
                </a>
            </figure>
        `;
        //End code chat gpt
        return li;
    }


    function updateSlides() {
        const musicList = document.querySelector(".music-list");
        musicList.innerHTML = ''; // we clear existing slides

        // indexes for the left and right slides
        let leftSlideIndex = (currentSlideIndex - 1 + slidesData.length) % slidesData.length;
        let rightSlideIndex = (currentSlideIndex + 1) % slidesData.length;

        // we create an array of slide indexes in the order they should be displayed
        let slideIndexes = [leftSlideIndex, currentSlideIndex, rightSlideIndex];

        // append each slide to the music list with the correct class
        slideIndexes.forEach((index) => {
            const slideElement = createSlideElement(slidesData[index]);
            if (index === currentSlideIndex) {
                slideElement.classList.add('center');
            } else if (index === leftSlideIndex) {
                slideElement.classList.add('left');
            } else if (index === rightSlideIndex) {
                slideElement.classList.add('right');
            }
            musicList.appendChild(slideElement);
        });
    }
    
    function moveSlide(direction) {
        // adjust the index based on direction
        if (direction === 1) {
            // switch the next slide
            currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;
        } else {
            // switch the prev slide
            currentSlideIndex = (currentSlideIndex - 1 + slidesData.length) % slidesData.length;
        }

        updateSlides();
    }

    // set up previous and next  buttons
    document.querySelector("#next").addEventListener("click", () => moveSlide(1));
    document.querySelector("#prev").addEventListener("click", () => moveSlide(-1));

    // initialize the slider 
    updateSlides();
});