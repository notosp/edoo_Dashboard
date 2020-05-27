import React from 'react';
import MaterialTable from 'material-table';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default (props) => {
  const config = {
    title: 'Data Konten',
    options: {
      actionsColumnIndex: -1,
      filtering: true, 
      grouping: true,
      // selection: true
    },
    actions: [
      {
        icon: 'edit',
        tooltip: 'Edit Konten',
        onClick: (e, model) => {
          props.changeState('edit', {
            id: model.id,
            fields: { 
              judul: model.judul,
              pratinjau: model.pratinjau,
              penerbit: model.penerbit,
              sekolah: model.sekolah,
              status: model.status
            }
          });
        }
      },
      {
        tooltip: 'Remove Selected Konten',
        icon: 'delete',
        onClick: (e, model) => {
          console.log('delete --> ', e, model);
          // console.log('TODO: Inprogress');
          props.onDelete(model);
        }
      }
    ],
    columns: [
      { title: 'Judul Konten', field: 'judul' },
      { title: 'Pratinjau', field: 'pratinjau' },
      { title: 'Penerbit', field: 'penerbit' },
      { title: 'Sekolah / Eksemplar', field: 'sekolah' },
      {
        title: "Status",
        field: "status",
        lookup: { true: "Aktif", false: "Tidak Aktif" },
        render: rowData => (
          <span
            className={
              rowData.status ? "badge badge-success" : "badge badge-warning"
            }
            style={{ fontSize: "15px" }}
          >
            {rowData.status ? "Aktif" : "Tidak Aktif"}
          </span>
        )
      },
    ],
  };
  const fabCfg = {
    color: 'primary',
    label: 'Add',
  };
  const addPublisher = (e) => {
    props.changeState('add', {
      id: '',
      fields: { 
        judul: '',
        pratinjau: '',
        penerbit:'',
        sekolah:'',
        status:''
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
                <strong>Filter Data Konten</strong>
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