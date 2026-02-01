"use client";

import React, { useState } from "react";

const mockSession = {
  user: {
    id: "20198187", 
  }
};

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


  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

  const finalFormData = {
    ...formData,
    keywords: keywordsInput.split(",").map(k => k.trim()).filter(k => k.length > 0)
  };

         const response = await fetch("/api/experiences", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(finalFormData),
              });
              
              if (!response.ok) {
                  alert("Submission failed");
                  return;
                }
                
                const data = await response.json();
                console.log(data);
};

    

  return (
    <div>
      <h2>Add Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Type of Experience */}


        <div>

          <label>Type of Experience</label>
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
          <label>Description</label>
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
          <label>Keywords (optional, comma-separated)</label>
 
        <input
           type="text"
           name="keywords"
           value={keywordsInput}
           onChange={e => setKeywordsInput(e.target.value)} 
           className="w-full border p-2 rounded"
        />

        </div>

        {/* Time Period */}
        <div>
          <label>Time Period</label>
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
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExperienceForm;
