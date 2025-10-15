import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function CalculoRemuneraciones() {
    console.log('Componente calculo montada.')
    {/* Declaración de variables */ }
    const [sueldoBruto, setSueldoBruto] = useState(0);
    const [gratificacionLegal, setGratificacionLegal] = useState(0);
    const [tipoPrevision, setTipoPrevision] = useState("");
    const [montoMovilizacion, setMontoMovilizacion] = useState(0);
    const [montoColacion, setMontoColacion] = useState(0);
    const [montoViatico, setMontoViatico] = useState(0);
    
    //Porcentajes descuento
    const porcentajeComisionAFP = 0.009;
    const porcentajeComisionSalud = tipoPrevision == 2 ? 0.07 : 0.1;
    const porcentajeImpustoUnico = 0.01;
    const porcentajeSeguroCesantia = 0.006;

    //Resultados
    const resultadoSueldoImponible = parseInt(sueldoBruto) + parseInt(gratificacionLegal);
    const resultadoComisionAFP = parseInt(resultadoSueldoImponible * porcentajeComisionAFP);
    const resultadoComisionSalud = parseInt(resultadoSueldoImponible * porcentajeComisionSalud);
    const resultadoImpuestoUnico = parseInt(resultadoSueldoImponible * porcentajeImpustoUnico);
    const resultadoSeguroCesantia = parseInt(resultadoSueldoImponible * porcentajeSeguroCesantia);
    const resultado = resultadoSueldoImponible - resultadoComisionAFP - resultadoComisionSalud - resultadoImpuestoUnico - resultadoSeguroCesantia + parseInt(montoMovilizacion) + parseInt(montoColacion) + parseInt(montoViatico);

    console.log('Sueldo: ' + sueldoBruto);
    console.log('Grat Legal: ' + gratificacionLegal);

    return (
        <div>

            <div className='row mt-3 text-center bg-secondary text-white p-3 rounded'>
                <div className='col-lg-12'>
                    
                    <h2>Demo de Cálculo</h2>
                    <h3>Sueldo líquido</h3>
                </div>
            </div>

            <div className='row m-3'>

                <div className='col-lg-6'>
                    <h4>Datos sueldo</h4>
                    <label className='form-label' htmlFor='sueldoBruto'>Ingrese sueldo bruto</label>
                    <input id='suedoBruto' name='sueldoBruto' placeholder='1000000' type='number' className='form-control' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)}></input>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='gratificacionLegal'>Gratificación Legal</label>
                        <input id='gratificacionLegal' name='gratificacionLegal' className='form-control' value={gratificacionLegal} placeholder='250000' type='number' onChange={(e) => setGratificacionLegal(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='tipoPrevision'>Seleccione prevision de salud</label>
                        <select className='form-select' id='tipoPrevision' name='tipoPrevision' value={tipoPrevision} onChange={(e) => setTipoPrevision(e.target.value)}>
                            <option>Seleccione prevision</option>
                            <option value={1}>Isapre</option>
                            <option value={2}>Fonasa</option>
                        </select>
                    </div>

                    <h4 className='mt-4'>No Imponibles</h4>
                    
                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='montoMovilizacion'>Monto Movilización</label>
                        <input id='montoMovilizacion' name='montoMovilizacion' className='form-control' value={montoMovilizacion} placeholder='20000' type='number' onChange={(e) => setMontoMovilizacion(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='montoColacion'>Monto Colación</label>
                        <input id='montoColacion' name='montoColacion' className='form-control' value={montoColacion} placeholder='20000' type='number' onChange={(e) => setMontoColacion(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='montoViatico'>Monto Viático</label>
                        <input id='montoViatico' name='montoViatico' className='form-control' value={montoViatico} placeholder='20000' type='number' onChange={(e) => setMontoViatico(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <a className='btn btn-warning' onClick={(e) => {
                            setSueldoBruto(0);
                            setGratificacionLegal(0);
                            setTipoPrevision("");
                            setMontoColacion(0);
                            setMontoMovilizacion(0);
                            setMontoViatico(0);
                        }}><i class="fa-solid fa-trash"></i> Limpiar</a>
                    </div>
                </div>

                {/* Muestra de resultados ingresados por input. */}

                <div className='col-lg-6'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Concepto</th>
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
                                <td>(-) Comisión AFP ({(porcentajeComisionAFP * 100).toFixed(1)} %)</td>
                                <td>${parseInt(sueldoBruto * porcentajeComisionAFP).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>(-) Salud ({(porcentajeComisionSalud * 100).toFixed(1)} %)</td>
                                <td>${parseInt(sueldoBruto * porcentajeComisionSalud).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>(-) Impuesto único ({(porcentajeImpustoUnico * 100).toFixed(1)} %)</td>
                                <td>${parseInt(sueldoBruto * porcentajeImpustoUnico).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>(-) Seguro Cesantía ({(porcentajeSeguroCesantia * 100).toFixed(1)} %)</td>
                                <td>${parseInt(sueldoBruto * porcentajeSeguroCesantia).toLocaleString()}</td>
                            </tr>
                            <tr style={{fontSize: '18px'}}>
                                <td colSpan={2}>Total</td>
                                <td>${resultado.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>

    );
}

export default CalculoRemuneraciones;