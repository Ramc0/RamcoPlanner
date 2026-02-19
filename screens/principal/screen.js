let rootRef;

export function init({ root, navigate, state }) {
    rootRef = root;

    root.querySelector("#btn-new")
        .addEventListener("click", () => navigate("form"));

    root.querySelector("#btn-stats")
        .addEventListener("click", () => navigate("stats"));

    render(state);
}

export function onShow({ state }) {
    render(state);
}

function render(state) {
    const list = rootRef.querySelector("#activity-list");

    if (!state.activities.length) {
        list.innerHTML = "<p>No hay actividades todavía.</p>";
        return;
    }

    list.innerHTML = state.activities.map(a => `
    <div class="card">
      <h3>${a.title}</h3>
      <p>${a.description}</p>
    </div>
  `).join("");
}