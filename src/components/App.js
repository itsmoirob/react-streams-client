import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/edit" component={StreamEdit} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;