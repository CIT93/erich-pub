'use strict';
document.getElementById('gettodos').addEventListener('click', (e) => {
  getTodos((error, todos) => {
    if (error) {
      console.log(error);
    } else {
      console.log(todos);
      const complete = document.querySelector('#complete');
      const incomplete = document.querySelector('#incomplete');
      todos.forEach((todo) => {
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `User ID: ${todo.userId} -- Task: ${todo.title}`;
        if (todo.completed) {
          complete.appendChild(createDiv);
        } else {
          incomplete.appendChild(createDiv);
        }
      });
    }
  });
});

// Display only todos which need to be done

document.getElementById('only-incomplete').addEventListener('click', (e) => {

    const complete = document.querySelector('#complete');
    complete.innerHTML = `<h1>Completed Todo's</h1>`
    getTodos((error, todos) => {
      if (error) {
        console.log(error);
      } else {
        console.log(todos);
        
        const incomplete = document.querySelector('#incomplete');
        todos.forEach((todo) => {
          const createDiv = document.createElement('div');
          createDiv.innerHTML = `User ID: ${todo.userId} -- Task: ${todo.title}`;
          if (!todo.completed) {
            incomplete.appendChild(createDiv);
          } 
        });
      }
    });
  });
  
