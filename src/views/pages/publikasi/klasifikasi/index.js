import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import Content from '../../../../components/Content';
import KontenEdit from './KlasifikasiEdit';
import KontenList from './KlasifikasiList';
import oBaas from '../../../../providers/klasifikasi';

const initModel = { fields: '' };

export default () => {
  const [state, setState] = useState('list');
  const [model, setModel] = useState(initModel);
  const [list, setList] = useState([]);
  const [dlgOpen, setDlgOpen] = useState(false);
  const [row, setRow] = useState(null);

  const refreshList = async () => {
    const resp = await oBaas.list('klasifikasi');
    setList(resp.data)
  }
  const changeState = (myState, myModel) => {
    setState(myState);
    setModel(myModel);
  }
  const onDlgClose = async () => {
    if (row && row.id) {
      console.log(row.id);
      await oBaas.delete(`${row.id}`);
      refreshList();
    }
    setDlgOpen(false);
  }
  const handleFormSave = async (row) => {
    if (row.id) {
      await oBaas.update(`author/${row.id}`, row.fields);
    } else {
      await oBaas.insert(row.fields);
    }
    changeState('list', initModel);
    refreshList();
  }
  const handleFormCancel = () => {
    console.log('---> dialog cancel');
    changeState('list', initModel);
  }
  const handleDelete = (row) => {
    setRow(row);
    setDlgOpen(true);
  }

  useEffect(() => {
    refreshList();
  }, [])

  const header = {
    breadcrumbs: [{
        text: "Klasifikasi",
        to: "/"
      },
      {
        text: "Klasifikasi"
      }
    ]
  };


  return (
    <Content {...header}>
      <KontenList
        changeState={changeState}
        onDelete={handleDelete}
        data={list}
      />
      <br />
      <KontenEdit
        model={model}
        setModel={setModel}
        open={state !== 'list'}
        onSave={handleFormSave}
        onCancel={handleFormCancel}
      />
      <Dialog
        open={dlgOpen}
        onClose={onDlgClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{i18next.t('message.delete_title')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {i18next.t('message.delete_content')}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ padding: '12px 24px' }}>
          <Button onClick={() => setDlgOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={onDlgClose} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Content>
  )
};

