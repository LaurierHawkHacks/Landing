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
    InterviewCake,
    JDoodle,
    Lcs,
    MavenSourcing,
    Mlh,
    Near,
    OnePassword,
    Roku,
    Rosenfeld,
    SmokesPoutinerie,
    StudentsUnion,
    SweetLous,
    Taskade,
    Vectara,
    Wolfram,
    Avalanche,
    EthToronto,
    EthWomen,
    Futurist,
    Incogni,
    Neurelo,
    NordPass,
    NordVPN,
    UWBlockchain,
    Metis,
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
    ethToronto: 'https://www.ethtoronto.ca/',
    wluBlockchain: 'https://www.waterlooblockchain.com/',
    futurist: 'https://www.futuristconference.com/',
    ethWomen: 'https://www.ethwomen.com/',

    // platinum
    avalanche: 'https://www.avax.network/',
    near: 'https://near.org/',

    // gold
    fantuan: 'https://fantuan.ca/delivery/en/',
    sp: 'https://smokespoutinerie.com/',
    domino: 'https://www.dominos.ca/en/',
    neurelo: 'https://www.neurelo.com/',
    distributive: 'https://distributive.network/',
    metis: 'https://www.metis.io/',

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
    nordPass: 'https://nordpass.com/',
    nordVpn: 'https://nordvpn.com/',
    incogni: 'https://incogni.com/',
};

const platinumSponsors: Sponsor[] = [
    {
        name: 'Avalanche',
        link: sponsorLinks.avalanche,
        image: Avalanche,
    },
    {
        name: 'Near',
        link: sponsorLinks.near,
        image: Near,
    },
];

const goldSponsors: Sponsor[] = [
    {
        name: 'Distributive',
        link: sponsorLinks.distributive,
        image: Distributive,
    },
    {
        name: 'Smoke Poutinerie',
        link: sponsorLinks.sp,
        image: SmokesPoutinerie,
    },
    {
        name: 'Neurelo',
        link: sponsorLinks.neurelo,
        image: Neurelo,
    },
    {
        name: 'Metis',
        link: sponsorLinks.metis,
        image: Metis,
    },
    {
        name: 'Fantuan Delivery',
        link: sponsorLinks.fantuan,
        image: Fantuan,
    },
    {
        name: 'Dominos',
        link: sponsorLinks.domino,
        image: Dominos,
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
        name: "Sweet Lou's Cookies",
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
        name: 'Certopus',
        link: sponsorLinks.certopus,
        image: Certopus,
    },
    {
        name: 'Vectara',
        link: sponsorLinks.vectara,
        image: Vectara,
    },
    {
        name: 'Ennios',
        link: sponsorLinks.ennios,
        image: Ennios,
    },
    {
        name: 'Echo3D',
        link: sponsorLinks.echo3D,
        image: Echo3D,
    },
    {
        name: 'Taskade',
        link: sponsorLinks.taskade,
        image: Taskade,
    },
    {
        name: 'JDoodle',
        link: sponsorLinks.jDoodle,
        image: JDoodle,
    },
    {
        name: 'Interview Cake',
        link: sponsorLinks.interviewCake,
        image: InterviewCake,
    },
    {
        name: 'Maven Sourcing',
        link: 'https://mavensourcing.ca/',
        image: MavenSourcing,
    },
    {
        name: 'Defiblocks.io',
        link: sponsorLinks.defiblocks,
        image: DeFiBlocks,
    },
    {
        name: 'NordPass',
        link: sponsorLinks.nordPass,
        image: NordPass,
    },
    {
        name: 'NordVPN',
        link: sponsorLinks.nordPass,
        image: NordVPN,
    },
    {
        name: 'Incogni',
        link: sponsorLinks.incogni,
        image: Incogni,
    },
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
    {
        name: 'EthToronto',
        link: sponsorLinks.ethToronto,
        image: EthToronto,
    },
    {
        name: 'Waterloo Blockchain',
        link: sponsorLinks.wluBlockchain,
        image: UWBlockchain,
    },
    {
        name: 'Blockchain Futurist Conference',
        link: sponsorLinks.futurist,
        image: Futurist,
    },
    {
        name: 'EthWomen',
        link: sponsorLinks.ethWomen,
        image: EthWomen,
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
