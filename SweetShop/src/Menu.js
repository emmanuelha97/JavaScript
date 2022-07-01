import course1 from "./images/course-1.jpeg"
import course2 from "./images/course-2.jpeg"
import course3 from "./images/course-3.jpeg"
import course4 from "./images/course-4.jpeg"




const menuItems = [
  {
    title: "Salad Bowl",
    price: "$9.99",
    image: course1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Avocado Bowl",
    price: "$12.99",
    image: course2,
    description: "Consequuntur maxime tenetur tempore nam ea dolores distinctio."
  },
  {
    title: "Salad Bowl",
    price: "$5.99",
    image: course3,
    description: "epellat assumenda eligendi totam et impedit qui esse, sit quisquam."
  },
  {
    title: "Salad Bowl",
    price: "$21.99",
    image: course4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

let menuContent;

function createMenuItems(menu, content) {
  console.log('menu', menu)
  content = menu.map((menuItem) => {
    return `
    
        <div class="menu-item-container">
          <div class="menu-item-img"><img src=${menuItem.image}></img></div>
          <div class="info">
          <span class="menu-item-title">${menuItem.title}</span>
          <span class="menu-item-price">${menuItem.price}</span>
          <span class="menu-item-description">${menuItem.description}</span>
          </div>
        </div>
     `
  })
  content = content.join("");
  // console.log('content', content)
  return content;
}


export default function contentv2() {

  let newMenu = createMenuItems(menuItems, menuContent);
  // console.log('newMenu',newMenu)

  // console.log("Hello Console");
  const element = document.createElement("div");
  element.innerHTML = `
    <div class="menu-container">
      <div class="menu-title"><h1>Menu</h1>
       <div class="menu-title-underline"></div></div>
       <div class="menu-items-container">  ${newMenu}</div>
      </div>
    </div>
  `;
  return element;
}



      // <div class="menu-items-container">
      //   <div class="menu-item-container">
      //     <div class="menu-item-img"><img src=${course1}></img></div>
      //     <span class="menu-item-title"></span>
      //     <span class="menu-item-price"></span>
      //     <span class="menu-item-description"></span>
      //   </div>
      //   <div class="menu-item-container">
      //     <div class="menu-item-img"><img src=${course2}></img></div>
      //     <span class="menu-item-title"></span>
      //     <span class="menu-item-price"></span>
      //     <span class="menu-item-description"></span>
      //   </div>
      //   <div class="menu-item-container">
      //     <div class="menu-item-img"><img src=${course3}></img></div>
      //     <span class="menu-item-title"> </span>
      //     <span class="menu-item-price"></span>
      //     <span class="menu-item-description"></span>
      //   </div>
      //   <div class="menu-item-container">
      //     <div class="menu-item-img"> <img src=${course4}></img></div>
      //     <span class="menu-item-title"></span>
      //     <span class="menu-item-price"></span>
      //     <span class="menu-item-description"></span>
      //   </div>