import React, { useState } from 'react';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import * as yup from "yup";

const schema = yup.object().shape({
  judul: yup.string().required().min(3).max(50),
  pratinjau: yup.string().required().min(3).max(50),
  penerbit: yup.string().required().min(3).max(50),
  status: yup.string().required().min(3).max(50),
  sekolah: yup.string().required().min(3).max(50),
});

const App = (props) => {
  const [title] = useState('Edit Konten');
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
              <label>Juduk Konten <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="judul" placeholder="Masukan Judul Konten" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Pratinjau <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="pratinjau" placeholder="Masukan Pratinjau" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Penerbit <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="penerbit" placeholder="Masukan Penerbit"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Sekolah <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput name="sekolah" className="form-control" type="text" {...inputProps} placeholder="Masukan Nama Sekolah"></TextInput>
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="form-group">
              <label>Status <span style={{ color: "#FF0000" }}>*</span></label>
              <select name="status" className="form-control"></select>
            </div>
          </div> */}
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