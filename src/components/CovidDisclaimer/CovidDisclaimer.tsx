import React from 'react';
import './CovidDisclaimer.scss';

const CovidDisclaimer = (): JSX.Element => (
    <div className="container covid-disclaimer">
        <div className="card">
            <div className="card-header text-white bg-danger disclaimer-header">
                COVID-19 DISCLAIMER
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <div className="disclaimer-text">
                        The health and safety of our patients and staff is of the utmost importance to us. To ensure a
                        safe
                        environment that promotes wellness, we follow all COVID-19 CDC guidelines. We ask that you
                        please:
                        <br/>
                        <br/>
                        <ol>
                            <li>
                                Please wear a mask or face covering that covers your nose and mouth while at the clinic.
                            </li>
                            <li>
                                Wash your hands or use hand sanitizer as soon as you arrive for your appointment.
                            </li>
                            <li>
                                Please refrain from bringing someone with you to your appointment unless you need that
                                person’s assistance to ambulate.
                            </li>
                        </ol>
                        Most importantly, if you are experiencing a fever, cough, or shortness of breath, please do not
                        come
                        in for your appointment and inform us of your condition right away.
                        <br/>
                        <br/>
                        Thank you for helping keep you safe during these challenging times!
                    </div>
                </blockquote>
            </div>
        </div>
    </div>
);

export default CovidDisclaimer;