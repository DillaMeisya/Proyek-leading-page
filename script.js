 
seTimeout(function(){
    alert("selamat datang di Toko Online kami!");
}, 3000);
const heroText = document.querySelector("#hero h2");
const colors =["#ff5733","33ff57","3357ff"];
let colorIndex = 0;
function changeHeroTextColor(){
    heroText.style.color = colors[colorIndex];
    colorIndex = 0;
}
setInterval (changeHeroTextColor, 2000);
let currentImageIndex = 0;
const images =["img/gambar1.jpg", "img/gambar2.jpg"];
function changeHeroImage(){
    currentImageIndex = (currentImageIndex +1) % images.length;
    document.querySelector(
        "#hero"
    ).style.backgroundImage = 'url'($images[currentImageIndex]);
}
setInterval(changeHeroImage,2000);
const productImages = document.querySelectorAll("pro-card img");
productImages.forEach((image)=>{
    image.addEventListener("click",() => {
        image.style.transform="scale(1.5)";
        image.style.transition="transform 0.5s";
    })
    image.addEventListener("mouseleave",() => {
        image.style.transform="scale(1)";
    });
});
document.querySelectorAll(".cta").forEarch(function(button){
    button.addEventListener("click",function(event){
        event.preventDefault();
        alert("Terima Kasih telah membeli produk ini!");
    });
});
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent="^";
scrollToTopBtn.id = "scrollTotopBtn";
document.body.appendChild(scrollToTopBtn);
window.addEventListener("scroll",()=>{
    iff (window.scrolly > 100) 
        scrollToTopBtn.style.display ="block";
    }
);
scrollToTopBtn.addEventListener("click"),() => 
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

