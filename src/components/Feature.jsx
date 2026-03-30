import React from 'react';
import { WiDirectionDownRight, WiDirectionRight } from 'react-icons/wi';

const Feature = ({feature}) => {
    return (
        <div className="text-left   text-success flex items-center">
            <span> <WiDirectionRight></WiDirectionRight>  </span>
            {feature}
        </div>
    );
};

export default Feature;