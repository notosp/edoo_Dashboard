import React from 'react';
import {
    CardGroup,
    Card,
    CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import Widget from './Widget';
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";


const Dashboard = () => {
    return(
        <div className="animated fadeIn">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <Card>
                            <CardBody>
                                <div className="row justify-content-end align-items-center">
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <HomeOutlinedIcon />
                                            <h5 style={{ paddingTop: "2px", paddingLeft: "2px" }}>
                                                Halaman Utama
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-self-end">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <Link to="/" className="dashboard-url">
                                                    <BusinessCenterOutlinedIcon
                                                        style={{ fontSize: "50px" }}
                                                    />
                                                    <p>Aktivitas Epustaka</p>
                                                </Link>
                                            </div>
                                            <div className="col-4 text-center">
                                                <Link to="/" className="dashboard-url">
                                                    <AccountBalanceWalletOutlinedIcon
                                                        style={{ fontSize: "50px" }}
                                                    />
                                                    <p>Aktivitas Donasi</p>
                                                </Link>
                                            </div>
                                            <div className="col-4 text-center">
                                                <Link to="/" className="dashboard-url">
                                                    <DesktopWindowsOutlinedIcon
                                                        style={{ fontSize: "50px" }}
                                                    />
                                                    <p>Aktivitas Admin</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-12">
                        <CardGroup className="mb-4">
                            <Widget
                                icon="icon-people"
                                color="info"
                                header="87.500"
                                value="25"
                            >
                                Siswa Hadir Hari ini
                            </Widget>
                            <Widget
                                icon="icon-people"
                                color="success"
                                header="385"
                                value="25"
                            >
                                Pengguna Aktif Hari ini
                            </Widget>
                            <Widget
                                icon="icon-book-open"
                                color="warning"
                                header="1238"
                                value="25"
                            >
                                Peminjaman Hari ini
                            </Widget>
                        </CardGroup>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard;