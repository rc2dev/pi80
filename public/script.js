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
    document.getElementById('hostname').innerText = model.hostname;
    const linksEl = document.getElementById('links');

    for (link in model.links) {
      linksEl.innerHTML += `<li><a href="${model.links[link]}">${link}</a></li>`;
    }
  }

  return { render };
})();

document.addEventListener('DOMContentLoaded', (event) => {
  controller.init();
})
