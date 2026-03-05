//=====ACTIVE SIDE NAV ON SCROLL ======

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll",() => {
    let currentSection = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=> {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
            }
    });
    });

    //===== SCROLL REVEAL ANIMATION =====

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry=> {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-up");
                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.2
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    //====== GLOWING CURSOR + BACKGROUND REVEAL ====

    const cursor = document.querySelector(".cursor-glow");

    window.addEventListener("mousemove", (e) => {
        document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
        // Move glowing cursor
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        // Subtle background movement (reveal image)
        const moveX = (e.clientX / window.innerWidth) * 20;
        const moveY = (e.clientY / window.innerHeight) * 20;

        document.body.style.setProperty("--bg-pos-x", `${50 + moveX}%`);
        document.body.style.setProperty("--bg-pos-y", `${50 + moveY}%`);
    });

    // Hide glow when mouse leaves window

    window.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });

    window.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });

    

