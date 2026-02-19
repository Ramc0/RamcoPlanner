let rootRef;

export function init({ root, navigate, state }) {
  rootRef = root;

  root.querySelector("#back")
    .addEventListener("click", () => navigate("principal"));

  render(state);
}

export function onShow({ state }) {
  render(state);
}

function render(state) {
  const total = state.activities.length;
  const completed = state.activities.filter(a => a.completed).length;
  const pending = total - completed;

  rootRef.querySelector("#stats-content").innerHTML = `
    <div class="stats-box">
      <p>Total: ${total}</p>
      <p>Completadas: ${completed}</p>
      <p>Pendientes: ${pending}</p>
    </div>
  `;
}