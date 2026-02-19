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
  const percent = total ? Math.round((completed / total) * 100) : 0;

  const categories = {};
  state.activities.forEach(a => {
    categories[a.category] = (categories[a.category] || 0) + 1;
  });

  rootRef.querySelector("#stats-content").innerHTML = `
    <div class="stats-box">
      <p><strong>Total:</strong> ${total}</p>
      <p><strong>Completadas:</strong> ${completed}</p>
      <p><strong>Pendientes:</strong> ${pending}</p>
      <p><strong>Progreso:</strong> ${percent}%</p>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>
    </div>

    <div class="stats-box">
      <h3>Por categoría</h3>
      ${Object.entries(categories).map(([cat, count]) => `
        <p>${cat}: ${count}</p>
      `).join("")}
    </div>
  `;
}