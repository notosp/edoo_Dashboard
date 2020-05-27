import React from 'react';
import Content from '../../../components/Content';

const App = () => {
  const breadcrumbs = [
    { text: 'Home', to: '/' },
    { text: 'Sample', to: '/sample' },
    { text: 'Page 1' },
  ]

  return (
    <Content breadcrumbs={breadcrumbs}>
      <h3>Hello Page 1</h3>
    </Content >
  );
}

export default App;
