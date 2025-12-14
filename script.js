const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlElement = document.documentElement;
const menuIcon = document.getElementById("menu-icon");
const menuCrossIcon = document.getElementById("menu-crossicon");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a:not(.coffee-btn)");
const contactForm = document.getElementById("contactform");

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");

  setTheme(theme);
}

/**
 * Set the theme and update UI
 * @param {string} theme - "light" or "dark"
 */
function setTheme(theme) {
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Update icon
  if (theme === "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

// Theme toggle event listener
themeToggle.addEventListener("click", toggleTheme);

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });

// Open the mobile navigation menu

function openMenu() {
  navbar.classList.add("show-navbar");
  menuIcon.style.display = "none";
  menuCrossIcon.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

/**
 * Close the mobile navigation menu
 */
function closeMenu() {
  navbar.classList.remove("show-navbar");
  menuIcon.style.display = "block";
  menuCrossIcon.style.display = "none";
  document.body.style.overflow = ""; // Restore scroll
}

// Menu toggle event listeners
menuIcon.addEventListener("click", openMenu);
menuCrossIcon.addEventListener("click", closeMenu);

// Close menu when clicking a navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navbar.classList.contains("show-navbar") &&
    !navbar.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    !menuCrossIcon.contains(e.target)
  ) {
    closeMenu();
  }
});

// Close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navbar.classList.contains("show-navbar")) {
    closeMenu();
  }
});

// Reset menu state on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    navbar.classList.remove("show-navbar");
    menuIcon.style.display = "";
    menuCrossIcon.style.display = "";
    document.body.style.overflow = "";
  }
});

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitButton = contactForm.querySelector("button[type='submit']");
  const originalText = submitButton.textContent;

  // Show loading state
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  try {
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Success - show thank you message
      const contactSection = document.getElementById("contact");
      contactSection.innerHTML = `
        <div style="text-align: center; padding: 40px;">
          <h1 style="font-size: 2rem; margin-bottom: 20px; color: var(--text-primary);">Thank You! 🎉</h1>
          <p style="font-size: 1.1rem; color: var(--text-secondary); max-width: 500px; margin: 0 auto;">
            Your message has been sent successfully. I'll get back to you as soon as possible!
          </p>
        </div>
      `;
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    // Error - show error message
    submitButton.textContent = "Error - Try Again";
    submitButton.disabled = false;

    setTimeout(() => {
      submitButton.textContent = originalText;
    }, 3000);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  // Add smooth reveal for sections (optional enhancement)
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "1"; // Start visible
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    sectionObserver.observe(section);
  });
});
