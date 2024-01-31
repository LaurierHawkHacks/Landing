import { Element } from "react-scroll"

const goldSponsors = [
    {
        name: 'DCL',
        logo: 'src/assets/logos/dcl.png',
        link: 'https://www.dcl.com',
    },
    {
        name: 'DigitalOcean',
        logo: 'src/assets/logos/digitalocean.png',
        link: 'https://www.digitalocean.com',
    },
    {
        name: '1Password',
        logo: 'src/assets/logos/1password.png',
        link: 'https://www.1password.com',
    },
    {
        name: 'Echo 3D',
        logo: 'src/assets/logos/echo3d.png',
        link: 'https://www.echo3d.com',
    },
    {
        name: 'AssemblyAI',
        logo: 'src/assets/logos/assembly.png',
        link: 'https://www.assemblyai.com',
    },
];

const silverSponsors = [
    {
        name: 'Taskade',
        logo: 'src/assets/logos/taskade.png',
        link: 'https://www.taskade.com',
    },
    {
        name: 'Roomiez',
        logo: 'src/assets/logos/roomiez.png',
        link: 'https://www.roomiez.com',
    },
    {
        name: 'Leading Learners',
        logo: 'src/assets/logos/leadingleaders.png',
        link: 'https://www.leadinglearners.com',
    },
    {
        name: 'SOC',
        logo: 'src/assets/logos/soc.png',
        link: 'https://www.soc.com',
    },
];

const bronzeSponsors = [
    {
        name: 'Balsamiq',
        logo: 'src/assets/logos/balsamiq.png',
        link: 'https://www.balsamiq.com',
    },
    {
        name: 'Ollon',
        logo: 'src/assets/logos/ollon.png',
        link: 'https://www.ollon.com',
    },
    {
        name: 'FDM',
        logo: 'src/assets/logos/fdm.png',
        link: 'https://www.fdmgroup.com',
    },
    {
        name: 'Veritas AI',
        logo: 'src/assets/logos/veritas.png',
        link: 'https://www.veritasai.com',
    },
];

const SponsorsSection = () => {
    const renderSponsors = (sponsors: any[], tier: string) => {
        return sponsors.map((sponsor) => (
            <a
                key={sponsor.name}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${tier}-sponsor flex p-4`}
                data-sponsor-name={sponsor.name}
            >
                <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="sponsor-logo"
                />
            </a>
        ));
    };

    return (
        <Element name="sponsors">
          <section className="text-center bg-midnight text-white py-20">
              <h2 className="text-5xl font-bold text-white mb-10">SPONSORS</h2>

              <div className="sponsor-row">
                  {renderSponsors(goldSponsors, 'gold')}
              </div>
              <div className="sponsor-row">
                  {renderSponsors(silverSponsors, 'silver')}
              </div>
              <div className="sponsor-row">
                  {renderSponsors(bronzeSponsors, 'bronze')}
              </div>
          </section>
        </Element>
    );
};

export { SponsorsSection };
