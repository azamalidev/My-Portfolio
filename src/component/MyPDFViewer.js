import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import cv from '../assets/images/cv.pdf'

const MyPDFViewer = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
  
    const  onDocumentLoadSuccess=({ numPages })=> {
      setNumPages(numPages);
    }

    return (
        <div>
      <Document file="../assets/images/cv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
    );
};

export default MyPDFViewer;
