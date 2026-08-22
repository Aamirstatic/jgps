import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Jai Govind Public School',
  description: 'Privacy Policy of Jai Govind Public School (JGPS) Joya Amroha. Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://jgps.in/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-4">
          Last updated: {new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Introduction</h2>
        <p>
          At Jai Govind Public School, we respect your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms on our website.</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
          <li><strong>Usage Information:</strong> How you use our website, pages visited, and time spent on each page.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide and maintain our website</li>
          <li>To respond to your inquiries and provide information about our educational services</li>
          <li>To process admission applications and related communications</li>
          <li>To improve our website and user experience</li>
          <li>To send newsletters and updates (with your consent)</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Cookies</h2>
        <p>
          We use cookies to enhance your experience on our website. These are small files that are placed on your device to collect
          information about how you interact with our website. You can set your browser to refuse cookies, but this may limit your
          ability to use some features of our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Services</h2>
        <p>
          We may use third-party services such as Google Analytics to help analyze how users use our site. 
          These services may use cookies to collect information on our behalf. We also display advertisements 
          through Google AdSense, which may use cookies to personalize the advertisements you see.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
        <p>
          We use proper security measures to protect your personal information. However, no method of
          transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">children&apos;s Privacy</h2>
        <p>
          Our website is not intended for children under 13 years of age. We do not knowingly collect personal information
          from children under 13. If you are a parent or guardian and believe your child has provided us with personal information,
          please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
          Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>By email: jaigovindschool@gmail.com</li>
          <li>By phone: +91 9997161490 (Manager), +91 9412137554 (Principal)</li>
          <li>By mail: NH9 Delhi Road, Joya, District Amroha, Uttar Pradesh - 244222</li>
        </ul>
      </div>
    </div>
  );
} 