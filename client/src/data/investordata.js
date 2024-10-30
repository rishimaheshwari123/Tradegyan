import report from '../assets/report.jpg'
export const service = [
    {
        id: "1",
        img: "https://media.licdn.com/dms/image/D4D12AQEJ256Bcyrhig/article-cover_image-shrink_720_1280/0/1678757430232?e=2147483647&v=beta&t=6rVa01GW0ce2osKy0vP16iBbjb0A5_h8u9SitngKx0Y",

        name: "Trade Gyan WealthMax",
        tagline: "Empowering Your Financial Future",
        overview: "Trade Gyan WealthMax is a personalized financial planning and investment solution designed to help individuals achieve their financial goals. Our expert advisors will guide you through a comprehensive financial planning process, providing tailored recommendations to optimize your investments and secure your financial future.",
        features: [
            "Comprehensive Financial Planning: Detailed assessment of financial situation, goals, and risk tolerance.",
            "Personalized Investment Strategy: Customized portfolio creation based on client goals and risk profile.",
            "Diversified Investment Options: Access to equities, mutual funds, insurance, and other investment vehicles.",
            "Regular Portfolio Rebalancing: Periodic review and adjustment to ensure alignment with changing market conditions.",
            "Tax Planning and Optimization: Strategies to minimize tax liabilities.",
            "Risk Management: Insurance solutions for life, health, and disability coverage.",
            "Retirement Planning: Customized plans for a secure post-retirement life.",
            "Estate Planning: Guidance on wills, trusts, and succession planning."
        ],
        benefits: [
            "Expert Guidance: SEBI-registered investment advisors with proven expertise.",
            "Tailored Solutions: Personalized plans addressing unique financial goals.",
            "Transparency: Regular updates and clear communication.",
            "Flexibility: Adaptability to changing market conditions.",
            "Cost-Effectiveness: Competitive pricing without hidden fees."
        ], servicePlans: [
            { name: "One-time asset allocation", priceRange: "₹10,000 - ₹20,000" },
            { name: "Quarterly rebalancing and review: ", priceRange: "₹30,000 - ₹60,000" },
            { name: "Monthly rebalancing, review, and priority support", priceRange: "₹60,000 - 1,20,000 per annum" }
        ],
        deliveryChannels: ["In-Person Meetings: One-on-one consultations at Trade Gyan Solutions.", " Video Conferencing: Virtual meetings for convenience", "Phone/Email Support: Ongoing assistance and query resolution."],
        marketingStrategy: ["Digital Presence: Website, social media, and online advertising.", "Referral Program: Incentives for client referrals.", " Seminar/Workshops: Educational events on personal finance and investing.", ". Partnerships: Collaborations with banks, insurance companies, and other financial institutions."
        ],

        why: [
            { heading: "Why Choose Trade Gyan WealthMax?" },
            "SEBI-Registered Advisors: Trustworthy expertise.",
            "Client-Centric Approach: Personalized solutions.",
            "Transparency: Clear communication and fee structure."
        ],
        desc: ""
    },
    {
        id: "2",
        img: "https://altair.com/images/default-source/resource-images/software-asset-optimization-jpg.jpg?sfvrsn=59614c5f_0",

        name: "Trade Gyan Asset Optimizer",
        tagline: "Optimize Your Portfolio. Optimize Your Returns",
        overview: "Trade Gyan Asset Optimizer is a strategic asset allocation solution designed to help investors achieve their financial goals while managing risk. Our expert advisors will create a diversified portfolio tailored to your risk profile, investment horizon, and objectives.",
        features: [
            " Risk Profiling: Comprehensive assessment to determine risk tolerance.",
            "Asset Class Selection: Equities, Fixed Income, Commodities, Real Estate, and Alternatives.",
            "Portfolio Construction: Diversified allocation across asset classes, sectors, and geographies.",
            "Regular Rebalancing: Periodic review and adjustment to maintain optimal allocation.",
            "Tax Efficiency: Consideration of tax implications in portfolio construction."
        ],

        strategies: [
            "Conservative: 20% Equities, 60% Fixed Income, 20% Alternatives",
            "Moderate: 40% Equities, 40% Fixed Income, 20% Alternatives",
            "Aggressive: 60% Equities, 20% Fixed Income, 20% Alternatives",
            "Customized: Tailored allocation based on individual goals and risk profile"

        ],
        option: [
            "Equities: Stocks, Mutual Funds, ETFs",
            "Fixed Income: Bonds, Debentures, Fixed Deposits",
            "Commodities: Gold, Silver, Other precious metals",
            " Real Estate: REITs, Real Estate Mutual Funds",
            "Alternatives: Private Equity, Hedge Funds, Structured Products"
        ],
        benefits: [
            "Diversification: Reduced risk through spread across asset classes.",
            "Optimized Returns: Potential for higher returns through strategic allocation.",
            "Risk Management: Regular rebalancing to maintain optimal risk profile.",
            'Tax Efficiency: Minimized tax liabilities.',
            "Expert Guidance: SEBI-registered advisors with proven expertise."
        ], servicePlans: [
            { name: "One-time asset allocation", priceRange: "₹10,000 - ₹20,000" },
            { name: "Quarterly rebalancing and review: ", priceRange: "₹30,000 - ₹60,000" },
            { name: "Monthly rebalancing, review, and priority support", priceRange: "₹60,000 - 1,20,000 per annum" }
        ],
        deliveryChannels: ["In-Person Meetings: One-on-one consultations at Trade Gyan Solutions.",
            "Video Conferencing: Virtual meetings for convenience.",
            "Phone/Email Support: Ongoing assistance and query resolution.",

            "Online Platform: Access to portfolio tracking and updates."

        ],
        marketingStrategy: ["Digital Presence: Website, social media, and online advertising.",
            "Referral Program: Incentives for client referrals.",
            "Seminar/Workshops: Educational events on asset allocation and investing.",
            "Partnerships: Collaborations with banks, insurance companies, and other financial institutions."
        ],

        why: [
            { heading: "Why Choose Trade Gyan Asset Optimizer?" },
            "SEBI-Registered Advisors: Trustworthy expertise.",
            " Customized Solutions: Tailored asset allocation.",
            "Transparency: Clear communication and fee structure.",
            "Proven Track Record: Consistent results in varying market conditions."

        ],

    },


    {
        id: "3",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/quant-mutual-funds-245508936-16x9_0.jpg?VersionId=T08gcNNaO8EkbXQrNcijtOZbldevgh2_&size=690:388", // 
        name: "Trade Gyan Mutual Fund Navigator",
        tagline: "Simplify Your Investments. Amplify Your Returns.",
        overview: "Trade Gyan Mutual Fund Navigator is a curated mutual fund investment solution designed to help investors achieve their financial goals. Our expert advisors will guide you through a comprehensive mutual fund selection process, providing tailored recommendations to optimize your portfolio.",
        features: [
            "Fund Selection: Access to a diversified range of mutual funds from leading AMCs.",
            "Risk Profiling: Comprehensive assessment to determine risk tolerance.",
            "Portfolio Construction: Diversified allocation across asset classes, sectors, and fund categories.",
            "Regular Monitoring: Periodic review and rebalancing to ensure alignment with changing market conditions.",
            "Tax Efficiency: Consideration of tax implications in fund selection."
        ],
        mutualFundCategories: {
            equityFunds: ["Large Cap", "Mid Cap", "Small Cap", "Sectoral Funds (e.g., Technology, Healthcare)"],
            debtFunds: ["Liquid Funds", "Short-Term Funds", "Long-Term Funds", "Credit Risk Funds"],
            hybridFunds: ["Balanced Funds", "Dynamic Asset Allocation Funds"],
            indexFundsETFs: ["Nifty 50", "Sensex", "International Index Funds"]
        },
        strategies: [
            "Conservative 30% Equity, 60% Debt, 10% Hybrid",
            "Moderate 50% Equity, 30% Debt, 20% Hybrid",
            "Aggressive 70% Equity, 20% Debt, 10% Hybrid",
            "Customized Tailored allocation based on individual goals and risk profile"
        ],
        benefits: [
            "Diversification: Reduced risk through spread across asset classes and funds.",
            "Expert Guidance: SEBI-registered advisors with proven expertise.",
            "Transparency: Clear communication and fee structure.",
            "Convenience: Single-point access to multiple mutual funds.",
            "Regular Updates: Periodic statements and portfolio reviews."
        ],
        servicePlans: [
            { name: "One-time asset allocation", priceRange: "₹10,000 - ₹20,000" },
            { name: "Quarterly rebalancing and review: ", priceRange: "₹30,000 - ₹60,000" },
            { name: "Monthly rebalancing, review, and priority support", priceRange: "₹60,000 - 1,20,000 per annum" }
        ],
        deliveryChannels: [
            "In-Person Meetings: One-on-one consultations at Trade Gyan Solutions.",
            "Video Conferencing: Virtual meetings for convenience.",
            "Phone/Email Support: Ongoing assistance and query resolution.",
            "Online Platform: Access to portfolio tracking and updates."
        ],
        marketingStrategy: [
            "Digital Presence: Website, social media, and online advertising.",
            "Referral Program: Incentives for client referrals.",
            "Seminar/Workshops: Educational events on mutual fund investing.",
            "Partnerships: Collaborations with banks, insurance companies, and other financial institutions."
        ],
        why: [
            { heading: "Why Choose Trade Gyan Mutual Fund Navigator?" },
            "SEBI-Registered Advisors: Trustworthy expertise.",
            "Customized Solutions: Tailored mutual fund selection.",
            "Transparency: Clear communication and fee structure.",
            "Proven Track Record: Consistent results in varying market conditions."
        ],
        desc: "Trade Gyan Mutual Fund Navigator simplifies the investment process, offering tailored solutions for financial growth through diversified mutual fund investments."
    },

    {
        id: "4",
        img: "https://lxme.in/wp-content/uploads/2023/02/Community-Blog-image-ETFs-1.jpg",
        name: "Trade Gyan ETF Advantage",
        tagline: "Precision Investing. Simplified.",
        overview: "Trade Gyan ETF Advantage is a curated Exchange-Traded Fund (ETF) investment solution designed to provide investors with diversified, low-cost, and efficient exposure to various asset classes and sectors. Our expert advisors will guide you through a comprehensive ETF selection process, providing tailored recommendations to optimize your portfolio.",
        features: [
            "Broad Asset Class Coverage: Equity, Fixed Income, Commodities, Real Estate, and Alternatives.",
            "Sector-Specific ETFs: Technology, Healthcare, Financials, Consumer Goods, and more.",
            "Index Tracking: Nifty 50, Sensex, Nasdaq 100, S&P 500, and other prominent indices.",
            "Active Management: Expertly managed ETFs for enhanced returns.",
            "Tax Efficiency: Consideration of tax implications in ETF selection.",
            "Regular Rebalancing: Periodic review and adjustment to maintain optimal allocation."
        ],
        etfCategories: {
            equityETFs: [
                "Large Cap (e.g., Nifty 50, Sensex)",
                "Mid Cap (e.g., Nifty Midcap 100)",
                "Small Cap (e.g., Nifty Smallcap 100)",
                "Sectoral ETFs (e.g., Technology, Healthcare)"
            ],
            debtETFs: [
                "Government Securities (e.g., G-Sec)",
                "Corporate Bonds (e.g., AAA-rated)"
            ],
            commodityETFs: [
                "Gold",
                "Silver",
                "Crude Oil"
            ],
            realEstateETFs: [
                "REITs (Real Estate Investment Trusts)"
            ],
            internationalETFs: [
                "Developed Markets (e.g., S&P 500)",
                "Emerging Markets (e.g., BRICS)"
            ]
        },
        strategies: [
            "Conservative 30% Equity, 60% Debt, 10% Alternatives",
            "Moderate 50% Equity, 30% Debt, 20% Alternatives",
            "Aggressive 70% Equity, 20% Debt, 10% Alternatives",
            "Customized Tailored allocation based on individual goals and risk profile"
        ],
        benefits: [
            "Diversification: Reduced risk through spread across asset classes and sectors.",
            "Low Cost: Competitive expense ratios.",
            "Transparency: Clear communication and fee structure.",
            "Flexibility: Easy buying and selling on stock exchanges.",
            "Expert Guidance: SEBI-registered advisors with proven expertise."
        ],
        servicePlans: [
            { name: "One-time asset allocation", priceRange: "₹10,000 - ₹20,000" },
            { name: "Quarterly rebalancing and review: ", priceRange: "₹30,000 - ₹60,000" },
            { name: "Monthly rebalancing, review, and priority support", priceRange: "₹60,000 - 1,20,000 per annum" }
        ],
        deliveryChannels: [
            "In-Person Meetings: One-on-one consultations at Trade Gyan Solutions.",
            "Video Conferencing: Virtual meetings for convenience.",
            "Phone/Email Support: Ongoing assistance and query resolution.",
            "Online Platform: Access to portfolio tracking and updates."
        ],
        marketingStrategy: [
            "Digital Presence: Website, social media, and online advertising.",
            "Referral Program: Incentives for client referrals.",
            "Seminar/Workshops: Educational events on ETF investing.",
            "Partnerships: Collaborations with banks, insurance companies, and other financial institutions."
        ],
        why: [
            { heading: "Why Choose Trade Gyan ETF Advantage?" },
            "SEBI-Registered Advisors: Trustworthy expertise.",
            "Customized Solutions: Tailored ETF selection.",
            "Transparency: Clear communication and fee structure.",
            "Proven Track Record: Consistent results in varying market conditions."
        ],
        desc: "Trade Gyan ETF Advantage simplifies the investment process, offering tailored solutions for financial growth through diversified ETF investments."
    },
    {
        id: "5",
        img: "https://www.dividendscreen.com/wp-content/uploads/2024/07/2-600x400.jpg",
        name: "Trade Gyan Bond Plus",
        tagline: "Stable Returns. Secure Future.",
        overview: "Trade Gyan Bond Plus is a curated bond investment solution designed to provide investors with a stable source of income and capital preservation. Our expert advisors will guide you through a comprehensive bond selection process, providing tailored recommendations to optimize your portfolio.",
        features: [
            "Diversified Bond Portfolio: Government Securities (G-Sec), Corporate Bonds, PSU Bonds, and Municipal Bonds.",
            "Credit Rating: Investment-grade bonds (AAA, AA+, AA, AA-).",
            "Tenure: Short-term (1-3 years), Medium-term (4-7 years), Long-term (8-10 years).",
            "Yield Optimization: Regular review and rebalancing to maximize returns.",
            "Risk Management: Careful selection of bonds to minimize credit risk."
        ],
        bondCategories: [
            "Government Securities (G-Sec): Central Government Bonds, State Government Bonds",
            "Corporate Bonds: AAA-rated Corporate Bonds, High-grade Corporate Bonds",
            "PSU Bonds: Public Sector Undertaking Bonds",
            "Municipal Bonds: Municipal Corporation Bonds"
        ],
        strategies: [
            "Conservative: 80% G-Sec, 20% Corporate Bonds",
            "Moderate: 60% G-Sec, 40% Corporate Bonds",
            "Aggressive: 40% G-Sec, 60% Corporate Bonds",
            "Customized: Tailored allocation based on individual goals and risk profile"
        ],
        benefits: [
            "Regular Income: Periodic interest payments.",
            "Capital Preservation: Low-risk investment.",
            "Diversification: Reduced risk through spread across bond categories.",
            "Expert Guidance: SEBI-registered advisors with proven expertise.",
            "Transparency: Clear communication and fee structure."
        ],
        servicePlans: [
            { name: "One-time asset allocation", priceRange: "₹10,000 - ₹20,000" },
            { name: "Quarterly rebalancing and review: ", priceRange: "₹30,000 - ₹60,000" },
            { name: "Monthly rebalancing, review, and priority support", priceRange: "₹60,000 - 1,20,000 per annum" }
        ],
        deliveryChannels: [
            "In-Person Meetings: One-on-one consultations at Trade Gyan Solutions.",
            "Video Conferencing: Virtual meetings for convenience.",
            "Phone/Email Support: Ongoing assistance and query resolution.",
            "Online Platform: Access to portfolio tracking and updates."
        ],
        marketingStrategy: [
            "Digital Presence: Website, social media, and online advertising.",
            "Referral Program: Incentives for client referrals.",
            "Seminar/Workshops: Educational events on bond investing.",
            "Partnerships: Collaborations with banks, insurance companies, and other financial institutions."
        ],
        why: [
            { heading: "Why Choose Trade Gyan Bond Plus?" },
            "SEBI-Registered Advisors: Trustworthy expertise.",
            "Customized Solutions: Tailored bond selection.",
            "Transparency: Clear communication and fee structure.",
            "Proven Track Record: Consistent results in varying market conditions."
        ],
        desc: ""
    }


    ,
    {
        id: "6",
        img: report,
        name: "Special Report",
        tagline: "Special Report.",
        overview: ".",
        features: [
           
        ],
        bondCategories: [
          
        ],
        strategies: [
          
        ],
        benefits: [
           
        ],
        servicePlans: [
         
        ],
    }
]