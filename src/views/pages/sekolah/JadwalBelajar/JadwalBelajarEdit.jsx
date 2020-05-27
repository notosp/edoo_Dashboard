import React, { useState, useEffect } from 'react';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button, Select } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import * as yup from "yup";

const schema = yup.object().shape({
  sekolah: yup.string().required().min(3).max(50),
  ruangan: yup.string().required().min(3).max(50),
  jamBelajar: yup.string().required().min(3).max(50),
  mataPelajaran: yup.string().required().min(3).max(50),
  kelas: yup.string().required().min(3).max(50),
  jurusan: yup.string().required().min(3).max(50),
  subKelas: yup.string().required().min(3).max(50),
  tahunAjaran: yup.string().required().min(3).max(50),
  guru: yup.string().required().min(3).max(50),
});

const App = (props) => {
  const [title] = useState('Edit Jadwal Belajar');
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
              <label>Sekolah <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="sekolah" placeholder="Pilih Sekolah" />
            </div>
          </div>
           <div className="col-md-6">
            <div className="form-group">
              <label>Ruangan <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="Ruangan" placeholder="Masukan Ruangan"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Jam Belajar <span style={{ color: "#FF0000" }}>*</span></label>
              {/* <select className="form-control" {...inputProps} name="jam" placeholder=" Pilih jam" /> */}
               <select className="form-control" {...inputProps} name="jamBelajar" placeholder="Pilih Jam Belajar" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Mata Pelajaran <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="mataPelajaran" placeholder="Masukan Mata Pelajaran"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Kelas <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="kelas" placeholder="Pilih Kelas" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Jurusan <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="jurusan" placeholder="Pilih Jurusan" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Sub Kelas <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="subKelas" placeholder="Pilih Sub Kelas" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Tahun Ajaran <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="tahunAjaran" placeholder="Pilih Tahun Ajaran" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Guru <span style={{ color: "#FF0000" }}>*</span></label>
              <select className="form-control" {...inputProps} name="guru" placeholder="Pilih Guru" />
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