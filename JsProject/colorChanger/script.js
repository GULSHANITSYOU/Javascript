const body = document.querySelector("body");
const themeContainer = document.querySelector(".colore-theme-container");

let Buttons = [
  {
    
    text: "crimson",
    bgColore: "crimson",
    textColore: '#111111'

  },
  {
    text: "yellow green",
    bgColore: "greenyellow",
    textColore: '#111111'

  },
  {
    text: "sky blue",
    bgColore: "skyblue",
    textColore: '#111111'
  },
  {
    text: "Dark",
    bgColore: "#111111",
    textColore: '#fff'
  },
];

function setThemes() {
  Buttons.forEach((e) => {
    const btn = document.createElement("button");
    

    btn.innerText = e.text;
    btn.style.backgroundColor = e.bgColore;
    btn.style.color = e.textColore;
    
    btn.setAttribute('key' , e.textColore)
    themeContainer.appendChild(btn);

    console.log(themeContainer);
  });
}


setThemes();
const buttons = document.querySelectorAll(".colore-theme-container button");

console.log((themeContainer.style).backgroundColor);




 buttons.forEach((e)=>{

    console.log(e.style.backgroundColor);
    e.addEventListener('click',(e)=>{       
        body.style.backgroundColor = e.srcElement.style.backgroundColor;        
    })
})



