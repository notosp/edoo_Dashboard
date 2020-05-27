import React, { useState } from 'react';
import { Grid, Card, CardContent, CardHeader } from '@material-ui/core';
import TextInput from '../../../components/TextInput';

const App = () => {
  const [model, setModel] = useState({ first_name: 'clark' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModel({ ...model, [name]: value })
  }

  return (
    <React.Fragment>
      <Card>
        <CardHeader title="Simple Form" />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} lg={6}>
              <TextInput
                label="First Name"
                name="first_name"
                onChange={handleChange}
              />
              <TextInput
                label="Last Name"
                name="last_name"
                onChange={handleChange}
              />
              <TextInput
                label="Email"
                name="email"
                onChange={handleChange}
              />
              <TextInput
                label="Phone No"
                name="phone_no"
                defaultValue={model.phone_no}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="mt-3">
        <CardHeader title="Value" />
        <CardContent>
          <pre>
            {JSON.stringify(model, null, 4)}
          </pre>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default App;