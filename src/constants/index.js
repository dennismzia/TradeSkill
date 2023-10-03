import {icon1,icon2,icon3,icon16,icon17,icon18} from "../assets/icons";

import {
    ConstructionAccident,
    DogBIte,
    Laborlaws,
    medical,
    motorvehicleaccident,
    premisesLiablity,
    productLiability,
    Railway,
    slipandfall,
    workAccident,
    wrongfulDeath,
    wrongfulImprisonment
} from "../assets/images";



export const NavLinks = [
    {label:"Attorney", href: "#Attorney"},
    {label:"Partners", href: "#Partners"},
    {label:"Medical", href: "#Medical"}, 
    {label:"Access", href:"#Access"}, 
    {label:"Pass", href: "#Pass"},
    {label:"FAQs", href: "#FAQs"},
    {label:"About", href: "#About"}
];

export const CaseData = [
    {
        imgURL:icon1,
        Step:"Step 1",
        label:"Tell us how much you need.",
        subtext:"Submit a quick form with your case details and cash required. We fund cases from $1,000 to $250,000."
    },

    {
        imgURL:icon2,
        Step:"Step 2",
        label:"We review and approve.",
        subtext:"We either auto-approve requests or gather details from your lawyer. We typically approve in 24 hrs."
    } ,

    {
        imgURL:icon3,
        Step:"Step 3",
        label:"Get cash and fight your case.",
        subtext:"We will advance you the money today with no obligation to make any payments unless you win or settle your lawsuit"
    }
];


export const HardFacts = [
    {
        label:"75%",
        subtext:"share of legal professionals who believe litigation finance is growing and important part of the business of law"
    },
    {
        label:"95%",
        subtext:"of personal injury cases settle for more than twice the initial settlement amount when a plaintiff does not settle immediately (from LitiPay customer data)."
    },
    {
        label:"$60,000",
        subtext:"While hiring an attorney might extend the length of a case, those plaintiffs who are represented receive settlements worth an average of $60,000 more than those who settle without one."
    }

];


export const FundData = [
    {
        imgURL:motorvehicleaccident,
        title:"Motor Vehicle accident"
    },
    {
        imgURL:medical,
        title:"Medical malpractice"
    },
    {
        imgURL:workAccident,
        title:"Work accident"
    },
    {
        imgURL:wrongfulImprisonment,
        title:"Wrongful Imprisonment"
    },
    {
        imgURL:slipandfall,
        title:"slip and fall"
    },
    {
        imgURL:productLiability,
        title:"Product liability"
    },
    {
        imgURL:premisesLiablity,
        title:"premises liablility"
    },
    {
        imgURL:DogBIte,
        title:"Dog bite"
    },
    {
        imgURL:wrongfulDeath,
        title:"Wrongful death"
    },
    {
        imgURL:Laborlaws,
        title:"labor laws"
    },
    {
        imgURL:ConstructionAccident,
        title:"Construction Accident"
    },
    {
        imgURL:Railway,
        title:"Railway worker accident"
    }
];



export const  Benefits = [

    {
        imgURL:icon16,
        label:"Get cash now.",
        subtext:"With our e-Funding, we can get you cash within minutes of your request."
    },
    {
        imgURL:icon17,
        label:"Support for all.",
        subtext:"A dedicated account specialist is at your service. In English or Spanish."
    },
    {
        imgURL:icon18,
        label:"Zero risk guarantee.",
        subtext:"We will advance you the money today with no obligation to make any payments unless you win or settle your lawsuit."
    }

];

export const FooterLinks = [
    {href:"#",label:"Attorney Partners"},
    {href:"#",label:"FAQs"},
    {href:"#",label:"About us"},
    {href:"#",label:"Terms & conditions"},
    {href:"#",label:"Privacy Policy"}
];

export const Address = [
    {
        title:"Corporate Office",
        address:"2 Wall St FL6, New York, NY 10005 "
    }
];


export const Formelements = [
    {
        label: "First name",
        inputType:"text"
    },    
    {
        label: "last name",
        inputType:"text"
    },    
    {
        label: "email",
        inputType:"email"
    },    
    {
        label: "phone number",
        inputType:"number"
    },    
    {
        label: "Funds Requested",
        inputType:"number"
    },    
    {
        label: "Law Firm's Name",
        inputType:"text"
    },    
    {
        label: "Law Firm's website",
        inputType:"url"
    },    
    {
        label: "Attorney's name",
        inputType:"text"
    },    
    {
        label: "Attorney’s Phone Number*",
        inputType:"text"
    },    
    {
        label: "Attorney's Email*",
        inputType:"text"
    }

]


// export const socialMedia = [
//     { src: facebook, alt: "facebook logo" },
//     { src: twitter, alt: "twitter logo" },
//     { src: instagram, alt: "instagram logo" },
// ];