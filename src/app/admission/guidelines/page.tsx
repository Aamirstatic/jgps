import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Admissions Guidelines & Helpdesk | Jai Govind Public School Joya',
  description: 'Detailed steps on how to apply for admissions at JGPS Joya. Check eligibility, age criteria, and document checklists.',
  keywords: 'how to apply JGPS admission, school admission criteria Amroha, private school registration Joya UP, school admission helpdesk, documents checklist for admission UP school',
};

export default function AdmissionGuidelinesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <PageHero
        title="Admission Guidelines"
        subtitle="Admissions Helpdesk"
        badge="Registration Open"
        description="Welcome to the JGPS Admissions Helpdesk. We are committed to making your child's enrollment journey smooth and transparent. Find detailed instructions below to get started."
        breadcrumbs={[
          { label: "Admission", href: "/admission" },
          { label: "Guidelines" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Step by Step Guide */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-6">Enrollment Steps for Parents</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  01
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Step 1</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 mt-0.5">Collect the Prospectus & Inquiry Form</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Visit our main campus office at NH9 Delhi Road, Joya, to collect the school prospectus and registration form. You can also file a quick enquiry online by using the "Apply Now" button on our homepage.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  02
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Step 2</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 mt-0.5">Submit Completed Form & Documents</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Submit the filled application form along with the necessary identification and academic documents (listed on the sidebar) at the administrative office desk.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  03
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Step 3</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 mt-0.5">Academic Evaluation / Interaction</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For Class 1 and above, we host a friendly baseline evaluation in English and Mathematics. This helps our teachers understand your child&apos;s current strengths and areas requiring support. For pre-primary classes (Nursery, LKG, UKG), there is only a friendly interactive session.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-[#035c00]/10 text-[#035c00] flex items-center justify-center font-bold text-md border border-[#035c00]/10 group-hover:bg-[#035c00] group-hover:text-white transition-colors duration-300">
                  04
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Step 4</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 mt-0.5">Admission Confirmation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Once the interaction/evaluation is complete, the admission decision is finalized and communicated to parents within 2 working days. You can then complete the process by securing enrollment parameters at the administrative desk.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Fee Inquiries Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#035c00] mb-4">Fee & Payment Inquiries</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not publish fee details on our website. We prefer to discuss fees face-to-face with parents so we can explain concessions like sibling discounts or transport options.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Visit the school admissions office during working hours or call <strong>+91 9412137554</strong> to get fee information for your child&apos;s class.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-yellow-900 font-semibold mb-1">ðŸ'¡ Sibling Discount Policy:</p>
              <p className="text-xs text-yellow-900 leading-relaxed">
                JGPS offers customized concessions in admission and tuition parameters for siblings enrolled concurrently in our institution. Meet our management desk to know more.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Required Documents checklist */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Documents Checklist</h3>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span>Birth Certificate copy (Original required during verification).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span>Aadhaar Card of the Student and Parents.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span>Transfer Certificate (TC) from previous recognized school (Class 2 and above).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span>3 passport-size photos of the child, and 2 of each parent/guardian.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#035c00] mr-2">âœ"</span>
                <span>Report card or marksheet of the last examination passed.</span>
              </li>
            </ul>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#035c00] text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold mb-2">Connect with Admissions</h3>
            <p className="text-xs text-white/90 mb-6 leading-relaxed">
              Have questions about registration deadlines or bus routes? Our desk is here to help you.
            </p>
            <div className="space-y-3 text-sm mb-6">
              <p>ðŸ"ž <strong>Manager desk:</strong> +91 9997161490</p>
              <p>ðŸ"ž <strong>Principal desk:</strong> +91 9997161490</p>
              <p>ðŸ"§ <strong>Email:</strong> jaigovindschool@gmail.com</p>
              <p>ðŸ•' <strong>Office Hours:</strong> Mon-Sat (8 AM to 3 PM)</p>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#035c00] font-bold py-3 px-6 rounded-lg text-center block text-sm transition-all shadow-md"
            >
              Inquire Online &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
