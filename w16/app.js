'use strict';

document.getElementById('id').addEventListener('change', () => {
    clearData()
  getTodos().then((data) => {
    const userId = +form.elements.user.value;
    const complete = document.querySelector('#complete');
    const incomplete = document.querySelector('#incomplete');
    data.forEach((todo) => {
      const createDiv = document.createElement('div');
      if (userId === todo.userId) {
        createDiv.innerHTML = `User ID: ${todo.userId} -- Task: ${todo.title}`;
        if (todo.completed) {
          complete.appendChild(createDiv);
        } else {
          incomplete.appendChild(createDiv);
        }
      }
    });
  });
});

document.getElementById('gettodos').addEventListener('click', () => {
    document.getElementById('form').reset();
    clearData()
  getTodos().then((data) => {
    const userId = +form.elements.user.value;
    const complete = document.querySelector('#complete');
    const incomplete = document.querySelector('#incomplete');
    data.forEach((todo) => {
      const createDiv = document.createElement('div');
      createDiv.innerHTML = `User ID: ${todo.userId} -- Task: ${todo.title}`;
      if (userId === todo.userId) {
      if (todo.completed) {
        complete.appendChild(createDiv);
      } else {
        incomplete.appendChild(createDiv);
      }
    } 
        if(userId === 0) {
            if (todo.completed) {
                complete.appendChild(createDiv);
              } else {
                incomplete.appendChild(createDiv);
              }
        }
    
    });
  });
});

// Display only todos which need to be done

document.getElementById('only-incomplete').addEventListener('click', () => {
   // document.getElementById('form').reset();
    complete.innerHTML = `<h1>Completed Todo's</h1>`;
//     clearData()
//   getTodos().then((data) => {
//     const incomplete = document.querySelector('#incomplete');
//     data.forEach((todo) => {
//       const createDiv = document.createElement('div');
//       createDiv.innerHTML = `User ID: ${todo.userId} -- Task: ${todo.title}`;
//       if (!todo.completed) {
//         incomplete.appendChild(createDiv);
//       }
//     });
//   });
});
