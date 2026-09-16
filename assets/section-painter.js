(() => {
  const images = {
    "": "/pintor.png",
    "/video-aulas": "/pintor video aula.png",
    "/material-de-apoio": "/pintor material de apoio.png",
    "/bonus": "/pintor bonus.png"
  };
  let currentPath = null;
  let currentPainter = null;
  let hideTimer = null;

  const getPath = () => window.location.pathname.replace(/\/$/, "");

  const hide = () => {
    if (!currentPainter) return;
    currentPainter.classList.add("section-painter-hidden");
    window.clearTimeout(hideTimer);
    window.setTimeout(() => {
      if (currentPainter?.classList.contains("section-painter-hidden")) {
        currentPainter.remove();
        currentPainter = null;
      }
    }, 350);
  };

  const updatePainter = () => {
    const path = getPath();
    if (path === currentPath) return;
    currentPath = path;
    if (currentPainter) currentPainter.remove();
    window.clearTimeout(hideTimer);

    const source = images[path];
    if (!source) {
      currentPainter = null;
      return;
    }

    currentPainter = document.createElement("img");
    currentPainter.className = "section-painter";
    currentPainter.src = source;
    currentPainter.alt = "";
    currentPainter.setAttribute("aria-hidden", "true");
    document.body.appendChild(currentPainter);
    hideTimer = window.setTimeout(hide, 7000);
  };

  updatePainter();
  window.setInterval(updatePainter, 150);
  window.addEventListener("popstate", updatePainter);
  document.addEventListener("click", (event) => {
    if (getPath() === "/video-aulas" && event.target.closest("button, iframe, video, [role=button]")) hide();
  }, true);
})();
