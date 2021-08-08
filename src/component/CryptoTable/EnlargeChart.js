import React from 'react'; 
import Tooltip from '@material-ui/core/Tooltip';

const EnlargeChart = () => { 
  return (
    <div>
        <Tooltip title="View Chart" arrow>
            <img 
                className="icon-vertical" 
                src="https://img.icons8.com/material-outlined/24/000000/more.png"
                alt='menu'
            />
        </Tooltip>
    </div>
  );
}




export default EnlargeChart;