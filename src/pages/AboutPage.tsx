import React, { useState } from 'react';
import {
  COUNCIL_INFO,
  EXECUTIVE_OFFICERS,
  COMMITTEES,
  HISTORY_SUMMARY,
  ENROLLMENT_BREAKDOWN,
  SUB_ORGANIZATIONS
} from '../data/councilData';
import { Target, Compass, Flag, BookOpen, Clock, Users, Award, Shield } from 'lucide-react';

export const AboutPage: React.FC<AboutPageProps> = () => {
  const [selectedHistory, setSelectedHistory] = useState<number>(0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Title */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#0D274F]">
          About CTEC
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Organizational profile, philosophy, constitution statements, history, and official officers
        </p>
      </div>

      {/* 1. About the Council & Classification */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold font-serif text-[#0D274F] mb-3">
            About the Council
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            The <strong>College of Teacher Education Council (CTEC)</strong> is the recognized student governing body of the College of Teacher Education at <strong>Batangas State University – The National Engineering University, ARASOF-Nasugbu Campus</strong>. It operates as a college-based student organization duly renewed and recognized by the Office of Student Organization (OSO).
          </p>
        </div>

        {/* Classification Box */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Official Organization Classification
          </div>
          <div className="text-base sm:text-lg font-bold font-serif text-[#0D274F]">
            {COUNCIL_INFO.classification}
          </div>
          <p className="text-xs text-slate-600 mt-1">
            College-Based Student Organization under the supervision of the Supreme Student Council (SSC) and the Office of Student Organization.
          </p>
        </div>

        {/* Council Philosophy */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800 mb-2">
            Council Philosophy
          </h3>
          <blockquote className="text-sm text-slate-700 leading-relaxed italic border-l-3 border-[#DFAC42] pl-4 py-1 bg-amber-50/40 rounded-r">
            &quot;{COUNCIL_INFO.philosophy}&quot;
          </blockquote>
        </div>
      </section>

      {/* 2. Vision, Mission & Goals */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Vision */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs flex flex-col">
          <div className="flex items-center space-x-2 text-blue-800 mb-3">
            <Compass className="w-5 h-5 text-blue-700" />
            <h3 className="text-base font-bold font-serif">Vision</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
            {COUNCIL_INFO.vision}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs flex flex-col">
          <div className="flex items-center space-x-2 text-blue-800 mb-3">
            <Target className="w-5 h-5 text-blue-700" />
            <h3 className="text-base font-bold font-serif">Mission</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
            {COUNCIL_INFO.mission}
          </p>
        </div>

        {/* Goals */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs flex flex-col">
          <div className="flex items-center space-x-2 text-blue-800 mb-3">
            <Flag className="w-5 h-5 text-blue-700" />
            <h3 className="text-base font-bold font-serif">Goals</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
            {COUNCIL_INFO.goals}
          </p>
        </div>
      </section>

      {/* 3. Objectives (Ratified Article II) */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center space-x-2.5 mb-4 border-b border-slate-200 pb-3">
          <BookOpen className="w-5 h-5 text-[#0D274F]" />
          <h2 className="text-xl font-bold font-serif text-[#0D274F]">
            Organizational Objectives
          </h2>
        </div>
        <p className="text-xs text-slate-600 mb-5">
          Verbatim objectives ratified under Article II of the CTEC Constitution &amp; By-Laws:
        </p>

        <ol className="space-y-3.5 text-sm text-slate-700">
          {COUNCIL_INFO.objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start">
              <span className="font-bold text-blue-800 mr-3 shrink-0 text-xs sm:text-sm bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{obj}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Council History */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center space-x-2.5 mb-2">
          <Clock className="w-5 h-5 text-[#0D274F]" />
          <h2 className="text-xl font-bold font-serif text-[#0D274F]">
            Brief History of CTEC
          </h2>
        </div>
        <p className="text-xs text-slate-600 mb-6">
          Tracing the council&apos;s leadership, milestones, and student service from 2001 to Academic Year 2026–2027
        </p>

        {/* Timeline Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg mb-6">
          {HISTORY_SUMMARY.map((hist, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedHistory(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedHistory === idx
                  ? 'bg-[#0D274F] text-amber-300 font-semibold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {hist.period}
            </button>
          ))}
        </div>

        {/* Selected History Narrative */}
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <h3 className="text-base font-bold font-serif text-[#0D274F] mb-2">
            {HISTORY_SUMMARY[selectedHistory].title}
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            {HISTORY_SUMMARY[selectedHistory].content}
          </p>
        </div>
      </section>

      {/* 5. CTEC Officers (AY 2026–2027) */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        <div>
          <div className="flex items-center space-x-2.5 mb-1">
            <Users className="w-5 h-5 text-[#0D274F]" />
            <h2 className="text-xl font-bold font-serif text-[#0D274F]">
              CTEC Officers (Academic Year 2026–2027)
            </h2>
          </div>
          <p className="text-xs text-slate-600">
            Duly elected and ratified executive officers and committee leaders.
          </p>
          <div className="mt-2 text-[11px] text-emerald-800 bg-emerald-50 px-3 py-1 rounded inline-flex items-center border border-emerald-200">
            <Shield className="w-3 h-3 mr-1" />
            Privacy Protection Enforced: Only names and official positions are displayed.
          </div>
        </div>

        {/* Executive Board Cards */}
        <div>
          <h3 className="text-sm font-bold font-serif text-slate-800 uppercase tracking-wide mb-3 border-b border-slate-200 pb-1.5">
            Executive Officers &amp; Adviser
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {EXECUTIVE_OFFICERS.map((officer, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border transition-colors ${
                  officer.position === 'President'
                    ? 'bg-blue-50/50 border-blue-300'
                    : officer.roleType === 'adviser'
                    ? 'bg-amber-50/40 border-amber-300'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
                  {officer.position}
                </div>
                <div className="text-sm font-bold text-slate-900 font-serif">
                  {officer.name}
                </div>
                {officer.course && (
                  <div className="text-xs text-slate-500 mt-1">
                    {officer.course}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Committees Table / Cards */}
        <div>
          <h3 className="text-sm font-bold font-serif text-slate-800 uppercase tracking-wide mb-3 border-b border-slate-200 pb-1.5">
            Council Working Committees
          </h3>
          <div className="space-y-4">
            {COMMITTEES.map((comm, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-sm font-bold font-serif text-[#0D274F]">
                    {comm.name}
                  </h4>
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">Committee Head: </span>
                    {comm.head} ({comm.headCourse})
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-2">{comm.duties}</p>
                <div className="text-xs text-slate-700 bg-white p-2.5 rounded border border-slate-200/80">
                  <span className="font-semibold text-slate-800">Members: </span>
                  {comm.members.map((m, mIdx) => (
                    <span key={mIdx}>
                      {m.name} ({m.course}){mIdx < comm.members.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Enrolled Student Body & Sub-Organizations */}
      <section className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold font-serif text-[#0D274F] mb-1">
            Constituency &amp; Enrolled Student Body
          </h2>
          <p className="text-xs text-slate-600">
            Official enrollment breakdown for the First Semester of Academic Year 2026–2027 (Total: 1,078 pre-service teachers)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {ENROLLMENT_BREAKDOWN.map((item, idx) => (
            <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded flex justify-between items-center text-xs">
              <span className="text-slate-800 font-medium">{item.program}</span>
              <span className="font-bold text-blue-900 bg-blue-100/70 px-2 py-0.5 rounded text-xs ml-2 shrink-0">
                {item.count}
              </span>
            </div>
          ))}
        </div>

        {/* Sub-Organizations Recognized Under CTEC */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center space-x-2 text-slate-900 mb-3">
            <Award className="w-4 h-4 text-amber-600" />
            <h3 className="text-sm font-bold font-serif uppercase tracking-wide">
              Recognized Sub-Organizations Under CTEC
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUB_ORGANIZATIONS.map((org, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded">
                <div className="font-bold text-xs text-blue-900 mb-0.5">
                  {org.acronym} — {org.name}
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  {org.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

interface AboutPageProps {}
