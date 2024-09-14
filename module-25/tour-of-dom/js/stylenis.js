const sections = document.querySelectorAll('section');
// console.log(sections)
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px'
    section.style.backgroundColor = 'lightgreen';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow'

