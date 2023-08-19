logo.addEventListener('click', () => location.hash='#perfil');

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});

    location.hash.startsWith('#perfil')
    ? perfilPage()  :
    location.hash.startsWith('#blog')
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
};

const blogsPage = () => {
    console.log('BlogsPage');
};