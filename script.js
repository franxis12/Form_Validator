const form = document.getElementById("registerForm");
const fields = ["name", "email", "password", "passwordConfirm"];
const inputs = Object.fromEntries(
  fields.map((id) => [id, document.getElementById(id)]),
);
const touched = new Set();
const status = document.getElementById("form-status");
const rules = {
  has8More: (value) => value.length >= 8,
  hasCap: (value) => /[A-Z]/.test(value),
  hasLow: (value) => /[a-z]/.test(value),
  hasNum: (value) => /\d/.test(value),
  hasSpe: (value) => /[^a-zA-Z0-9\s]/.test(value),
};
function errors() {
  return {
    name:
      inputs.name.value.trim().length >= 3
        ? ""
        : "Enter your name using at least 3 characters.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email.value.trim())
      ? ""
      : "Enter a valid email address, like you@example.com.",
    password: Object.values(rules).every((test) => test(inputs.password.value))
      ? ""
      : "Complete all five items in the password checklist.",
    passwordConfirm:
      inputs.passwordConfirm.value &&
      inputs.passwordConfirm.value === inputs.password.value
        ? ""
        : "Your passwords need to match.",
  };
}
function update() {
  const current = errors();
  fields.forEach((id) => {
    const show = touched.has(id);
    document.getElementById(`${id}-error`).textContent = show
      ? current[id]
      : "";
    inputs[id].setAttribute(
      "aria-invalid",
      String(show && Boolean(current[id])),
    );
    inputs[id].classList.toggle("valid", show && !current[id]);
  });
  let count = 0;
  Object.entries(rules).forEach(([id, test]) => {
    const met = test(inputs.password.value);
    const item = document.getElementById(id);
    item.classList.toggle("met", met);
    item.setAttribute(
      "aria-label",
      `${item.textContent}: ${met ? "met" : "not met"}`,
    );
    if (met) count++;
  });
  document.getElementById("password-score").textContent = `${count} / 5`;
  document.getElementById("meter-fill").style.width = `${count * 20}%`;
  document.getElementById("completion").textContent =
    `${fields.filter((id) => !current[id]).length} of 4 ready`;
  return current;
}
fields.forEach((id) => {
  inputs[id].addEventListener("blur", () => {
    touched.add(id);
    update();
  });
  inputs[id].addEventListener("input", () => {
    status.hidden = true;
    update();
  });
});
document.getElementById("bio").addEventListener("input", (event) => {
  document.getElementById("bio-count").textContent =
    `${event.target.value.length} / 240`;
  status.hidden = true;
});
document.querySelectorAll(".reveal").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.for);
    const showing = input.type === "password";
    input.type = showing ? "text" : "password";
    button.textContent = showing ? "Hide" : "Show";
    button.setAttribute("aria-pressed", String(showing));
    button.setAttribute(
      "aria-label",
      `${showing ? "Hide" : "Show"} ${input.id === "password" ? "password" : "confirmation password"}`,
    );
  });
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  fields.forEach((id) => touched.add(id));
  const current = update();
  const invalid = fields.find((id) => current[id]);
  status.hidden = false;
  status.classList.toggle("error-status", Boolean(invalid));
  if (invalid) {
    status.textContent =
      "A few details need attention. Check the highlighted fields above.";
    inputs[invalid].focus();
  } else {
    status.textContent =
      "Everything checks out! Your profile passed validation. This is a demo: no account was created and no information was saved or sent.";
    status.focus();
  }
});
