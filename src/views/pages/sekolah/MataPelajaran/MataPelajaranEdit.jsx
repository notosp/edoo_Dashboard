import React, { useState } from 'react';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import * as yup from "yup";

const schema = yup.object().shape({
  jenjang: yup.string().required().min(3).max(50),
  mataPelajaran: yup.string().required().min(3).max(50)
});

const App = (props) => {
  const [title] = useState('Edit Mata Pelajaran');
  const { model } = props;
  const { handleSubmit, errors, control } = useForm({ validationSchema: schema })
  const inputProps = { model, errors, control };

  const onSubmit = (data) => {
    props.onSave({ ...model, fields: data });
    console.log(data)
  };

  const actions = [
    {
      text: 'Batal',
      props: {
        color: 'secondary', variant: 'contained',
        onClick: props.onCancel
      }
    },
    {
      text: 'Simpan',
      props: {
        variant: 'contained',
        style: { margin: '0 15px 0 7px', backgroundColor:'#02CBB5', color:'#FFF' },
        onClick: handleSubmit(onSubmit),
      }
    },
  ]

  return (
    <Dialog
      open={props.open}
      maxWidth={'md'}
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Jenjang <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="jenjang" placeholder="Masukkan Jenjang" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Mata Pelajaran <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="mataPelajaran" placeholder="Masukkan Mata Pelajaran" />
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogActions style={{ marginTop: 50 }}>
        {actions.map((m, idx) => (
          <Button key={idx} {...m.props}>{m.text}</Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

export default App;