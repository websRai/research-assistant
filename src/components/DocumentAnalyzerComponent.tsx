import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';

const DocumentAnalyzerComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    // TODO: Implement actual document analysis logic
    setAnalysis('Document analysis placeholder: Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Document
        </label>
        <div className="flex items-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Upload className="mr-2" />
            Choose file
          </label>
          {file && <span className="ml-3">{file.name}</span>}
        </div>
      </div>
      <button
        onClick={handleAnalyze}
        className="bg-blue-500 text-white p-2 rounded-lg flex items-center mb-4"
        disabled={!file}
      >
        <FileText className="mr-2" /> Analyze Document
      </button>
      {analysis && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Analysis Result:</h3>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentAnalyzerComponent;