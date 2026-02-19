export function init({ root, navigate, state }) {

  root.querySelector("#back")
    .addEventListener("click", () => navigate("principal"));

  root.querySelector("#save")
    .addEventListener("click", () => {
      const title = root.querySelector("#title").value.trim();
      const description = root.querySelector("#description").value.trim();

      if (!title) return alert("El título es obligatorio");

      state.activities.push({
        id: Date.now(),
        title,
        description,
        completed: false
      });

      localStorage.setItem(
        "ramcoActivities",
        JSON.stringify(state.activities)
      );

      navigate("principal");
    });
}