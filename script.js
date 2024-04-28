const header = document.querySelector('.desktop-nav');
const headerBackground = document.querySelector('.header-background');

const headerOptions = {
    rootMargin: '-250px 0px 0px 0px'
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });
}, headerOptions);

headerObserver.observe(headerBackground);