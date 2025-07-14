import React, { Suspense } from 'react';
import Display from './Components/display';

const promiseFromApi = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const App = () => {
  return (
    <div>
      <Suspense fallback={<h2>Loading..</h2>}>
        <Display promiseFromApi={promiseFromApi}></Display>
      </Suspense>

    </div>
  );
};

export default App;