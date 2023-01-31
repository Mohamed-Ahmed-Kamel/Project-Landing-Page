// (1)-call the {navbar} and {sections}
const ul = document.getElementById('navbar');
const section = document.querySelectorAll('section');

// (1.2)-create the {navbar}
for (let i = 1; i <= section.length; i++) {
    const createLI = document.createElement('li');
    createLI.innerHTML = "<a href=#section" + i + ">section" + " " + i + "</a>";
    ul.appendChild(createLI);
};


// (2) when i stand on section-->( the background will change )
onscroll = () => {
    section.forEach((eff) => {
        if (
            eff.getBoundingClientRect().top >= -100
            &&
            eff.getBoundingClientRect().top <= 100
        ) {
            eff.classList.add("classeff");
        } else {
            eff.classList.remove("classeff");
        }
    });
};
