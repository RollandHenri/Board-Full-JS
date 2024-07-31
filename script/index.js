/*------ Variables ------*/

const nav = document.querySelector("nav");
const header = document.querySelector("header");
const aboutTitle = document.querySelector(".aboutTitle");
console.log(aboutTitle);

/*------ Create HTML ------*/

nav.innerHTML = `
<div class="logo"> </div>

<ul>
<li> Accueil </li>
<li> About </li>
<li> Skils </li>
<li> Contact </li>
</ul>
`;

header.innerHTML = `
<h1> Voici un Site uniquement en JavaScript </h1>
<p>Et en <span><i class="fa-brands fa-sass"></i> </span></p>
`;

aboutTitle.innerHTML = `
<h2> A propos de moi </h2>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt nostrum est laboriosam, unde ullam modi impedit necessitatibus iure, ab neque dolorem consequatur? Voluptate, dignissimos recusandae deleniti cumque nihil iste? </p>
`;

/*------ EventListener ------*/

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.transform = "translateY(-250px)";
  } else {
    nav.style.transform = "translateY(0px)";
  }
});

/*------ Observer ------*/
