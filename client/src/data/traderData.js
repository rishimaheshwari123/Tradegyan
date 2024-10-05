export const maindata = {
    equity: [
        { name: "Cash", path: "/trader/equity/cash" },
        { name: "Alpha Premium Equity", path: "/trader/equity/alpha-premium" },
        { name: "Equity Options", path: "/trader/equity/equity-options" }
    ],
    commodity: [
        { name: "MCX", path: "/trader/commodity/mcx" },
        { name: "MCX OPTIONS", path: "/trader/commodity/mcx-options" }
    ]
};

export const datas = {
    equity: {
        "cash": [
            {
                name:"Equity Cash",
                image:"https://cdn.prod.website-files.com/593e207ebedace68bd410daa/5e5ce914ac4294ba46621713_5e43dbb9d5c9238077b143a8_medium.png",
                description: "A product designed for traders who aim to grab high potential trades from Cash market.",
                what: "Intraday recommendations in Cash Segment based on Technical analysis with Occasional Holding.",
                whom: "Intra-day/Short-term Traders in Equity Market.",
                idealFor: "A stock trader who wants to get advantage of the intraday price movements of liquid stocks.",
                productDescription: "Designed by keeping active traders in mind; it provides you 25-30 recommendations in a month through SMS.",
                features: {
                    minimumInvestment: "INR 60,000",
                    recommendationFrequency: "Minimum 25-30 monthly",
                    modeOfRecommendation: "SMS",
                    followUp: "Yes"
                },
                sample: [
                    "BUY 350 SHARES OF MARICO IN THE RANGE OF 350-350.20 WITH SL OF 347.2 TGT 355.3",
                    "SELL 75 SHARES OF BATAINDIA IN THE RANGE OF 1140-1142 WITH SL OF 1151 TGT 1125"
                ],
                disclaimer: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantees performance of the intermediary or provide any assurance of returns to investors."
            }
        ],
        "alpha-premium": [
            {
                name:'ALPHA PREMIUM EQUITY',
                image:"https://cdn.prod.website-files.com/593e207ebedace68bd410daa/5e5ca74863723e867eae11eb_risko-meter-prime-gold.png",
                description: "It is one of our premium services exclusively designed for those traders who want to trade under the guidance of market experts.",
                what: "Intraday Recommendation in Cash and Option Segment with occasional BTST recommendations.",
                whom: "Intraday Traders in Cash and Option Segment.",
                idealFor: "Ideal for clients who want to trade with diversified strategy with the combination of Cash and Option Segment in volatile market.",
                productDescription: "Designed to provide 2-4 Recommendation in Cash and Options segment on a daily basis.",
                recommendationFrequency: "2-4 recommendations in cash and options segment daily (minimum 1 recommendation in each segment)",
                riskSuitability: "Moderately High",
                features: {
                    minimumInvestment: "INR 2,00,000",
                    followUp: "Yes",
                    modeOfRecommendation: "SMS"
                },
                sample: [
                    "BUY 100 SHARES OF RELIANCE IN THE RANGE OF 2500-2502 WITH THE SL OF 2470 TGT 2540",
                    "BUY 1 LOT OF BANK NIFTY 07OCT 37700 CE IN THE RANGE OF 490 - 495 WITH SL OF 395 TGT 640"
                ],
                disclaimer: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantees performance of the intermediary or provide any assurance of returns to investors."
            }
        ],
        "equity-options": [
            {
                name:'Equity Options',
                image:"https://cdn.prod.website-files.com/593e207ebedace68bd410daa/5e5ca74863723e867eae11eb_risko-meter-prime-gold.png",
                description: "A product designed for traders who aim to grab high potential trades in the Options Segment.",
                what: "Intraday recommendations in Indices/Stocks options based on Technical Analysis.",
                whom: "Intra-day/Short-term Traders in Equity Options.",
                idealFor: "An options trader who wants to get advantage of higher leverage and the inherent nature of options.",
                productDescription: "Designed by keeping active traders in mind; it provides you 25-30 recommendations in a month.",
                features: {
                    minimumInvestment: "INR 60,000",
                    recommendationFrequency: "25-30 monthly",
                    modeOfRecommendation: "SMS",
                    followUp: "Yes"
                },
                sample: [
                    "BUY 1 LOT OF NIFTY AUG 13500 CE IN THE RANGE OF 70-72 WITH SL OF 40 TGT 120",
                    "BUY 1 LOT OF TCS MAY 2700 CE IN THE RANGE OF 13-13.50 WITH SL OF 3 TGT 24"
                ],
                disclaimer: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantees performance of the intermediary or provide any assurance of returns to investors."
            }
        ]
    },
    commodity: {
        "mcx": [
            {
                name:'MCX',
                image:"https://cdn.prod.website-files.com/593e207ebedace68bd410daa/5e5ca74863723e867eae11eb_risko-meter-prime-gold.png",
                description: "A product designed for traders who aim to grab high potential trades from Commodity market.",
                what: "Intraday based recommendation in MCX commodity in the segment of Base Metals, Gold Mini, Silver Mini, Natural Gas with Occasional Holding.",
                whom: "Intra-day/Short-term Traders in Commodity Market.",
                idealFor: "Ideal for clients who want to trade in MCX Commodities.",
                productDescription: "Designed by keeping active traders in mind; it provides you 20-22 recommendations in a month through SMS.",
                features: {
                    minimumInvestment: "INR 75,000",
                    recommendationFrequency: "20-22 monthly",
                    modeOfRecommendation: "SMS",
                    followUp: "Yes"
                },
                sample: [
                    "BUY 1 LOT OF LEAD MCX DEC FUTS IN THE RANGE OF 157.70 -157.75 WITH THE SL OF 156.60 TGT 160.20"
                ],
                disclaimer: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantees performance of the intermediary or provide any assurance of returns to investors."
            }
        ],
        "mcx-options": [
            {
                name:'MCX Options',
                image:'https://cdn.prod.website-files.com/593e207ebedace68bd410daa/5e5ca74863723e867eae11eb_risko-meter-prime-gold.png',
                description: "A retail service designed for traders who want to trade in Commodity Options.",
                what: "Recommendations in MCX Options in Gold, Silver and Crude Oil Commodities.",
                whom: "Intraday / BTST Trader who trades on Options in MCX listed commodities.",
                idealFor: "Ideal for clients who want to trade in MCX Commodities options.",
                productDescription: "Designed for active traders in MCX Commodities options with 12-15 recommendations in a month.",
                riskSuitability: "Moderately High",
                features: {
                    recommendationFrequency: "0 - 1 Recommendations daily (Expect 12-15 Recommendations monthly)",
                    followUp: "Yes",
                    minimumInvestment: "INR 50,000",
                    modeOfRecommendation: "Calls will be given Via SMS/Applications"
                },
                sample: [
                    "BUY CRUDEOIL MCX SEPT 5200 CE IN THE RANGE OF 100-100.10 SL 84 TARGET 120"
                ],
                disclaimer: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantees performance of the intermediary or provide any assurance of returns to investors."
            }
        ]
    }

};
