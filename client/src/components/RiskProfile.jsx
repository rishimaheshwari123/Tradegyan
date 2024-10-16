import React, { useState } from 'react';

const RiskProfileForm = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    ageGroup: '',
    investmentAmount: '',
    investmentUnderstanding: [],
    investmentDuration: [],
    investmentResponse: [],
    annualIncome: '',
    primaryIncome: '',
    secondaryIncome: '',
    occupation: '',
    investmentGoal: [],
    currentInvestments: [],
    portfolioValue: '',
    investmentExperience: '',
    emergencyFundSize: '',
    debtAllocation: '',
    dependents: '',
    riskLevel: '',
    disclaimerAcknowledgment: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const isChecked = prevData[name].includes(value);
      if (isChecked) {
        return {
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        };
      } else {
        return {
          ...prevData,
          [name]: [...prevData[name], value],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="m mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Risk Profile Form</h2>

      {/* Name of the Applicant */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="applicantName">
          Name of the Applicant: *
        </label>
        <input
          type="text"
          id="applicantName"
          name="applicantName"
          value={formData.applicantName}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Age Group */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What is your Age Group?</label>
        <select
          name="ageGroup"
          value={formData.ageGroup}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Age Group</option>
          <option value="Under 35">Under 35</option>
          <option value="35-50">35-50</option>
          <option value="Above 50">Above 50</option>
        </select>
      </div>

      {/* Investment Amount */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Investment Amount:</label>
        <select
          name="investmentAmount"
          value={formData.investmentAmount}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Value</option>
          <option value={'< 1 lacs'}>{"< 1 lacs"}</option>
          <option value="1-5 lacs">1-5 lacs</option>
          <option value="5-10 lacs">5-10 lacs</option>
          <option value={'> 10 lacs'}>{"> 10 lacs"}</option>
        </select>
      </div>

      {/* Investment Understanding */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">How well do you understand investing in the markets?</label>
        <div className="mt-2">
          {["Novice", "Basic", "Experienced"].map((level) => (
            <label key={level} className="flex  ">
              <input
                type="checkbox"
                name="investmentUnderstanding"
                value={level}
                checked={formData.investmentUnderstanding.includes(level)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">{`I am ${level.toLowerCase()}`}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Investment Duration */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What is the duration of investment you are looking forward to keep invested?</label>
        <div className="mt-2">
          {["Short term Positional", "Long term Positional", "Intraday"].map((duration) => (
            <label key={duration} className="flex ">
              <input
                type="checkbox"
                name="investmentDuration"
                value={duration}
                checked={formData.investmentDuration.includes(duration)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">{duration}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Investment Response */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What if your investment is down by more than 15%?</label>
        <div className="mt-2">
          {["Invest More", "Wait", "Sell"].map((response) => (
            <label key={response} className="inline-flex items-center">
              <input
                type="checkbox"
                name="investmentResponse"
                value={response}
                checked={formData.investmentResponse.includes(response)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">{response}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Gross Annual Income */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gross Annual Income details?</label>
        <select
          name="annualIncome"
          value={formData.annualIncome}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Income</option>
          <option value="Below Rs 2 Lac">Below Rs 2 Lac</option>
          <option value="2-5 Lac">2-5 Lac</option>
          <option value="5-10 Lac">5-10 Lac</option>
          <option value="Above 10 Lac">Above 10 Lac</option>
        </select>
      </div>

      {/* Primary Income Source */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Sources of Primary Income?</label>
        <select
          name="primaryIncome"
          value={formData.primaryIncome}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Primary Income Source</option>
          <option value="Salary">Salary</option>
          <option value="Business">Business</option>
          <option value="Investment">Investment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Secondary Income Source */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Sources of Secondary Income?</label>
        <select
          name="secondaryIncome"
          value={formData.secondaryIncome}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Secondary Income Source</option>
          <option value="Royalties">Royalties</option>
          <option value="Rental Income">Rental Income</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Occupation */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Occupation (please select the appropriate)?</label>
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Occupation</option>
          <option value="Private Sector">Private Sector</option>
          <option value="Public Sector">Public Sector</option>
          <option value="Self Employed">Self Employed</option>
          <option value="Student">Student</option>
          <option value="Unemployed">Unemployed</option>
        </select>
      </div>

      {/* Investment Goal */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What are your Investment Goals?</label>
        <div className="mt-2">
          {["Retirement Planning", "Buying a House", "Children's Education", "Wealth Accumulation"].map((goal) => (
            <label key={goal} className="inline-flex items-center">
              <input
                type="checkbox"
                name="investmentGoal"
                value={goal}
                checked={formData.investmentGoal.includes(goal)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Current Investments */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What are your Current Investments?</label>
        <div className="mt-2">
          {["Stocks", "Bonds", "Mutual Funds", "Real Estate"].map((investment) => (
            <label key={investment} className="inline-flex items-center">
              <input
                type="checkbox"
                name="currentInvestments"
                value={investment}
                checked={formData.currentInvestments.includes(investment)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">{investment}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Portfolio Value */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What is the approximate value of your investment portfolio?</label>
        <input
          type="text"
          id="portfolioValue"
          name="portfolioValue"
          value={formData.portfolioValue}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Investment Experience */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What is your experience with investments?</label>
        <select
          name="investmentExperience"
          value={formData.investmentExperience}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Experience Level</option>
          <option value="No Experience">No Experience</option>
          <option value="Some Experience">Some Experience</option>
          <option value="Significant Experience">Significant Experience</option>
        </select>
      </div>

      {/* Emergency Fund Size */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What is the size of your emergency fund?</label>
        <input
          type="text"
          id="emergencyFundSize"
          name="emergencyFundSize"
          value={formData.emergencyFundSize}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Debt Allocation */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What is your debt allocation?</label>
        <input
          type="text"
          id="debtAllocation"
          name="debtAllocation"
          value={formData.debtAllocation}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Dependents */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">How many dependents do you have?</label>
        <input
          type="number"
          id="dependents"
          name="dependents"
          value={formData.dependents}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Risk Level */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">What is your risk level?</label>
        <select
          name="riskLevel"
          value={formData.riskLevel}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Risk Level</option>
          <option value="Conservative">Conservative</option>
          <option value="Moderate">Moderate</option>
          <option value="Aggressive">Aggressive</option>
        </select>
      </div>

      {/* Disclaimer Acknowledgment */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="disclaimerAcknowledgment"
            checked={formData.disclaimerAcknowledgment}
            onChange={(e) => setFormData({ ...formData, disclaimerAcknowledgment: e.target.checked })}
            className="form-checkbox"
            required
          />
          <span className="ml-2">I acknowledge the disclaimer.</span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RiskProfileForm;
