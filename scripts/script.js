

document.addEventListener("DOMContentLoaded", () => {


    const header =
        document.querySelector(".header");

    const menuToggle =
        document.querySelector("#menu-toggle");

    const menuIcon =
        document.querySelector(".menu-icon");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const sections =
        document.querySelectorAll(".content");

    const currentYear =
        document.querySelector("#current-year");


    function handleHeaderScroll() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");
        }
    }

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        {
            passive: true
        }
    );

    handleHeaderScroll();


 
    function closeMobileMenu() {

        if (!menuToggle) return;

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        document.body.classList.remove(
            "menu-open"
        );
    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isExpanded =
                    menuToggle.getAttribute(
                        "aria-expanded"
                    ) === "true";

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(!isExpanded)
                );
                menuToggle.setAttribute(
                    "aria-label",
                    isExpanded
                        ? "Open navigation menu"
                        : "Close navigation menu"
                );

                document.body.classList.toggle(
                    "menu-open",
                    !isExpanded
                );
            }
        );
    }



    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    !targetId.startsWith("#")
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) return;

                event.preventDefault();

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

                closeMobileMenu();

                updateActiveNavigation(
                    targetId
                );
            }
        );
    });



    function updateActiveNavigation(
        targetId
    ) {

        navLinks.forEach((link) => {

            const linkTarget =
                link.getAttribute("href");

            if (
                linkTarget === targetId
            ) {

                link.classList.add(
                    "active"
                );

            } else {

                link.classList.remove(
                    "active"
                );
            }
        });
    }



    if (
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    const visibleSections =
                        entries
                            .filter(
                                (entry) =>
                                    entry.isIntersecting
                            )
                            .sort(
                                (a, b) =>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            );

                    if (
                        !visibleSections.length
                    ) {
                        return;
                    }

                    const activeSection =
                        visibleSections[0]
                            .target;

                    if (
                        activeSection.id
                    ) {

                        updateActiveNavigation(
                            `#${activeSection.id}`
                        );
                    }
                },
                {
                    root: null,
                    rootMargin:
                        "-25% 0px -55% 0px",
                    threshold: [0.05, 0.15, 0.3]
                }
            );

        sections.forEach((section) => {
            sectionObserver.observe(
                section
            );
        });
    }



    document.addEventListener(
        "click",
        (event) => {

            if (!menuToggle) return;

            if (
                menuToggle.getAttribute(
                    "aria-expanded"
                ) !== "true"
            ) {
                return;
            }

            const navbar =
                document.querySelector(
                    ".navbar"
                );

            if (!navbar || !menuIcon) {
                return;
            }

            const clickedInsideMenu =
                navbar.contains(
                    event.target
                );

            const clickedMenuButton =
                menuIcon.contains(
                    event.target
                );

            if (
                !clickedInsideMenu &&
                !clickedMenuButton
            ) {

                closeMobileMenu();
            }
        }
    );




    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                menuToggle?.getAttribute(
                    "aria-expanded"
                ) === "true"
            ) {

                closeMobileMenu();

                menuIcon?.focus();
            }
        }
    );




    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 1024 &&
                menuToggle?.getAttribute(
                    "aria-expanded"
                ) === "true"
            ) {

                closeMobileMenu();
            }
        }
    );




    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }



    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".service-box, " +
            ".box, " +
            ".project, " +
            ".contact-item"
        );


    if (
        "IntersectionObserver" in window &&
        revealElements.length
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );
                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "reveal-element"
                );

                revealObserver.observe(
                    element
                );
            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "is-visible"
                );
            }
        );
    }



    const backToTop =
        document.querySelector(
            ".back-to-top"
        );

    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );
                }
            },
            {
                passive: true
            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }

});