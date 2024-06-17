var abrirMenu = document.querySelector(".abrir-menu-icon");
var fecharMenu = document.querySelector(".fechar-menu-icon");
var menuAtivo = document.querySelector(".menu-hamburger");

// função que abre e fecha o menu hamburguer
abrirMenu.addEventListener('click', function () {
    abrirMenu.style.display = "none";
    fecharMenu.style.display = "block";
    menuAtivo.classList.add("menu-hamburger-ativo");
});

fecharMenu.addEventListener('click', function () {
    fecharMenu.style.display = "none";
    abrirMenu.style.display = "block";
    menuAtivo.classList.remove("menu-hamburger-ativo");
});

var gridPortfolio = document.querySelectorAll(".grid-portfolio");
var gridLinkProjetos = document.querySelectorAll(".grid-portfolio-links-projetos");

// função que faz aparecer os links de cada portfólio
gridPortfolio.forEach(function(gridPortfolioAtual, index){
    gridPortfolioAtual.addEventListener('mouseover', function(){
        gridLinkProjetos[index].classList.add("grid-portfolio-links-projetos-ativo");
    });

    gridPortfolioAtual.addEventListener('mouseout', function(){
        gridLinkProjetos[index].classList.remove("grid-portfolio-links-projetos-ativo");
    });
});

// função que faz o efeito suave quando o scroll é ativado
function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll, .js-scroll-esquerda, .js-scroll-direita');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.8;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('ativo');
          else 
            section.classList.remove('ativo');
        })
      }
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
  }
  initAnimacaoScroll();