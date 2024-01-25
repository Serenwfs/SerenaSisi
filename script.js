document.addEventListener('DOMContentLoaded', (event) => {
    const slidesData = [
        {
            imgUrl: "images/SoullessCover.jpeg",
            title: "Soulless",
            link: "https://lnk.to/soulless"
        },
        {
            imgUrl: "images/SoSCover.jpeg",
            title: "SoS",
            link: "https://lnk.to/SoSbibi"
        },
        {
            imgUrl: "images/OverdoseCover.jpg",
            title: "Overdose",
            link: "https://li.sten.to/tsd5kh3o"
        },

        {
            imgUrl: "images/BleedingHearts.jpg",
            title: "Bleeding Hearts",
            link: "https://li.sten.to/tsd5kh3o"
        },
        {
            imgUrl: "images/AlienCover.jpeg",
            title: "Alien",
            link: "https://li.sten.to/tsd5kh3o"
        },
        {
            imgUrl: "images/HeartOfGlassCover.jpeg",
            title: "Heart Of Glass",
            link: "https://li.sten.to/tsd5kh3o"
        },
        
        // Add more slides as needed
    ];

    let currentSlideIndex = 0;

    function createSlideElement(slide) {
        const li = document.createElement("li");
        li.className = "music-item";
        li.innerHTML = `
            <figure>
                <img src="${slide.imgUrl}" alt="${slide.title}">
                <figcaption>${slide.title}</figcaption>
                <a href="${slide.link}" class="play-link" target="_blank">
                    <img src="images/play.png" alt="Play" class="play-icon">
                </a>
            </figure>
        `;
        return li;
    }


    function updateSlides() {
        const musicList = document.querySelector(".music-list");
        musicList.innerHTML = ''; // Clear existing slides

        // Define the indexes for the left and right slides
        let leftSlideIndex = (currentSlideIndex - 1 + slidesData.length) % slidesData.length;
        let rightSlideIndex = (currentSlideIndex + 1) % slidesData.length;

        // Create an array of slide indexes in the order they should be displayed
        let slideIndexes = [leftSlideIndex, currentSlideIndex, rightSlideIndex];

        // If we're at the start or end of the carousel, adjust the array accordingly
        // if (currentSlideIndex === 0) {
        //     // Place the last slide to the left of the first slide
        //     slideIndexes.unshift(slidesData.length - 1);
        // }
            
        // } else if (currentSlideIndex === slidesData.length - 1) {
        //     // Place the first slide to the right of the last slide
        //     slideIndexes.push(0);
        // }

        // Append each slide to the music list with the correct class
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
        // Adjust currentSlideIndex based on direction
        if (direction === 1) {
            // Moving to the next slide
            currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;
        } else {
            // Moving to the previous slide
            currentSlideIndex = (currentSlideIndex - 1 + slidesData.length) % slidesData.length;
        }

        updateSlides();
    }

    // Set up event listeners for next and previous buttons
    document.querySelector("#next").addEventListener("click", () => moveSlide(1));
    document.querySelector("#prev").addEventListener("click", () => moveSlide(-1));

    // Initialize the slider with the first slide in the center
    updateSlides();
});