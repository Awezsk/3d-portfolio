import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-Medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Awez Sheikh</span>👋
            <br />
            An AI ML Data Scientist From India.
            </h1>
    ),
    2: (
        <InfoBox 
            text='Work With Loads of Datasets and Picked up Alot of Information About Datasets'
            link='/about'
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text='Use Machine Learning Algoritms and get Aced in Artificial Intelegence model'
            link='/projects'
            btnText="Visit my Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text='Unlocking Insights from Financial Data: Revolutionizing Investment Strategies"'
            link='/contact'
            btnText="Let's Talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo