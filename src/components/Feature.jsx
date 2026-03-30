import React from 'react';
import { WiDirectionDownRight, WiDirectionRight } from 'react-icons/wi';
import check from  "../assets/Check.png"

const Feature = ({feature}) => {
    return (
        <div className="text-left   text-success flex items-center gap-2">
            <img src={check} alt="" />
            {feature}
        </div>
    );
};

export default Feature;