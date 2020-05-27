import React, { useState, useEffect } from 'react';
import { DialogTitle, Dialog, DialogContent, DialogActions, Button, Select } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../components/TextInput';
import * as yup from "yup";

const schema = yup.object().shape({
  sekolah: yup.string().required().min(3).max(50),
  hari: yup.string().required().min(3).max(50),
  waktuMulai: yup.string().required().min(3).max(50),
  waktuSelesai: yup.string().required().min(3).max(50),
});

const App = (props) => {
  const [title] = useState('Edit Jam Belajar');
  const { model } = props;
  const { handleSubmit, errors, control } = useForm({ validationSchema: schema })
  const inputProps = { model, errors, control };

  const [state, setState] = React.useState({
    hari: '',
  });

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

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
              <label>Hari <span style={{ color: "#FF0000" }}>*</span></label>
              {/* <select className="form-control" {...inputProps} name="hari" placeholder=" Pilih Hari" /> */}
               <Select
                native
                fullWidth
                variant="outlined"
                size="small"
                value={state.hari}
                onChange={handleChange('hari')}
                inputProps={{
                    name: 'hari',
                    id: 'age-native-simple',
                }}
               >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
               </Select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Waktu Mulai <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput className="form-control" type="text" {...inputProps} name="waktuMulai" placeholder="Masukan Waktu Mulai"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Waktu Selesai <span style={{ color: "#FF0000" }}>*</span></label>
              <TextInput name="waktuSelesai" className="form-control" type="text" {...inputProps} placeholder="Masukan Waktu Selesai"></TextInput>
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