import React from 'react';
import Main from './containers/Main/Main';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;