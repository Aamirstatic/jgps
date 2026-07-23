import React from 'react';

export const metadata = {
  title: 'Disclaimer | Jai Govind Public School',
  description: 'Disclaimer information for Jai Govind Public School website. Read about our limitations of liability and usage terms.',
  alternates: {
    canonical: 'https://jgps.in/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Disclaimer</h1>
      
      <div className="prose prose-lg mx-auto">
        <p className="mb-4">
          Last updated: {new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Website Disclaimer</h2>
        <p>
          The information provided on the Jai Govind Public School website is for general informational purposes only. 
          All information on this site is provided in good faith, however, we make no representation or warranty of any kind, 
          express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">No Liability</h2>
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the 
          use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information 
          on the site is solely at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">External Links Disclaimer</h2>
        <p>
          The site may contain links to external websites that are not provided or maintained by or in any way affiliated with Jai Govind Public School. 
          Please note that Jai Govind Public School does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Errors and Omissions Disclaimer</h2>
        <p>
          The information given by Jai Govind Public School website is for general guidance on matters of interest only. 
          Even if Jai Govind Public School takes every precaution to ensure that the content of the website is both current and accurate, 
          errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, 
          or inaccuracies in the information contained on the website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Fair Use Disclaimer</h2>
        <p>
          Jai Govind Public School website may use copyrighted material which has not always been specifically authorized by the copyright owner. 
          Jai Govind Public School is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
        </p>
        <p>
          If you wish to use copyrighted material from this site for your own purposes that go beyond fair use, 
          you must get permission from the copyright owner.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Views Expressed Disclaimer</h2>
        <p>
          The views and opinions expressed in the blog articles or any other content on this website are solely those of the authors and do not necessarily reflect 
          the official policy or position of Jai Govind Public School. Any content provided by our bloggers or authors is of their opinion and is not intended to malign any 
          religion, ethnic group, club, organization, company, individual, or anyone or anything.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">No Responsibility Disclaimer</h2>
        <p>
          The information on the Jai Govind Public School website is provided with the understanding that Jai Govind Public School is not herein engaged in rendering legal, accounting, 
          tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other 
          competent advisers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Disclaimer, please contact us:
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