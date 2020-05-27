import React, { useState } from 'react';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import * as yup from "yup";

const schema = yup.object().shape({
  sekolah: yup.string().required().min(3).max(50),
  jadwalLibur: yup.string().required().min(3).max(50),
  gambar: yup.string().required().min(3).max(50),
  waktuMulai: yup.string().required().min(3).max(50),
  waktuSelesai: yup.string().required().min(3).max(50),
  catatan: yup.string().required().min(3).max(50),
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
    <Dialog
      open={props.open}
      maxWidth={'md'}
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="form-row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Sekolah <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="sekolah" placeholder="Pilih Sekolah" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Nama Jadwal Libur <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="sekolah" placeholder="Masukkan Jadwal Libur" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Gambar <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="gambar" placeholder="Pilih Sekolah" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Waktu Mulai <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="waktuMulai" placeholder="Masukkan Waktu Mulai" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Waktu Selesai <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="waktuSelesai" placeholder="Masukkan Waktu Selesai" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>catatan <span style={{ color: "#FF0000" }}>*</span></label>
              <textarea className="form-control" {...inputProps} name="catatan" />
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