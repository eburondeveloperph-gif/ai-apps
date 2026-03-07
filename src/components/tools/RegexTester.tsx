import React, { useState } from 'react';
import { TextArea, Input } from '../../components/ui';

export const RegexTester = () => {
  const [regex, setRegex] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const test = () => {
    try {
      const re = new RegExp(regex);
      setResult(re.test(text) ? 'Match!' : 'No match.');
    } catch (e) {
      setResult('Invalid Regex');
    }
  };

  return (
    <div className="space-y-4">
      <Input value={regex} onChange={(e: any) => { setRegex(e.target.value); test(); }} placeholder="Enter regex..." />
      <TextArea value={text} onChange={(e: any) => { setText(e.target.value); test(); }} placeholder="Enter text to test..." />
      <div className="p-4 bg-black rounded text-sm font-mono">{result}</div>
    </div>
  );
};
