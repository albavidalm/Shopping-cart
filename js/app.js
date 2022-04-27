const cart = document.querySelector("#carrito");
const cartContainer = document.querySelector("#lista-carrito tbody");
const emptyCartBtn = document.querySelector("#vaciar-carrito");
const coursesList = document.querySelector("#lista-cursos");
let cartItems = [];

const addCourse = (ev) => {
  ev.preventDefault();
  if (ev.target.classList.contains("agregar-carrito")) {
    const selectedCourse = ev.target.parentElement.parentElement;
    getCourseData(selectedCourse);
  }
};

const getCourseData = (course) => {
  //console.log(course);
  const infoCourse = {
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    quantity: 1,
  };
  cartItems = [...cartItems, infoCourse];
  console.log(cartItems);
  htmlCart();
};

//Show cart items at DOM ------------
htmlCart = () => {
  cleanHtml();
  cartItems.forEach((course) => {
    const { image, title, price, quantity, id } = course;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${image}" width="100"</td>
      <td>${title}</td>
      <td>${price}</td>
      <td>${quantity}</td>
      <td><a href="#" class="borrar-curso" data-id=${id}> X </a></td>
      `;
    cartContainer.appendChild(row);
  });
};

//Remove previous items from Cart (to not repeat them)
const cleanHtml = () => {
  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }
};

// Events ----------
coursesList.addEventListener("click", addCourse);
