import React from 'react';

export const metadata = {
  title: 'Terms and Conditions | Jai Govind Public School',
  description: 'Terms and Conditions of Jai Govind Public School. Please read these terms carefully before using our website.',
  alternates: {
    canonical: 'https://jgps.in/terms-and-conditions',
  },
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
      
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
          Welcome to Jai Govind Public School website. These terms and conditions outline the rules and regulations for the use of our website.
          By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not
          accept all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these terms, Jai Govind Public School and/or its licensors own all the intellectual property rights
          and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Publishing any website material in any other media</li>
          <li>Selling, sublicensing, and/or otherwise commercializing any website material</li>
          <li>Publicly performing and/or showing any website material</li>
          <li>Using this website in any way that is or may be damaging to this website</li>
          <li>Using this website in any way that impacts user access to this website</li>
          <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity</li>
          <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Your Content</h2>
        <p>
          In these terms and conditions, "Your Content" shall mean any audio, video, text, images, or other material you choose to submit to this
          website, such as comments or form submissions. By submitting Your Content, you grant Jai Govind School a non-exclusive, worldwide, irrevocable,
          royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
        </p>
        <p>
          Your Content must be your own and must not infringe on any third party's rights. Jai Govind School reserves the right to remove any of
          Your Content at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">No Warranties</h2>
        <p>
          This website is provided "as is," with all faults, and Jai Govind School expresses no representations or warranties of any kind
          related to this website or the materials contained on this website. Nothing contained on this website shall be interpreted as advising you.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
        <p>
          In no event shall Jai Govind School, nor any of its officers, directors, and employees, be held liable for anything arising out of or
          in any way connected with your use of this website, whether such liability is under contract. Jai Govind School, including its
          officers, directors, and employees, shall not be liable for any indirect, consequential, or special liability arising out of or in any
          way related to your use of this website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent Jai Govind School from and against any and/or all liabilities, costs, demands, causes of action,
          damages, and expenses arising in any way related to your breach of any of the provisions of these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Severability</h2>
        <p>
          If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting
          the remaining provisions herein.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Variation of Terms</h2>
        <p>
          Jai Govind School is permitted to revise these terms at any time as it sees fit, and by using this website, you are expected to
          review these terms regularly to ensure you understand all terms and conditions governing the use of this website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Law & Jurisdiction</h2>
        <p>
          These terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive
          jurisdiction of the courts located in India for the resolution of any disputes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us:
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