import React from 'react';
import './About.scss';
import robert from '../../assets/robert_goldstein_headshot.jpg';

const About = (): JSX.Element => (
    <div className="about">
        <h1>About Us</h1>
        <div className="card mb-3 mx-auto card-container">
            <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-center bg-light">
                    <img className="robert-headshot" src={robert} alt="robert goldstein"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Robert Goldstein PT, DPT</h5>
                        <p className="card-text text-left">
                            Robert received his bachelor's degree in exercises physiology from University of Illinois at
                            Chicago and graduated with his Doctor of Physical Therapy in 2002 from Roslyn Franklin
                            University/Chicago Medical School.
                            <br/>
                            <br/>
                            Robert has 18+ experience in both outpatient orthopedics and home health care
                            treating a wide variety of orthopedic, sports, neurologic and pain related
                            conditions from young adults to geriatric populations. His approach is to use both
                            his exercise science training background with manual therapy to return patients to
                            the activities they love. Robert has experience in cupping, manual therapy,
                            functional dry needling certification, instrument assisted soft tissue mobilization,
                            mulligan manual therapy techniques and kinesis taping. Robert's experience can take
                            his patient from the most acute phase of injury or post surgery to return back to
                            prior level of function is one of the many abilities that sets him apart.
                            <br/>
                            <br/>
                            Robert understands physical therapy rehab process from the perspective of
                            the patient, as well, including being a patient a few times himself
                            including recovery from ACL reconstruction surgery. His personality and
                            approach for his patients are both sympathetic and empathetic, making his
                            clients feel as they are working together to achieve you goal. Priding
                            himself on personality investing in every patient he meets, Robert works to
                            create individualized plans taking into account all of each patient's unique
                            factors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;