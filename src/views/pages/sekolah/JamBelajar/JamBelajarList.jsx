import React from 'react';
import MaterialTable from 'material-table';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default (props) => {
  const config = {
    title: 'Data Jam Belajar',
    options: {
      actionsColumnIndex: -1,
      filtering: true, 
      grouping: true,
      // selection: true
    },
    actions: [
      {
        icon: 'edit',
        tooltip: 'Edit Jam Belajar',
        onClick: (e, model) => {
          props.changeState('edit', {
            id: model.id,
            fields: { 
              sekolah: model.sekolah,
              hari: model.hari,
              waktuMulai: model.waktuMulai,
              waktuSelesai: model.waktuSelesai,
            }
          });
        }
      },
      {
        tooltip: 'Hapus Jam Belajar',
        icon: 'delete',
        onClick: (e, model) => {
          console.log('delete --> ', e, model);
          // console.log('TODO: Inprogress');
          props.onDelete(model);
        }
      }
    ],
    columns: [
      { title: 'Nama Sekolah', field: 'sekolah' },
      { title: 'Waktu', field: 'waktuMulai' },
    ],
  };

  const addJamBelajar = (e) => {
    props.changeState('add', {
      id: '',
      fields: { 
        sekolah: '',
        hari: '',
        waktuMulai:'',
        waktuSelesai:''
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
                <strong>Filter Jam Belajar</strong>
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
                onClick={() => addJamBelajar()}>
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