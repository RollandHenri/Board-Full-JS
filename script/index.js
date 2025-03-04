/*------ Variables ------*/

const nav = document.querySelector("nav");
const header = document.querySelector("header");
const aboutTitle = document.querySelector(".aboutTitle");
const aboutImg = document.querySelector(".aboutImg");
const skills = document.getElementById("skills");
const folio = document.getElementById("folio");
const contact = document.getElementById("contact");
const footer = document.getElementById("footer");
const textarea = document.querySelector("textarea");
const submit = document.querySelector('input[type="submit"]');
const result = document.querySelector(".result");
const popUp = document.querySelector(".popUp");
const mailAnswer = document.getElementById("mailAnswer");
const news = document.getElementById("mail");
const close = document.querySelector(".popUp > i");

let scrollDown = 0;

/*------ Create HTML ------*/

nav.innerHTML = `
<div class="logo"> </div>

<ul>
<li> <a href='#skills'> Skills </a> </li>
<li> <a href="#folio"> Folio </a></li>
<li> <a href="mailto:rolland.h.dev@gmail.com"> Contact </a></li>
</ul>
`;

skills.innerHTML = `
<h2> Mes compétences </h2>
<div class='skillsContain'>
<div class="skillsLeft"> 
    <h3> Développement Front-End </h3>
        <div class="iconLeft"> 
        
        <div class='iconFlex'> 
           <i class="fa-brands fa-sass"></i>
            <p> SASS </p>
        </div>
        <div class='iconFlex'> 
            <i class="fa-brands fa-js"></i>
            <p> JavaScript </p>
        </div>
        <div class='iconFlex'>
            <i class="fa-brands fa-react"></i>
            <p> React.js </p>
        </div>
        </div> 
        <div class="skillsPara">
           <p>
              Je développe des site internet et des applications web.
              Je travail avec plusieurs Frameworks pour apporter des solutions particuliers à vos attentes.
          </p>
        </div>
</div> 

<div class="skillsMid">
      <h3> Développement Wordpress</h3>
        <div class="iconLeft"> 
          <div class='iconFlex'>
              <i class="fa-brands fa-wordpress"></i>
              <p> Wordpress</p>
          </div> 
        </div>
            <div class="skillsPara">
           <p>
              Je peux développer des sites internet sous Wordpress. 
              Je peux également modifier un site Wordpress existant et mettre en place des optimisations
          </p>
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
        <i class="fa-solid fa-mug-saucer"></i>
        <p> Café </p>
    </div>
    </div>
      <div class="skillsPara">
           <p>
              Je travail avec des outils pour retoucher et optimiser vos site (création de maquette, retouche de photos, ...)
          </p>
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
    <button><a href='#'> En savoir plus </a> </button>
    </div>
  </div>
  <div class="listCard card2"> 
    <div class='effect'>
    <h3> HTML / SASS </h3>
    <p> Un site développé uniquement en HTML et CSS (SASS) </p> 
    <button><a href='#'> En savoir plus </a> </button>
    </div> 
  </div>
  <div class="listCard card3"> 
    <div class='effect'>
    <h3> HTML / SASS </h3>
    <p> Un site développé en HTML / SASS / JavaScrip </p> 
    <button><a href='#'> En savoir plus </a> </button>
    </div> 
  </div>
  <div class="listCard card4">
    <div class='effect'>
    <h3> JavaScript / SASS </h3>
    <p> Un site développé principalement en JavaScript et SASS ce qui en fait un site internet dynamique et fluide</p> 
    <button><a href='#'> En savoir plus </a> </button>
    </div>
  </div>
  </div>
</div>
`;

footer.innerHTML = `
<div class='footerList'> 
  <ul>
    <li><h3>Réseau</h3></li>
    <li><a href='github.com'> <i class="fa-brands fa-github"></i> GitHub </a></li>
    <li><a href='twiter.com'><i class="fa-brands fa-twitter"></i> Twitter </a> </li>
    <li><a href='instagram.comm'><i class="fa-brands fa-instagram"> </i> Instag</a> </li>
  </ul>
  <h3> Site créé par Rolland-Dev </br> </br> En 2024 </h3>
  
</div>

`;

/*------ Observer translate X ------*/

const observer = new IntersectionObserver(
  (entrer) => {
    for (const entry of entrer) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
        entry.target.style.right = "0px";
      }
    }
  },
  {
    threshold: 0.5,
  }
);

// observer.observe(aboutImg);

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
    threshold: 0.3,
  }
);

observerII.observe(skills);
observerII.observe(folio);
