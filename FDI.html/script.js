const companyData = {
    USA: {
        technology: [
            { name: 'Apple', marketCap: '2.5T', peRatio: 30, roe: 0.45, revenue: '300B' },
            { name: 'Google', marketCap: '1.8T', peRatio: 28, roe: 0.38, revenue: '250B' },
            { name: 'Microsoft', marketCap: '2.0T', peRatio: 35, roe: 0.42, revenue: '250B' },
            { name: 'Facebook', marketCap: '800B', peRatio: 25, roe: 0.40, revenue: '120B' },
            { name: 'Tesla', marketCap: '700B', peRatio: 40, roe: 0.22, revenue: '50B' },
        ],
        finance: [
            { name: 'JPMorgan Chase', marketCap: '450B', peRatio: 12, roe: 0.18, revenue: '150B' },
            { name: 'Goldman Sachs', marketCap: '130B', peRatio: 8, roe: 0.15, revenue: '60B' },
            { name: 'Morgan Stanley', marketCap: '100B', peRatio: 10, roe: 0.17, revenue: '60B' },
            { name: 'Citigroup', marketCap: '100B', peRatio: 9, roe: 0.12, revenue: '70B' },
            { name: 'Bank of America', marketCap: '400B', peRatio: 11, roe: 0.13, revenue: '90B' },
        ],
        healthcare: [
            { name: 'Pfizer', marketCap: '250B', peRatio: 14, roe: 0.20, revenue: '70B' },
            { name: 'Johnson & Johnson', marketCap: '470B', peRatio: 17, roe: 0.25, revenue: '120B' },
            { name: 'Merck', marketCap: '300B', peRatio: 22, roe: 0.24, revenue: '60B' },
            { name: 'AbbVie', marketCap: '250B', peRatio: 18, roe: 0.23, revenue: '40B' },
            { name: 'Gilead Sciences', marketCap: '180B', peRatio: 12, roe: 0.30, revenue: '30B' },
        ],
    },
    India: {
        technology: [
            { name: 'Tata Consultancy Services', marketCap: '200B', peRatio: 24, roe: 0.27, revenue: '30B' },
            { name: 'Infosys', marketCap: '100B', peRatio: 22, roe: 0.25, revenue: '16B' },
            { name: 'Wipro', marketCap: '50B', peRatio: 18, roe: 0.19, revenue: '12B' },
            { name: 'Tech Mahindra', marketCap: '50B', peRatio: 21, roe: 0.22, revenue: '10B' },
            { name: 'HCL Technologies', marketCap: '45B', peRatio: 25, roe: 0.28, revenue: '15B' },
        ],
        healthcare: [
            { name: 'Dr. Reddy\'s Labs', marketCap: '20B', peRatio: 18, roe: 0.23, revenue: '3B' },
            { name: 'Cipla', marketCap: '22B', peRatio: 20, roe: 0.25, revenue: '4B' },
            { name: 'Sun Pharma', marketCap: '45B', peRatio: 22, roe: 0.27, revenue: '10B' },
            { name: 'Aurobindo Pharma', marketCap: '15B', peRatio: 16, roe: 0.18, revenue: '5B' },
            { name: 'Lupin', marketCap: '12B', peRatio: 18, roe: 0.20, revenue: '4B' },
        ],
        finance: [
            { name: 'HDFC Bank', marketCap: '70B', peRatio: 14, roe: 0.20, revenue: '10B' },
            { name: 'ICICI Bank', marketCap: '45B', peRatio: 16, roe: 0.18, revenue: '8B' },
            { name: 'State Bank of India', marketCap: '60B', peRatio: 13, roe: 0.15, revenue: '15B' },
            { name: 'Kotak Mahindra', marketCap: '35B', peRatio: 14, roe: 0.18, revenue: '7B' },
            { name: 'Axis Bank', marketCap: '40B', peRatio: 15, roe: 0.16, revenue: '10B' },
        ],
    },
    // You can update Germany and Japan similarly...

Japan: {
    technology: [
        { name: 'Sony', marketCap: '150B', peRatio: 30, roe: 0.15, revenue: '85B' },
        { name: 'Nintendo', marketCap: '50B', peRatio: 18, roe: 0.20, revenue: '20B' },
        { name: 'Fujitsu', marketCap: '30B', peRatio: 15, roe: 0.18, revenue: '15B' },
        { name: 'Panasonic', marketCap: '35B', peRatio: 12, roe: 0.16, revenue: '80B' },
        { name: 'Rakuten', marketCap: '20B', peRatio: 10, roe: 0.12, revenue: '15B' },
    ],
    healthcare: [
        { name: 'Astellas Pharma', marketCap: '40B', peRatio: 20, roe: 0.21, revenue: '12B' },
        { name: 'Takeda Pharmaceutical', marketCap: '80B', peRatio: 22, roe: 0.24, revenue: '30B' },
        { name: 'Daiichi Sankyo', marketCap: '50B', peRatio: 18, roe: 0.23, revenue: '15B' },
        { name: 'Eisai', marketCap: '15B', peRatio: 16, roe: 0.19, revenue: '5B' },
        { name: 'Chugai Pharmaceutical', marketCap: '60B', peRatio: 25, roe: 0.26, revenue: '25B' },
    ],
    finance: [
        { name: 'Mitsubishi UFJ Financial Group', marketCap: '80B', peRatio: 12, roe: 0.10, revenue: '45B' },
        { name: 'Sumitomo Mitsui Financial Group', marketCap: '60B', peRatio: 14, roe: 0.12, revenue: '35B' },
        { name: 'Mizuho Financial Group', marketCap: '50B', peRatio: 13, roe: 0.11, revenue: '40B' },
        { name: 'Nomura', marketCap: '20B', peRatio: 9, roe: 0.08, revenue: '8B' },
        { name: 'Japan Post Bank', marketCap: '30B', peRatio: 10, roe: 0.09, revenue: '12B' },
    ],
},
Germany: {
    technology: [
        { name: 'SAP', marketCap: '180B', peRatio: 25, roe: 0.20, revenue: '35B' },
        { name: 'Siemens', marketCap: '120B', peRatio: 18, roe: 0.16, revenue: '60B' },
        { name: 'Infineon Technologies', marketCap: '40B', peRatio: 15, roe: 0.18, revenue: '10B' },
        { name: 'Deutsche Telekom', marketCap: '80B', peRatio: 11, roe: 0.13, revenue: '120B' },
        { name: 'BMW', marketCap: '60B', peRatio: 12, roe: 0.14, revenue: '110B' },
    ],
    healthcare: [
        { name: 'Bayer', marketCap: '70B', peRatio: 18, roe: 0.15, revenue: '45B' },
        { name: 'Fresenius', marketCap: '35B', peRatio: 13, roe: 0.12, revenue: '40B' },
        { name: 'Merck Group', marketCap: '80B', peRatio: 20, roe: 0.22, revenue: '30B' },
        { name: 'Roche', marketCap: '90B', peRatio: 23, roe: 0.21, revenue: '60B' },
        { name: 'Siemens Healthineers', marketCap: '50B', peRatio: 25, roe: 0.20, revenue: '20B' },
    ],
    finance: [
        { name: 'Deutsche Bank', marketCap: '30B', peRatio: 8, roe: 0.05, revenue: '50B' },
        { name: 'Allianz', marketCap: '100B', peRatio: 14, roe: 0.10, revenue: '70B' },
        { name: 'Munich Re', marketCap: '60B', peRatio: 12, roe: 0.08, revenue: '55B' },
        { name: 'Commerzbank', marketCap: '20B', peRatio: 7, roe: 0.04, revenue: '20B' },
        { name: 'DZ Bank', marketCap: '25B', peRatio: 9, roe: 0.06, revenue: '15B' },
    ],
},
};

// Event listener for country selection
document.getElementById('country-next-btn').addEventListener('click', function() {
    const selectedCountry = document.getElementById('country').value;
    sessionStorage.setItem('country', selectedCountry); // Save country selection
    updateSectorOptions(selectedCountry); // Update sector dropdown
    document.getElementById('country-section').style.display = 'none';
    document.getElementById('sector-section').style.display = 'block';
});

// Update the sector dropdown based on the selected country
function updateSectorOptions(country) {
    const sectors = Object.keys(companyData[country]);
    const sectorSelect = document.getElementById('sector');
    sectorSelect.innerHTML = ''; // Clear existing options
    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector.charAt(0).toUpperCase() + sector.slice(1);
        sectorSelect.appendChild(option);
    });
}

// Event listener for sector selection
document.getElementById('sector-next-btn').addEventListener('click', function() {
    const selectedSector = document.getElementById('sector').value;
    const selectedCountry = sessionStorage.getItem('country');
    sessionStorage.setItem('sector', selectedSector); // Save sector selection

    // Display the top companies for the selected country and sector
    const companies = companyData[selectedCountry][selectedSector];
    displayCompanies(companies);
    document.getElementById('sector-section').style.display = 'none';
    document.getElementById('companies-section').style.display = 'block';
});

// Function to display top companies and their financial data
function displayCompanies(companies) {
    const companiesList = document.getElementById('companies-list');
    companiesList.innerHTML = ''; // Clear existing list

    companies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');
        companyCard.innerHTML = `
            <div>
                <h3>${company.name}</h3>
                <p>Market Cap: ${company.marketCap}</p>
                <p>P/E Ratio: ${company.peRatio}</p>
                <p>ROE: ${company.roe * 100}%</p>
                <p>Revenue: ${company.revenue}</p>
            </div>
        `;
        companiesList.appendChild(companyCard);
    });
}

// Event listener for recommending top 3 companies based on financial factors
document.getElementById('recommend-btn').addEventListener('click', function() {
    const selectedCountry = sessionStorage.getItem('country');
    const selectedSector = sessionStorage.getItem('sector');
    const companies = companyData[selectedCountry][selectedSector];

    // Sort companies by P/E Ratio (lower P/E is often preferred for growth)
    companies.sort((a, b) => a.peRatio - b.peRatio);
    const top3Companies = companies.slice(0, 3); // Get the top 3 companies

    displayRecommendations(top3Companies);
    document.getElementById('companies-section').style.display = 'none';
    document.getElementById('recommendation-section').style.display = 'block';
});

// Function to display the top 3 recommended companies
function displayRecommendations(companies) {
    const recommendedCompanies = document.getElementById('recommended-companies');
    recommendedCompanies.innerHTML = ''; // Clear existing list

    companies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');
        companyCard.innerHTML = `
            <div>
                <h3>${company.name}</h3>
                <p>P/E Ratio: ${company.peRatio}</p>
                <p>ROE: ${company.roe * 100}%</p>
                <p>Revenue: ${company.revenue}</p>
            </div>
        `;
        recommendedCompanies.appendChild(companyCard);
    });
}

// Restart the process
document.getElementById('restart-btn').addEventListener('click', function() {
    location.reload(); // Reload the page to restart the selection process
});