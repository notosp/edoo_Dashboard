import React from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

export default (props) => {
  const config = {
    title: 'List of Author',
    options: {
      actionsColumnIndex: -1,
      // selection: true
    },
    actions: [
      {
        icon: 'edit',
        tooltip: 'Edit Author',
        onClick: (e, model) => {
          props.changeState('edit', {
            id: model.id,
            fields: { name: model.name }
          });
        }
      },
      {
        tooltip: 'Remove Selected Author',
        icon: 'delete',
        onClick: (e, model) => {
          // console.log('delete --> ', e, model);
          // console.log('TODO: Inprogress');
          props.onDelete(model);
        }
      }
    ],
    columns: [
      { title: 'Name', field: 'name' },
    ],
  };
  const fabCfg = {
    color: 'primary',
    label: 'Add',
  };
  const addPublisher = () => {
    props.changeState('add', {
      id: '',
      fields: { name: '' }
    });
  }

  return (
    <div>
      <MaterialTable  {...config} data={props.data} />
      <Fab {...fabCfg} style={{
        bottom: 80,
        right: 40,
        display: 'block',
        position: 'absolute'
      }} onClick={() => addPublisher()}>
        <AddIcon />
      </Fab>
    </div>
  );
};