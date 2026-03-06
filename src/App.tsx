import React from 'react';
import {
  Languages,
  MessagesSquare,
  Presentation,
  Mic,
  FileAudio,
  MicVocal,
  AudioLines,
  Bot,
  Network,
  Headset,
  Code2,
  Wrench
} from 'lucide-react';

const apps = [
  { name: 'Translator', icon: Languages, color: '#255b98' },
  { name: 'Dual Translate', icon: MessagesSquare, color: '#237549' },
  { name: 'Classroom', icon: Presentation, color: '#e5a71a' },
  { name: 'Dubber', icon: Mic, color: '#d93f36' },
  { name: 'Transcriber', icon: FileAudio, color: '#483c8a' },
  { name: 'Clone Voice', icon: MicVocal, color: '#1f6e65' },
  { name: 'TTS Showcase', icon: AudioLines, color: '#e5881a' },
  { name: 'Chatbot', icon: Bot, color: '#1f7d73' },
  { name: 'Agents', icon: Network, color: '#8a288a' },
  { name: 'CSR', icon: Headset, color: '#1871e8' },
  { name: 'Codemax', icon: Code2, color: '#283c4f' },
  { name: 'Tools', icon: Wrench, color: '#a65928' },
];

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-[#1c1c1e] text-white font-sans overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center px-4 py-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="ml-4 text-sm font-medium text-gray-400">Eburon</div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Welcome to Eburon</h1>
        <p className="text-gray-400 mb-12 text-lg">Please select an app to get started</p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1200px] w-full">
          {apps.map((app) => (
            <button
              key={app.name}
              className="group flex flex-col items-center justify-center p-6 rounded-3xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:brightness-110 active:scale-95 aspect-square"
              style={{ backgroundColor: app.color }}
            >
              <div className="flex-1 flex items-center justify-center">
                <app.icon size={52} className="text-white drop-shadow-md transition-transform duration-200 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <span className="text-[14px] font-medium text-white mt-2 tracking-wide">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
