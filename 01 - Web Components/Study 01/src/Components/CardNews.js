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
    authorImg.setAttribute("class", "author_img");
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
    newsImg.src =
      this.getAttribute("newsImg") || "./assets/news_image_default.png";
    cardRight.appendChild(newsImg);

    // push elements to card
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .card {
          max-width: 700px;
          display: flex;
          justify-content: center;
          gap: 1rem;
          outline: solid 1px rgb(70, 70, 70);
          padding: .5rem 1rem;
        }
        
        .author_img {
          max-width: 20px;
          border-radius: 50%;
        }
        
        .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .card__left > h2 {
          margin-top: 1rem;
          font-size: 1.375rem;
        }
        
        .card__left > span {
          display: flex;
          gap: .5rem;
        }

        .card__left > span,
        .card__left > h3 {
          font-size: 1rem;
          font-weight: 400;
          color: rgb(120, 120, 120);
        }

        .card__right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
    
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
