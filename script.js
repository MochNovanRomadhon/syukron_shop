const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener ('click', () =>{
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener ('click', () =>{
        nav.classList.remove('active')
    })
}

var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.src ="matahari.png";
        img.src ="patner1_putih";
    }
    else{
        icon.src ="bulan.png";
        img.src ="patner1.png";
    }

}