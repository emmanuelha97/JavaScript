export default function Navbar() {
  console.log("Hello Console");
  const element = document.createElement('div');
  element.classList.add('navbar-container');
  element.innerHTML = `
  <div class="navbar-content">
    <div class="left-content">
      <div className="logo"><h1>Sweets By Emmi</h1></div>
    </div>
    <div class="right-content">
      <ul>
        <li class="link"><a href="#">About</a></li>
        <li class="link"><a href="#">Menu</a></li>
        <li class="link"><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </div>
  `;
  return element;
}