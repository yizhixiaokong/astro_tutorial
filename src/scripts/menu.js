document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById("site-header");

  // 滚动监听：控制导航栏大小和透明度
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 20) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    },
    { passive: true }
  );

  // 菜单按钮点击事件
  menuButton?.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", `${!isExpanded}`);
    navMenu?.setAttribute("aria-hidden", `${isExpanded}`);
  });

  // 点击导航链接时关闭菜单
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton?.setAttribute("aria-expanded", "false");
      navMenu?.setAttribute("aria-hidden", "true");
    });
  });

  // 点击页面其他地方关闭菜单
  document.addEventListener("click", (e) => {
    const isClickInsideNav = menuButton?.contains(e.target) || navMenu?.contains(e.target);
    if (!isClickInsideNav && menuButton?.getAttribute("aria-expanded") === "true") {
      menuButton?.setAttribute("aria-expanded", "false");
      navMenu?.setAttribute("aria-hidden", "true");
    }
  });

  // ESC键关闭菜单
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
      menuButton?.setAttribute("aria-expanded", "false");
      navMenu?.setAttribute("aria-hidden", "true");
    }
  });
});
