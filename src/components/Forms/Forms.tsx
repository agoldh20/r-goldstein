import React from 'react';
import './Forms.scss';
import formImage from '../../assets/formPreview.png';

const Forms = (): JSX.Element => {

    const currentForm = require('../../assets/forms/PatientPaperworkRev02_28_21.pdf')

    return (
        <div className="forms">
            <h5>
                Forms
            </h5>

            <a href={currentForm} download>
                <img className="small" src={formImage} alt="Patient Form"/>
                <br/>
                <b>Download patient form</b>
            </a>
        </div>
    );
};

export default Forms;
