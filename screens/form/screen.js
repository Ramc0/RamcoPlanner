export function init({ root, navigate, state }) {

  const titleInput = root.querySelector("#title");
  const descriptionInput = root.querySelector("#description");

  root.querySelector("#back")
    .addEventListener("click", () => navigate("principal"));

  root.querySelector("#save")
    .addEventListener("click", () => {

      const title = titleInput.value.trim();
      const description = descriptionInput.value.trim();

      if (!title) {
        alert("El título es obligatorio");
        return;
      }

      const newActivity = {
        id: Date.now(),
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString()
      };

      state.activities.push(newActivity);

      localStorage.setItem(
        "ramcoActivities",
        JSON.stringify(state.activities)
      );

      titleInput.value = "";
      descriptionInput.value = "";

      navigate("principal");
    });
}