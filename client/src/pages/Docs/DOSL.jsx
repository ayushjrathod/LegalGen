import React, { useState } from "react";
import Modal from "react-modal";

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

const SellerDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Seller Details</h3>
    <InputField
      label="Name"
      name="seller_name"
      value={formData.seller_name}
      onChange={handleChange}
      placeholder="Enter seller name"
    />
    <InputField
      label="Father's Name"
      name="seller_father_name"
      value={formData.seller_father_name}
      onChange={handleChange}
      placeholder="Enter father's name"
    />
    <InputField
      label="Age"
      name="seller_age"
      value={formData.seller_age}
      onChange={handleChange}
      placeholder="Enter seller's age"
    />
    <InputField
      label="PAN"
      name="seller_pan"
      value={formData.seller_pan}
      onChange={handleChange}
      placeholder="Enter seller's PAN"
    />
    <InputField
      label="Address"
      name="seller_address"
      value={formData.seller_address}
      onChange={handleChange}
      placeholder="Enter seller's address"
    />
  </div>
);

const PurchaserDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Purchaser Details</h3>
    <InputField
      label="Name"
      name="purchaser_name"
      value={formData.purchaser_name}
      onChange={handleChange}
      placeholder="Enter purchaser name"
    />
    <InputField
      label="Father's Name"
      name="purchaser_father_name"
      value={formData.purchaser_father_name}
      onChange={handleChange}
      placeholder="Enter father's name"
    />
    <InputField
      label="Age"
      name="purchaser_age"
      value={formData.purchaser_age}
      onChange={handleChange}
      placeholder="Enter purchaser's age"
    />
    <InputField
      label="PAN"
      name="purchaser_pan"
      value={formData.purchaser_pan}
      onChange={handleChange}
      placeholder="Enter purchaser's PAN"
    />
    <InputField
      label="Address"
      name="purchaser_address"
      value={formData.purchaser_address}
      onChange={handleChange}
      placeholder="Enter purchaser's address"
    />
  </div>
);

const LandDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Land Details</h3>
    <InputField
      label="Size"
      name="land_details.size"
      value={formData.land_details.size}
      onChange={handleChange}
      placeholder="Enter land size"
    />
    <InputField
      label="Location"
      name="land_details.location"
      value={formData.land_details.location}
      onChange={handleChange}
      placeholder="Enter land location"
    />
    <h4 className="text-lg font-medium mt-4 mb-2">Boundaries:</h4>
    <InputField
      label="North"
      name="land_details.boundaries.north"
      value={formData.land_details.boundaries.north}
      onChange={handleChange}
      placeholder="North boundary"
    />
    <InputField
      label="South"
      name="land_details.boundaries.south"
      value={formData.land_details.boundaries.south}
      onChange={handleChange}
      placeholder="South boundary"
    />
    <InputField
      label="East"
      name="land_details.boundaries.east"
      value={formData.land_details.boundaries.east}
      onChange={handleChange}
      placeholder="East boundary"
    />
    <InputField
      label="West"
      name="land_details.boundaries.west"
      value={formData.land_details.boundaries.west}
      onChange={handleChange}
      placeholder="West boundary"
    />
  </div>
);

const SaleDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Sale Details</h3>
    <InputField
      label="Total Consideration"
      name="total_consideration"
      value={formData.total_consideration}
      onChange={handleChange}
      placeholder="Enter total consideration"
    />
    <InputField
      label="Cheque Details"
      name="cheque_details"
      value={formData.cheque_details}
      onChange={handleChange}
      placeholder="Enter cheque details"
    />
    <InputField
      label="Witness 1"
      name="witness_1"
      value={formData.witness_1}
      onChange={handleChange}
      placeholder="Enter witness 1"
    />
    <InputField
      label="Witness 2"
      name="witness_2"
      value={formData.witness_2}
      onChange={handleChange}
      placeholder="Enter witness 2"
    />
  </div>
);

function LandSaleDeedForm() {
  const [formData, setFormData] = useState({
    seller_name: "Onkar Nashte",
    seller_father_name: "Kale Nashte",
    seller_age: "45",
    seller_pan: "ABCDE1234F",
    seller_address: "Vidya Niketan Apartment, PCMC, 411018",
    purchaser_name: "Parth Pol",
    purchaser_father_name: "Chavan Pol",
    purchaser_age: "40",
    purchaser_pan: "XYZAB5678T",
    purchaser_address: "Nirjay Heights, Bhoir Colony, PCMC, 411033",
    land_details: {
      size: "5 decimal",
      location: "Village XYZ, District ABC",
      boundaries: {
        north: "Road",
        south: "Property of Mr. John",
        east: "Property of Mrs. Smith",
        west: "Stream",
      },
    },
    total_consideration: "1,00,00,000",
    cheque_details: "Cheque No: 987654, drawn on ABC Bank, dated 5th June 2024",
    witness_1: "Samyak",
    witness_2: "Ayush",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      if (name.includes(".")) {
        const [parentKey, childKey, grandchildKey] = name.split(".");
        return {
          ...prevState,
          [parentKey]: {
            ...prevState[parentKey],
            [childKey]: grandchildKey
              ? {
                  ...prevState[parentKey][childKey],
                  [grandchildKey]: value,
                }
              : value,
          },
        };
      }
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formData).every((field) => {
      if (typeof field === "object") {
        return Object.values(field).every((subField) => {
          if (typeof subField === "object") {
            return Object.values(subField).every((value) => value.trim() !== "");
          }
          return subField.trim() !== "";
        });
      }
      return field.trim() !== "";
    });

    if (allFieldsFilled) {
      try {
        const response = await fetch("http://localhost:8000/generate_land_sale_deed_pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const blob = await response.blob();
          const pdfUrl = URL.createObjectURL(blob);
          setPdfUrl(pdfUrl);
          setModalIsOpen(true);
          setSuccess(true);
          setErrorMsg("");
        } else {
          setErrorMsg("Failed to generate the PDF. Please try again.");
        }
      } catch (error) {
        setErrorMsg("An error occurred while generating the PDF. Please try again.");
      }
    } else {
      setErrorMsg("Please fill in all fields before submitting.");
      setSuccess(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    URL.revokeObjectURL(pdfUrl);
    setPdfUrl(null);
  };

  const formSections = [
    { title: "Seller Details", component: <SellerDetails formData={formData} handleChange={handleChange} /> },
    { title: "Purchaser Details", component: <PurchaserDetails formData={formData} handleChange={handleChange} /> },
    { title: "Land Details", component: <LandDetails formData={formData} handleChange={handleChange} /> },
    { title: "Sale Details", component: <SaleDetails formData={formData} handleChange={handleChange} /> },
  ];

  return (
    <div className="flex justify-center h-fit bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg">
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
          <h2 className="text-3xl font-semibold mb-6 text-center">Land Sale Deed Form</h2>
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
                Generate PDF
              </button>
            </div>
            {success && <p className="text-green-500 text-center mt-4">PDF generated successfully!</p>}
          </form>

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

export default LandSaleDeedForm;
