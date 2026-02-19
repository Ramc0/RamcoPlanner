const grid = document.getElementById("grid");

const state = {
    activities: []
};

const routes = {
    principal: { x: 0, y: 0, path: "screens/principal" },
    form: { x: 1, y: 0, path: "screens/form" },
    detalle: { x: 0, y: 1, path: "screens/detalle" },
    stats: { x: 1, y: 1, path: "screens/stats" }
};

const loaded = new Map();
let currentRoute = "principal";

/* -------- LocalStorage -------- */
const saved = localStorage.getItem("ramcoActivities");
if (saved) {
    state.activities = JSON.parse(saved);
}

/* -------- Framework -------- */
function ensureSlots() {
    if (grid.children.length) return;
    for (let i = 0; i < 4; i++) {
        const slot = document.createElement("div");
        slot.className = "screen-slot";
        grid.appendChild(slot);
    }
}

function slotIndex(routeName) {
    const r = routes[routeName];
    return r.y * 2 + r.x;
}

async function loadScreen(routeName) {
    if (loaded.has(routeName)) return;

    const r = routes[routeName];
    const slot = grid.children[slotIndex(routeName)];

    const html = await fetch(`${r.path}/screen.html`).then(r => r.text());
    slot.innerHTML = html;

    const cssId = `css-${routeName}`;
    if (!document.getElementById(cssId)) {
        const css = await fetch(`${r.path}/screen.css`).then(r => r.text());
        const style = document.createElement("style");
        style.id = cssId;
        style.textContent = css;
        document.head.appendChild(style);
    }

    const mod = await import(`../${r.path}/screen.js`);
    if (mod.init) {
        mod.init({ root: slot, navigate, state });
    }

    loaded.set(routeName, true);
}

async function navigate(routeName, params = {}) {
    await loadScreen(routeName);

    const r = routes[routeName];
    const x = window.innerWidth * r.x;
    const y = window.innerHeight * r.y;
    grid.style.transform = `translate(${-x}px, ${-y}px)`;

    currentRoute = routeName;

    const mod = await import(`../${r.path}/screen.js`);
    if (mod.onShow) {
        mod.onShow({ state, params });
    }
}

ensureSlots();
await loadScreen("principal");
await loadScreen("form");
await loadScreen("detalle");
await loadScreen("stats");
navigate("principal");