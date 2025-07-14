import React, { Suspense } from 'react';
import Display from './Components/display';
import Theme from './Components/theme';
import TodoList from './Components/todoList';

const promiseFromApi = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const App = () => {
  return (
    <div>
      <Counter></Counter>
      <Suspense fallback={<h2>Loading..</h2>}>
        <Display promiseFromApi={promiseFromApi}></Display>
      </Suspense>
    <Theme></Theme>
    {/* <TodoList></TodoList> */}
    </div>
  );
};

export default App;