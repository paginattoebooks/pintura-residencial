(() => {
  const path = window.location.pathname.replace(/\/$/, "");
  const images = {
    "": "/pintor.png",
    "/video-aulas": "/pintor video aula.png",
    "/material-de-apoio": "/pintor material de apoio.png",
    "/bonus": "/pintor bonus.png"
  };
  const source = images[path];
  if (!source) return;

  document.querySelectorAll(".section-painter").forEach((painter) => painter.remove());
  const painter = document.createElement("img");
  painter.className = "section-painter";
  painter.src = source;
  painter.alt = "";
  painter.setAttribute("aria-hidden", "true");
  document.body.appendChild(painter);

  const hide = () => {
    painter.classList.add("section-painter-hidden");
    window.setTimeout(() => painter.remove(), 350);
  };

  window.setTimeout(hide, 7000);
  if (path === "/video-aulas") {
    document.addEventListener("click", (event) => {
      if (event.target.closest("button, iframe, video, [role=button]")) hide();
    }, true);
  }
})();
