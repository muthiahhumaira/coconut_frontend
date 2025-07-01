export interface ContactFormData {
  company_name: string;
  personal_name?: string;
  email?: string;
  phone: string;
  message?: string;
  document?: File | null;
}

export const postContact = async (form: ContactFormData) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_ENDPOINT;

  if (!baseUrl) {
    throw new Error(
      "Base URL endpoint is not defined in environment variables"
    );
  }

  const formData = new FormData();
  formData.append("company_name", form.company_name);
  if (form.personal_name) formData.append("personal_name", form.personal_name);
  if (form.email) formData.append("email", form.email);
  if (form.phone) formData.append("phone", form.phone);
  if (form.message) formData.append("message", form.message);
  if (form.document) formData.append("document", form.document);

  const res = await fetch(`${baseUrl}/contacts`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to submit contact form");
  }

  return res.json();
};
