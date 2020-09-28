// GET

const fetchUsers = () => {
  return fetch("http://localhost:1234/users")
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch(console.warn);
};

const fetchUserById = (id) => {
  return fetch(`http://localhost:1234/users/${id}`)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch(console.warn);
};

// fetchUserById(2); // {poly}

// POST

const addUser = (userToAdd) => {
  const url = "http://localhost:1234/users";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userToAdd),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then(console.log)
    .catch(console.warn);
};

// addUser({
//   name: "Ajax",
//   email: "ajax@mail.com",
// });

//
// DELETE

const deleteUser = (id) => {
  const url = `http://localhost:1234/users/${id}`;
  const options = {
    method: "DELETE",
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then(console.log)
    .catch(console.warn);
};

// deleteUser(4);

//
// PUT === replace
// PATCH === change/update/add

const updateUser = (id, update) => {
  const url = `http://localhost:1234/users/${id}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then(console.log)
    .catch(console.warn);
};
