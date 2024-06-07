// Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  {
    if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          menu.classList.remove("header__nav_active");
        });
      }
    }
  }
})();

// blub active

const items = document.querySelectorAll(".home__blub-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("home__blub-item_active"));
    item.classList.add("home__blub-item_active");
  });
});

// change language

const langBtn = document.querySelector(".header__lang-btn");
const langText = langBtn.querySelector(".header__lang-text");

langBtn.addEventListener("click", () => {
  if (langText.textContent === "RU") {
    langText.textContent = "EN";
  } else {
    langText.textContent = "RU";
  }
});
