import { Component, Fragment } from 'react';
import { PageHeader, List, Card, Select, Button, Empty } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import axios from 'axios';

const { Option } = Select;
const urlApi = 'http://localhost:5000';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            states: [],
            types: [],
            state: '',
            type: '',
            loading: false
        };
    }

    componentDidMount() {
        axios.get(urlApi + '/info')
        .then(resp => {
            const states = resp.data.estados;
            const types = resp.data.inmuebles;
            
            this.setState({ states, types });
        })
        .catch(er => {
            console.log('Error-home-info - ', er);
        })
    }

    handleChangeState = state => {
        this.setState({state});
    }

    handleChangeType = type => {
        this.setState({type});
    }

    handleSearch = e => {
        this.setState({ loading: true });
        
        let params = {
            entidadFederativa: this.state.state,
            TipoInmueble: this.state.type
        };
        
        axios.get(urlApi + '/inmueble', {params})
        .then(resp => {
            const list = resp.data.response;

            this.setState({ list, loading: false });
        })
        .catch(er => {
            console.log('Error-home-buscar - ', er);
            this.setState({ loading: false });
        })
    }
    
    render() {
        return (
            <Fragment>
                <PageHeader
                    className="site-page-header text-center"
                    title="Realiza tus consultas aquí"
                >
                    <Select defaultValue="" onChange={this.handleChangeState}>
                        <Option value="">Todos los estados</Option>
                        {this.state.states.map(e => {
                            return <Option key={e} value={e}>{e}</Option>;
                        })}
                    </Select>
                    <Select defaultValue="" onChange={this.handleChangeType}>
                        <Option value="">Todos los tipos</Option>
                        {this.state.types.map(t => {
                            return <Option key={t} value={t}>{t}</Option>;
                        })}
                    </Select>
                    <Button 
                        type="primary" 
                        onClick={this.handleSearch} 
                        icon={<SearchOutlined />} 
                        loading={this.state.loading}
                    >
                        Buscar
                    </Button>
                </PageHeader>
                <div className="site-container">
                    <List
                        locale={{
                            emptyText: <Empty description={<span>Da click en buscar para obtener resultados.</span>} />
                        }}
                        grid={{ gutter: 16, column: 1 }}
                        dataSource={this.state.list}
                        renderItem={e => (
                        <List.Item>
                            <Card 
                                size="small" 
                                type="inner" 
                                title={`${e.TipoInmueble} #${e.NumeroSIAB}`}
                            >
                                <div>{e.Ubicacion}</div>
                            </Card>
                        </List.Item>
                        )}
                    />
                </div>
            </Fragment>
        );
    };
}