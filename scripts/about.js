

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");

    if (!aboutSection) return;

    const tabs = aboutSection.querySelectorAll(".about-tab");
    const tabContents = aboutSection.querySelectorAll(".tab-content");

   
    const aboutData = {
        experience: [
            {
                title: "Frontend Developer",
                company: "Freelance / Personal Projects",
                period: "2026 - Present",
                description:
                    "Building responsive and user-friendly websites using HTML, CSS, JavaScript and modern frontend development practices."
            },
            {
                title: "SEO & Technical Content",
            
                period: "2026 - Present",
                description:
                    "Working on technical SEO, content optimization, website audits, search performance and digital visibility for testing and certification services."
            }
        ],

        education: [
            {
                id: 1,
                date: "2018 - 2020",
                degree: "Secondary School Certificate (SSC)",
                institution: "Jawahar Navodaya Vidyalaya School, Mohali (Punjab)",
                details:
                    "Completed basic schooling with distinction. Actively participated in computer clubs, tech and science-related events."
            },
            {
                id: 2,
                date: "2020 - 2022",
                degree: "Higher Secondary Education (HSC - Science)",
                institution: "Jawahar Navodaya Vidyalaya School, Mohali (Punjab)",
                details:
                    "Focused on Physics, Chemistry, Mathematics and Computer Science (Python, MySQL). Developed a strong foundation in logical thinking and problem-solving."
            },
            {
                id: 3,
                date: "2022 - 2025",
                degree: "Bachelor of Science (B.Sc. Non-Medical)",
                institution: "Kurukshetra University Kurukshetra, Haryana",
                details:
                    "Studied core subjects like Physics, Chemistry, Mathematics and Computer (certificate)."
            },
            {
                id: 4,
                date: "2025 - 2026",
                degree: "Post Graduate Diploma in Computer Application",
                institution: "Kurukshetra University Kurukshetra, Haryana",
                details:
                    "Studied core subjects like Client Side Web Technology, Server Side Web Technology, Artificial Intelligence (AI & ML), Programming in Java, Data Structure, OS & Linux, Computer Networking and DBMS."
            }
        ],

        skills: [
            {
                name: "HTML5",
                level: "Advanced",
                icon: "assets/skills/html.webp"
            },
            {
                name: "CSS3",
                level: "Advanced",
                icon: "assets/skills/css.webp"
            },
            {
                name: "JavaScript",
                level: "Intermediate",
                icon: "assets/skills/js.webp"
            },
            {
                name: "React.js",
                level: "Intermediate",
                icon: "assets/skills/react.webp"
            },
            {
                name: "Node.js",
                level: "Intermediate",
                icon: "assets/skills/node.webp"
            },
            {
                name: "MongoDB",
                level: "Intermediate",
                icon: "assets/skills/mongodb.webp"
            },
            {
                name: "Express",
                level: "Intermediate",
                icon: "assets/skills/express.webp"
            },
            {
                name: "Bootstrap",
                level: "Advanced",
                icon: "assets/skills/bootstrap.webp"
            },
            {
                name: "SEO",
                level: "Advanced",
                icon: "assets/skills/seo.webp"
            },
            {
                name: "Technical SEO",
                level: "Advanced",
                icon: "assets/skills/techseo.webp"
            },
            {
                name: "Git & GitHub",
                level: "Intermediate",
                icon: "assets/skills/gitGithub.webp"
            },
            {
                name: "Responsive Web Design",
                level: "Advanced",
                icon: "assets/skills/resp.webp"
            }
        ],

        personal: [
            {
                label: "Name",
                value: "Manish Kumar"
            },
            {
                label: "Professional focus",
                value: "Frontend development and SEO"
            },
            {
                label: "Location",
                value: "India"
            },
            {
                label: "Availability",
                value: "Open to opportunities"
            },
            {
                label: "Frontend stack",
                value: "HTML5, CSS3, JavaScript, React.js, Bootstrap"
            },
            {
                label: "Backend and data",
                value: "Node.js, Express, MongoDB"
            },
            {
                label: "SEO specialties",
                value: "On-page, off-page, and technical SEO; keyword research, content optimization, internal linking, and technical audits"
            },
            {
                label: "Education",
                value: "B.Sc. Non-Medical (2022–2025) and PGDCA (2025–2026), Kurukshetra University"
            }
        ]
    };



    function renderExperience() {
        const container = aboutSection.querySelector(".experience-list");

        if (!container) return;

        container.innerHTML = aboutData.experience
            .map(
                (item, index) => `
                    <article class="timeline-item">
                        <span class="timeline-dot"></span>

                        <div class="timeline-content">
                            <span class="timeline-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <span class="timeline-period">
                                ${item.period}
                            </span>

                            <h3>${item.title}</h3>

                            ${item.company ? `<h4>${item.company}</h4>` : ""}

                            <p>${item.description}</p>
                        </div>
                    </article>
                `
            )
            .join("");
    }


 
    function renderEducation() {
        const container = aboutSection.querySelector(".education-list");

        if (!container) return;

        container.innerHTML = aboutData.education
            .map(
                (item, index) => {
                    const title = item.degree ?? item.title;
                    const period = item.date ?? item.period;
                    const description = item.details ?? item.description;

                    return `
                        <article class="timeline-item">
                            <span class="timeline-dot"></span>

                            <div class="timeline-content">
                                <span class="timeline-number">
                                    ${String(index + 1).padStart(2, "0")}
                                </span>

                                <span class="timeline-period">
                                    ${period}
                                </span>

                                <h3>${title}</h3>

                                <h4>${item.institution}</h4>

                                <p>${description}</p>
                            </div>
                        </article>
                    `;
                }
            )
            .join("");
    }




    function renderSkills() {
        const container = aboutSection.querySelector(".skill-list");

        if (!container) return;

        container.innerHTML = aboutData.skills
            .map(
                (skill) => `
                    <div class="skill-item">
                        <span class="skill-icon-slot">
                            ${skill.icon
                                ? `<img class="skill-icon" src="${skill.icon}" alt="${skill.name} logo" title="${skill.name} skill icon" loading="lazy">`
                                : ""}
                        </span>

                        <div class="skill-meta">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-level">${skill.level}</span>
                        </div>

                        <div class="skill-bar">
                            <span
                                class="skill-progress ${skill.level
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}"
                            ></span>
                        </div>
                    </div>
                `
            )
            .join("");

        container.querySelectorAll(".skill-icon").forEach((image) => {
            image.addEventListener("error", () => {
                image.remove();
            });
        });
    }



    function renderPersonalInfo() {
        const container = aboutSection.querySelector(".info-box");

        if (!container) return;

        container.innerHTML = aboutData.personal
            .map(
                (item) => `
                    <article class="info-row">
                        <span class="info-label">${item.label}</span>
                        <span class="info-value">${item.value}</span>
                    </article>
                `
            )
            .join("");
    }


    function activateTab(tab) {
        const targetId = tab.dataset.tab;

        if (!targetId) return;

        tabs.forEach((item) => {
            const isActive = item === tab;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-selected", String(isActive));
            item.setAttribute("tabindex", isActive ? "0" : "-1");
        });

        tabContents.forEach((content) => {
            const isTarget = content.id === targetId;

            content.classList.toggle("active", isTarget);

            if (isTarget) {
                content.removeAttribute("hidden");
            } else {
                content.setAttribute("hidden", "");
            }
        });
    }



    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            activateTab(tab);
        });



        tab.addEventListener("keydown", (event) => {
            const currentIndex = Array.from(tabs).indexOf(tab);

            let nextIndex = currentIndex;

            if (event.key === "ArrowRight") {
                nextIndex = (currentIndex + 1) % tabs.length;
            }

            if (event.key === "ArrowLeft") {
                nextIndex =
                    (currentIndex - 1 + tabs.length) % tabs.length;
            }

            if (event.key === "Home") {
                nextIndex = 0;
            }

            if (event.key === "End") {
                nextIndex = tabs.length - 1;
            }

            if (nextIndex !== currentIndex) {
                event.preventDefault();

                const nextTab = tabs[nextIndex];

                activateTab(nextTab);
                nextTab.focus();
            }
        });
    });




    tabs.forEach((tab, index) => {
        tab.setAttribute("role", "tab");

        if (!tab.hasAttribute("aria-selected")) {
            tab.setAttribute(
                "aria-selected",
                index === 0 ? "true" : "false"
            );
        }

        tab.setAttribute(
            "tabindex",
            index === 0 ? "0" : "-1"
        );
    });

    tabContents.forEach((content) => {
        content.setAttribute("role", "tabpanel");
    });




    const activeTab =
        aboutSection.querySelector(".about-tab.active") ||
        tabs[0];

    if (activeTab) {
        activateTab(activeTab);
    }



    renderExperience();
    renderEducation();
    renderSkills();
    renderPersonalInfo();




    const animatedElements = aboutSection.querySelectorAll(
        ".timeline-item, .skill-item, .info-row"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observerInstance.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        animatedElements.forEach((element) => {
            element.classList.add("show");
        });
    }
});