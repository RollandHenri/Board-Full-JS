/*------ Variables -----*/

const navBar = document.createElement("nav");
const header = document.createElement("header");
const main = document.createElement("main");

/*------ Create Block ------*/

document.body.appendChild(navBar);
document.body.appendChild(header);
document.body.appendChild(main);

/*------ InnerHTML ------*/

navBar.innerHTML = `
<div class="logo"> </div>
<ul> 
    <li><a href="#">Accueil</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#">Skill</a></li>
    <li><a href="#">Contact</a></li>
</ul>
`;

header.innerHTML = `
<h1> Le site Full JavaScript</h1>
<p> Est <span> 
 
<i class="fa-brands fa-sass"></i> </span> </p> 
`;

main.innerHTML = `
<section id="about">
<div class="aboutTitle"> <h2> A propos de moi </h2> 
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate minus, ut officia, quasi eos voluptas eum nulla libero provident aliquid, nobis neque dolorum suscipit. Sequi odio, explicabo labore sunt eius atque perspiciatis quo porro fugiat ad distinctio, quam autem excepturi. </p>
</div>
<div class="aboutImg"> </div>
</section> 
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
