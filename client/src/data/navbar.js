export const navLinks = [
    {
        name: "Home",
        path: "/",
        // sublinks: [
        //     { name: "Sublink 1", path: "/sublink1" },
        //     { name: "Sublink 2", path: "/sublink2" },
        // ],
    },
    { name: "Contact", path: "/contact" },
    {
        name: "About", path: "/about",
        sublinks: [
            { name: "Team", path: "/team" },

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
    { name: "Support", path: "/support" },
    { name: "Podcast", path: "/podcast" },
    { name: "SEBI Disclosures", path: "/sebidiscloser" },
    // { name: "Faq", path: "/faq" },
    { name: "Learn", path: "/learn" },
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