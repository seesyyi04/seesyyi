const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");
const navli: NodeListOf<HTMLElement> = document.querySelectorAll("nav .container ul li");

window.addEventListener("scroll", (): void => {
    let current: string = "";
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section: HTMLElement): void => {
        const sectionTop: number = section.offsetTop;
        const sectionHeight: number = section.clientHeight;
        const sectionId: string | null = section.getAttribute("id");
        
        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navli.forEach((li: HTMLElement): void => {
        li.classList.remove("active");
        const link = li.querySelector("a") as HTMLAnchorElement;
        if (link && link.getAttribute("href") === `#${current}`) {
            li.classList.add("active");
        }
    });
});