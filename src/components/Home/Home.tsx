import React from 'react';
import CovidDisclaimer from '../CovidDisclaimer/CovidDisclaimer';
import './Home.scss';
import logo from '../../assets/logo1-removebg.png';
import storefront from '../../assets/grs-storefront-image.jpg';
import {Link} from 'react-router-dom';

const Home = (): JSX.Element => {

    const conditionsTreated = (): any[] => {
        const conditions: string[] = [
            'Arthritis',
            'Back Pain & Sciatica',
            'Balance & Gait Disorders',
            'Chronic Pain',
            'Elbow, Wrist, & Hand Pain',
            'Fibromyalgia',
            'Foot and Ankle Pain',
            'Headaches',
            'Hip Pain',
            'Knee Pain',
            'Motor Vehicle Injuries',
            'Neck Pain',
            'Neurological Disorders',
            'Pre-Surgical Rehab',
            'Post-COVID Recovery Programs',
            'Post-Surgical Rehab',
            'Scoliosis',
            'Shoulder Pain',
            'SI Dysfunction',
            'Sports Injuries',
            'Thoracic Pain',
            'TMJ Dysfunction',
            'Vestibular Rehab',
            'Work Injury'
        ];

        return conditions.map(condition => (
            <li className="list-unstyled-item list-hours-item">
                {`✶ ${condition}`}
            </li>
        ));
    };

    return (
        <div className="home">
            <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" alt="GRS Logo" src={logo}/>
            <CovidDisclaimer/>
            <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" id="storefront" src={storefront} alt=""/>
            <div className="container">
                <div className="card-body">
                    <h5 className="card-title header-text">
                        Are you receiving one-on-one care?
                    </h5>
                    <br/>
                    <div className="card-text">
                        Come experience the difference one-on-one care makes.
                        <br/>
                        <br/>
                        At Gold Rehab Services, we pride ourselves in providing individualized care. We believe
                        that by working with patients individually, we can quickly return them to the activities
                        they love.
                        <br/>
                        <br/>
                        <Link className="btn btn-outline-dark" to="/contact">Contact us today for
                            a complementary assessment!</Link>
                        <br/>
                        <br/>
                        <span className="font-weight-bold font-italic convenience-text">
                            Conveniently located near Lincoln and Touhy. Just minutes from the Edens Expressway.
                        </span>
                    </div>
                    <div className="page-section cta">
                        <div className="container conditions-container">
                            <div className="header-text conditions-header">
                                Conditions Treated:
                            </div>
                            <div className="row text-rounded">
                                <br/>
                                <ul className="list-unstyled list-hours">
                                    {conditionsTreated()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;