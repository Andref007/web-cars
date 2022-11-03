import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

function CarList() {

    const cars = [
        {
            id: 1,
            marca: 'Fiat',
            modelo: 'Palio',
            cor: 'Branco',
            anoFabricacao: 2012,
            anoModelo: 2012,
            tipoCambio: 'Manual'
        },

        {
            id: 2,
            marca: 'Fiat',
            modelo: 'Siena',
            cor: 'Prata',
            anoFabricacao: 2014,
            anoModelo: 2015,
            tipoCambio: 'Automático'

        }
    ]

    const columns = [{
        dataField: 'id',
        text: 'id'
    },{
        dataField: 'marca',
        text: 'Marca'
    },
     {
        dataField: 'modelo',
        text: 'Modelo'
    }, {
        dataField: 'cor',
        text: 'Cor'
    },{
        dataField: 'anoFabricacao',
        text: 'Ano Fabricação'
    },{
        dataField: 'anoModelo',
        text: 'Ano Modelo'
    },{
        dataField: 'tipoCambio',
        text: 'Tipo de câmbio'
    },];
    return (
        <div><BootstrapTable keyField='id' data={ cars } columns={ columns } /></div>
    )
}

export default CarList
