import React, { useState } from 'react';
import { Image } from 'lucide-react';

const ImageGenerationComponent: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    // TODO: Implement actual image generation logic
    setGeneratedImage('https://source.unsplash.com/random/400x400');
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="Enter image description..."
        />
      </div>
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white p-2 rounded-lg flex items-center mb-4"
      >
        <Image className="mr-2" /> Generate Image
      </button>
      {generatedImage && (
        <div className="mt-4">
          <img src={generatedImage} alt="Generated" className="max-w-full h-auto rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ImageGenerationComponent;