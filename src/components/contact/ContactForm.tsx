// components/ContactForm.tsx

"use client";

import { postContact } from "@/utils/contact";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    company_name: "",
    personal_name: "",
    email: "",
    phone: "",
    message: "",
    document: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setForm({ ...form, document: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postContact(form);
      alert(response.message || "Success!");
      // Reset form jika perlu
      setForm({
        company_name: "",
        personal_name: "",
        email: "",
        phone: "",
        message: "",
        document: null,
      });
    } catch (error: any) {
      alert(error.message || "Error occurred while submitting form.");
    }
  };

  return (
    <div className="w-11/12 lg:w-[1280px]    mx-auto">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white p-6 rounded-xl  shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-black">CONTACT US</h2>
        <div className="overflow-x-auto mb-4">
          <table className="table-auto w-full border">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="bg-[#9CA091] text-white p-2 text-center rounded"
                >
                  Let’s Collaborate!
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#474546] p-2 text-black">
                  Company / Individual Name
                </td>
                <td className="border border-[#474546] p-2 text-black">
                  <input
                    name="company_name"
                    required
                    value={form.company_name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#474546] p-2 text-black">
                  Contact Person Name
                </td>
                <td className="border border-[#474546] p-2 text-black">
                  <input
                    name="personal_name"
                    value={form.personal_name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#474546] p-2 text-black">
                  Email
                </td>
                <td className="border border-[#474546] p-2 text-black">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#474546] p-2 text-black">
                  Phone Number
                </td>
                <td className="border border-[#474546] p-2 text-black">
                  <input
                    name="phone"
                    type="number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-[#474546] p-2 text-black">
                  Message / Collaboration Details
                </td>
                <td className="border border-[#474546] p-2 text-black">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center lg:px-20">
          <div>
            <label className="block mb-2 text-black font-bold">
              Upload Document
            </label>

            <input
              type="file"
              id="document"
              name="document"
              onChange={handleFileChange}
              className="hidden"
            />

            <label
              htmlFor="document"
              className="cursor-pointer inline-block mb-4"
            >
              <img src="/images/upload-file.png" alt="Upload File" />
            </label>
            {form.document && (
              <p className="text-sm text-gray-600 mb-2">
                Selected: {form.document.name}
              </p>
            )}
            <p className="text-red-500">
              Document yang di upload berupa pdf dengan ukuran maximal 2 MB*
            </p>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-[#474546] h-fit text-white rounded"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
