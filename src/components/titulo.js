import React from 'react';

function tituloPrincipal(){
    console.log('Componente titulo montado.')
    return (
        <div className='row mt-3'>

          <div className='col-lg-12'>
            <h2>Página de recursos humanos</h2>
            <p>Página de empleados de DuocUc</p>
          </div>

        </div>
    );
}

export default tituloPrincipal;