/*------ Variables -----*/

const navBar = document.createElement("nav");
const header = document.createElement("header");

/*------ Create Block ------*/

document.body.appendChild(navBar);
document.body.appendChild(header);

/*------ InnerHTML ------*/

navBar.innerHTML = `
<div class="logo"> </div>
<ul> 
    <li> Accueil </li>
    <li> About </li>
    <li> Skill </li>
    <li> Contact </li>
</ul>
`;

header.innerHTML = `
<h1> Le site Full JavaScript</h1>
<p> Est <span> 
 
<i class="fa-brands fa-sass"></i> </span> </p> 
`;

/*------ Annim ------*/

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 150) {
    navBar.style.transform = "translateY(-200px)";
  } else {
    navBar.style.transform = "translateY(0px)";
  }
});
