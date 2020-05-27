import React from 'react';
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core';
import i18next from 'i18next';

import Content from '../components/Content';
import store from '../redux/store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <Content>
        <Card>
          <CardHeader title={i18next.t('page.landing')} subheader={i18next.t('page.landinginfo')} />
          <CardContent>
            <Grid spacing={2} container>
              <Grid item xs={12} xl={6}>
                <pre>
                  {JSON.stringify(Object.keys(store))}
                  <br />
                  {JSON.stringify(store.getState().auth, null, 4)}
                </pre>
              </Grid>
            </Grid>
            <br />
            <pre>
              {JSON.stringify(this.state)}
              <br />
              {i18next.t('page.dashboard')}
            </pre>
          </CardContent>
        </Card>
      </Content>
    );
  }
}

export default App;