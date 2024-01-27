export default class HomePage {
  constructor() {
    // super();
    this.setTitle("Home");
  }

  async renderHTML() {
    `
    <h1>Welcome to our forum</h1>
    `;
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const homeContainer = document.getElementById("content");
//   homeContainer.innerHTML = `
//         <p>home</p>
//     `;
// });
