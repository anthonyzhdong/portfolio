import React from 'react';
import './CV.css';

const CV = () => {
  // The path to your CV PDF file in the public folder
  const cvFilePath = '/resume.pdf';
  
  return (
    <section id="cv" className="content-section cv-container">
      <h2>Curriculum Vitae</h2>
      
      <div className="cv-actions">
        <a 
          href={cvFilePath} 
          download="Anthony_Dong_CV.pdf"
          className="cv-download-button"
        >
          Download CV
        </a>
      </div>
      
      <div className="cv-viewer">
        {/* PDF embedded viewer */}
        <object
          data={cvFilePath}
          type="application/pdf"
          className="pdf-viewer"
        >
          <div className="pdf-fallback">
            <p>
              It appears your browser doesn't support embedded PDFs.
              You can <a href={cvFilePath} target="_blank" rel="noopener noreferrer">view it here</a> or use the download button above.
            </p>
          </div>
        </object>
      </div>
    </section>
  );
};

export default CV;