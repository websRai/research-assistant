import React, { useState } from 'react';
import { Save } from 'lucide-react';

const NotepadComponent: React.FC = () => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    // TODO: Implement note saving logic
    console.log('Note saved:', note);
  };

  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full h-64 p-2 border rounded-lg mb-4"
        placeholder="Start typing your notes here..."
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 rounded-lg flex items-center"
      >
        <Save className="mr-2" /> Save Note
      </button>
    </div>
  );
};

export default NotepadComponent;