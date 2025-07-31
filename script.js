function toggleMode(){
  /*será executada sempre que clicar no botão switch definido no html */
  const html = document.documentElement //torna o html um objeto dentro do JS
  html.classList.toggle('light') //faz a troca das classes

  const img = document.querySelector("#profile img") //pesquisa a imagem com o mesmo seletor do css

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute("src", "./assets/avatar.png")

  }
}