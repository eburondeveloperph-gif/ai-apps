import React, { useState } from 'react';
import { TextArea, Button } from '../../components/ui';

export const JsonFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const format = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
    } catch (e) {
      setOutput('Invalid JSON');
    }
  };

  return (
    <div className="space-y-4">
      <TextArea value={input} onChange={(e: any) => setInput(e.target.value)} placeholder="Paste JSON here..." />
      <Button onClick={format} className="w-full">Format</Button>
      <pre className="bg-black p-4 rounded text-xs font-mono overflow-x-auto">{output}</pre>
    </div>
  );
};
