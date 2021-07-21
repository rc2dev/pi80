let model = {};

const controller = (function () {
  async function init() {
    try {
      const response = await fetch('/links.json');
      if (!response.ok) throw response;

      model = await response.json();
      view.render();
    } catch (e) {
      view.renderError();
    }
  }

  return { init };
})();

const view = (function () {
  function render() {
    document.title = model.title;
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

  function renderError() {
    document.getElementById('error').innerText = 'Error fetching links.';
  }

  return { render, renderError };
})();

document.addEventListener('DOMContentLoaded', (event) => {
  controller.init();
});
