import React, { useState } from 'react';
import { COUNCIL_INFO } from '../data/councilData';
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('BEEd');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#0D274F]">
          Official Council Contact
        </h1>
        <p className="text-sm text-slate-700 mt-2 leading-relaxed max-w-2xl">
          Get in touch with the College of Teacher Education Council. We welcome questions, document requests, and student feedback regarding council operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Official Contact Directory */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold font-serif text-[#0D274F] mb-1">
              Council Office Information
            </h2>
            <p className="text-xs text-slate-600">
              Official institutional communication lines:
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-700">
            {/* Campus Address */}
            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded border border-slate-200">
              <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 mb-0.5">Campus Location</div>
                <div>{COUNCIL_INFO.university} – {COUNCIL_INFO.universityTagline}</div>
                <div className="font-medium text-slate-800">{COUNCIL_INFO.campus}</div>
                <div className="text-slate-600 mt-0.5">{COUNCIL_INFO.campusAddress}</div>
              </div>
            </div>

            {/* Official Email */}
            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded border border-slate-200">
              <Mail className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 mb-0.5">Official Council Email</div>
                <a
                  href={`mailto:${COUNCIL_INFO.email}`}
                  className="font-mono text-blue-800 underline hover:text-blue-900 break-all"
                >
                  {COUNCIL_INFO.email}
                </a>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Primary channel for official student letters and formal inquiries
                </div>
              </div>
            </div>

            {/* University Telephone */}
            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded border border-slate-200">
              <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 mb-0.5">University Telephone</div>
                <div className="font-mono text-slate-800">{COUNCIL_INFO.telephone}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Office of Student Organization (OSO) / College of Teacher Education Dean&apos;s Office
                </div>
              </div>
            </div>

            {/* Principal Office */}
            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded border border-slate-200">
              <Building className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 mb-0.5">Principal Office / Domicile</div>
                <div>College of Teacher Education Building</div>
                <div>BatStateU ARASOF-Nasugbu Campus</div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded text-[11px] text-amber-900">
            <strong>Privacy Assurance:</strong> In compliance with university privacy regulations, personal contact details and individual phone numbers of student officers are not published publicly. Please use the official council email for all inquiries.
          </div>
        </div>

        {/* Right Column: Student Inquiry & Feedback Form */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-7 shadow-xs">
          <div className="mb-4">
            <h2 className="text-lg font-bold font-serif text-[#0D274F] mb-1 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-blue-700" />
              Send an Inquiry or Feedback
            </h2>
            <p className="text-xs text-slate-600">
              Submit your question or document request directly to the council officers.
            </p>
          </div>

          {isSent ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-sm text-emerald-900 font-serif">
                Inquiry Received
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Thank you for reaching out. Your message has been routed to the CTEC Secretariat. A response will be provided to <strong>{email}</strong> within 1–2 working days.
              </p>
              <button
                onClick={() => {
                  setIsSent(false);
                  setName('');
                  setEmail('');
                  setSubject('');
                  setMessage('');
                }}
                className="mt-2 px-4 py-1.5 bg-emerald-700 text-white rounded text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label htmlFor="student-name" className="block font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="student-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maria Santos"
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="student-email" className="block font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="student-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@g.batstate-u.edu.ph"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="program-select" className="block font-semibold text-slate-700 mb-1">
                    Program / Major
                  </label>
                  <select
                    id="program-select"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="BEEd">BEEd (Elementary)</option>
                    <option value="BPEd">BPEd (Physical Education)</option>
                    <option value="BSEd English">BSEd English</option>
                    <option value="BSEd Filipino">BSEd Filipino</option>
                    <option value="BSEd Math">BSEd Mathematics</option>
                    <option value="BSEd Science">BSEd Sciences</option>
                    <option value="BSEd Social Studies">BSEd Social Studies</option>
                    <option value="Other">Other / Stakeholder</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-subject" className="block font-semibold text-slate-700 mb-1">
                  Subject / Topic
                </label>
                <input
                  id="inquiry-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Financial Report Inquiry / Activity Verification"
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="inquiry-msg" className="block font-semibold text-slate-700 mb-1">
                  Message / Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="inquiry-msg"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your inquiry or feedback here clearly and simply..."
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded font-semibold text-xs transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5 mr-1.5" />
                Submit Message to CTEC
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
