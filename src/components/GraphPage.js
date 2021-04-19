import { Component, Fragment } from 'react';
import { PageHeader } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';

import axios from 'axios';

const urlApi = 'http://localhost:5000';

export default class GraphPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get(urlApi + '/graphData')
        .then(resp => {
            const list = resp.data.data;

            let ds = [];
            let objStates = [];
            let objTypes = [];

            list.sort((a, b) => { 
                    return (a.EntidadFederativa > b.EntidadFederativa) ? 1 : -1;
                })
                .map(function(data) {
                    if (objStates[data.EntidadFederativa]) objStates[data.EntidadFederativa] += 1;
                    else { 
                        objStates[data.EntidadFederativa] = 1;
                        objTypes[data.EntidadFederativa] = {};
                    }

                    if (objTypes[data.EntidadFederativa]) {
                        if (objTypes[data.EntidadFederativa][data.TipoInmueble]) objTypes[data.EntidadFederativa][data.TipoInmueble] += 1;
                        else objTypes[data.EntidadFederativa][data.TipoInmueble] = 1;
                    } else objTypes[data.EntidadFederativa][data.TipoInmueble] = 1;
                    
                    return data;
                });

            Object.entries(objStates.sort()).map(function(data) {
                ds.push({Estado:data[0],Registros:data[1],Tipos:objTypes[data[0]]});
                return data;
            });
            console.log(ds);
            this.setState({ list: ds });
        })
        .catch(er => {
            console.log('Error-graph-get - ', er);
        })
    }

    render = () => {
        return(
            <Fragment>
                 <PageHeader
                    className="site-page-header"
                    title="Ve gráfica de registros"
                />
                <div className="site-container">
                <BarChart
                        width={600}
                        height={300}
                        data={this.state.list}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="Estado" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Registros" name="Inmuebles" fill="#0f60ab" />
                        <Bar dataKey="Tipos['HABITACIONAL']" name="Habitacional" stackId="a" fill="#4e4b8e" />
                        <Bar dataKey="Tipos['COMERCIAL']" name="Comercial" stackId="a" fill="#8884d8" />
                        <Bar dataKey="Tipos['TERRENO']" name="Terreno" stackId="a" fill="#aba8f5" />
                        <Bar dataKey="Tipos['MIXTO (HABITACIONAL Y COMERCIAL)']" name="Mixto" stackId="a" fill="#c19be0" />
                    </BarChart>
                </div>
            </Fragment>
        );
    }
}