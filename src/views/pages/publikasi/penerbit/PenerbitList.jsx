import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import Content from '../../../../components/Content';
import oPenerbit from '../../../../providers/penerbit';


const initModel = { fields: '' };

export default (props) => {

  const [state, setState] = useState('list');
  const [model, setModel] = useState(initModel);
  const [list, setList] = useState([]);
  const [dlgOpen, setDlgOpen] = useState(false);
  const [row, setRow] = useState(null);

  const refreshList = async () => {
    const resp = await oPenerbit.list('konten');
    setList(resp.data)
    // console.log(resp)
  }
  const changeState = (myState, myModel) => {
    setState(myState);
    setModel(myModel);
  }
  const onDlgClose = async () => {
    if (row && row.id) {
      console.log(row.id);
      await oPenerbit.delete(`penerbit/${row.id}`);
      refreshList();
    }
    setDlgOpen(false);
  }
  
  const handleDelete = (row) => {
    setRow(row);
    setDlgOpen(true);
  }

  useEffect(() => {
    refreshList();
  }, [])

  const config = {
    title: "Data Penerbit",
    options: {
      actionsColumnIndex: -1,
      filtering: true,
      grouping: true
      // selection: true
    },
    actions: [
      {
        icon: "edit",
        tooltip: "Edit Penerbit",
        // onClick: (e, model) => {
        //   props.changeState("edit", {
        //     id: model.id,
        //     fields: {
        //       nama: model.nama,
        //       logo: model.logo,
        //       alamat: model.alamat,
        //       status: model.status,
        //       total: model.total,
        //       grup: model.grup
        //     }
        //   });
        // }
      },
      {
        tooltip: "Remove Selected Konten",
        icon: "delete",
        onClick: (e, model) => {
          console.log("delete --> ", e, model);
          // console.log('TODO: Inprogress');
          props.onDelete(model);
        }
      }
    ],
    columns: [
      { title: "Nama", field: "nama" },
      { title: "Logo", field: "logo" },
      { title: "Alamat", field: "alamat" },
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
      { title: "Total Judul Buku", field: "total" },
      { title: "Grup", field: "grup" }
    ]
  };

  const breadcrumbs = [
    { text: 'Publikasi', to: '/' },
    { text: 'Penerbit' }
  ]
  

  return (
    <Content breadcrumbs={breadcrumbs}>
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-6">
              <h2>
                <strong>Filter Penerbit</strong>
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
                onClick={(e) => window.location.href='/publikasi/penerbit-add' }
                >
                <AddCircleOutlineIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MaterialTable  {...config} 
       data={list} />
    </Content>
  );
};