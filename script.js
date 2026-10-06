$(function () {
  // Responsive navigation using jQuery
  $(".menu-toggle").on("click", function () {
    $(".nav-links").toggleClass("open");
  });

  // Dark/light theme with localStorage
  const savedTheme = localStorage.getItem("resume-theme");
  if (savedTheme) $("html").attr("data-theme", savedTheme);

  function updateThemeIcon() {
    $("#themeToggle").text($("html").attr("data-theme") === "dark" ? "☀️" : "🌙");
  }
  updateThemeIcon();

  $("#themeToggle").on("click", function () {
    const html = $("html");
    const next = html.attr("data-theme") === "dark" ? "light" : "dark";
    if (next === "light") html.removeAttr("data-theme");
    else html.attr("data-theme", "dark");
    localStorage.setItem("resume-theme", next);
    updateThemeIcon();
  });

  // Contact information animation
  $("#contactBtn").on("click", function () {
    $("#contactBox").slideToggle(250);
  });

  // Current year
  $("#year").text(new Date().getFullYear());

  // Close mobile menu after selecting a link
  $(".nav-links a").on("click", function () {
    $(".nav-links").removeClass("open");
  });
});
