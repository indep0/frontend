import { Component } from 'react';
import { Layout } from 'antd';

import SideMenu from './SideMenu';

import '../assets/layout.css';

export default class LayoutSite extends Component { 
    render = () => {
        return (
            <Layout>
                <SideMenu />
                <Layout>
                    <Layout.Content className="site-container" style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-content">
                            {this.props.children}
                        </div>
                    </Layout.Content>
                    <Layout.Footer className="text-center">INDEP Consultas &copy;2021</Layout.Footer>
                </Layout>
            </Layout>
        );
    };
}