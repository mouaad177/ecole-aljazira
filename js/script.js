document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.menu-toggle'),n=document.querySelector('.nav');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>n&&n.classList.remove('open')));const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();});
async function loadInstagramPosts() {
    try {
        const response = await fetch(
            "https://hidden-hat-b103el-jazira-instagram-api.mouaad-kouch.workers.dev/instagram"
        );

        const data = await response.json();

        console.log("Réponse de l'API Instagram :", data);

    } catch (error) {
        console.error("Erreur API Instagram :", error);
    }
}

loadInstagramPosts();