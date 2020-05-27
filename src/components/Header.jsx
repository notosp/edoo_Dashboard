import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Breadcrumbs, Link } from '@material-ui/core';

const Header = (prop) => {
    if (prop.breadcrumbs) {
        return (
            <div className="header">
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                    {prop.breadcrumbs.map((m, idx) => {
                        if (m.to) {
                            return (<Link key={idx} className="text-primary" component={RouterLink} color="inherit" to={m.to}>{m.text}</Link>)
                        } else {
                            return (<div key={idx}>{m.text}</div>)
                        }
                    })}
                </Breadcrumbs>
                <h1 className="MuiTypography-root MuiTypography-h3 mt-4">{prop.title}</h1>
                <h6 className="MuiTypography-root MuiTypography-subtitle1 mb-4">{prop.subtitle}</h6>
            </div>
        )
    }
    return (
        <div className="header" style={{ marginTop: '20px' }}>
            <h1 className="MuiTypography-root MuiTypography-h3">{prop.title}</h1>
            <h6 className="MuiTypography-root MuiTypography-subtitle1 mb-4">{prop.subtitle}</h6>
        </div>
    );
}

export default Header;
