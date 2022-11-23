'use strict';

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (response.status === 200) {
    const data = response.json();
    return data;
  } else {
    throw new Error('Unable to get data');
  }
};

const clearData = () => {
    complete.innerHTML = `<h1>Completed Todo's</h1>`;
    incomplete.innerHTML = `<h1>Incomplete Todo's</h1>`;
}
 