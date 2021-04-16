import { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';

import '../assets/layout.css';

const { Content, Footer, Sider } = Layout;

export default class LayoutSite extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            location: '/'
        };
    }

    render() {
        return (
            <Layout>
                <Sider theme="light" breakpoint="lg">
                    <div className="logo">
                        <span className="logo-top">INDEP</span>
                        <br />
                        <span className="logo-bottom">Consultas</span>
                    </div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={this.state.location}>
                        <Menu.Item key="/" icon={<HomeOutlined />}>
                            <Link to="/">Inicio</Link>
                        </Menu.Item>
                        <Menu.Item key="/info" icon={<InfoCircleOutlined />}>
                            <Link to="/info">Información</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content className="site-container" style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-content">
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer className="text-center">INDEP Consultas &copy;2021</Footer>
                </Layout>
            </Layout>
        );
    };
}