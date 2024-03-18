

const moonScroll = () => {
    let arrowCircle = document.querySelector(".arrowCircle");

    arrowCircle.addEventListener("click", e => {
        window.scrollTo({
            top: 500, // Adjust this value to the desired scroll position
            behavior: 'smooth' // Use 'auto' for immediate scrolling
          });
    })
}

export { moonScroll }