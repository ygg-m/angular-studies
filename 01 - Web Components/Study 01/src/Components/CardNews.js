class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    // create elements
    // container
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    // card left
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");
    const author = document.createElement("span");
    const authorImg = document.createElement("img");
    authorImg.setAttribute("src", "./assets/profile_ygor.jpeg");

    // card right
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    return componentRoot;
  }

  styles() {}
}

customElements.define("card-news", CardNews);
