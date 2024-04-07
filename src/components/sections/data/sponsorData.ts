import {
    Balsamiq,
    Certopus,
    Cisco,
    DeFiBlocks,
    Distributive,
    Dominos,
    Echo3D,
    Ennios,
    Fantuan,
    Fintech,
    Fossa,
    IndoFood,
    InterviewBuddy,
    InterviewCake,
    JDoodle,
    Lcs,
    MavenSourcing,
    Mlh,
    Near,
    Nibiru,
    OnePassword,
    Roku,
    Rosenfeld,
    SmokesPoutinerie,
    Solana,
    StreamYard,
    StudentsUnion,
    SweetLous,
    Taskade,
    Vectara,
    Verbwire,
    Wolfram,
} from '@assets';

interface Sponsor {
    name: string;
    link: string;
    image: string;
}

const sponsorLinks = {
    // partners
    mlh: 'https://mlh.io',
    lcs: 'https://lauriercs.ca',
    fintech: 'https://wlufintech.com/',
    fossa: 'https://fossa.ca',
    su: 'https://yourstudentsunion.ca/',

    // platinum
    solana: 'https://solana.com/',
    near: 'https://near.org/',

    // gold
    fantuan: 'https://fantuan.ca/delivery/en/',
    sp: 'https://smokespoutinerie.com/',
    domino: 'https://www.dominos.ca/en/',
    nibiru: 'https://nibiru.fi/',
    distributive: 'https://distributive.network/',

    // silver
    indofood: 'https://www.indofood.com/',
    roku: 'https://www.roku.com/en-ca/',
    slCookies: 'https://sweetlouscookies.com/',
    cisco: 'https://www.cisco.com/site/ca/en/index.html',

    // bronze
    echo3D: 'https://www.echo3d.com/',
    onePassword: 'https://1password.com/',
    wolfram: 'https://www.wolframalpha.com/',
    balsamiq: 'https://balsamiq.com/',
    rosenfeld: 'https://rosenfeldmedia.com/',
    taskade: 'https://www.taskade.com/',
    streamyard: 'https://streamyard.com/',
    defiblocks: 'https://defiblocks.io/',
    interviewCake: 'https://www.interviewcake.com/',
    ennios: 'https://www.enniospasta.ca/',
    certopus: 'https://certopus.com/',
    interviewBuddy: 'https://interviewbuddy.net/',
    verbwire: 'https://www.verbwire.com/',
    jDoodle: 'https://www.jdoodle.com/',
    vectara: 'https://vectara.com/',
};

const platinumSponsors: Sponsor[] = [
    {
        name: 'Solana',
        link: sponsorLinks.solana,
        image: Solana,
    },
    {
        name: 'Near',
        link: sponsorLinks.near,
        image: Near,
    },
];

const goldSponsors: Sponsor[] = [
    {
        name: 'Fantuan Delivery',
        link: sponsorLinks.fantuan,
        image: Fantuan,
    },
    {
        name: 'Smoke Poutinerie',
        link: sponsorLinks.sp,
        image: SmokesPoutinerie,
    },
    {
        name: 'Dominos',
        link: sponsorLinks.domino,
        image: Dominos,
    },
    {
        name: 'Nibiru',
        link: sponsorLinks.nibiru,
        image: Nibiru,
    },
    {
        name: 'Distributive',
        link: sponsorLinks.distributive,
        image: Distributive,
    },
];

const silverSponsors: Sponsor[] = [
    {
        name: 'Indofood',
        link: sponsorLinks.indofood,
        image: IndoFood,
    },
    {
        name: 'Roku',
        link: sponsorLinks.roku,
        image: Roku,
    },
    {
        name: 'Sweet Lou\'s Cookies',
        link: sponsorLinks.slCookies,
        image: SweetLous,
    },
    {
        name: 'Cisco',
        link: sponsorLinks.cisco,
        image: Cisco,
    },
];

const bronzeSponsors: Sponsor[] = [
    {
        name: 'Echo3D',
        link: sponsorLinks.echo3D,
        image: Echo3D,
    },
    {
        name: '1Password',
        link: sponsorLinks.onePassword,
        image: OnePassword,
    },
    {
        name: 'Wolfram',
        link: sponsorLinks.wolfram,
        image: Wolfram,
    },
    {
        name: 'Balsamiq',
        link: sponsorLinks.balsamiq,
        image: Balsamiq,
    },
    {
        name: 'Rosenfeld',
        link: sponsorLinks.rosenfeld,
        image: Rosenfeld,
    },
    {
        name: 'Taskade',
        link: sponsorLinks.taskade,
        image: Taskade,
    },
    {
        name: 'StreamYard',
        link: sponsorLinks.streamyard,
        image: StreamYard,
    },
    {
        name: 'Defiblocks.io',
        link: sponsorLinks.defiblocks,
        image: DeFiBlocks,
    },
    {
        name: 'Interview Cake',
        link: sponsorLinks.interviewCake,
        image: InterviewCake,
    },
    {
        name: 'Ennios',
        link: sponsorLinks.ennios,
        image: Ennios,
    },
    {
        name: 'Certopus',
        link: sponsorLinks.certopus,
        image: Certopus,
    },
    {
        name: 'Interview Buddy',
        link: sponsorLinks.interviewBuddy,
        image: InterviewBuddy,
    },
    {
        name: 'Verbwire',
        link: sponsorLinks.verbwire,
        image: Verbwire,
    },
    {
        name: 'JDoodle',
        link: sponsorLinks.jDoodle,
        image: JDoodle,
    },
    {
        name: 'Vectara',
        link: sponsorLinks.vectara,
        image: Vectara,
    },
    {
        name: "Maven Sourcing",
        link: "https://mavensourcing.com/",
        image: MavenSourcing,
    }
];

const partners: Sponsor[] = [
    {
        name: 'Student Union',
        link: sponsorLinks.su,
        image: StudentsUnion,
    },
    {
        name: 'Major League Hacking',
        link: sponsorLinks.mlh,
        image: Mlh,
    },
    {
        name: 'Fossa',
        link: sponsorLinks.fossa,
        image: Fossa,
    },
    {
        name: 'Fintech',
        link: sponsorLinks.fintech,
        image: Fintech,
    },
    {
        name: 'Laurier Computer Society',
        link: sponsorLinks.lcs,
        image: Lcs,
    },
];

const sponsors = {
    platinumSponsors,
    goldSponsors,
    silverSponsors,
    bronzeSponsors,
    partners,
};

export { sponsors };
