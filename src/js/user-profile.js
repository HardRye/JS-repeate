const userA = {
  name: "Richard Hendricks",
  phone: "994-982-5660",
  email: "hendricks@piedpiper.com",
  avatar: "https://fanfics.me/images/fandoms_heroes/882-1513002998.jpg",
  address: {
    country: "USA",
    city: "Palo Alto",
  },
};

const userB = {
  name: "Jared Dunn",
  phone: "994-850-4821",
  email: "dunn@piedpiper.com",
  avatar:
    "https://ih1.redbubble.net/image.969135842.4812/st,small,507x507-pad,600x600,f8f8f8.jpg",
  address: {
    country: "USA",
    city: "Palo Alto",
  },
};

const profileContainer = document.querySelector(".profile-container");

const createUserProfile = function ({ name, phone, email, avatar, address }) {
  // div
  const container = document.createElement("div");
  container.classList.add("user-profile");

  // img - avatar
  const image = document.createElement("img");
  image.src = avatar;
  image.alt = "user avatar";
  image.classList.add("avatar");

  // ul
  const infoList = document.createElement("ul");
  infoList.classList.add("info");

  // li
  // // <li><b>Name:</b> Richard Hendricks</li>
  // const listElement = document.createElement("li");
  // const elementLabel = document.createElement("b");
  // elementLabel.textContent = "Name: ";
  // const elementText = document.createTextNode(name);
  // listElement.append(elementLabel, elementText);
  // console.log(listElement);
  const nameField = createInfoItem("Name", name);
  const phoneField = createInfoItem("Phone", phone);
  const emailField = createInfoItem("Email", email);
  const addressField = createInfoItem(
    "Address",
    `${address.country}, ${address.city}`
  );

  infoList.append(nameField, phoneField, emailField, addressField);

  // container.appendChild(image);
  // container.appendChild(infoList);

  // experimental
  container.append(image, infoList);

  // console.log(container);

  return container;
};

function createInfoItem(label, text) {
  // // <li><b>Name:</b> Richard Hendricks</li>
  const listElement = document.createElement("li");
  const elementLabel = document.createElement("b");
  elementLabel.textContent = `${label}: `;

  const elementText = document.createTextNode(text);

  listElement.append(elementLabel, elementText);
  // console.log(listElement);
  return listElement;
}

const profileA = createUserProfile(userA);
// console.log(profileA);
const profileB = createUserProfile(userB);

profileContainer.append(profileA, profileB);
