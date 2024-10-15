export const navLinks = [
    {
        name: "Home",
        path: "/",
        // sublinks: [
        //     { name: "Sublink 1", path: "/sublink1" },
        //     { name: "Sublink 2", path: "/sublink2" },
        // ],
    },
    {
        name: "About", path: "/about",
        sublinks: [
            { name: "Team", path: "/team" },
            { name: "About", path: "/about" },

        ],
    },



    {
        name: "Services",
        path: "/",
        sublinks: [
            { name: "Investors", path: "/investor" },
            { name: "Traders", path: "/trader" },
        ],
    },

    { name: "Podcast", path: "/podcast" },
    { name: "SEBI Disclosures", path: "/sebidiscloser" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" },
    { name: "Learn", path: "/learn" },



    // { name: "Faq", path: "/faq" },

    // { name: "Faq", path: "/faq" },
    // { name: "Client Login", path: "/client-login" },
];
export const traderNavLinks = [
    {
        name: "Main Home",
        path: "/",
    },
    {
        name: "Home",
        path: "/trader",
    },
    { name: "About", path: "/trader/about" },
    { name: "Contact", path: "/trader/contact" },
];

export const investorNavLinks = [
    {
        name: "Main Home",
        path: "/",
    },
    {
        name: "Home",
        path: "/investor",
    },
    { name: "About", path: "/investor/about-us" },
    { name: "Contact", path: "/investor/contact-us" },
    {
        name: "Services",
        path: "/investor/services",
        sublinks: [
            { name: "Investors", path: "/investor" },
            { name: "Traders", path: "/trader" },
        ],
    },
    // { name: "Services", path: "" },
];