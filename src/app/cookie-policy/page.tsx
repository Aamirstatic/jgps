import React from 'react';

export const metadata = {
  title: 'Cookie Policy | Jai Govind Public School',
  description: 'Cookie Policy of Jai Govind Public School. Learn how we use cookies on our website.',
  alternates: {
    canonical: 'https://jgps.in/cookie-policy',
  },
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Cookie Policy</h1>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-4">
          Last updated: {new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you visit a website.
          They are widely used to make websites work more efficiently and provide information to the website owners.
          Cookies can be "persistent" or "session" cookies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Cookies</h2>
        <p>
          Jai Govind Public School uses cookies for various purposes including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
          <li><strong>Preference Cookies:</strong> These cookies enable us to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.</li>
          <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These may include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Google Analytics:</strong> We use Google Analytics to help us understand how our website is being used. These cookies may track things such as how long you spend on the site and the pages that you visit.</li>
          <li><strong>Google AdSense:</strong> We use Google AdSense to display advertisements on our website. AdSense uses cookies to improve advertising by targeting advertisements to users based on what&apos;s relevant to them.</li>
          <li><strong>Social Media Cookies:</strong> We may use social media cookies from platforms like Facebook, Twitter, and Instagram to enable integration with social media platforms.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Managing Cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version.
        </p>
        <p>
          You can get up-to-date information about blocking and deleting cookies via the support pages of your browser:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://support.google.com/chrome/answer/95647</a></li>
          <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a></li>
          <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
          <li>Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></li>
        </ul>
        <p>
          Please be aware that restricting cookies may impact the functionality of our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Cookie Consent</h2>
        <p>
          When you first visit our website, we will ask for your consent to use cookies. If you choose to accept cookies, we&apos;ll take that as your consent to this Cookie Policy. If you do not want cookies to be used when you visit our website, you can adjust your browser settings accordingly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us:
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