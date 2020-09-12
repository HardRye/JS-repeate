const form = document.querySelector(".js-register-form");
// console.log(form);

{
  // form.addEventListener("submit", handleSubmit);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   // console.dir(form);
  //   // console.dir(form.elements);
  //   const { elements } = form;
  //   // form.elements
  //   // standard iputs
  //   const nameInput = elements.name;
  //   const emailInput = elements.email;
  //   const passwordInput = elements.password;
  //   // groupds radio-buttons/checkboxes
  //   const subscriptionInput = elements.subscription;
  //   // const genderInput = elements.gender;
  //   // console.log(nameInput);
  //   const data = {
  //     [nameInput.name]: nameInput.value,
  //     [emailInput.name]: emailInput.value,
  //     [passwordInput.name]: passwordInput.value,
  //     [subscriptionInput.name]: subscriptionInput.value,
  //   };
  //   console.log(data);
  // }
}

form.addEventListener("submit", handleSubmitWithFormData);

function handleSubmitWithFormData(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  // console.log(formData);
  // console.log(formData.entries());

  // for (const entry of formData.entries()) {
  //   console.log(entry);
  // }

  const data = {};

  formData.forEach((value, name) => {
    console.log(`Name ${name}, Value: ${value}`);
    data[name] = value;
  });

  console.log(data);
}
