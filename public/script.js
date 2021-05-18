let model = {};

const controller = (function () {
  async function init() {
    const response = await fetch('/links.json');
    model = await response.json();
    view.render();
  }

  return { init };
})();

const view = (function () {
  function render() {
    document.title = model.hostname;
    document.getElementById('hostname').innerText = model.hostname;
    const menuEl = document.getElementById('menu');

    for (link in model.links) {
      menuEl.innerHTML += `
        <li class="menu__item">
          <i class="arrow"></i>
          <a class="menu__link" href="${model.links[link]}">${link}</a>
        </li>
      `;
    }
  }

  return { render };
})();

document.addEventListener('DOMContentLoaded', (event) => {
  controller.init();
});
