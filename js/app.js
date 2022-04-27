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

//Remove an specific item from cart
const removeCourse = (ev) => {
  if (ev.target.classList.contains("borrar-curso")) {
    const courseId = ev.target.getAttribute("data-id");
    cartItems = cartItems.filter((course) => course.id !== courseId);
    htmlCart();
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

  //Check if an item already exists in cart
  const existingItem = cartItems.some((course) => course.id === infoCourse.id);
  if (existingItem) {
    const courses = cartItems.map((course) => {
      if (course.id === infoCourse.id) {
        course.quantity++;
        return course;
      } else {
        return course;
      }
    });
    cartItems = [...courses];
  } else {
    cartItems = [...cartItems, infoCourse];
  }

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
cart.addEventListener("click", removeCourse);
