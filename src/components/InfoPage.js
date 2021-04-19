import { Component, Fragment } from 'react';
import { PageHeader } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

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
                    <p>
                        Repositorios del proyecto:
                    </p>
                    <div>
                        <GithubOutlined />
                        <a style={{marginLeft:5}} href="https://github.com/indep0/frontend" target="_blank">
                            @indep0/frontend
                        </a>
                    </div>
                    <div>
                        <GithubOutlined />
                        <a style={{marginLeft:5}} href="https://github.com/indep0/backend" target="_blank">
                            @indep0/backend
                        </a>
                    </div>
                </div>
            </Fragment>
        );
    };
}