import { Component, Fragment } from 'react';
import { PageHeader } from 'antd';

export default class InfoPage extends Component {
    render = () => {
        return (
            <Fragment>
                <PageHeader
                    className="site-page-header"
                    title="Acerca del sitio"
                />
                <div className="site-container">
                    Sitio de consulta de los inmuebles subastados por el gobierno de México.
                </div>
            </Fragment>
            
        );
    };
}