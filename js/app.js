const cart = document.querySelector("#carrito");
const cartContainer = document.querySelector("#lista-carrito tbody");
const emptyCartBtn = document.querySelector("#vaciar-carrito");
const coursesList = document.querySelector("#lista-cursos");

const uploadListeners = () => {
  coursesList.addEventListener("click", addCourse);
};

const addCourse = (ev) => {
  ev.preventDefault();
  if (ev.target.classList.contains("agregar-carrito")) {
    console.log(ev.target);
  }
};
uploadListeners();
