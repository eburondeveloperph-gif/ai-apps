import React, { useState } from 'react';
import { TextArea, Button } from '../../components/ui';

export const Base64Encoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    setOutput(btoa(input));
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch (e) {
      setOutput('Invalid Base64');
    }
  };

  return (
    <div className="space-y-4">
      <TextArea value={input} onChange={(e: any) => setInput(e.target.value)} placeholder="Enter text or Base64..." />
      <div className="flex gap-2">
        <Button onClick={encode} className="flex-1">Encode</Button>
        <Button onClick={decode} className="flex-1" variant="secondary">Decode</Button>
      </div>
      <pre className="bg-black p-4 rounded text-xs font-mono overflow-x-auto break-all">{output}</pre>
    </div>
  );
};
