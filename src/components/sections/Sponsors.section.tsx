import React from 'react';

const sponsors = [
    { name: 'DCL', logo: 'src/assets/logos/dcl.png', tier: 'gold', link: 'https://www.dcl.com' },
    { name: 'Taskade', logo: 'src/assets/logos/taskade.png', tier: 'silver', link: 'https://www.taskade.com' },
    { name: 'DigitalOcean', logo: 'src/assets/logos/digitalocean.png', tier: 'gold', link: 'https://www.digitalocean.com' },
    { name: 'Balsamiq', logo: 'src/assets/logos/balsamiq.png', tier: 'bronze', link: 'https://www.balsamiq.com' },
    { name: 'Roomiez', logo: 'src/assets/logos/roomiez.png', tier: 'silver', link: 'https://www.roomiez.com' },
    { name: '1Password', logo: 'src/assets/logos/1password.png', tier: 'gold', link: 'https://www.1password.com' },
    { name: 'Ollon', logo: 'src/assets/logos/ollon.png', tier: 'bronze', link: 'https://www.ollon.com' },
    { name: 'Leading Learners', logo: 'src/assets/logos/leadingleaders.png', tier: 'silver', link: 'https://www.leadinglearners.com' },
    { name: 'Echo 3D', logo: 'src/assets/logos/echo3d.png', tier: 'gold', link: 'https://www.echo3d.com' },
    { name: 'FDM', logo: 'src/assets/logos/fdm.png', tier: 'bronze', link: 'https://www.fdmgroup.com' },
    { name: 'SOC', logo: 'src/assets/logos/soc.png', tier: 'silver', link: 'https://www.soc.com' },
    { name: 'AssemblyAI', logo: 'src/assets/logos/assembly.png', tier: 'gold', link: 'https://www.assemblyai.com' },
    { name: 'Veritas AI', logo: 'src/assets/logos/veritas.png', tier: 'bronze', link: 'https://www.veritasai.com' },
];

const SponsorsSection = () => {
    const goldSponsors = sponsors.filter(sponsor => sponsor.tier === 'gold');
    const silverSponsors = sponsors.filter(sponsor => sponsor.tier === 'silver');
    const bronzeSponsors = sponsors.filter(sponsor => sponsor.tier === 'bronze');

    const renderSponsors = (sponsors: any[]) => {
        return sponsors.map(sponsor => (
            <a key={sponsor.name} href={sponsor.link} target="_blank" rel="noopener noreferrer" className={`${sponsor.tier}-sponsor sponsor-logo-container p-4`} data-sponsor-name={sponsor.name}>
                <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="sponsor-logo" />
            </a>
        ));
    };

    return (
        <section className="bg-midnight text-white py-20">
            <div className="text-center">
                <h2 className="text-5xl font-bold text-white mb-10">SPONSORS</h2>
                
                {goldSponsors.length > 0 && (
                    <div className="sponsor-row">
                        {renderSponsors(goldSponsors)}
                    </div>
                )}

                {silverSponsors.length > 0 && (
                    <div className="sponsor-row">
                        {renderSponsors(silverSponsors)}
                    </div>
                )}

                {bronzeSponsors.length > 0 && (
                    <div className="sponsor-row">
                        {renderSponsors(bronzeSponsors)}
                    </div>
                )}
            </div>
        </section>
    );
};

  
export { SponsorsSection };
  