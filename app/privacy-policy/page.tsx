import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-4 md:p-10 max-w-5xl mx-auto text-justify text-sm md:text-base leading-relaxed bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center mt-16">
        Privacy Policy
      </h1>

      <p className="mb-4">
        At <strong>StudyCoach</strong>, we recognize the importance of your
        privacy and are committed to protecting it. This Privacy Policy outlines
        how StudyCoach collects, uses, and safeguards any information that you
        provide when using our website, mobile application, or other platforms
        operated by our company.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Definitions</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>“StudyCoach”</strong>, “Company”, “we”, “us”, and “our” refer
          to StudyCoach.
        </li>
        <li>
          <strong>“StudyCoach Platform”</strong> refers to
          [https://www.studycoach.co.in], the StudyCoach mobile app, and other
          services.
        </li>
        <li>
          <strong>“You”</strong> and “your” refer to users of the StudyCoach
          Platform.
        </li>
        <li>
          <strong>“Services”</strong> includes all services provided by
          StudyCoach.
        </li>
        <li>
          <strong>“Policy”</strong> refers to this Privacy Policy.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p>We collect the following types of information:</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>
          <strong>Personal Information:</strong> Full name, email address, phone
          number, and other details you provide during registration.
        </li>
        <li>
          <strong>Usage Information:</strong> IP address, browser type, pages
          visited, time spent on the site, and other diagnostic data.
        </li>
        <li>
          <strong>Device Information:</strong> Device type, OS version, and
          unique device identifiers.
        </li>
        <li>
          <strong>Location Data:</strong> With your consent, we may collect
          location data to personalize content.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p>We use the collected data to:</p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>Provide, operate, and maintain our services.</li>
        <li>Improve, personalize, and expand our services.</li>
        <li>Understand and analyze how you use our services.</li>
        <li>Develop new products, services, features, and functionality.</li>
        <li>Communicate with you for service updates and customer support.</li>
        <li>
          Send you emails, push notifications, and updates, where permitted.
        </li>
        <li>Prevent fraud, and ensure security and legal compliance.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information Sharing and Disclosure
      </h2>
      <p>
        We do not sell, rent, or share your personal data with third parties,
        except in the following cases:
      </p>
      <ul className="list-disc ml-6 space-y-2 mt-2">
        <li>
          <strong>With Consent:</strong> When you give us explicit permission.
        </li>
        <li>
          <strong>Service Providers:</strong> Trusted partners who assist us in
          providing services under confidentiality agreements.
        </li>
        <li>
          <strong>Legal Requirements:</strong> When required to comply with
          legal obligations or to protect rights and safety.
        </li>
        <li>
          <strong>Business Transfers:</strong> In case of a merger, acquisition,
          or asset sale.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p>
        We take appropriate security measures to protect against unauthorized
        access, alteration, disclosure, or destruction of your personal data.
        However, no method of transmission over the internet or electronic
        storage is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Cookies and Tracking Technologies
      </h2>
      <p>
        We use cookies and similar technologies to enhance user experience,
        track usage patterns, and gather analytics. You can control cookie
        preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-party Links</h2>
      <p>
        Our platform may contain links to external sites not operated by us. We
        are not responsible for the privacy practices or content of these
        third-party sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Children’s Privacy</h2>
      <p>
        StudyCoach does not knowingly collect personal information from children
        under the age of 13 without parental consent. If you believe your child
        has provided us with personal data, please contact us immediately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Data Rights</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Access:</strong> Request a copy of your personal data we hold.
        </li>
        <li>
          <strong>Correction:</strong> Request correction of inaccurate or
          incomplete data.
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your personal data,
          subject to legal obligations.
        </li>
        <li>
          <strong>Opt-out:</strong> Opt-out of marketing communications at any
          time.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. We encourage you to
        review this page periodically for any changes. Your continued use of our
        services after changes constitutes acceptance of the new policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have any concerns or questions about your data or privacy, you
        can reach us at:
        <br />
        📧{" "}
        <a href="mailto:info@studit.in" className="text-blue-600 underline">
          info@studit.in
        </a>
      </p>

      <p className="mt-6 text-center text-sm text-gray-500">
        This policy is subject to Indian law. Please review it regularly for any
        updates.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
