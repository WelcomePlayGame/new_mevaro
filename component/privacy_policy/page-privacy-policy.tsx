const PagePrivacyPolicy = () => {
  return (
    <section
      className={` p-[30px] font-sans leading-relaxed text-gray-800 bg-gray-100`}
    >
      <div className="m-[20px] max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-center mb-[30px] text-3xl font-bold  text-gray-900">
          Privacy Policy
        </h1>
        <p className="mb-6">
          At <span className="font-medium">https://mevaro.kiev.ua</span>, we are
          committed to protecting your privacy and ensuring the security of your
          personal data. This Privacy Policy explains how we collect, use, and
          protect your information in compliance with the General Data
          Protection Regulation (GDPR).
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            Personal identification data (name, email address, phone number,
            etc.).
          </li>
          <li>
            Technical data (IP address, browser type, device information, etc.).
          </li>
          <li>Behavioral data (browsing history, preferences, etc.).</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>To provide and improve our services.</li>
          <li>To process your orders or inquiries.</li>
          <li>To send promotional communications (with your consent).</li>
          <li>To ensure website security and prevent fraud.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          3. Your Rights
        </h2>
        <p className="mb-4">Under GDPR, you have the following rights:</p>
        <ul className="list-disc list-inside mb-6">
          <li>The right to access your data.</li>
          <li>The right to correct or update your data.</li>
          <li>
            The right to delete your data (&quot;right to be forgotten&quot;).
          </li>
          <li>The right to restrict or object to data processing.</li>
          <li>The right to data portability.</li>
          <li>The right to withdraw consent at any time.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          4. Data Retention
        </h2>
        <p className="mb-6">
          We retain your personal data only as long as necessary to fulfill the
          purposes outlined in this policy or comply with legal obligations.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          5. Third-Party Sharing
        </h2>
        <p className="mb-6">
          We do not sell or share your personal data with third parties, except
          as required by law or for essential service providers operating under
          strict confidentiality agreements.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          6. Security Measures
        </h2>
        <p className="mb-6">
          We implement appropriate technical and organizational measures to
          ensure the security of your data.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          7. Contact Us
        </h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at:
        </p>
        <p className="mt-4">
          <strong>Email:</strong>{' '}
          <a
            href="mailto:office@mevaro.kiev.ua"
            className="text-blue-500 hover:underline"
          >
            office@mevaro.kiev.ua
          </a>
          <br />
          <strong>Phone:</strong> +380966754420
          <br />
          <strong>Address:</strong> 37 Ekskavatorna St., Kyiv
        </p>
      </div>
    </section>
  );
};

export default PagePrivacyPolicy;
