import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

// Helper to draw BatStateU & CTEC official header
function drawHeader(doc, title, subtitle) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);
  doc.text('Republic of the Philippines', 105, 14, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 37, 75); // Navy
  doc.text('BATANGAS STATE UNIVERSITY', 105, 19, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(197, 30, 40); // Red accent
  doc.text('The National Engineering University', 105, 23.5, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(20, 20, 20);
  doc.text('ARASOF-Nasugbu Campus', 105, 28, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(90, 90, 90);
  doc.text('R. Martinez St., Brgy. Bucana, Nasugbu, Batangas, Philippines 4231', 105, 32, { align: 'center' });
  doc.text('Tel No.: +63 43 416 0350 local 206 | Email: ctecouncil.nasugbu@g.batstate-u.edu.ph', 105, 35.5, { align: 'center' });

  // Divider lines
  doc.setDrawColor(15, 37, 75);
  doc.setLineWidth(0.8);
  doc.line(20, 38.5, 190, 38.5);
  doc.setDrawColor(200, 155, 60); // Gold
  doc.setLineWidth(0.3);
  doc.line(20, 39.5, 190, 39.5);

  // Title Box
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 37, 75);
  doc.text('COLLEGE OF TEACHER EDUCATION COUNCIL', 105, 46, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(50, 50, 50);
  doc.text(title, 105, 51.5, { align: 'center' });

  if (subtitle) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 100, 100);
    doc.text(subtitle, 105, 56, { align: 'center' });
  }
}

function drawFooter(doc, pageNo, totalPages) {
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(20, 278, 190, 278);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(197, 30, 40);
  doc.text('Leading Innovations, Transforming Lives, Building the Nation', 20, 283);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Page ${pageNo} of ${totalPages}`, 190, 283, { align: 'right' });
}

// 1. Accomplishment Report AY 2026-2027
function generateAccomplishment2026() {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  
  // Page 1
  drawHeader(doc, 'ACCOMPLISHMENT REPORT', 'Academic Year 2026–2027 (First Semester)');
  
  let y = 63;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('I. EXECUTIVE SUMMARY', 20, y);
  
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);
  const p1 = 'The College of Teacher Education Council (CTEC) of Batangas State University – The National Engineering University, ARASOF-Nasugbu Campus, presents this Accomplishment Report for Academic Year 2026–2027. Serving a student body of 1,078 enrolled pre-service teachers across BEEd, BPEd, and BSEd majors, CTEC has successfully implemented student services, academic development initiatives, civic engagements, and professional preparation activities in accordance with the ratified Constitution and By-Laws.';
  const splitP1 = doc.splitTextToSize(p1, 170);
  doc.text(splitP1, 20, y);
  
  y += splitP1.length * 4 + 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('II. HIGHLIGHTS OF COMPLETED ACTIVITIES & PROJECTS', 20, y);

  const activities = [
    { title: 'Turn-Over Ceremony of Key Responsibility', date: 'August 22, 2026', desc: 'Formal transition of council documents, inventory, and leadership responsibilities between outgoing and incoming student officers and sub-organization leaders.' },
    { title: 'Pencil of Hope for Future Teachers', date: 'August 24, 2026', desc: 'Outreach initiative providing pencils, exam materials, and moral support to graduating education students preparing for the Licensure Examination for Teachers (LET).' },
    { title: 'CTE Freshmen Orientation', date: 'August 29, 2026', desc: 'Comprehensive orientation for 241 BEEd and secondary education freshmen covering university policies, student services, and academic expectations.' },
    { title: 'PANANALIKSIK: Academic Research Strategies Seminar', date: 'August 30, 2026', desc: 'Seminar on research methodologies, ethical scholarship, and thesis preparation for 3rd and 4th-year teacher education candidates.' },
    { title: 'Tanda ng Apresasyon, Liham, at Alaala (World Teachers\' Day Tribute)', date: 'September 2026', desc: 'Interactive campus bulletin board and letter-writing celebration honoring CTE faculty mentors.' },
    { title: 'GABAY: Holy Mass for September 2026 LET Takers', date: 'September 12, 2026', desc: 'Spiritual gathering and blessing ceremony for BatStateU LET examinees, fostering encouragement and faith.' },
    { title: 'A.L.A.Y. 2026: Spoken Poetry and Mentorship Appreciation', date: 'September 19, 2026', desc: 'Arts and spoken word performance gathering honoring faculty members and pre-service educators.' }
  ];

  y += 5;
  activities.forEach((act, idx) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 37, 75);
    doc.text(`${idx + 1}. ${act.title}`, 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${act.date}`, 190, y, { align: 'right' });
    y += 4;
    doc.setTextColor(50, 50, 50);
    const splitDesc = doc.splitTextToSize(act.desc, 170);
    doc.text(splitDesc, 20, y);
    y += splitDesc.length * 3.8 + 2.5;
  });

  drawFooter(doc, 1, 2);

  // Page 2
  doc.addPage();
  drawHeader(doc, 'ACCOMPLISHMENT REPORT', 'Academic Year 2026–2027 (Signatures & Verification)');

  y = 65;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('III. STUDENT POPULATION SERVED', 20, y);
  
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  doc.text('Total Enrolled Students: 1,078', 20, y);
  y += 4;
  doc.text('• Bachelor of Elementary Education (BEEd): 241 students', 24, y);
  y += 4;
  doc.text('• Bachelor of Physical Education (BPEd): 139 students', 24, y);
  y += 4;
  doc.text('• BSEd Major in English: 219 | Filipino: 178 | Mathematics: 86 | Sciences: 95 | Social Studies: 120', 24, y);

  y += 12;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('IV. OFFICIAL ATTESTATION', 20, y);
  
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  doc.text('This Accomplishment Report has been prepared and certified correct by the elected officers of the CTEC.', 20, y);

  y += 20;
  // Signatures
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Prepared by:', 20, y);
  doc.text('Attested by:', 110, y);

  y += 14;
  doc.text('MS. SHANE CARMELLE R. CABESAS', 20, y);
  doc.text('MR. PRINCE ELJOHN L. AYO', 110, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('Secretary, CTE Council', 20, y);
  doc.text('President, CTE Council', 110, y);

  y += 18;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Noted by:', 20, y);
  doc.text('Approved by:', 110, y);

  y += 14;
  doc.text('ASST. PROF. MICHAEL JOHN V. FRANCISCO', 20, y);
  doc.text('DR. ANANIA B. AQUINO', 110, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('Faculty Adviser, CTE Council', 20, y);
  doc.text('Dean, College of Teacher Education', 110, y);

  drawFooter(doc, 2, 2);

  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync('public/reports/accomplishment/CTEC_Accomplishment_Report_2026-2027.pdf', buffer);
}

// 2. Accomplishment Report AY 2025-2026 (Historical Archive)
function generateAccomplishment2025() {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  drawHeader(doc, 'CTEC ACCOMPLISHMENT REPORT AY 2025-2026', 'Official Document Archive - College of Teacher Education Council');

  let y = 64;

  // Prominent Historical Notice Box
  doc.setDrawColor(200, 155, 60);
  doc.setFillColor(254, 252, 243);
  doc.rect(20, y, 170, 14, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(140, 85, 10);
  doc.text('HISTORICAL ARCHIVE NOTICE (ACADEMIC YEAR 2025–2026):', 23, y + 5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(80, 70, 50);
  doc.text('This document contains historical records of activities and officer appointments during AY 2025–2026.', 23, y + 9.5);

  y += 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('I. YEAR-END ACCOMPLISHMENTS SUMMARY', 20, y);

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  const text = 'During Academic Year 2025–2026, the College of Teacher Education Council under the administration of Mr. Roland F. Rivera achieved historic milestones that solidified student leadership and academic community building. Key achievements included the official establishment and recognition of four program-based sub-organizations under CTEC: the Alliance on Integrated Mathematics and Sciences Students (AIMSS), Academic League of Filipino and English Majors (ALFEM), Leaders of Elementary Aspiring Pedagogues Students (LEAPS), and Society of Physical Education and Social Studies Students (SPESSS).';
  const splitText = doc.splitTextToSize(text, 170);
  doc.text(splitText, 20, y);

  y += splitText.length * 4 + 6;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('II. FLAGSHIP INITIATIVES (AY 2025–2026)', 20, y);

  const items = [
    { name: 'Pinning and Candle Lighting Ceremonies', desc: 'Instituted the solemn ceremony recognizing the dedication of graduating teacher candidates embarking on their practicum internship.' },
    { name: 'CTE Henyo Academic Quiz Bee', desc: 'Department-wide intellectual competition engaging students in General Education, Professional Education, and Specialization subjects.' },
    { name: 'CTE Day and Night Fellowship', desc: 'Fostered solidarity and camaraderie among students, alumni, faculty, and administrative staff through academic exhibitions and cultural performances.' },
    { name: 'Sub-Organization Empowerment', desc: 'Strengthened student representation across individual majors and provided dedicated platforms for academic enrichment.' }
  ];

  y += 5;
  items.forEach((item, idx) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 37, 75);
    doc.text(`${idx + 1}. ${item.name}`, 20, y);
    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    const split = doc.splitTextToSize(item.desc, 170);
    doc.text(split, 20, y);
    y += split.length * 3.8 + 2.5;
  });

  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Historical Certified by (AY 2025–2026 Term):', 20, y);
  doc.text('Historical Noted by (AY 2025–2026 Term):', 110, y);

  y += 14;
  doc.text('MR. ROLAND F. RIVERA', 20, y);
  doc.text('MR. MARVIN E. ROSEL', 110, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('Council President (AY 2025–2026)', 20, y);
  doc.text('Faculty Adviser (AY 2025–2026)', 110, y);

  drawFooter(doc, 1, 1);

  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync('public/reports/accomplishment/CTEC_Accomplishment_Report_2025-2026.pdf', buffer);
}

// 3. Financial Report AY 2026-2027 (Exact from Attachment F of document)
function generateFinancial2026() {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  drawHeader(doc, 'FINANCIAL STATEMENT & REVOLVING FUND DECLARATION', 'Attachment F: Academic Year 2026–2027');

  let y = 65;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('ORGANIZATION INFORMATION', 20, y);

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  doc.text('Name of Organization: College of Teacher Education Council (CTEC)', 20, y);
  y += 4.5;
  doc.text('Classification: Socio-Civic / Academic / Service-Oriented (College-Based)', 20, y);
  y += 4.5;
  doc.text('Campus: BatStateU – The NEU, ARASOF-Nasugbu Campus', 20, y);

  y += 9;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('STATEMENT OF REVOLVING FUND', 20, y);

  y += 6;
  // Table Box
  doc.setDrawColor(15, 37, 75);
  doc.setFillColor(245, 248, 252);
  doc.rect(20, y, 170, 42, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 37, 75);
  doc.text('PARTICULARS', 25, y + 6);
  doc.text('AMOUNT (PHP)', 185, y + 6, { align: 'right' });

  doc.setDrawColor(210, 220, 235);
  doc.line(20, y + 9, 190, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 30, 30);
  doc.text('Remaining fund from the last Semester:', 25, y + 16);
  doc.setFont('helvetica', 'bold');
  doc.text('Php 51,500.85', 185, y + 16, { align: 'right' });

  doc.setFont('helvetica', 'bold');
  doc.text('Amount Receivables:', 25, y + 23);

  doc.setFont('helvetica', 'normal');
  doc.text('1. Membership Fee', 30, y + 29);
  doc.text('Php 0.00', 185, y + 29, { align: 'right' });

  doc.text('2. Other Collection', 30, y + 35);
  doc.text('Php 0.00', 185, y + 35, { align: 'right' });

  // Total Row Box
  doc.setFillColor(235, 243, 253);
  doc.rect(20, y + 42, 170, 10, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 37, 75);
  doc.text('TOTAL REVOLVING FUND BALANCE:', 25, y + 48.5);
  doc.text('Php 51,500.85', 185, y + 48.5, { align: 'right' });

  y += 62;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 37, 75);
  doc.text('NOTES ON MEMBERSHIP COLLECTIONS (CONSTITUTION ARTICLE III, SEC. 4):', 20, y);
  
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);
  const note = 'Per the ratified CTEC Constitution & By-Laws (Article III, Section 4), the council collects Php 50.00 per semester (totaling Php 100.00 for the academic year) from bonafide CTE students, commencing on the 4th week of classes. Collections and disbursements are published on this transparency portal.';
  const splitNote = doc.splitTextToSize(note, 170);
  doc.text(splitNote, 20, y);

  y += 20;
  // Signatures as per Attachment F
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Prepared by:', 20, y);
  doc.text('Audited by:', 110, y);

  y += 14;
  doc.text('MR. RONALD F. RIVERA JR.', 20, y);
  doc.text('MR. ROLAND F. RIVERA', 110, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('Treasurer, CTEC', 20, y);
  doc.text('Auditor, CTEC', 110, y);

  y += 16;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Noted by:', 20, y);
  doc.text('Noted by:', 110, y);

  y += 14;
  doc.text('MR. PRINCE ELJOHN L. AYO', 20, y);
  doc.text('ASST. PROF. MICHAEL JOHN V. FRANCISCO', 110, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('President, CTEC', 20, y);
  doc.text('Faculty Adviser, CTEC', 110, y);

  drawFooter(doc, 1, 1);

  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync('public/reports/financial/CTEC_Financial_Report_2026-2027.pdf', buffer);
}

// 4. Financial Report AY 2025-2026
function generateFinancial2025() {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  drawHeader(doc, 'FINANCIAL STATEMENT & LIQUIDATION REPORT', 'Academic Year 2025–2026');

  let y = 65;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 37, 75);
  doc.text('I. YEAR-END FINANCIAL SUMMARY', 20, y);

  y += 6;
  doc.setDrawColor(15, 37, 75);
  doc.setFillColor(245, 248, 252);
  doc.rect(20, y, 170, 48, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 37, 75);
  doc.text('SUMMARY OF FUNDS', 25, y + 6);
  doc.text('AMOUNT (PHP)', 185, y + 6, { align: 'right' });

  doc.setDrawColor(210, 220, 235);
  doc.line(20, y + 9, 190, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 30, 30);
  doc.text('Beginning Balance (Carried Forward):', 25, y + 16);
  doc.text('Php 48,220.00', 185, y + 16, { align: 'right' });

  doc.text('Total Membership Dues Collected:', 25, y + 23);
  doc.text('Php 98,400.00', 185, y + 23, { align: 'right' });

  doc.text('Total Project & Activity Disbursements:', 25, y + 30);
  doc.text('(Php 95,119.15)', 185, y + 30, { align: 'right' });

  doc.setFillColor(235, 243, 253);
  doc.rect(20, y + 36, 170, 12, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 37, 75);
  doc.text('ENDING BALANCE (FORWARDED TO AY 2026-2027):', 25, y + 43.5);
  doc.text('Php 51,500.85', 185, y + 43.5, { align: 'right' });

  y += 58;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 37, 75);
  doc.text('II. AUDIT CERTIFICATION', 20, y);
  
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const auditText = 'The financial records, receipts, and vouchers of the College of Teacher Education Council for Academic Year 2025–2026 have been audited and verified in conformance with the university student financial governance rules. The ending revolving balance of Php 51,500.85 has been verified and carried forward.';
  const splitAudit = doc.splitTextToSize(auditText, 170);
  doc.text(splitAudit, 20, y);

  y += 25;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Audited by:', 20, y);
  doc.text('Approved by:', 110, y);

  y += 14;
  doc.text('MS. ARABELLA JULIANA D. CAPADOSA', 20, y);
  doc.text('MR. ROLAND F. RIVERA', 110, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('Auditor, CTEC (AY 2025–2026)', 20, y);
  doc.text('President, CTEC (AY 2025–2026)', 110, y);

  drawFooter(doc, 1, 1);

  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync('public/reports/financial/CTEC_Financial_Report_2025-2026.pdf', buffer);
}

generateAccomplishment2026();
generateAccomplishment2025();
generateFinancial2026();
generateFinancial2025();
console.log('Successfully generated all 4 official CTEC PDF reports.');
