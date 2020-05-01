import React from 'react';
const Spinner=(props)=>{
    return(
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
            {/*  <div class="ui text loader">{props.message || Loading..}</div>  instead of defalutProps */}
        </div>
    );
};
Spinner.defaultProps={
    message:'Loading...'
};

export default Spinner;