class DinamicTitle extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // component base
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("title");

    // component style
    const style = document.createElement("style");
    style.textContent = `
        h1 {
            // color: red;
        }
    `;

    // send to shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("dinamic-title", DinamicTitle);
