let rootRef;
let navigateRef;
let stateRef;
let searchTerm = "";
let sortMode = "newest";

export function init({ root, navigate, state }) {
    rootRef = root;
    navigateRef = navigate;
    stateRef = state;
    stateRef.filter = stateRef.filter || "all";

    root.querySelector("#btn-new")
        .addEventListener("click", () => navigate("form"));

    root.querySelector("#btn-stats")
        .addEventListener("click", () => navigate("stats"));

    // FILTROS
    root.querySelectorAll(".filter").forEach(btn => {
        btn.addEventListener("click", () => {
            stateRef.filter = btn.dataset.filter;
            updateFilterUI();
            render();
        });
    });

    // BÚSQUEDA
    root.querySelector("#search")
        .addEventListener("input", (e) => {
            searchTerm = e.target.value.toLowerCase();
            render();
        });

    root.querySelector("#sort").addEventListener("change", (e) => {
        sortMode = e.target.value;
        render();
    });

    updateFilterUI();
    render();
}

export function onShow({ state }) {
    stateRef = state;
    updateFilterUI();
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

    // BÚSQUEDA
    if (searchTerm) {
        activities = activities.filter(a =>
            a.title.toLowerCase().includes(searchTerm) ||
            (a.description || "").toLowerCase().includes(searchTerm)
        );
    }
    // ORDENACIÓN
    if (sortMode === "newest") {
        activities.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }

    if (sortMode === "oldest") {
        activities.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }

    if (sortMode === "priority") {
        const order = { Alta: 1, Media: 2, Baja: 3 };
        activities.sort((a, b) => order[a.priority] - order[b.priority]);
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
        .map(a => `
        <div class="card ${a.completed ? "completed" : ""}"data-view="${a.id}">
            <div class="card-header">
                <h3>${a.title}</h3>
                <span class="badge ${(a.priority || "Media").toLowerCase()}">
                    ${a.priority || "Media"}
                </span>
            </div>
            <p>${a.description || "Sin descripción"}</p>
            <div class="card-actions">
                <button data-edit="${a.id}">Editar</button>
                <button data-complete="${a.id}">
                    ${a.completed ? "Desmarcar" : "Completar"}
                </button>
                <button data-delete="${a.id}">Eliminar</button>
            </div>
        </div>
    `).join("");

    attachEvents();
}
function openModal(activity) {
    const modal = rootRef.querySelector("#modal");
    const body = rootRef.querySelector("#modal-body");

    body.innerHTML = `
    <h2>${activity.title}</h2>
    <p><strong>Descripción:</strong> ${activity.description || "Sin descripción"}</p>
    <p><strong>Categoría:</strong> ${activity.category}</p>
    <p><strong>Prioridad:</strong> ${activity.priority}</p>
    <p><strong>Estado:</strong> ${activity.completed ? "Completada" : "Pendiente"}</p>
    <p><strong>Creada:</strong> ${new Date(activity.createdAt).toLocaleString()}</p>
  `;

    modal.classList.remove("hidden");

    rootRef.querySelector("#close-modal").onclick = () => {
        modal.classList.add("hidden");
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    };
}

function attachEvents() {
    // EDITAR
    rootRef.querySelectorAll("[data-edit]").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.edit);
            navigateRef("form", { editId: id });
        });
    });

    // COMPLETAR / DESMARCAR
    rootRef.querySelectorAll("[data-complete]").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.complete);
            const activity = stateRef.activities.find(a => a.id === id);
            if (!activity) return;
            activity.completed = !activity.completed;
            save();
            render();
        });
    });

    // ELIMINAR
    rootRef.querySelectorAll("[data-delete]").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.delete);

            if (!confirm("¿Seguro que deseas eliminar esta actividad?")) return;

            stateRef.activities = stateRef.activities.filter(a => a.id !== id);
            save();
            render();
        });
    });
    // VER DETALLE
    rootRef.querySelectorAll("[data-view]").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return;

            const id = Number(card.dataset.view);
            const activity = stateRef.activities.find(a => a.id === id);
            openModal(activity);
        });
    });
}