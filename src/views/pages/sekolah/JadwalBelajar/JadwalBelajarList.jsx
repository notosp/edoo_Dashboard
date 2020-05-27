import React from 'react';
import MaterialTable from 'material-table';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default (props) => {
  const config = {
    title: 'Data Jadwal Belajar',
    options: {
      actionsColumnIndex: -1,
      filtering: true, 
      grouping: true,
      // selection: true
    },
    actions: [
      {
        icon: 'edit',
        tooltip: 'Edit Jadwal Belajar',
        onClick: (e, model) => {
          props.changeState('edit', {
            id: model.id,
            fields: { 
              sekolah: model.sekolah,
              ruangan: model.ruangan,
              jamBelajar: model.jamBelajar,
              mataPelajaran: model.mataPelajaran,
              kelas: model.kelas,
              jurusan: model.jurusan,
              subKelas: model.subKelas,
              tahunAjaran: model.tahunAjaran,
              guru: model.guru,
            }
          });
        }
      },
      {
        tooltip: 'Hapus Jadwal Belajar',
        icon: 'delete',
        onClick: (e, model) => {
          console.log('delete --> ', e, model);
          // console.log('TODO: Inprogress');
          props.onDelete(model);
        }
      }
    ],
    columns: [
      { title: 'Kelas', field: 'kelas' },
      { title: 'Jam Belajar', field: 'jamBelajar' },
      { title: 'Mata Pelajaran', field: 'mataPelajaran' },
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
                <strong>Filter Jadwal Belajar</strong>
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