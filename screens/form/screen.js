let currentEditId = null;
let rootRef = null;

export function init({ root, navigate, state }) {

  rootRef = root;

  const titleInput = root.querySelector("#title");
  const descriptionInput = root.querySelector("#description");
  const categoryInput = root.querySelector("#category");
  const priorityInput = root.querySelector("#priority");

  root.querySelector("#back")
    .addEventListener("click", () => navigate("principal"));

  root.querySelector("#save")
    .addEventListener("click", () => {

      const title = titleInput.value.trim();
      const description = descriptionInput.value.trim();
      const category = categoryInput.value;
      const priority = priorityInput.value;

      if (!title) {
        alert("El título es obligatorio");
        return;
      }

      if (currentEditId) {
        const activity = state.activities.find(a => a.id === currentEditId);
        if (activity) {
          activity.title = title;
          activity.description = description;
          activity.category = category;
          activity.priority = priority;
        }
      } else {
        state.activities.push({
          id: Date.now(),
          title,
          description,
          category,
          priority,
          completed: false,
          createdAt: new Date().toISOString()
        });
      }

      localStorage.setItem(
        "ramcoActivities",
        JSON.stringify(state.activities)
      );

      currentEditId = null;

      titleInput.value = "";
      descriptionInput.value = "";
      categoryInput.value = "Personal";
      priorityInput.value = "Media";

      navigate("principal");
    });
}

export function onShow({ state, params }) {

  const titleInput = rootRef.querySelector("#title");
  const descriptionInput = rootRef.querySelector("#description");
  const categoryInput = rootRef.querySelector("#category");
  const priorityInput = rootRef.querySelector("#priority");

  if (params?.editId) {
    currentEditId = params.editId;

    const activity = state.activities.find(a => a.id === currentEditId);

    if (activity) {
      titleInput.value = activity.title;
      descriptionInput.value = activity.description || "";
      categoryInput.value = activity.category || "Personal";
      priorityInput.value = activity.priority || "Media";
    }
  } else {
    currentEditId = null;

    titleInput.value = "";
    descriptionInput.value = "";
    categoryInput.value = "Personal";
    priorityInput.value = "Media";
  }
}