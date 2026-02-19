export function init({ root, navigate }) {
  root.querySelector("#back")
    .addEventListener("click", () => navigate("principal"));
}