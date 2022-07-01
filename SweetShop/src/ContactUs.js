export default function contentv2() {
    // console.log("Hello Console");
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="contactus-container">
            <div class="contactus-center">
                <div class="contactus-title"><h1>Contact Us</h1></div>
                <div class="contactus-underline"></div>
                <div class="contactus-information">
                    <h4>Owner: Pup McPup</h4>
                    <h4>Location: 0000 Nw 0th St, Miami, Fl</h4>
                    <h4>Hours: 10am - 5pm | Mon - Fri</h4>
                    <h4>Phone #: (305) 305-0000</h4>
                </div>
            </div>
        </div>
  `;
    return element;
}
