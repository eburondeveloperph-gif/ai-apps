import React from 'react';
import { Card, Input, TextArea, Button } from './components/ui';
import { Play, Mic, Upload, Settings, Send, Plus, Video, MessageSquare, Activity, FileAudio, Presentation, Network, MessagesSquare, Code2, Bot, MicVocal } from 'lucide-react';

export const TranslatorPage = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full min-h-[500px]">
    <Card className="flex flex-col h-full min-h-[300px]">
      <div className="flex justify-between items-center mb-4">
        <select className="bg-[#1c1c1e] border border-white/10 rounded-lg px-3 py-1.5 text-white outline-none"><option>English</option></select>
      </div>
      <TextArea className="flex-1 text-base md:text-lg" placeholder="Enter text to translate..." />
    </Card>
    <Card className="flex flex-col h-full min-h-[300px] bg-[#2c2c2e]/50">
      <div className="flex justify-between items-center mb-4">
        <select className="bg-[#1c1c1e] border border-white/10 rounded-lg px-3 py-1.5 text-white outline-none"><option>Spanish</option></select>
      </div>
      <div className="flex-1 p-4 text-base md:text-lg text-gray-300">Translation will appear here...</div>
    </Card>
  </div>
);

export const DualTranslatePage = () => (
  <div className="flex flex-col h-full min-h-[500px] max-w-3xl mx-auto">
    <Card className="flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-4 md:mb-6 border-b border-white/10 pb-4">
        <div className="text-center flex-1"><div className="text-xs md:text-sm text-gray-400">Person 1</div><div className="font-medium">English</div></div>
        <div className="w-px h-8 bg-white/10 mx-2 md:mx-4"></div>
        <div className="text-center flex-1"><div className="text-xs md:text-sm text-gray-400">Person 2</div><div className="font-medium">Spanish</div></div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 p-2 md:p-4">
        <div className="bg-blue-600/20 text-blue-100 p-3 md:p-4 rounded-2xl rounded-tl-sm max-w-[85%] md:max-w-[80%] text-sm md:text-base">Hello, how are you?</div>
        <div className="bg-green-600/20 text-green-100 p-3 md:p-4 rounded-2xl rounded-tr-sm max-w-[85%] md:max-w-[80%] ml-auto text-sm md:text-base">Hola, ¿cómo estás?</div>
      </div>
      <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10">
        <Button className="w-14 h-14 md:w-16 md:h-16 rounded-full !p-0"><Mic size={24} /></Button>
      </div>
    </Card>
  </div>
);

export const ClassroomPage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 h-full min-h-[600px]">
    <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
      <Card className="flex-1 min-h-[300px] flex items-center justify-center bg-black">
        <Video size={48} className="text-gray-600" />
      </Card>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 h-auto sm:h-32">
        {[1,2,3,4].map(i => <Card key={i} className="h-24 sm:h-auto flex items-center justify-center bg-black p-2"><Video size={24} className="text-gray-600" /></Card>)}
      </div>
    </div>
    <Card className="flex flex-col min-h-[400px]">
      <h3 className="font-medium mb-4 flex items-center gap-2"><MessageSquare size={18}/> Class Chat</h3>
      <div className="flex-1 bg-[#1c1c1e] rounded-xl p-4 mb-4"></div>
      <div className="flex gap-2">
        <Input placeholder="Type a message..." />
        <Button><Send size={18} /></Button>
      </div>
    </Card>
  </div>
);

export const DubberPage = () => (
  <div className="flex flex-col gap-4 md:gap-6 h-full min-h-[500px]">
    <Card className="h-48 md:h-64 flex items-center justify-center border-dashed border-2 border-white/20 bg-transparent">
      <div className="text-center">
        <Upload size={32} className="mx-auto mb-2 text-gray-400" />
        <p className="text-sm md:text-base text-gray-400">Drag and drop video file here</p>
      </div>
    </Card>
    <Card className="flex-1 flex flex-col">
      <h3 className="font-medium mb-4">Audio Tracks</h3>
      <div className="space-y-2 flex-1 overflow-y-auto">
        <div className="h-12 bg-[#1c1c1e] rounded-lg flex items-center px-3 md:px-4 gap-2 md:gap-4">
          <Play size={16} className="text-gray-400 shrink-0" />
          <div className="w-16 md:w-24 text-xs md:text-sm text-gray-400 truncate">Original</div>
          <div className="flex-1 h-4 bg-blue-900/30 rounded overflow-hidden"><div className="w-full h-full bg-blue-500/50" style={{clipPath: 'polygon(0 50%, 10% 20%, 20% 80%, 30% 40%, 40% 60%, 50% 10%, 60% 90%, 70% 30%, 80% 70%, 90% 20%, 100% 50%, 100% 100%, 0 100%)'}}></div></div>
        </div>
        <div className="h-12 bg-[#1c1c1e] rounded-lg flex items-center px-3 md:px-4 gap-2 md:gap-4">
          <Play size={16} className="text-gray-400 shrink-0" />
          <div className="w-16 md:w-24 text-xs md:text-sm text-gray-400 truncate">Dub (ES)</div>
          <div className="flex-1 h-4 bg-green-900/30 rounded overflow-hidden"><div className="w-3/4 h-full bg-green-500/50" style={{clipPath: 'polygon(0 50%, 10% 30%, 20% 70%, 30% 20%, 40% 80%, 50% 40%, 60% 60%, 70% 10%, 80% 90%, 90% 50%, 100% 50%, 100% 100%, 0 100%)'}}></div></div>
        </div>
      </div>
    </Card>
  </div>
);

export const TranscriberPage = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-full min-h-[500px]">
    <Card className="md:col-span-1 flex flex-col gap-4">
      <div className="h-32 border-dashed border-2 border-white/20 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <Upload size={24} className="mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-400">Upload Audio</p>
        </div>
      </div>
      <Button className="w-full"><Mic size={18} /> Record Audio</Button>
      <div className="mt-2 md:mt-4">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Settings</h4>
        <select className="bg-[#1c1c1e] border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white w-full mb-2"><option>Auto-detect Language</option></select>
        <select className="bg-[#1c1c1e] border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white w-full"><option>Standard Model</option></select>
      </div>
    </Card>
    <Card className="md:col-span-2 flex flex-col min-h-[300px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Transcript</h3>
        <Button variant="secondary" className="text-xs md:text-sm py-1.5">Export</Button>
      </div>
      <div className="flex-1 bg-[#1c1c1e] rounded-xl p-4 md:p-6 text-sm md:text-base text-gray-300 leading-relaxed overflow-y-auto">
        <p className="mb-4"><span className="text-blue-400 font-medium mr-2">00:00</span> Welcome to the transcriber application. Upload an audio file to see the text appear here.</p>
      </div>
    </Card>
  </div>
);

export const CloneVoicePage = () => (
  <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 w-full">
    <div className="flex justify-between items-center">
      <h2 className="text-xl md:text-2xl font-semibold">Voice Profiles</h2>
      <Button className="text-sm md:text-base"><Plus size={18} /> <span className="hidden sm:inline">New Voice</span></Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1,2,3].map(i => (
        <Card key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
            <MicVocal size={20} className="text-white md:w-6 md:h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm md:text-base truncate">Voice Profile {i}</h4>
            <p className="text-xs md:text-sm text-gray-400 truncate">Created 2 days ago</p>
          </div>
          <Button variant="secondary" className="!p-2 rounded-full shrink-0"><Play size={16} /></Button>
          <Button variant="secondary" className="!p-2 rounded-full shrink-0"><Settings size={16} /></Button>
        </Card>
      ))}
    </div>
  </div>
);

export const TTSShowcasePage = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-full min-h-[500px]">
    <Card className="md:col-span-2 flex flex-col min-h-[300px]">
      <TextArea className="flex-1 text-base md:text-lg mb-4" placeholder="Enter text to synthesize..." defaultValue="Hello, this is a demonstration of the Text-to-Speech capabilities." />
      <div className="flex justify-end">
        <Button className="w-full sm:w-32"><Play size={18} /> Generate</Button>
      </div>
    </Card>
    <Card className="flex flex-col gap-4">
      <h3 className="font-medium">Voice Settings</h3>
      <div>
        <label className="text-sm text-gray-400 mb-1 block">Voice Model</label>
        <select className="bg-[#1c1c1e] border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white w-full"><option>Nova (Female)</option><option>Echo (Male)</option></select>
      </div>
      <div>
        <label className="text-sm text-gray-400 mb-1 block">Speed (1.0x)</label>
        <input type="range" className="w-full accent-blue-500" min="0.5" max="2" step="0.1" defaultValue="1" />
      </div>
      <div>
        <label className="text-sm text-gray-400 mb-1 block">Pitch</label>
        <input type="range" className="w-full accent-blue-500" min="-10" max="10" defaultValue="0" />
      </div>
    </Card>
  </div>
);

export const ChatbotPage = () => (
  <div className="max-w-3xl mx-auto h-full min-h-[500px] flex flex-col w-full">
    <Card className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4 md:space-y-6 p-2 md:p-4">
        <div className="flex gap-3 md:gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0"><Bot size={16} /></div>
          <div className="bg-[#1c1c1e] p-3 md:p-4 rounded-2xl rounded-tl-sm text-sm md:text-base text-gray-200">Hello! I'm your AI assistant. How can I help you today?</div>
        </div>
        <div className="flex gap-3 md:gap-4 flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center shrink-0">U</div>
          <div className="bg-blue-600 p-3 md:p-4 rounded-2xl rounded-tr-sm text-sm md:text-base text-white">Can you help me write a function?</div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
        <Input placeholder="Message Chatbot..." />
        <Button><Send size={18} /></Button>
      </div>
    </Card>
  </div>
);

export const AgentsPage = () => (
  <div className="flex flex-col gap-4 md:gap-6 h-full">
    <div className="flex justify-between items-center">
      <h2 className="text-xl md:text-2xl font-semibold">Active Agents</h2>
      <Button className="text-sm md:text-base"><Plus size={18} /> <span className="hidden sm:inline">Create Agent</span></Button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {['Research Agent', 'Coding Assistant', 'Data Analyst'].map((name, i) => (
        <Card key={i} className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center"><Bot size={20} /></div>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active</span>
          </div>
          <h3 className="font-medium text-lg mb-1">{name}</h3>
          <p className="text-sm text-gray-400 mb-4 flex-1">Autonomous agent configured for specific tasks and workflows.</p>
          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1 text-xs md:text-sm py-1.5">Configure</Button>
            <Button variant="secondary" className="flex-1 text-xs md:text-sm py-1.5">Logs</Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export const CSRPage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 h-full min-h-[600px]">
    <div className="lg:col-span-1 flex flex-col gap-4">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
        <Card className="p-4">
          <h3 className="text-xs md:text-sm text-gray-400 mb-1">Active Tickets</h3>
          <div className="text-2xl md:text-3xl font-semibold">24</div>
        </Card>
        <Card className="p-4">
          <h3 className="text-xs md:text-sm text-gray-400 mb-1">Avg Response</h3>
          <div className="text-2xl md:text-3xl font-semibold text-green-400">2m 14s</div>
        </Card>
      </div>
      <Card className="flex-1 min-h-[250px]">
        <h3 className="font-medium mb-3 md:mb-4">Queue</h3>
        <div className="space-y-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="p-2 md:p-3 bg-[#1c1c1e] rounded-lg border border-white/5 cursor-pointer hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between text-xs md:text-sm mb-1"><span className="font-medium">User {i*123}</span><span className="text-gray-500">2m ago</span></div>
              <div className="text-xs text-gray-400 truncate">Issue with billing account...</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
    <Card className="lg:col-span-3 flex flex-col min-h-[400px]">
      <div className="border-b border-white/10 pb-3 md:pb-4 mb-3 md:mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 className="font-medium text-base md:text-lg">Ticket #12345</h2>
          <p className="text-xs md:text-sm text-gray-400">User 123 • Billing Issue</p>
        </div>
        <Button variant="secondary" className="w-full sm:w-auto text-sm">Resolve Ticket</Button>
      </div>
      <div className="flex-1 bg-[#1c1c1e] rounded-xl p-4 mb-4"></div>
      <div className="flex gap-2">
        <Input placeholder="Type reply to customer..." />
        <Button><Send size={18} /></Button>
      </div>
    </Card>
  </div>
);

export const CodemaxPage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 h-full min-h-[600px]">
    <Card className="hidden lg:flex lg:col-span-1 flex-col p-0 overflow-hidden">
      <div className="p-3 md:p-4 border-b border-white/10 font-medium text-sm text-gray-400">Explorer</div>
      <div className="p-2 space-y-1 text-sm">
        <div className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-gray-300">src/</div>
        <div className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-blue-400 bg-blue-500/10 ml-4">main.tsx</div>
        <div className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-gray-300 ml-4">App.tsx</div>
        <div className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-gray-300 ml-4">index.css</div>
      </div>
    </Card>
    <div className="lg:col-span-3 flex flex-col gap-4 md:gap-6">
      <Card className="flex-1 p-0 overflow-hidden flex flex-col min-h-[300px]">
        <div className="flex bg-[#1c1c1e] border-b border-white/10 overflow-x-auto">
          <div className="px-3 md:px-4 py-2 bg-[#2c2c2e] text-xs md:text-sm text-blue-400 border-t-2 border-blue-500 whitespace-nowrap">main.tsx</div>
        </div>
        <div className="flex-1 p-3 md:p-4 font-mono text-xs md:text-sm text-gray-300 overflow-auto whitespace-pre">
          <span className="text-purple-400">import</span> {'{'} StrictMode {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;{'\n'}
          <span className="text-purple-400">import</span> {'{'} createRoot {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'react-dom/client'</span>;{'\n'}
          {'\n'}
          createRoot(document.getElementById(<span className="text-green-400">'root'</span>)!).render({'\n'}
          {'  '}&lt;<span className="text-blue-400">StrictMode</span>&gt;{'\n'}
          {'    '}&lt;<span className="text-blue-400">App</span> /&gt;{'\n'}
          {'  '}&lt;/<span className="text-blue-400">StrictMode</span>&gt;{'\n'}
          );
        </div>
      </Card>
      <Card className="h-40 md:h-48 p-0 overflow-hidden flex flex-col">
        <div className="p-2 border-b border-white/10 font-medium text-xs md:text-sm text-gray-400 bg-[#1c1c1e] flex gap-4">
          <span className="text-white border-b border-white pb-1">Terminal</span>
          <span>Output</span>
        </div>
        <div className="flex-1 p-3 md:p-4 font-mono text-xs md:text-sm text-gray-400 bg-black overflow-auto whitespace-pre">
          $ npm run dev{'\n'}
          <span className="text-green-400">VITE v6.0.0</span> ready in 250 ms{'\n'}
          {'\n'}
          ➜  Local:   http://localhost:3000/{'\n'}
        </div>
      </Card>
    </div>
  </div>
);

export const ToolsPage = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {[
      { name: 'JSON Formatter', icon: Code2 },
      { name: 'Regex Tester', icon: Activity },
      { name: 'Base64 Encode', icon: FileAudio },
      { name: 'Color Picker', icon: Presentation },
      { name: 'Hash Generator', icon: Network },
      { name: 'Diff Viewer', icon: MessagesSquare },
    ].map((tool, i) => (
      <Card key={i} className="flex flex-col items-center justify-center p-4 md:p-8 hover:bg-[#3a3a3c] transition-colors cursor-pointer group">
        <tool.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-3 md:mb-4 group-hover:text-white transition-colors" />
        <h3 className="font-medium text-center text-sm md:text-base">{tool.name}</h3>
      </Card>
    ))}
  </div>
);
