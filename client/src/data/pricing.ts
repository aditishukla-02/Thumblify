import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "Access to 20 AI Thumbnails per month",
            "Templates access",
            "Email Support",
            "No watermark",
            
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited templates",
            "premium support",
            "Resoultion",
            "Customisable",
            "testing tools avaliable",
            "1-on-1 mentoring sessions",
            "Job assistance"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "API Access",
            "Dedicated support",
            "Unlimited projects",
            "Dedicated Account Manager",
            "Premium reviews"
        ],
        mostPopular: false
    }
];