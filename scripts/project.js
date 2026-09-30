

document.addEventListener("DOMContentLoaded", () => {

    const projectsSection =
        document.querySelector(".projects-section");

    if (!projectsSection) return;




    const projects = [
        {
            number: "01",
            title: "Movie Search Website",
            description:
                "A responsive and interactive movie search website that enables users to quickly search for movies and explore detailed information through a clean, intuitive interface. The project integrates a movie API to fetch and display real-time data dynamically, with a responsive layout optimized for seamless experiences across desktop, tablet, and mobile devices.",
            image: "assets/projects/ms.webp",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "API"
            ],
            live:
                "https://kumar-manish-286.github.io/movie-search-website/",
            github:
                "https://github.com/kumar-manish-286/movie-search-website"
        },

        {
            number: "02",
            title: "PK Beauty Salon",
            description:
                "A modern and responsive beauty salon website designed to showcase salon services, treatments, and essential business information through a clean and visually engaging interface. The website focuses on intuitive navigation, responsive design, clear service presentation, and a user-friendly experience across desktop, tablet, and mobile devices.",
            image: "assets/projects/PkBeautySalon.webp",
            technologies: [
                "HTML",
                "JavaScript",
                "CSS"
            ],
            live: "https://pk-beauty-salon.vercel.app/",
            github:
                "https://github.com/kumar-manish-286/PK-Beauty-Salon"
        },

        {
            number: "03",
            title: "Top-50-story",
            description:
                "A modern and interactive storytelling website featuring 50 meaningful short stories designed to deliver simple life lessons through an engaging reading experience. The project combines a clean, responsive interface with intuitive navigation and an immersive presentation that makes each story easy to explore across desktop, tablet, and mobile devices.",
            image: "assets/projects/Story.webp",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            live: "https://top-50-story.vercel.app/",
            github: "https://github.com/kumar-manish-286/story-"
        }
    ];


    const carousel =
        projectsSection.querySelector(".carousel");

    if (!carousel) return;

    const projectWrapper =
        projectsSection.querySelector(".project-wrapper");

    let previousButton;
    let nextButton;

    let counter =
        projectsSection.querySelector(".project-counter");


    if (!counter && projectWrapper) {

        counter = document.createElement("div");

        counter.className = "project-counter";

        projectWrapper.appendChild(counter);
    }




    carousel.innerHTML = projects
        .map(
            (project, index) => `
                <article
                    class="project ${index === 0 ? "active" : ""}"
                    data-index="${index}"
                >

                    <div class="project-info">

                        <span class="project-number">
                            ${project.number}
                        </span>

                        <span class="project-label">
                            Featured Project
                        </span>

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${project.description}
                        </p>

                        <div class="tech-stack">
                            ${project.technologies
                                .map(
                                    (tech) => `
                                        <span>
                                            ${tech}
                                        </span>
                                    `
                                )
                                .join("")}
                        </div>

                        <div class="project-links">

                            ${
                                project.live !== "#"
                                    ? `
                                        <a
                                            href="${project.live}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View live ${project.title} project"
                                            title="Visit the live ${project.title} website"
                                        >
                                            <i class="ph ph-arrow-up-right"></i>
                                            <span>Live Demo</span>
                                        </a>
                                    `
                                    : ""
                            }

                            ${
                                project.github !== "#"
                                    ? `
                                        <a
                                            href="${project.github}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View ${project.title} source code on GitHub"
                                            title="View ${project.title} source code on GitHub"
                                        >
                                            <i class="ph ph-github-logo"></i>
                                            <span>GitHub</span>
                                        </a>
                                    `
                                    : ""
                            }

                        </div>

                    </div>


                    <div class="project-image">

                        <img
                            src="${project.image}"
                            alt="${project.title} project screenshot"
                            title="${project.title} project screenshot"
                            loading="${index === 0 ? "eager" : "lazy"}"
                        >

                        <div class="project-image-overlay">
                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                    </div>

                </article>
            `
        )
        .join("");

    carousel.insertAdjacentHTML(
        "beforeend",
        `
            <button
                class="arrow previous"
                type="button"
                aria-label="Show previous project"
            >
                <i class="ph ph-arrow-left" aria-hidden="true"></i>
            </button>
            <button
                class="arrow next"
                type="button"
                aria-label="Show next project"
            >
                <i class="ph ph-arrow-right" aria-hidden="true"></i>
            </button>
        `
    );

    previousButton =
        projectsSection.querySelector(".previous, .prev");

    nextButton =
        projectsSection.querySelector(".next");


    const projectCards =
        Array.from(
            carousel.querySelectorAll(".project")
        );

    if (!projectCards.length) return;




    let dotsContainer =
        projectsSection.querySelector(".project-dots");

    if (!dotsContainer) {

        dotsContainer =
            document.createElement("div");

        dotsContainer.className = "project-dots";

        if (projectWrapper) {
            projectWrapper.appendChild(dotsContainer);
        } else {
            carousel.after(dotsContainer);
        }
    }

    dotsContainer.innerHTML = projects
        .map(
            (project, index) => `
                <button
                    class="project-dot ${
                        index === 0 ? "active" : ""
                    }"
                    type="button"
                    data-index="${index}"
                    aria-label="Go to project ${index + 1}"
                    aria-current="${
                        index === 0 ? "true" : "false"
                    }"
                ></button>
            `
        )
        .join("");


    const dots =
        Array.from(
            dotsContainer.querySelectorAll(
                ".project-dot"
            )
        );




    let currentIndex = 0;



    function updateCounter() {

        if (!counter) return;

        counter.innerHTML = `
            <span class="current-project">
                ${String(currentIndex + 1).padStart(2, "0")}
            </span>

            <span class="counter-divider">/</span>

            <span class="total-projects">
                ${String(projects.length).padStart(2, "0")}
            </span>
        `;
    }



    function updateDots() {

        dots.forEach((dot, index) => {

            const active = index === currentIndex;

            dot.classList.toggle(
                "active",
                active
            );

            dot.setAttribute(
                "aria-current",
                active ? "true" : "false"
            );
        });
    }



    function showProject(index, direction = "next") {

        if (!projectCards.length) return;

        if (index < 0) {
            index = projectCards.length - 1;
        }

        if (index >= projectCards.length) {
            index = 0;
        }

        currentIndex = index;


        projectCards.forEach((card, cardIndex) => {

            card.classList.remove(
                "active",
                "slide-next",
                "slide-prev"
            );

            if (cardIndex === currentIndex) {

                card.classList.add("active");

                if (direction === "next") {
                    card.classList.add("slide-next");
                } else {
                    card.classList.add("slide-prev");
                }
            }
        });


        updateCounter();
        updateDots();
    }



    function nextProject() {

        showProject(
            currentIndex + 1,
            "next"
        );
    }




    function previousProject() {

        showProject(
            currentIndex - 1,
            "prev"
        );
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextProject
        );
    }

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            previousProject
        );
    }




    dots.forEach((dot) => {

        dot.addEventListener("click", () => {

            const targetIndex =
                Number(dot.dataset.index);

            const direction =
                targetIndex > currentIndex
                    ? "next"
                    : "prev";

            showProject(
                targetIndex,
                direction
            );
        });
    });




    projectsSection.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "ArrowRight"
            ) {
                event.preventDefault();
                nextProject();
            }

            if (
                event.key === "ArrowLeft"
            ) {
                event.preventDefault();
                previousProject();
            }
        }
    );




    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;
        },
        {
            passive: true
        }
    );


    carousel.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();
        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;

        const minimumDistance = 50;

        if (
            Math.abs(swipeDistance) <
            minimumDistance
        ) {
            return;
        }

        if (swipeDistance < 0) {
            nextProject();
        } else {
            previousProject();
        }
    }




    projectCards.forEach((card) => {

        const image =
            card.querySelector("img");

        if (!image) return;

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

                const imageContainer =
                    image.closest(".project-image");

                if (imageContainer) {

                    imageContainer.classList.add(
                        "image-error"
                    );

                    imageContainer.insertAdjacentHTML(
                        "beforeend",
                        `
                            <div class="image-placeholder">
                                <i class="ph ph-image-square"></i>
                                <span>Project Preview</span>
                            </div>
                        `
                    );
                }
            }
        );
    });




    showProject(0, "next");

});