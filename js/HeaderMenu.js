document
  .querySelector(".wrapper__logo-burger")
  .addEventListener("click", function () {
    console.log("вывод");

    let modal = document.querySelector(".modal");
    let body = document.querySelector("body");

    console.log(modal.style.transform);

    setTimeout(() => {
      modal.style.transform =
        modal.style.transform === "translate(0px, -100%)"
          ? "translate(0, 0%)"
          : "translate(0px, -100%)";
    }, 100);

    modal.style.display = "block";

    body.style.overflowY =
      body.style.overflowY === "hidden" ? "auto" : "hidden";
  });

window.addEventListener(
  "resize",
  function (event) {
    if (event.target.innerWidth > 1100) {
      let modal = document.querySelector(".modal");
      let body = document.querySelector("body");

      body.style.overflowY = "auto";

      modal.style.display = "none";

      modal.style.transform = "translate(0px, -100%)";
    }
  },
  true
);
