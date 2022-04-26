const cart = document.querySelector("#carrito");
const cartContainer = document.querySelector("#lista-carrito tbody");
const emptyCartBtn = document.querySelector("#vaciar-carrito");
const coursesList = document.querySelector("#lista-cursos");

/*const uploadListeners = () => {
coursesList.addEventListener("click", addCourse);
};*/

const addCourse = (ev) => {
  ev.preventDefault();
  if (ev.target.classList.contains("agregar-carrito")) {
    const selectedCourse = ev.target.parentElement.parentElement;
    getCourseData(selectedCourse);
  }
};

const getCourseData = (course) => {
  const infoCourse = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    quantity: 1,
  };
  console.log(infoCourse);
};

//uploadListeners();

// Events ----------
coursesList.addEventListener("click", addCourse);
