// import AboutBillboard from '../../assets/about/AboutBillboard.svg';
// import AboutWifi from '../../assets/about/AboutWifi.svg';
// import AboutDetails from '../../assets/about/AboutDetails.svg';
import AboutAirBalloon from '../../assets/about/AboutAirBalloon.svg';
import AboutSection from '../../assets/about/AboutSection.svg';

const About: React.FC = () => {
    return (
        <div className="relative h-screen w-screen">
            <div className="relative left-0 top-64 ml-10 h-auto w-[128%] overflow-hidden">
                <img
                    src={AboutSection}
                    alt="Billboard"
                    className="block" // Adjust classes as needed
                />
            </div>
            <img
                src={AboutAirBalloon}
                alt="Billboard"
                className="absolute left-[50%] top-[140%] w-[20%]"
            />
        </div>
    );
};

export { About };
