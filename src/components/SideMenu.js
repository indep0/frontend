import { Menu, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, PieChartOutlined } from '@ant-design/icons';

const SideMenu = () => {
    const location = useLocation();
    
    return(
        <Layout.Sider theme="light" breakpoint="lg">
            <div className="logo">
                <span className="logo-top">INDEP</span>
                <br />
                <span className="logo-bottom">Consultas</span>
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={location.pathname}>
                <Menu.Item key="/" icon={<HomeOutlined />}>
                    <Link to="/">Inicio</Link>
                </Menu.Item>
                <Menu.Item key="/grafica" icon={<PieChartOutlined />}>
                    <Link to="/grafica">Gráfica</Link>
                </Menu.Item>
                <Menu.Item key="/informacion" icon={<InfoCircleOutlined />}>
                    <Link to="/informacion">Información</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
}

export default SideMenu;