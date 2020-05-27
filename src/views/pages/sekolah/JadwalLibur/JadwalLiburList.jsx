import React from 'react';
import MaterialTable from 'material-table';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default (props) => {
  const config = {
    title: 'Data Jadwal Libur',
    options: {
      actionsColumnIndex: -1,
      filtering: true, 
      grouping: true,
      // selection: true
    },
    actions: [
      {
        icon: 'edit',
        tooltip: 'Edit Jadwal Libur',
        onClick: (e, model) => {
          props.changeState('edit', {
            id: model.id,
            fields: { 
              sekolah: model.sekolah,
              jadwalLibur: model.jadwalLibur,
              gambar: model.gambar,
              waktuMulai: model.waktuMulai,
              waktuSelesai: model.waktuSelesai,
              catatan: model.catatan,
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
      { title: 'Nama Jadwal Libur', field: 'jadwalLibur' },
      { title: 'Gambar', field: 'gambar' },
      { title: 'Waktu', field: 'waktu' },
      { title: 'Catatan', field: 'catatan' }
    ],
  };

  const addJadwalLibur = (e) => {
    props.changeState('add', {
      id: '',
      fields: { 
        sekolah: '',
        jadwalLibur: '',
        gambar:'',
        waktuMulai:'',
        waktuSelesai:'',
        catatan:''
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
                <strong>Filter Jadwal Libur</strong>
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
                onClick={() => addJadwalLibur()}>
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