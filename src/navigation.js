logo.addEventListener('click', () => location.hash='#perfil');

mainButton.addEventListener('click', () => location.hash='#blogs');

blogsButton.forEach(function (e) {
    e.addEventListener('click', () => location.hash='#miblog');
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
    console.log({location});

    location.hash.startsWith('#perfil')
    ? perfilPage()  :
    location.hash.startsWith('#miblog')
    ? blogPage()    :
    location.hash.startsWith('#blogs')
    ? blogsPage()   :
    homePage();
};

const homePage = () => {
    console.log('Home');
};

const perfilPage = () => {
    console.log('PerfilPage');
};

const blogPage = () => {
    console.log('BlogPage');
    blogs.classList.add('inactive');
    home.classList.add('inactive');
    miBlog.classList.remove('inactive');

};

const blogsPage = () => {
    console.log('BlogsPage');
    home.classList.add('inactive');
    blogs.classList.remove('inactive');
};