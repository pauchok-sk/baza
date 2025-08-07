export default function quiz() {
  const quiz = document.querySelector("#quiz");

  if (quiz) {
    const btnPrev = document.querySelector("#quiz-prev");
    const btnNext = document.querySelector("#quiz-next");
    const pagination = document.querySelector("#quiz-pagination");
    const profile = document.querySelector("#quiz-profile");
    const items = quiz.querySelectorAll(".s-quiz__question");
    const containerNav = document.querySelector("#quiz-container-nav");

    let currentIndex = 0;

    btnNext.addEventListener("click", nextChange);
    btnPrev.addEventListener("click", prevChange);

    createPagination();

    function nextChange() {
      if (currentIndex <= items.length - 2) {
        items[currentIndex].classList.remove("_active");
        items[currentIndex].style.opacity = 0;

        currentIndex = currentIndex + 1;

        items[currentIndex].classList.add("_active");
        setTimeout(() => {
          items[currentIndex].style.opacity = 1;
        }, 10);

        if (currentIndex === items.length - 1) {
          btnNext.innerHTML = btnNext.dataset.textEnd;
        }
        togglePag();
      } else {
        containerNav.style.display = "none";
        items[currentIndex].classList.remove("_active");
        profile.classList.add("_active");
        setTimeout(() => {
          profile.style.opacity = 1;
        }, 10);
      }
    }
    function prevChange() {
      if (currentIndex >= 1) {
        items[currentIndex].classList.remove("_active");
        items[currentIndex].style.opacity = 0;

        currentIndex = currentIndex - 1;

        items[currentIndex].classList.add("_active");
        setTimeout(() => {
          items[currentIndex].style.opacity = 1;
        }, 10);
      }

      togglePag();
    }
    function togglePag() {
      const pagBtns = pagination.querySelectorAll("div");

      pagBtns.forEach((btn) => btn.classList.remove("_active"));
      pagBtns[currentIndex].classList.add("_active");
    }
    function change(index) {
      items[currentIndex].classList.remove("_active");
      items[currentIndex].style.opacity = 0;

      currentIndex = index;

      items[currentIndex].classList.add("_active");
      setTimeout(() => {
        items[currentIndex].style.opacity = 1;
      }, 10);

      togglePag();
    }

    function createPagination() {
      items.forEach((item, index) => {
        const div = document.createElement("div");

        if (index === 0) div.classList.add("_active");

        div.addEventListener("click", () => change(index));

        pagination.appendChild(div);
      });
    }
  }
}
