const detalisNav = document.querySelector('.details-nav');

console.log(detalisNav)
console.log(detalisNav.children)

for (let i = 0; i < detalisNav.children.length; i++) {
    const navSelected = detalisNav.children[i]
    navSelected.addEventListener('click', () => {
        for (let j = 0; j < detalisNav.children.length; j++) {
            if (detalisNav.children[j] === navSelected) {
                detalisNav.children[j].classList.add('nav-selected')
            } else {
                detalisNav.children[j].classList.remove('nav-selected')
            }
        }
    })
}

function setSelected(index) {
    
}