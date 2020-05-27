import React, { useState } from 'react';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import * as yup from "yup";
import CKEditor from "ckeditor4-react";
import stripHtml from "string-strip-html";

const schema = yup.object().shape({
  name: yup.string().required().min(3).max(50),
});

const App = (props) => {
  const [title] = useState('Edit Author');
  const { model } = props;
  const { handleSubmit, errors, control } = useForm({ validationSchema: schema })
  const inputProps = { model, errors, control };

  const onSubmit = (data) => {
    props.onSave({ ...model, fields: data });
  };

  const actions = [
    {
      text: 'Cancel',
      props: {
        color: 'secondary', variant: 'contained',
        onClick: props.onCancel
      }
    },
    {
      text: 'Save',
      props: {
        color: 'primary', variant: 'contained',
        style: { margin: '0 15px 0 7px' },
        onClick: handleSubmit(onSubmit),
      }
    },
  ]

  return (
    <Dialog open={props.open} maxWidth={"md"} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput {...inputProps} label="Author Name" name="name" />
          <CKEditor data="<p>Hello from CKEditor 4!</p>" />
        </form>
      </DialogContent>
      <DialogActions style={{ marginTop: 50 }}>
        {actions.map((m, idx) => (
          <Button key={idx} {...m.props}>
            {m.text}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

export default App;