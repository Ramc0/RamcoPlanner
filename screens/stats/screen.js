function render(state) {
  const list = rootRef.querySelector("#activity-list");

  if (!state.activities.length) {
    list.innerHTML = `
      <div class="card">
        <p>No tienes actividades todavía.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = state.activities.map(a => `
    <div class="card">
      <h3>${a.title}</h3>
      <p>${a.description}</p>
    </div>
  `).join("");
}