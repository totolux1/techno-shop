
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".productos");
  container.innerHTML = "<p>Cargando productos...</p>";
  fetch("/api/productos")
    .then(res => res.json())
    .then(data => {
      container.innerHTML = data.map(p => 
        `<div><h3>${p.nombre}</h3><p>${p.precio} USD</p></div>`
      ).join("");
    });
});
