import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardHeader, Button, CardActions } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import TextInput from '../../../components/TextInput';
import * as yup from "yup";

const schema = yup.object().shape({
  first_name: yup.string().required().min(3).max(20),
  last_name: yup.string().required(),
  email: yup.string().email().required()
});

const App = (props) => {
  const { handleSubmit, errors, control, reset, watch, triggerValidation } = useForm({ validationSchema: schema })
  const [fields, setFields] = useState({ ...props.model });
  const first_name = watch('first_name');
  const last_name = watch('last_name');
  const email = watch('email');
  const phone_no = watch('phone_no');

  const onSubmit = (data, e) => {
    setFields({ ...data });
    props.update(data);
  };

  const onReset = () => {
    reset({ ...props.model });
  }

  const actions = [
    { text: 'Cancel', props: { onClick: onReset, color: 'secondary', variant: 'contained', style: { margin: '0 5px ' } } },
    { text: 'Save', props: { type: 'submit', color: 'primary', variant: 'contained' } },
  ]

  useEffect(() => {
    triggerValidation()
  }, [])

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader title="Validation Form" />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8} lg={6}>
                <TextInput
                  label="First Name"
                  name="first_name"
                  model={fields}
                  errors={errors}
                  control={control}
                />
                <TextInput
                  label="Last Name"
                  name="last_name"
                  model={fields}
                  errors={errors}
                  control={control}
                />
                <TextInput
                  label="Email"
                  name="email"
                  model={fields}
                  errors={errors}
                  control={control}
                />
                <TextInput
                  label="Phone No"
                  name="phone_no"
                  model={fields}
                  control={control}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions style={{ borderTop: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
            <div style={{ margin: '0 10px 0 auto' }}>
              {actions.map((m, idx) => (
                <Button key={idx} {...m.props}>{m.text}</Button>
              ))}
            </div>
          </CardActions>
        </Card>
      </form>
      <Card className="mt-3">
        <CardHeader title="Value" />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <p>Local value, reactive change</p>
              <pre>
                {JSON.stringify({
                  first_name,
                  last_name,
                  email,
                  phone_no
                }, null, 4)}
              </pre>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>Parent value, change on submit</p>
              <pre>
                {JSON.stringify(fields, null, 4)}
              </pre>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default App;