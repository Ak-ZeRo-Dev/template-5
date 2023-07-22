// Set Decoding For Imgs
let imgs = document.querySelectorAll(`img`);

for (const img of imgs) {
  if (img.hasAttribute("decoding")) {
    img.getAttribute("decoding") === "" ? img.setAttribute("decoding", "async") : "";
  } else img.setAttribute("decoding", "async");
}

// Button Top
const btnTop = document.querySelector(`#btnTop`);

onscroll = () =>
  window.scrollY >= 600
    ? (btnTop.style.display = `block`)
    : (btnTop.style.display = `none`);

btnTop.addEventListener(`click`, () =>
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
);