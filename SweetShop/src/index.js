import './style.css'
import Navbar from './Navbar'
import About from './About';
import Menu from './Menu';
import ContactUs from './ContactUs';
import courseImage from "./images/about-image.jpeg"
import backdrop from "./images/backdrop.jpg"

document.body.classList = "body-class";

function componentNavbar() {
  const element = Navbar();
  console.log('element', element)
  // element.appendChild(btn);

  return element;
}

function AboutContent() {
  const element = About();
  console.log('element', element)
  // element.appendChild(btn);
  const imageLocation = document.getElementsByClassName('content-left-items');
  // console.log('imageLocation', imageLocation[0])
  // console.log('courseImage', courseImage)
  // imageLocation[0].appendChild(courseImage)
  // document.body.appendChild(courseImage);
  return element;
}
function MenuContent() {
  const element = Menu();
  console.log('element', element)
  // element.appendChild(btn);
  return element;
}
function ContactUsContent() {
  const element = ContactUs();
  console.log('element', element)
  // element.appendChild(btn);
  return element;
}


function loadPage(){
  document.body.appendChild(componentNavbar());
  const navbar = document.firstChild ;
  document.body.appendChild(AboutContent());
  
  const items = document.querySelector('ul').children
  console.log('items', items)
  for(let i = 0; i < items.length; i++){
    console.log('items[ i]', items[i])
    items[i].className = "link"
    items[i].addEventListener('click', (event)=> {
      // console.log('event', event)
      const elems = document.querySelector('body')
      // console.log('elems', elems.children[1])
      // console.log('items[i]', items[i])
      document.body.removeChild(elems.children[1]);
      if(items[i].textContent === "Menu"){
        // console.log('here', here)
        console.log('items[i]', items[i].className)
        items[i].className = "link active"
        items[i-1].className = "link"
        items[i+1].className = "link"
        document.body.appendChild(MenuContent());
      } else if(items[i].textContent === "About") {
        items[i].className = "link active"
        items[i + 1].className = "link"
        items[i + 2].className = "link"
        document.body.appendChild(AboutContent());
      } else if (items[i].textContent === "Contact Us"){
        items[i].className = "link active"
        items[i - 1].className = "link"
        items[i - 2].className = "link"
        document.body.appendChild(ContactUsContent());
      }
      
    })
    // console.log(`items[${i}].textContent`, items[i].textContent)

  }
}

// document.body.appendChild(componentContentV1());
loadPage();
