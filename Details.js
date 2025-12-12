const detalisNav = document.querySelector('.details-nav');
const guidesSelect = document.querySelector('.guides')

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

for (let i = 0; i < guidesSelect.children.length; i++) {
    const guideSelected = guidesSelect.children[i]
    guideSelected.addEventListener('click', () => {
        for (let j = 0; j < guidesSelect.children.length; j++) {
            if (guidesSelect.children[j] === guideSelected) {
                guidesSelect.children[j].classList.add('guides-selected')
            } else {
                guidesSelect.children[j].classList.remove('guides-selected')
            }
        }
    })
}