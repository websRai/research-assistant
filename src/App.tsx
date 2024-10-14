import React, { useState } from 'react';
import { Brain, Search, FileText, Image, MessageSquare } from 'lucide-react';
import ChatComponent from './components/ChatComponent';
import SearchComponent from './components/SearchComponent';
import NotepadComponent from './components/NotepadComponent';
import DocumentAnalyzerComponent from './components/DocumentAnalyzerComponent';
import ImageGenerationComponent from './components/ImageGenerationComponent';

function App() {
  const [activeTab, setActiveTab] = useState('chat');

  const renderComponent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatComponent />;
      case 'search':
        return <SearchComponent />;
      case 'notepad':
        return <NotepadComponent />;
      case 'document':
        return <DocumentAnalyzerComponent />;
      case 'image':
        return <ImageGenerationComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Brain className="mr-2" /> AI-Powered Work & Research Assistant
          </h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'chat' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              <MessageSquare className="inline-block mr-2" /> Chat
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'search' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('search')}
            >
              <Search className="inline-block mr-2" /> Search
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'notepad' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('notepad')}
            >
              <FileText className="inline-block mr-2" /> Notepad
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'document' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('document')}
            >
              <FileText className="inline-block mr-2" /> Document Analyzer
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'image' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('image')}
            >
              <Image className="inline-block mr-2" /> Image Generation
            </button>
          </div>
          <div className="p-6">{renderComponent()}</div>
        </div>
      </main>
    </div>
  );
}

export default App;