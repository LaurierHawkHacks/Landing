import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoonPage: React.FC = () => {
    // Calculate the countdown time
    // Replace the date below with your desired launch date
    const launchDate = new Date('2024-04-06T00:00:00');
    const currentTime = new Date();
    const timeDifference = launchDate.getTime() - currentTime.getTime();
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
            <Link to="/" className="absolute left-4 top-4 bg-deepMarine hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                    Back to Landing
                </Link>
                <h1 className="text-5xl font-bold text-center mb-4 text-deepMarine">Coming Soon</h1>
                <p className="text-center mb-4">
                    This page is under construction. Stay tuned!
                </p>
                <p className="text-center mb-4">
                   Subscribe to our newsletter to get notified when it is launched!
                </p>
                <div className="flex justify-center">
                    <Link to="https://hawkhacks.us6.list-manage.com/subscribe?u=26e2afc1662a30dadf0c725af&id=050d487d87" target="_blank" rel="noopener noreferrer" className="bg-darkViolet hover:bg-paleViolet  text-white font-semibold py-2 px-4 rounded">
                        Newsletter
                    </Link>
                </div>
                <div className="text-center m-6">
                    <p className="text-lg font-semibold">
                        {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining until launch
                    </p>
                </div>
            </div>
        </div>
    );
};

export { ComingSoonPage };

