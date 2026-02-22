const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: "",
};

// ✅ Заповнення з localStorage при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsed = JSON.parse(savedData);

  formData.email = parsed.email ?? "";
  formData.message = parsed.message ?? "";

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

// ✅ Делегування input на формі
formEl.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name !== "email" && name !== "message") return;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// ✅ submit
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  formEl.reset();
});