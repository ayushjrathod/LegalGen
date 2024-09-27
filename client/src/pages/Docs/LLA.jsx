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
const GeneralDetailsSection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">General Details</h3>
    <InputField label="Date" name="date" value={formData.date} onChange={handleChange} placeholder="Enter date" />
    <InputField label="City" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" />
    <InputField
      label="Stamp Duty"
      name="stamp_duty"
      value={formData.stamp_duty}
      onChange={handleChange}
      placeholder="Enter stamp duty"
    />
    <InputField
      label="Stamp Duty GRN"
      name="stamp_duty_grn"
      value={formData.stamp_duty_grn}
      onChange={handleChange}
      placeholder="Enter stamp duty GRN"
    />
    <InputField
      label="Stamp Duty Date"
      name="stamp_duty_date"
      value={formData.stamp_duty_date}
      onChange={handleChange}
      placeholder="Enter stamp duty date"
    />
    <InputField
      label="Registration Fee"
      name="registration_fee"
      value={formData.registration_fee}
      onChange={handleChange}
      placeholder="Enter registration fee"
    />
    <InputField
      label="Registration GRN"
      name="registration_grn"
      value={formData.registration_grn}
      onChange={handleChange}
      placeholder="Enter registration GRN"
    />
    <InputField
      label="Registration Date"
      name="registration_date"
      value={formData.registration_date}
      onChange={handleChange}
      placeholder="Enter registration date"
    />
  </div>
);

const LicensorDetailsSection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Licensor Details</h3>
    <InputField
      label="Name"
      name="licensor_name"
      value={formData.licensor_name}
      onChange={handleChange}
      placeholder="Enter licensor name"
    />
    <InputField
      label="Age"
      name="licensor_age"
      value={formData.licensor_age}
      onChange={handleChange}
      placeholder="Enter licensor age"
    />
    <InputField
      label="Occupation"
      name="licensor_occupation"
      value={formData.licensor_occupation}
      onChange={handleChange}
      placeholder="Enter licensor occupation"
    />
    <InputField
      label="PAN"
      name="licensor_pan"
      value={formData.licensor_pan}
      onChange={handleChange}
      placeholder="Enter licensor PAN"
    />
    <InputField
      label="UID"
      name="licensor_uid"
      value={formData.licensor_uid}
      onChange={handleChange}
      placeholder="Enter licensor UID"
    />
    <InputField
      label="Address"
      name="licensor_address"
      value={formData.licensor_address}
      onChange={handleChange}
      placeholder="Enter licensor address"
    />
  </div>
);

const LicenseeDetailsSection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Licensee Details</h3>
    <InputField
      label="Name"
      name="licensee_name"
      value={formData.licensee_name}
      onChange={handleChange}
      placeholder="Enter licensee name"
    />
    <InputField
      label="Age"
      name="licensee_age"
      value={formData.licensee_age}
      onChange={handleChange}
      placeholder="Enter licensee age"
    />
    <InputField
      label="Occupation"
      name="licensee_occupation"
      value={formData.licensee_occupation}
      onChange={handleChange}
      placeholder="Enter licensee occupation"
    />
    <InputField
      label="PAN"
      name="licensee_pan"
      value={formData.licensee_pan}
      onChange={handleChange}
      placeholder="Enter licensee PAN"
    />
    <InputField
      label="UID"
      name="licensee_uid"
      value={formData.licensee_uid}
      onChange={handleChange}
      placeholder="Enter licensee UID"
    />
    <InputField
      label="Address"
      name="licensee_address"
      value={formData.licensee_address}
      onChange={handleChange}
      placeholder="Enter licensee address"
    />
  </div>
);

const LeaseDetailsSection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Lease Details</h3>
    <InputField
      label="Period (Months)"
      name="period"
      value={formData.period}
      onChange={handleChange}
      placeholder="Enter lease period"
    />
    <InputField
      label="Start Date"
      name="start_date"
      value={formData.start_date}
      onChange={handleChange}
      placeholder="Enter start date"
    />
    <InputField
      label="End Date"
      name="end_date"
      value={formData.end_date}
      onChange={handleChange}
      placeholder="Enter end date"
    />
    <InputField
      label="Monthly Rent"
      name="monthly_rent"
      value={formData.monthly_rent}
      onChange={handleChange}
      placeholder="Enter monthly rent"
    />
    <InputField
      label="Deposit"
      name="deposit"
      value={formData.deposit}
      onChange={handleChange}
      placeholder="Enter deposit amount"
    />
    <InputField
      label="Deposit Payment Method"
      name="deposit_payment_method"
      value={formData.deposit_payment_method}
      onChange={handleChange}
      placeholder="Enter deposit payment method"
    />
    <InputField
      label="Maintenance Charges Paid By"
      name="maintenance_charges_paid_by"
      value={formData.maintenance_charges_paid_by}
      onChange={handleChange}
      placeholder="Enter who pays maintenance charges"
    />
    <InputField
      label="Purpose"
      name="purpose"
      value={formData.purpose}
      onChange={handleChange}
      placeholder="Enter purpose"
    />
  </div>
);

const PropertyDetailsSection = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Property Details</h3>
    <InputField
      label="Flat Number"
      name="flat_number"
      value={formData.flat_number}
      onChange={handleChange}
      placeholder="Enter flat number"
    />
    <InputField
      label="Built Up Area"
      name="built_up_area"
      value={formData.built_up_area}
      onChange={handleChange}
      placeholder="Enter built-up area"
    />
    <InputField
      label="Floor"
      name="floor"
      value={formData.floor}
      onChange={handleChange}
      placeholder="Enter floor number"
    />
    <InputField
      label="Building Name"
      name="building_name"
      value={formData.building_name}
      onChange={handleChange}
      placeholder="Enter building name"
    />
    <InputField
      label="Plot Details"
      name="plot_details"
      value={formData.plot_details}
      onChange={handleChange}
      placeholder="Enter plot details"
    />
    <InputField
      label="Village"
      name="village"
      value={formData.village}
      onChange={handleChange}
      placeholder="Enter village"
    />
    <InputField
      label="Tehsil"
      name="tehsil"
      value={formData.tehsil}
      onChange={handleChange}
      placeholder="Enter tehsil"
    />
    <InputField
      label="District"
      name="district"
      value={formData.district}
      onChange={handleChange}
      placeholder="Enter district"
    />
    <InputField
      label="Municipal Corporation"
      name="municipal_corporation"
      value={formData.municipal_corporation}
      onChange={handleChange}
      placeholder="Enter municipal corporation"
    />
  </div>
);

function LicenseAgreementForm() {
  const [formData, setFormData] = useState({
    date: "",
    city: "",
    stamp_duty: "",
    stamp_duty_grn: "",
    stamp_duty_date: "",
    registration_fee: "",
    registration_grn: "",
    registration_date: "",
    licensor_name: "",
    licensor_age: "",
    licensor_occupation: "",
    licensor_pan: "",
    licensor_uid: "",
    licensor_address: "",
    licensee_name: "",
    licensee_age: "",
    licensee_occupation: "",
    licensee_pan: "",
    licensee_uid: "",
    licensee_address: "",
    period: "",
    start_date: "",
    end_date: "",
    monthly_rent: "",
    deposit: "",
    deposit_payment_method: "",
    maintenance_charges_paid_by: "",
    purpose: "",
    flat_number: "",
    built_up_area: "",
    floor: "",
    building_name: "",
    plot_details: "",
    village: "",
    tehsil: "",
    district: "",
    municipal_corporation: "",
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
        const response = await fetch("http://localhost:8000/generate-lnl-pdf", {
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
    { title: "General Details", component: <GeneralDetailsSection formData={formData} handleChange={handleChange} /> },
    {
      title: "Licensor Details",
      component: <LicensorDetailsSection formData={formData} handleChange={handleChange} />,
    },
    {
      title: "Licensee Details",
      component: <LicenseeDetailsSection formData={formData} handleChange={handleChange} />,
    },
    { title: "Lease Details", component: <LeaseDetailsSection formData={formData} handleChange={handleChange} /> },
    {
      title: "Property Details",
      component: <PropertyDetailsSection formData={formData} handleChange={handleChange} />,
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
          <h2 className="text-3xl font-semibold mb-6 text-center">Leave and License Agreement</h2>
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

export default LicenseAgreementForm;
