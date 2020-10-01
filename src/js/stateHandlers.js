function getState() {
  try {
    const state = localStorage.getItem('imageFinder');
    return state === null ? null : JSON.parse(state);
  } catch (err) {
    console.error('Get state error: ', err);
  }
}
function setState(queryString, pageNumber) {
  try {
    localStorage.setItem(
      'imageFinder',
      JSON.stringify({ queryString, pageNumber }),
    );
  } catch (err) {
    console.error('Set state error: ', err);
  }
}

export { getState, setState };
