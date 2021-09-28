import React from 'react';
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
class Component1 extends React.Component{
    render(){

        
        return <div>
            
            <button type="button" class="btn btn-primary" onDoubleClick="">Primary</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <h1>This is componen1 </h1>
            <h1>how are you</h1>
            <div className='container'>
                <h1>hello</h1>
                <div className='row'> 
                    <h1>how are you</h1>
                    <div className='col-6'> <h1>col</h1></div>
                </div>
                <div className='row'> 
                    <h1>how are you</h1>
                    <div className='col-6'> <h1>col</h1></div>
                </div>
            </div>
        </div>
    }

}

export default Component1;
