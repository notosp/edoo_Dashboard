import React from 'react';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add';

export default (props) => {
    const config = {
        title: 'Klasifikasi',
        options: {
            actionsColumnIndex: 6,
            filtering: true,
            grouping: true
            // selection: true
        },
        actions: [
            {
                icon: 'edit',
                tooltip: 'Edit Klasifikasi',
                onClick: (e, model) => {
                    props.changeState('edit', {
                        id: model.id,
                        fields: { name: model.name }
                    });
                }
            },
            {
                tooltip: 'Hapus Klasifikasi',
                icon: 'delete',
                onClick: (e, model) => {
                    props.onDelete(model);
                }
            }
        ],
        columns: [
            { title: "Nama", field: "name" },
            {
            title: "Parent",
            field: "parent"
            },
            {
            title: "Type",
            field: "type",
            lookup: { Buku: "Buku", ePustaka: "ePustaka" }
            },
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
            {
            title: "Jumlah Buku",
            field: "jmlBuku",
            type: "numeric"
            },
            {
            title: "Jumlah Bahasa",
            field: "jmlBahasa",
            type: "numeric"
            }
        ],
    };
    
    const addPublisher = () => {
        props.changeState('add', {
            id: '',
            fields: { name: '', parent: '' }
        });
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <h2>
                                <strong>Filter Klasifikasi</strong>
                            </h2>
                            <small className="text-muted">
                                LAKUKAN FILTER UNTUK MEMUDAHKAN PENCARIAN
                </small>
                        </div>

                        <div className="col-6 text-right">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => addPublisher()}
                            >
                                <AddIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <MaterialTable {...config} data={props.data} />
        </div>
    );
};