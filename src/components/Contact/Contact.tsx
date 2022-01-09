import React from 'react';

const Contact = (): JSX.Element => (
    <div className="container contact">
        <br/>
        <h5>
            Contact us today
        </h5>
        <div className="card-group">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Phone</h5>
                    <a href="tel:847-312-2238">(847) 312-2238</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Fax</h5>
                    <a href="tel:847-329-7215">(847) 329-7215</a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Email</h5>
                    <a href="mailTo:info@goldrehabservices.com">info@goldrehabservices.com</a>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
