// مدة شاشة التحميل: 3 ثوانٍ
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
    document.getElementById("site").classList.add("show");
  }, 3000);
});

const modal = document.getElementById("telegramModal");
const telegramBtn = document.getElementById("telegramBtn");
const closeModal = document.getElementById("closeModal");

function openTelegramModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeTelegramModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

telegramBtn.addEventListener("click", openTelegramModal);
closeModal.addEventListener("click", closeTelegramModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeTelegramModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeTelegramModal();
});
