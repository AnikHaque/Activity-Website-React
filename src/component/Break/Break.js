import React from 'react';
import './Break.css';

const Break = ({handelerBreakTime}) => {


    return (
        <div className='break'>
            <p className='break-title'><strong>Add A Break</strong></p>
            <div className='break-info'>
                <div>
                   <button onClick={()=>handelerBreakTime(10)}>10s</button>
                </div>

                <div>
                    <button onClick={()=>handelerBreakTime(20)}>20s</button>
                </div>

                <div>
                    <button onClick={()=>handelerBreakTime(30)}>30s</button>
                </div>

                <div>
                    <button onClick={()=>handelerBreakTime(40)}>40s</button>
                </div>

            </div>
            
        </div>
    );
};

export default Break;