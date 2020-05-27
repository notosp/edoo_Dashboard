import React from 'react';
import Header from './Header';

const Content = (props) => {
    return (
        <React.Fragment>
            <Header {...props} />
            <div className="page-content animated fadeIn">{props.children}</div>
        </React.Fragment>
    );
}

export default Content;