import React from 'react';
import MaterialTable from 'material-table';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default (props) => {
  const config = {
    title: 'Data Mata Pelajaran',
    options: {
      actionsColumnIndex: -1,
      filtering: true, 
      grouping: true,
      // selection: true
    },
    actions: [
      {
        icon: 'edit',
        tooltip: 'Edit Mata Pelajaran',
        onClick: (e, model) => {
          props.changeState('edit', {
            id: model.id,
            fields: { 
              jenjang: model.jenjang,
              mataPelajaran: model.mataPelajaran
            }
          });
        }
      },
      {
        tooltip: 'Remove Selected Mata Pelajaran',
        icon: 'delete',
        onClick: (e, model) => {
          console.log('delete --> ', e, model);
          // console.log('TODO: Inprogress');
          props.onDelete(model);
        }
      }
    ],
    columns: [
      { title: 'Jenjang', field: 'jenjang' },
      { title: 'Mata Pelajaran', field: 'mataPelajaran' }
    ],
  };
  const addPublisher = (e) => {
    props.changeState('add', {
      id: '',
      fields: { 
        jenjang: '',
        mataPelajaran: ''
      }
    });
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-6">
              <h2>
                <strong>Filter Mata Pelajaran</strong>
              </h2>
              <small className="text-muted">
                LAKUKAN FILTER UNTUK MEMUDAHKAN PENCARIAN
              </small>
            </div>
            <div className="col-6 text-right">
              <button
                className="btn"
                style={{ backgroundColor: "#02CBB5", color: "#FFF" }}
                type="button"
                onClick={() => addPublisher()}>
                <AddCircleOutlineIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MaterialTable  {...config} 
      data={props.data} />
    </div>
  );
};