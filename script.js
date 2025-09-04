const menuIcon = document.getElementById("menu-icon");
const menuCrossIcon = document.getElementById("menu-crossicon");
const nav = document.getElementById("navbar");
menuIcon.addEventListener("click", () => {
  nav.classList.add("show-navbar");
  menuIcon.style.display = "none";
  menuCrossIcon.style.display = "block";
});

menuCrossIcon.addEventListener("click", () => {
  nav.classList.remove("show-navbar");
  menuIcon.style.display = "block";
  menuCrossIcon.style.display = "none";
});

const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show-navbar");
    menuIcon.style.display = "block";
    menuCrossIcon.style.display = "none";
  });
});

const form = document.getElementById("contactform");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    document.getElementById("contact").innerHTML =
      "Thank you, we've received your message and will be in touch with you soon!";
  } else {
    document.getElementById("contact").innerHTML =
      "An error occurred while processing your request. Please try again.";
  }
});

// const menuIcon = document.getElementById("menu-icon");
// const navbar = document.getElementById("navbar");

// menuIcon.addEventListener("click", () => {
//   navbar.classList.toggle("active");
// });

// const formId = process.env.FORMSPREE_FORM_ID;
// const formActionUrl = `https://formspree.io/f/${formId}`;

// const lightbtn = document.getElementById("light-button");
// const darkbtn = document.getElementById("dark-button");
// const navb = document.getElementById("navarea");
// const linking1 = document.getElementById("link1");
// const linking2 = document.getElementById("link2");
// const linking3 = document.getElementById("link3");
// const linking4 = document.getElementById("link4");
// const linking5 = document.getElementById("link5");
// const homee = document.getElementById("home");
// const aboutt = document.getElementById("about");
// const skillss = document.getElementById("skills");
// const projects = document.getElementById("project");
// const contacts = document.getElementById("contact");
// const flex = document.getElementById("f1");
// const flex2 = document.getElementById("f2");
// const hello1 = document.getElementById("hello");

// lightbtn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "pink";
//   lightbtn.style.display = "none";
//   darkbtn.style.display = "inline-block";
//   navb.style.backgroundColor = "white";
//   navb.style.color = "white";
//   linking1.style.color = "white";
//   linking2.style.color = "white";
//   linking3.style.color = "white";
//   linking4.style.color = "white";
//   linking5.style.color = "white";
//   homee.style.color = "white";
//   aboutt.style.color = "white";
//   skillss.style.color = "white";
//   projects.style.color = "white";
//   contacts.style.color = "white";
//   flex.style.color = "white";
//   hello1.style.color = "white";
// });

// darkbtn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#f4f4f4";
//   darkbtn.style.display = "none";
//   lightbtn.style.display = "inline-block";
//   // navb.style.backgroundColor = "orange";
//   navb.style.color = "black";
//   linking1.style.color = "black";
//   linking2.style.color = "black";
//   linking3.style.color = "black";
//   linking4.style.color = "black";
//   linking5.style.color = "black";
//   homee.style.color = "black";
//   aboutt.style.color = "black";
//   skillss.style.color = "black";
//   projects.style.color = "#A1E887";
//   contacts.style.color = "black";
//   para.style.color = "black";
//   hello1.style.color = "black";
// });

// darkbtn.style.display = "none";

// window.addEventListener("scroll", function () {
//   const nav = document.querySelector("nav");
//   nav.classList.toggle("scrolled", window.scrollY > 0);
// // });
// const MenuIcon = document.getElementById("menu-icon");
// const navbar = document.getElementById("navbar");

// MenuIcon.addEventListener("click", () => {
//   navbar.classList.toggle("active");
// });
