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
    // author
    const author = document.createElement("span");
    const authorName = document.createTextNode(
      this.getAttribute("authorName") || "Anonymous"
    );
    const authorImg = document.createElement("img");
    authorImg.src =
      this.getAttribute("authorImg") || "./assets/profile_default.png";
    authorImg.alt = "Profile Image";
    author.appendChild(authorImg);
    author.appendChild(authorName);
    // title
    const title = document.createElement("h2");
    const description = document.createElement("h3");
    title.innerText = this.getAttribute("title");
    description.innerText = this.getAttribute("description");
    // push to card left container
    cardLeft.appendChild(author);
    cardLeft.appendChild(title);
    cardLeft.appendChild(description);

    // card right
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");
    const newsImg = document.createElement("img");
    newsImg.src = this.getAttribute("newsImg") || "./assets/news_image_default.png";
    cardRight.appendChild(newsImg);

    // push elements to card
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");

    style.innerText = `
      
    `
  }
}

customElements.define("card-news", CardNews);
