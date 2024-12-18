import axios from "axios";
import React from "react";
// import { useMutation } from "@tanstack/react-query";
// import { data } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query"; // Add useQuery
import { X } from "lucide-react";

const initialFormValues = {
  issue_building: "",
  issue_floor: "",
  issue_apartment: "",
  issue_profession: "", // Add this
  issue_description: "",
};

function AddIssueForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [uploadedFiles, setUploadedFiles] = useState([]); // Add this

  // Add this query
  const { data: professions = [], isLoading: isProfessionsLoading } = useQuery({
    queryKey: ["professions"],
    queryFn: async () => {
      const { data } = await axios.get("/api/professions");
      return data;
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  // Add these new functions
  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setUploadedFiles((prev) => [
      ...prev,
      ...newFiles.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
      })),
    ]);
    e.target.value = "";
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  console.log(formValues);

  const mutation = useMutation({
    mutationFn: async (formData) => {
      console.log(1);
      const { data } = await axios.post("/issues/addIssues", formData);

      return data;
    },
    onSuccess: (data) => {
      console.log("Issue added successfully:", data);
      setFormValues(initialFormValues);
    },
    onError: (error) => {
      console.error(
        "Error adding issue:",
        error.response?.data || error.message
      );
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Add each file to formData
    uploadedFiles.forEach(({ file }) => {
      formData.append("issue_images", file);
    });

    mutation.mutate(formData);
  }

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center w-auto">
      <div className="bg-orange-50 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
          Report New Issue
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
            {/* Location Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-amber-700 mb-1"
                  htmlFor="building"
                >
                  Building
                </label>
                <select
                  className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3
                 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  id="building"
                  name="issue_building"
                  value={formValues.issue_building}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Building</option>
                  <option value="A">Building A</option>
                  <option value="B">Building B</option>
                  <option value="C">Building C</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-amber-700 mb-1"
                  htmlFor="floor"
                >
                  Floor
                </label>
                <select
                  className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3
                 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  id="floor"
                  name="issue_floor"
                  value={formValues.issue_floor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Floor</option>
                  <option value="1">1st Floor</option>
                  <option value="2">2nd Floor</option>
                  <option value="3">3rd Floor</option>
                  <option value="4">4th Floor</option>
                  <option value="5">5th Floor</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-amber-700 mb-1"
                  htmlFor="apartment"
                >
                  Apartment
                </label>
                <input
                  type="text"
                  id="apartment"
                  name="issue_apartment"
                  value={formValues.issue_apartment}
                  onChange={handleChange}
                  required
                  placeholder="Enter apartment number"
                  className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none
                   focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Add Profession select here */}
              <div>
                <label
                  className="block text-sm font-medium text-amber-700 mb-1"
                  htmlFor="profession"
                >
                  Profession
                </label>
                <select
                  className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  id="profession"
                  name="issue_profession"
                  value={formValues.issue_profession}
                  onChange={handleChange}
                  required
                  disabled={isProfessionsLoading}
                >
                  <option value="">
                    {isProfessionsLoading
                      ? "Loading professions..."
                      : "Select Profession"}
                  </option>
                  {professions.map((prof) => (
                    <option key={prof.id} value={prof.id}>
                      {prof.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Issue Description */}
            <div>
              <label
                className="block text-sm font-medium text-amber-700 mb-1"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="issue_description"
                value={formValues.issue_description}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Please describe the issue in detail..."
                rows="4"
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-amber-700 mb-1">
                Add Images
              </label>
              <div className="mt-1 flex flex-col px-6 pt-5 pb-6 border-2 border-amber-200 border-dashed rounded-xl bg-amber-50">
                <div className="space-y-2 text-center">
                  <div className="flex text-sm text-amber-600 justify-center">
                    <label
                      htmlFor="issue_images"
                      className="relative cursor-pointer rounded-md font-medium text-amber-600 hover:text-amber-800"
                    >
                      <span>Upload a file</span>
                      <input
                        id="issue_images"
                        name="issue_images"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        multiple
                        onChange={handleFileUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-amber-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>

                {/* Display uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map(({ id, file }) => (
                      <div
                        key={id}
                        className="flex items-center justify-between bg-white p-2 rounded-lg"
                      >
                        <span className="text-sm text-amber-700 truncate">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(id)}
                          className="text-amber-500 hover:text-amber-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                className="px-6 py-2 border-2 border-amber-600 text-amber-600 rounded-xl hover:bg-amber-50 focus:outline-none focus:ring-2
                 focus:ring-amber-500 focus:ring-offset-2 transition-colors
                  duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-amber-600 text-white 
                rounded-xl hover:bg-amber-700 focus:outline-none
                 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                  transition-colors duration-200"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Submitting..." : "Submit Issue"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddIssueForm;
