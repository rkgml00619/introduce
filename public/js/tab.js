const portfolioMenu = document.querySelectorAll(".portfolio .tabMenu li");
const portfolioConts = document.querySelectorAll(".portfolio .tabConts .tabList");

portfolioConts[0].classList.add("on");

for(let i = 0; i < portfolioMenu.length; i++){
    portfolioMenu[i].onclick = function(){
        portfolioMenu.forEach(function(menu, idx){
            menu.classList.remove("on");
            portfolioConts[idx].classList.remove("on");
            portfolioConts[idx].style.opacity = "0";
            portfolioConts[idx].style.transform = "translateY(-50px)";
        });
        portfolioMenu[i].classList.add("on");
        portfolioConts[i].classList.add("on");
        setTimeout(() => {
            portfolioConts[i].style.opacity = "1";
            portfolioConts[i].style.transform = "translateY(0)";
        }, 10);
    }
}