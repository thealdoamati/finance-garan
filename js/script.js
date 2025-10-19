document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const open = document.getElementById("openMenu");
  const close = document.getElementById("closeMenu");

  open.addEventListener("click", () => {
    sidebar.classList.add("open");
    sidebar.setAttribute("aria-hidden", "false");
  });
  close.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebar.setAttribute("aria-hidden", "true");
  });

  // close when clicking outside on small screens
  document.addEventListener("click", (e) => {
    if (!sidebar.classList.contains("open")) return;
    const isClickInside = sidebar.contains(e.target) || open.contains(e.target);
    if (!isClickInside) {
      sidebar.classList.remove("open");
      sidebar.setAttribute("aria-hidden", "true");
    }
  });
});
