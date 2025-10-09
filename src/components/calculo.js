import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function CalculoRemuneraciones() {
    console.log('Componente calculo montada.')
    {/* Declaración de variables */ }
    const [sueldoBruto, setSueldoBruto] = useState(0);
    const [gratificacionLegal, setGratificacionLegal] = useState(0);
    
    const porcentajeComisionAFP = 0.009;
    const porcentajeComisionSalud = 0.07;
    const porcentajeImpustoUnico = 0.01;
    const porcentajeSeguroCesantia = 0.006;

    const resultado = parseInt((sueldoBruto) - (sueldoBruto * porcentajeComisionAFP) - (sueldoBruto * porcentajeComisionSalud) - (sueldoBruto * porcentajeImpustoUnico) - (sueldoBruto * porcentajeSeguroCesantia) + gratificacionLegal);

    console.log('Sueldo: ' + sueldoBruto);
    console.log('Grat Legal: ' + gratificacionLegal);

    return (

        <div className='row mt-3'>

            <div className='col-lg-6'>
                <h4>Datos sueldo</h4>
                <label className='form-label' htmlFor='sueldoBruto'>Ingrese sueldo bruto</label>
                <input id='suedoBruto' name='sueldoBruto' placeholder='1000000' type='number' className='form-control' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)}></input>

                <div className='form-group mt-3'>
                    <label className='form-label' htmlFor='gratificacionLegal'>Gratificación Legal</label>
                    <input id='gratificacionLegal' name='gratificacionLegal' className='form-control' value={gratificacionLegal} placeholder='250000' type='number' onChange={(e) => setGratificacionLegal(e.target.value)}></input>
                </div>
            </div>

            {/* Muestra de resultados ingresados por input. */}

            <div className='col-lg-6'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cncepto</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sueldo Bruto</td>
                            <td>${parseInt(sueldoBruto).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>(-) AFP (10%)</td>
                            <td>${(parseInt(sueldoBruto)*0.1).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Comisión AFP</td>
                            <td>${parseInt(sueldoBruto * porcentajeComisionAFP).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Salud</td>
                            <td>${parseInt(sueldoBruto * porcentajeComisionSalud).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Impuesto único</td>
                            <td>${parseInt(sueldoBruto * porcentajeImpustoUnico).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Seguro Cesantía</td>
                            <td>${parseInt(sueldoBruto * porcentajeSeguroCesantia).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Total</td>
                            <td>${resultado.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default CalculoRemuneraciones;