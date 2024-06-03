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
    Indomie,
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
    NordVPN,
    UWBlockchain,
    Metis,
    GoDaddy,
    Adobe,
    Propelauth,
    SauceLabs,
    MongoDB,
    Fidelity,
    Hackbox,
    NordPass,
    ChefSignature,
} from '@assets';

interface Sponsor {
    name: string;
    link: string;
    image: string;
}

const sponsorLinks = {
    // partners
    mlh: 'https://mlh.io?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    lcs: 'https://lauriercs.ca?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    fintech:
        'https://wlufintech.com?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    fossa: 'https://fossa.ca?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    su: 'https://www.yourstudentsunion.ca?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    ethToronto:
        'https://www.ethtoronto.ca?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    hackbox:
        'https://near.org/hackbox.near/widget/home?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    wluBlockchain:
        'https://waterlooblockchain.com?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    futurist:
        'https://futuristconference.com?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    ethWomen:
        'https://www.ethwomen.com?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',

    // platinum
    avalanche:
        'https://www.avax.network/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    near: 'https://near.org/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',

    // gold
    fantuan:
        'https://fantuan.ca/delivery/en/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    sp: 'https://sweetlouscookies.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    domino: 'https://www.dominos.ca/en/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    neurelo:
        'https://www.neurelo.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    distributive:
        'https://distributive.network/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    metis: 'https://www.metis.io/',

    // silver
    indomie:
        'https://indomieonline.ca/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    roku: 'https://www.roku.com/en-ca/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    slCookies:
        'https://sweetlouscookies.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    cisco: 'https://www.cisco.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',

    // bronze
    echo3D: 'https://www.echo3d.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    onePassword:
        'https://1password.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    wolfram:
        'https://www.wolframalpha.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    balsamiq:
        'https://balsamiq.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    rosenfeld:
        'https://rosenfeldmedia.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    taskade:
        'https://www.taskade.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    mavenSourcing: 'https://mavensourcing.ca/',
    defiblocks:
        'http://defiblocks.io/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    interviewCake:
        'https://www.interviewcake.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    ennios: 'https://www.enniospasta.ca/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    certopus:
        'https://certopus.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    jDoodle:
        'https://www.jdoodle.com/?utm_source=Event+Website&utm_medium=Event+Sponsorship&utm_campaign=HawkHacks+Sponsorship+2024',
    vectara:
        'https://vectara.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    goDaddy:
        'https://registry.godaddy/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    adobe: 'https://www.adobe.com/ca/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    propelauth:
        'https://www.propelauth.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    sauceLabs:
        'https://saucelabs.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    mongoDB:
        'https://www.mongodb.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    fidelity:
        'https://www.fidelity.ca/en/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    nordPass:
        'https://nordpass.com?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    nordVpn:
        'https://nordvpn.com/hackathons/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    incogni:
        'https://incogni.com/?utm_medium=affiliate&utm_term=&utm_content&utm_campaign=hawkhacks24',
    chefsignature: 'https://thechefsignature.ca/',
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
        name: 'Indomie',
        link: sponsorLinks.indomie,
        image: Indomie,
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
        link: sponsorLinks.mavenSourcing,
        image: MavenSourcing,
    },
    {
        name: 'Defiblocks.io',
        link: sponsorLinks.defiblocks,
        image: DeFiBlocks,
    },
    {
        name: 'GoDaddy',
        link: sponsorLinks.goDaddy,
        image: GoDaddy,
    },
    {
        name: 'Adobe',
        link: sponsorLinks.adobe,
        image: Adobe,
    },
    {
        name: 'Propelauth',
        link: sponsorLinks.propelauth,
        image: Propelauth,
    },
    {
        name: 'SauceLabs',
        link: sponsorLinks.sauceLabs,
        image: SauceLabs,
    },
    {
        name: 'MongoDB',
        link: sponsorLinks.mongoDB,
        image: MongoDB,
    },
    {
        name: 'Fidelity Investments',
        link: sponsorLinks.fidelity,
        image: Fidelity,
    },
    {
        name: 'NordPass',
        link: sponsorLinks.nordPass,
        image: NordPass,
    },
    {
        name: 'NordVPN',
        link: sponsorLinks.nordVpn,
        image: NordVPN,
    },
    {
        name: 'Incogni',
        link: sponsorLinks.incogni,
        image: Incogni,
    },
    {
        name: 'Chef Signature',
        link: sponsorLinks.chefsignature,
        image: ChefSignature,
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
        name: 'Hackbox Canada',
        link: sponsorLinks.hackbox,
        image: Hackbox,
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