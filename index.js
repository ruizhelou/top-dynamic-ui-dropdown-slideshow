function highlightNavCircle(index) {
    const navigation = document.querySelector(".navigation")
    for(let navCircle of navigation.children) {
        if(navCircle.classList.contains("selected")) {
            navCircle.classList.toggle("selected")
            break
        }
    }
    navigation.children[index].classList.toggle("selected")
}

function select(index) {
    const currentSlide = document.querySelector(".current-slide")
    for(let i = 0; i < currentSlide.children.length; i++) {
        const image = currentSlide.children[i]
        if(image.classList.contains("show")) {
            image.classList.toggle("show")
            break;
        }
    }
    currentSlide.children[index].classList.toggle("show")
    highlightNavCircle(index)
}

function next() {
    const currentSlide = document.querySelector(".current-slide")
    for(let i = 0; i < currentSlide.children.length; i++) {
        const image = currentSlide.children[i]
        if(image.classList.contains("show")) {
            image.classList.toggle("show")
            let nextImage = null
            if(i === currentSlide.children.length - 1) {
                nextImage = 0
            } else {
                nextImage = i + 1
            }
            currentSlide.children[nextImage].classList.toggle("show")
            highlightNavCircle(nextImage)
            return
        }
    }
}

function previous() {
    const currentSlide = document.querySelector(".current-slide")
    for(let i = 0; i < currentSlide.children.length; i++) {
        const image = currentSlide.children[i]
        if(image.classList.contains("show")) {
            image.classList.toggle("show")
            let previousImage = null
            if(i === 0) {
                previousImage = currentSlide.children.length - 1
            } else {
                previousImage = i - 1
            }
            currentSlide.children[previousImage].classList.toggle("show")
            highlightNavCircle(previousImage)
            return
        }
    }
}

const prevBtn = document.querySelector(".prev-btn")
prevBtn.addEventListener("click", event => previous())

const nextBtn = document.querySelector(".next-btn")
nextBtn.addEventListener("click", event => next())

function createNavCircles() {
    const currentSlide = document.querySelector(".current-slide")
    const navigation = document.querySelector(".navigation")

    for(let i = 0; i < currentSlide.children.length; i++) {
        const navCircle = document.createElement("div")
        navCircle.classList.add("nav-circle")
        if(i === 0) {
            navCircle.classList.add("selected")
        }
        navCircle.addEventListener("click", event => {
            select(i)
        })
        navigation.appendChild(navCircle)
    }
}
createNavCircles()