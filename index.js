window.onload = start;

function start() {
    aboutMe.style.display = "none";
    projects.style.display = "none";
    gallery.style.display = "none";
}

function showAboutMe() {
    aboutMe.style.display = "";
    projects.style.display = "none";
    gallery.style.display = "none";
}

function showProjects() {
    aboutMe.style.display = "none";
    projects.style.display = "";
    gallery.style.display = "none";
}

function showGallery() {
    aboutMe.style.display = "none";
    projects.style.display = "none";
    gallery.style.display = "";
}