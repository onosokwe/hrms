import React from "react";

function HeroSearch() {
    const industries = [
        { value: "accounting", label: "Accounting" },
        { value: "administrative-and-office", label: "Administrative and Office" },
        { value: "agriculture-fishing-forestry", label: "Agriculture, Fishing & Forestry" },
        { value: "automotive-aviation", label: "Automotive & Aviation" },
        { value: "advertising-media-communications", label: "Advertising, Media & Communications" },
        { value: "banking-finance-insurance", label: "Banking, Finance & Insurance" },
        { value: "construction", label: "Construction" },
        { value: "creative-and-design", label: "Creative and Design" },
        { value: "customer-service-and-support", label: "Customer Service and Support" },
        { value: "creative-and-design", label: "Creative and Design" },
        { value: "education", label: "Education" },
        { value: "enforcement-security", label: "Enforcement & Security" },
        { value: "engineering-and-construction", label: "Engineering and Construction" },
        { value: "health-and-safety", label: "Health and Safety" },
        { value: "human-resources", label: "Human Resources" },
        { value: "energy-utilities", label: "Energy & Utilities" },
        { value: "entertainment-events-sport", label: "Entertainment, Events & Sport" },
        { value: "healthcare", label: "Healthcare" },
        { value: "hospitality-hotel", label: "Hospitality & Hotel" },
        { value: "it-telecoms", label: "IT & Telecoms" },
        { value: "law-compliance", label: "Law & Compliance" },
        { value: "manufacturing-warehousing", label: "Manufacturing & Warehousing" },
        { value: "mining-energy-metals", label: "Mining, Energy & Metals" },
        { value: "ngo-npo-charity", label: "NGO, NPO & Charity" },
        { value: "real-estate", label: "Real Estate" },
        { value: "recruitment", label: "Recruitment" },
        { value: "retail-fashion-fmcg", label: "Retail, Fashion & FMCG" },
        { value: "shipping-logistics", label: "Shipping & Logistics" },
        { value: "tourism-travel", label: "Tourism & Travel" },
        { value: "unspecified", label: "Unspecified" },
    ];

    const locations = [
        { value: "lagos", label: "Lagos" },
        { value: "abuja", label: "Abuja" },
        { value: "ibadan", label: "Ibadan" },
        { value: "port-harcourt", label: "Port Harcourt" },
        { value: "enugu", label: "Enugu" },
        { value: "abeokuta", label: "Abeokuta" },
        { value: "usa", label: "United States of America" },
        { value: "united-kingdom", label: "United Kingdom" },
        { value: "canada", label: "Canada" },
    ];

    const levels = [
        { value: "no-experience", label: "No Experience" },
        { value: "entry-level", label: "Entry Level" },
        { value: "mid-level", label: "Mid Level" },
        { value: "senior-level", label: "Senior Level" },
        { value: "executive-management", label: "Executive Management" },
    ];

    return (
        <section className="hero-search">
            <div className="container justify-content-center sort-by">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="bg-white sort-box d-flex justify-content-center mb-2">
                            <select
                                className="form-control form-select"
                            >
                                <option value="">All Industries</option>
                                {industries.map((industry, i) => ( 
                                    <option value={industry.value} key={i}>{industry.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="bg-white sort-box d-flex justify-content-center mb-2">
                            <select
                                className="form-control form-select"
                                >
                                <option value="">All Locations</option>
                                {locations.map((item, i) => (
                                    <option value={item.value} key={i}>{item.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="bg-white sort-box d-flex justify-content-center mb-2">
                            <select
                                className="form-control form-select"
                            >
                                <option value="">All Experience Levels</option>
                                {levels.map((level, i) => ( 
                                    <option value={level.value} key={i}>{level.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="d-flex justify-content-left mb-2">
                            <button name="" className="btn btn-block hero-button">Find Job</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSearch;