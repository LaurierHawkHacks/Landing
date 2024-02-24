// import AboutBillboard from '../../assets/about/AboutBillboard.svg';
// import AboutWifi from '../../assets/about/AboutWifi.svg';
// import AboutDetails from '../../assets/about/AboutDetails.svg';
import AboutAirBalloon from '../../assets/about/AboutAirBalloon.svg';
import AboutSection from '../../assets/about/AboutSection.svg';

const About: React.FC = () => {
    return (
        <div className="relative h-full w-screen bg-brightUbe">
            <div className="relative left-[-11%] top-64 h-auto w-[145%] overflow-hidden">
                <img src={AboutSection} alt="Billboard" className="block" />
            </div>
            <img
                src={AboutAirBalloon}
                alt="Billboard"
                className="absolute left-[70%] top-[150%] w-[20%]"
            />
        </div>
    );
};

export { About };
