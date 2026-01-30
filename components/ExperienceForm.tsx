"use client";

import React, { useState } from "react";


interface ExperienceFormData {
  type: "Struggle" | "Warning" | "Tip" | "Expectation vs Reality";
  description: string;
  keywords: string[];  
  timePeriod: "Week 1" | "Month 1" | "Month 3";
}


const ExperienceForm: React.FC = () => {
  const [formData, setFormData] = useState<ExperienceFormData>({
    type: "Struggle",
    description: "",
    keywords: [],
    timePeriod: "Week 1",
  });

  const [keywordsInput, setKeywordsInput] = useState(""); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
  };


  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Convert string input to array
        const keywordsArray = keywordsInput.split(",").map(k => k.trim()).filter(k => k !== "");

        // Create final form data object
        const finalFormData = {
              ...formData,
             keywords: keywordsArray,};

        console.log("Form submitted:", finalFormData);
        alert("Form submitted! Check console for data.");  };
    
        

  

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Type of Experience */}


        <div>

          <label className="block mb-1">Type of Experience</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-2 rounded">

            <option value="Struggle">Struggle</option>
            <option value="Warning">Warning</option>
            <option value="Tip">Tip</option>
            <option value="Expectation vs Reality">Expectation vs Reality</option>
          </select>

        </div>

        {/* Description */}
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Keywords */}
        <div>
          <label className="block mb-1">Keywords (optional, comma-separated)</label>
 
        <input
           type="text"
           name="keywords"
           value={keywordsInput}
           onChange={e => setKeywordsInput(e.target.value)} // update temporary string
           className="w-full border p-2 rounded"
        />

        </div>

        {/* Time Period */}
        <div>
          <label className="block mb-1">Time Period</label>
          <select
            name="timePeriod"
            value={formData.timePeriod}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Week 1">Week 1</option>
            <option value="Month 1">Month 1</option>
            <option value="Month 3">Month 3</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExperienceForm;
