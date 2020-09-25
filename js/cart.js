const cart = {
  items: [
    { id: 123123123123, name: "Монорельса" },
    { id: 456456456456, name: "Аптечка" },
  ],
  add(itemName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = {
          id: Date.now(),
          name: itemName,
        };

        this.items.push(item);

        resolve(item);
      }, 200);
    });
  },
  remove(id) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        this.items = this.items.filter((item) => item.id !== id);

        resolve(id);
      }, 300)
    );
  },
};

function updateUIAfterAdd(item) {
  console.log(`Updating with item id ${item.id}`);
}
function updateUIAfterRemove(id) {
  console.log(`Removing item with id ${id}`);
}

cart
  .add("Глюкоза")
  .then((addedItem) => {
    updateUIAfterAdd(addedItem);
  })
  .catch((error) => {
    console.error("Error - ", error);
  });
cart
  .remove(456456456456)
  .then((removedId) => {
    updateUIAfterRemove(removedId);
  })
  .catch((error) => {
    console.error("Error - ", error);
  });
