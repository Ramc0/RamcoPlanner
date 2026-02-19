let rootRef;
let navigateRef;
let stateRef;

export function init({ root, navigate, state }) {
  rootRef = root;
  navigateRef = navigate;
  stateRef = state;

  root.querySelector("#btn-new")
    .addEventListener("click", () => navigate("form"));

  root.querySelector("#btn-stats")
    .addEventListener("click", () => navigate("stats"));

  root.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      stateRef.filter = btn.dataset.filter;
      updateFilterUI();
      render();
    });
  });

  updateFilterUI();
  render();
}

export function onShow() {
  render();
}

function updateFilterUI() {
  rootRef.querySelectorAll(".filter").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === stateRef.filter);
  });
}

function save() {
  localStorage.setItem(
    "ramcoActivities",
    JSON.stringify(stateRef.activities)
  );
}

function render() {
  const list = rootRef.querySelector("#activity-list");

  let activities = stateRef.activities;

  if (stateRef.filter === "pending") {
    activities = activities.filter(a => !a.completed);
  }

  if (stateRef.filter === "completed") {
    activities = activities.filter(a => a.completed);
  }

  if (!activities.length) {
    list.innerHTML = `
      <div class="card">
        <p>No hay actividades.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = activities
    .slice()
    .reverse()
    .map(a => `
      <div class="card ${a.completed ? "completed" : ""}">
        <h3>${a.title}</h3>
        <p>${a.description || "Sin descripción"}</p>
        <div class="card-actions">
          <button data-complete="${a.id}">
            ${a.completed ? "Desmarcar" : "Completar"}
          </button>
          <button data-delete="${a.id}">Eliminar</button>
        </div>
      </div>
    `).join("");

  attachEvents();
}

function attachEvents() {
  rootRef.querySelectorAll("[data-complete]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.complete);
      const activity = stateRef.activities.find(a => a.id === id);
      activity.completed = !activity.completed;
      save();
      render();
    });
  });

  rootRef.querySelectorAll("[data-delete]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.delete);
      stateRef.activities = stateRef.activities.filter(a => a.id !== id);
      save();
      render();
    });
  });
}