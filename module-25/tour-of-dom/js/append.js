// 1.  Where to add
// console.log('append.js')
const placesList = document.getElementById('places-list');
// console.log(placesList);
// 2. What to be added
const li = document.createElement('li');
li.innerText = 'paharetoli bon'

// 3. add the child
placesList.appendChild(li);


// -------____________________
// ---------1--------
const mainContainer = document.getElementById('main-container')
// console.log(mainContainer)

// -----------2-----------------
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biryani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad'
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section)





// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`

mainContainer.appendChild(sectionDress)