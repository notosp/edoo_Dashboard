import React from 'react';
import { Link } from 'react-router-dom';
import i18next from "i18next";
import Content from '../../components/Content';

const App = () => {
  const breadcrumbs = [
    { text: 'Home', to: '/' },
    { text: 'Sample' },
  ]

  return (
    <Content breadcrumbs={breadcrumbs}>
      <Link className="btn btn-primary mr-1 pl-4 pr-4" to="/sample/page1" >{i18next.t('page.page1')}</Link>
      <Link className="btn btn-primary ml-1 pl-4 pr-4" to="/sample/page2" >{i18next.t('page.page2')}</Link>
    </Content >
  );
}

export default App;

