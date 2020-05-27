import React, { useState } from 'react';
import Content from '../../../components/Content';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const App = () => {
  const [model] = useState({
    title: 'Hello Page 1',
    breadcrumbs: [
      { text: 'Home', to: '/' },
      { text: 'Sample', to: '/sample' },
      { text: 'Page 2' },
    ]
  })

  return (
    <Content breadcrumbs={model.breadcrumbs}>
      <Card>
        <CardHeader title={model.title} />
        <CardContent>Hello</CardContent>
      </Card>
    </Content >
  );
}

export default App;
