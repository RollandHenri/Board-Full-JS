/*------ Variables ------*/

const nav = document.querySelector("nav");
const header = document.querySelector("header");
const aboutTitle = document.querySelector(".aboutTitle");
const aboutImg = document.querySelector(".aboutImg");
const skills = document.getElementById("skills");
const folio = document.getElementById("folio");
const contact = document.getElementById("contact");
const footer = document.getElementById("footer");
console.log(footer);

/*------ Create HTML ------*/

nav.innerHTML = `
<div class="logo"> </div>

<ul>
<li> <a href="#"> Accueil </a> </li>
<li> <a href='#about'> About </a> </li>
<li> <a href="#skills">Skils </a></li>
<li> <a href="#folio"> Folio </a></li>
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

skills.innerHTML = `
<h2> Mes Skills </h2>
<div class='skillsContain'>
<div class="skillsLeft"> 
    <h3> Hard Skills </h3>
        <div class="iconLeft"> 
        <div class='iconFlex'>
            <i class="fa-brands fa-html5"></i>
            <p> HTML 5 </p>
        </div>
        <div class='iconFlex'>
            <i class="fa-brands fa-css3-alt"></i>
            <p> CSS 3 </p>
        </div>
        <div class='iconFlex'> 
           <i class="fa-brands fa-sass"></i>
            <p> SASS </p>
        </div>
        <div class='iconFlex'> 
            <i class="fa-brands fa-js"></i>
            <p> JavaScript </p>
        </div>
        </div> 
</div> 
<div class="skillsRight">
    <h3> Soft Skills </h3>
    <div class="iconRight"> 
    <div class='iconFlex'> 
        <i class="fa-brands fa-github"></i>
        <p> GitHub </p>
    </div>
    <div class='iconFlex'> 
        <i class="fa-brands fa-figma"></i>
        <p> Figma </p>
    </div>
    <div class='iconFlex'>
        <i class="fa-brands fa-spotify"></i>
        <p> Spotify </p>
    </div>
     <div class='iconFlex'>
        <i class="fa-solid fa-mug-saucer"></i>
        <p> Café </p>
    </div>
    </div>
</div> 
</div> 
`;

folio.innerHTML = `
<div class='folioContain'> 
  <h2> Folio </h2>  
  <div class="folioList"> 
  <div class="listCard card1">
    <div class='effect'> 
    <h3> HTML / SASS </h3>
    <p> Un site développé uniquement en HTML et CSS (SASS) </p> 
    </div>
  </div>
  <div class="listCard card2"> 
    <div class='effect'>
    <h3> HTML / SASS </h3>
    <p> Un site développé uniquement en HTML et CSS (SASS) </p> 
    </div> 
  </div>
  <div class="listCard card3"> 
    <div class='effect'>
    <h3> HTML / SASS </h3>
    <p> Un site développé en HTML / SASS / JavaScrip </p> 
    </div> 
  </div>
  <div class="listCard card4">
    <div class='effect'>
    <h3> JavaScript / SASS </h3>
    <p> Un site développé principalement en JavaScript et SASS ce qui en fait un site internet dynamique et fluide</p> 
    </div>
  </div>
  </div>
</div>
`;

contact.innerHTML = `
<form class='form' action='#'> 
<h3> Contact </h3>
<div class='formul'>
<input type='text' placeholder='Nom'>
<input type='text' placeholder='Email'>
 <textarea name="message" id="message" resize='none' placeholder='Votre message'></textarea>
 </div>
 <input type='submit'/> 
`;

footer.innerHTML = `
<div class='footerList'> 
  <ul>
    <li><h3>Réseau</h3></li>
    <li><a href='github.com'> <i class="fa-brands fa-github"></i> GitHub </a></li>
    <li><a href='twiter.com'><i class="fa-brands fa-twitter"></i> Twitter </a> </li>
    <li><a href='instagram.comm'><i class="fa-brands fa-instagram"> </i> Instag</a> </li>
  </ul>
  <h3> Site créé par Tramontane </br> </br> En 2024 </h3>
  
</div>

`;

/*------ EventListener ------*/

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.transform = "translateY(-250px)";
  } else {
    nav.style.transform = "translateY(0px)";
  }
});

/*------ Observer translate X ------*/

const observer = new IntersectionObserver(
  (entrer) => {
    for (const entry of entrer) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.5,
  }
);

observer.observe(aboutImg);

/*----- Observer Translate Y ------*/

const observerII = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.7,
  }
);

observerII.observe(skills);
observerII.observe(folio);
