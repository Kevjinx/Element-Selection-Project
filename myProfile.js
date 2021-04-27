window.addEventListener("DOMContentLoaded", (event) => {
  // Your Javascript goes here

  const h1Ele = document.createElement("h1")

  h1Ele.setAttribute('id', 'top')

  const gandhi = document.createTextNode('Mahatma Gandhi')

  h1Ele.appendChild(gandhi);

  document.body.appendChild(h1Ele)

});
