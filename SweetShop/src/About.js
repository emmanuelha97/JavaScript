import aboutImg from "./images/owner-pic.jpg"
export default function contentv1() {
    // console.log("Hello Console");
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="content-container">
      <div class="content-items-left">
        <div class="content-left">
          <div class="content-left-items">
          <img src=${aboutImg}></img>
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="content-right-items">
          <div class="content-right-module">
            <h3>About</h3>
            <div class="title-underline"></div>
            <div class="content-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime tenetur tempore nam ea dolores distinctio recusandae repudiandae temporibus eos repellat assumenda eligendi totam et impedit qui esse, sit quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  `;
    return element;
}
