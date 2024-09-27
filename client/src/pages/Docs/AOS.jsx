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
      label="Address"
      name="seller_address"
      value={formData.seller_address}
      onChange={handleChange}
      placeholder="Enter seller's address"
    />
    <InputField
      label="Wife's Name"
      name="seller_wife"
      value={formData.seller_wife}
      onChange={handleChange}
      placeholder="Enter wife's name"
    />
    <InputField
      label="Sons/Daughters"
      name="seller_sons_daughters"
      value={formData.seller_sons_daughters}
      onChange={handleChange}
      placeholder="Enter sons/daughters' names"
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
      label="Address"
      name="purchaser_address"
      value={formData.purchaser_address}
      onChange={handleChange}
      placeholder="Enter purchaser's address"
    />
  </div>
);

const PropertyDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Property Details</h3>
    <InputField
      label="Schedule Property"
      name="schedule_property"
      value={formData.schedule_property}
      onChange={handleChange}
      placeholder="Describe the property details"
    />
  </div>
);

const SaleDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Sale Details</h3>
    <InputField
      label="Sale Amount"
      name="sale_amount"
      value={formData.sale_amount}
      onChange={handleChange}
      placeholder="Enter sale amount"
    />
    <InputField
      label="Advance Amount"
      name="advance_amount"
      value={formData.advance_amount}
      onChange={handleChange}
      placeholder="Enter advance amount"
    />
    <InputField
      label="Cheque No"
      name="cheque_no"
      value={formData.cheque_no}
      onChange={handleChange}
      placeholder="Enter cheque number"
    />
    <InputField
      label="Bank Name"
      name="bank_name"
      value={formData.bank_name}
      onChange={handleChange}
      placeholder="Enter bank name"
    />
    <InputField
      label="Cheque Date"
      name="cheque_date"
      value={formData.cheque_date}
      onChange={handleChange}
      placeholder="Enter cheque date"
    />
    <InputField
      label="Balance Amount"
      name="balance_amount"
      value={formData.balance_amount}
      onChange={handleChange}
      placeholder="Enter balance amount"
    />
    <InputField
      label="Transaction End Date"
      name="transaction_end_date"
      value={formData.transaction_end_date}
      onChange={handleChange}
      placeholder="Enter transaction end date"
    />
    <InputField
      label="Purpose of Sale"
      name="purpose_of_sale"
      value={formData.purpose_of_sale}
      onChange={handleChange}
      placeholder="Enter purpose of sale"
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

const PreviousOwnershipDetails = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Previous Ownership Details</h3>
    <InputField
      label="Previous Owner"
      name="previous_owner"
      value={formData.previous_owner}
      onChange={handleChange}
      placeholder="Enter previous owner"
    />
    <InputField
      label="Previous Sale Deed Date"
      name="previous_sale_deed_date"
      value={formData.previous_sale_deed_date}
      onChange={handleChange}
      placeholder="Enter previous sale deed date"
    />
    <InputField
      label="Previous Sale Doc No"
      name="previous_sale_doct_no"
      value={formData.previous_sale_doct_no}
      onChange={handleChange}
      placeholder="Enter document no"
    />
    <InputField
      label="Previous Sale Book 1 Volume No"
      name="previous_sale_book1_volumne_no"
      value={formData.previous_sale_book1_volumne_no}
      onChange={handleChange}
      placeholder="Enter volume number"
    />
    <InputField
      label="Previous Sale Page No (Start)"
      name="previous_sale_page_no_start"
      value={formData.previous_sale_page_no_start}
      onChange={handleChange}
      placeholder="Enter start page number"
    />
    <InputField
      label="Previous Sale Page No (End)"
      name="prev_sale_page_no_end"
      value={formData.prev_sale_page_no_end}
      onChange={handleChange}
      placeholder="Enter end page number"
    />
  </div>
);

function AgreementOfSaleForm() {
  const [formData, setFormData] = useState({
    seller_name: "",
    seller_father_name: "",
    seller_age: "",
    seller_address: "",
    seller_wife: "",
    seller_sons_daughters: "",
    purchaser_name: "",
    purchaser_father_name: "",
    purchaser_age: "",
    purchaser_address: "",
    schedule_property: "",
    sale_amount: "",
    advance_amount: "",
    cheque_no: "",
    bank_name: "",
    cheque_date: "",
    balance_amount: "",
    transaction_end_date: "",
    purpose_of_sale: "",
    previous_owner: "",
    previous_sale_deed_date: "",
    previous_sale_doct_no: "",
    previous_sale_book1_volumne_no: "",
    previous_sale_page_no_start: "",
    prev_sale_page_no_end: "",
    witness_1: "",
    witness_2: "",
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
        const response = await fetch("http://localhost:8000/generate_agreement_of_sale_pdf", {
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
    { title: "Seller Details", component: <SellerDetails formData={formData} handleChange={handleChange} /> },
    { title: "Purchaser Details", component: <PurchaserDetails formData={formData} handleChange={handleChange} /> },
    { title: "Property Details", component: <PropertyDetails formData={formData} handleChange={handleChange} /> },
    { title: "Sale Details", component: <SaleDetails formData={formData} handleChange={handleChange} /> },
    {
      title: "Previous Ownership Details",
      component: <PreviousOwnershipDetails formData={formData} handleChange={handleChange} />,
    },
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
          <h2 className="text-3xl font-semibold mb-6 text-center">Agreement of Sale Form</h2>
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

export default AgreementOfSaleForm;
