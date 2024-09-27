import React, { useState } from "react";
import Modal from "react-modal";

// Helper component for input fields
const InputField = ({ label, name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}:</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 bg-gray-100 rounded-md text-black font-sans text-base"
    />
  </div>
);

// Form sections
const EffectiveDateSection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Effective Date</h3>
    <InputField
      label="Effective Date"
      name="effective_date"
      value={formData.effective_date}
      onChange={handleChange}
      placeholder="Enter effective date"
    />
  </div>
);

const PartyDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Party Details</h3>
    <InputField
      label="Party 1 Name"
      name="party1_name"
      value={formData.party1_name}
      onChange={handleChange}
      placeholder="Enter Party 1 name"
    />
    <InputField
      label="Party 2 Name"
      name="party2_name"
      value={formData.party2_name}
      onChange={handleChange}
      placeholder="Enter Party 2 name"
    />
    <InputField
      label="Party 1 Business"
      name="party1_business"
      value={formData.party1_business}
      onChange={handleChange}
      placeholder="Enter Party 1 business"
    />
    <InputField
      label="Party 2 Business"
      name="party2_business"
      value={formData.party2_business}
      onChange={handleChange}
      placeholder="Enter Party 2 business"
    />
  </div>
);

const PurposeSection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Purpose</h3>
    <InputField
      label="Purpose"
      name="purpose"
      value={formData.purpose}
      onChange={handleChange}
      placeholder="Enter purpose"
    />
  </div>
);

const ConfidentialitySection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Confidentiality</h3>
    <InputField
      label="Confidentiality Period (Years)"
      name="confidentiality_period"
      value={formData.confidentiality_period}
      onChange={handleChange}
      placeholder="Enter confidentiality period"
    />
    <InputField
      label="Jurisdiction"
      name="jurisdiction"
      value={formData.jurisdiction}
      onChange={handleChange}
      placeholder="Enter jurisdiction"
    />
  </div>
);

function NDAForm() {
  const [formData, setFormData] = useState({
    effective_date: "",
    party1_name: "",
    party2_name: "",
    party1_business: "",
    party2_business: "",
    purpose: "",
    confidentiality_period: "",
    jurisdiction: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null); // To store the PDF URL
  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== "");

    if (allFieldsFilled) {
      try {
        const response = await fetch("http://localhost:8000/generate-general-nda-pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const blob = await response.blob(); // Get the PDF blob
          const pdfUrl = URL.createObjectURL(blob); // Create a URL for the PDF
          setPdfUrl(pdfUrl); // Store the URL in state
          setModalIsOpen(true); // Open the modal
          setSuccess(true);
          setErrorMsg("");
        } else {
          setErrorMsg("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        setErrorMsg("An error occurred while submitting the form. Please try again.");
      }
    } else {
      setErrorMsg("Please fill in all fields before submitting.");
      setSuccess(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    URL.revokeObjectURL(pdfUrl); // Clean up the PDF URL
    setPdfUrl(null);
  };

  const formSections = [
    { title: "Effective Date", component: <EffectiveDateSection formData={formData} handleChange={handleChange} /> },
    { title: "Party Details", component: <PartyDetails formData={formData} handleChange={handleChange} /> },
    { title: "Purpose", component: <PurposeSection formData={formData} handleChange={handleChange} /> },
    { title: "Confidentiality", component: <ConfidentialitySection formData={formData} handleChange={handleChange} /> },
  ];

  return (
    <div className="flex justify-center h-fit bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg">
        {/* Progress bar */}
        <div className="w-full md:w-1/4 bg-gray-200 p-4 rounded-l-lg">
          <ul className="space-y-4">
            {formSections.map((section, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded ${
                  currentStep === index || currentStep > index ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
                onClick={() => setCurrentStep(index)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-3/4 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Non-Disclosure Agreement</h2>
          <form onSubmit={handleSubmit}>
            {formSections[currentStep].component}
            {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                className={`bg-gray-500 text-white py-2 px-4 rounded ${
                  currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                type="button"
                className={`bg-blue-500 text-white py-2 px-4 rounded ${
                  currentStep === formSections.length - 1 ? "hidden" : ""
                }`}
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={currentStep === formSections.length - 1}
              >
                Next
              </button>
              <button
                type="submit"
                className={`bg-green-500 text-white py-2 px-4 rounded ${
                  currentStep !== formSections.length - 1 ? "hidden" : ""
                }`}
              >
                Submit
              </button>
            </div>
            {success && <p className="text-green-500 text-center mt-4">Form submitted successfully!</p>}
          </form>

          {/* Modal for PDF preview */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal-class"
            overlayClassName="overlay-class"
          >
            <button onClick={closeModal} className="bg-red-500 text-white p-2 rounded mb-4">
              Close
            </button>
            {pdfUrl && <iframe src={pdfUrl} width="100%" height="600px" title="PDF Preview"></iframe>}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default NDAForm;
