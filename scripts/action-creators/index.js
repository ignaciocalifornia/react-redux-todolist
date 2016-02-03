// function that has the necessary state as arguments and returns the action object
let counter = 0;
const addTodoAction = (text) => ({
  type: 'ADD_TODO',
  id: counter++,
  text
});

const setFilterAction = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

const toggleTodoAction = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export {
  addTodoAction,
  setFilterAction,
  toggleTodoAction
}
