import React, { useState } from 'react';
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
  Wrench,
  ChevronLeft,
  Search,
  CheckSquare
} from 'lucide-react';

import {
  TranslatorPage, DualTranslatePage, ClassroomPage, DubberPage,
  TranscriberPage, CloneVoicePage, TTSShowcasePage, ChatbotPage,
  AgentsPage, CSRPage, CodemaxPage, ToolsPage, TasksPage
} from './pages';

const apps = [
  { id: 'translator', name: 'Translator', icon: Languages, color: '#255b98', component: TranslatorPage },
  { id: 'dual-translate', name: 'Dual Translate', icon: MessagesSquare, color: '#237549', component: DualTranslatePage },
  { id: 'classroom', name: 'Classroom', icon: Presentation, color: '#e5a71a', component: ClassroomPage },
  { id: 'dubber', name: 'Dubber', icon: Mic, color: '#d93f36', component: DubberPage },
  { id: 'transcriber', name: 'Transcriber', icon: FileAudio, color: '#483c8a', component: TranscriberPage },
  { id: 'clone-voice', name: 'Clone Voice', icon: MicVocal, color: '#1f6e65', component: CloneVoicePage },
  { id: 'tts-showcase', name: 'TTS Showcase', icon: AudioLines, color: '#e5881a', component: TTSShowcasePage },
  { id: 'chatbot', name: 'Chatbot', icon: Bot, color: '#1f7d73', component: ChatbotPage },
  { id: 'tasks', name: 'Tasks', icon: CheckSquare, color: '#27c93f', component: TasksPage },
  { id: 'agents', name: 'Agents', icon: Network, color: '#8a288a', component: AgentsPage },
  { id: 'csr', name: 'CSR', icon: Headset, color: '#1871e8', component: CSRPage },
  { id: 'codemax', name: 'Codemax', icon: Code2, color: '#283c4f', component: CodemaxPage },
  { id: 'tools', name: 'Tools', icon: Wrench, color: '#a65928', component: ToolsPage },
];

const AppLayout = ({ title, onBack, children }: any) => (
  <div className="flex h-screen w-full flex-col bg-[#1c1c1e] text-white font-sans overflow-hidden">
    {/* Title bar */}
    <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#2c2c2e]">
      <div className="flex space-x-2 w-16">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <button onClick={onBack} className="flex items-center text-gray-400 hover:text-white transition-colors mr-4 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-lg">
        <ChevronLeft size={18} />
        <span className="text-sm font-medium ml-1">Back</span>
      </button>
      <div className="text-sm font-medium text-gray-200">{title}</div>
    </div>
    <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto w-full h-full">
        {children}
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeAppId, setActiveAppId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const activeApp = apps.find(a => a.id === activeAppId);

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeApp) {
    const ActiveComponent = activeApp.component;
    return (
      <AppLayout title={activeApp.name} onBack={() => setActiveAppId(null)}>
        <ActiveComponent />
      </AppLayout>
    );
  }

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
      <div className="flex-1 flex flex-col items-center p-4 md:p-8 overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center mt-8 md:mt-0">Welcome to Eburon</h1>
        <p className="text-gray-400 mb-8 text-base md:text-lg text-center">Please select an app to get started</p>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-md mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#2c2c2e] border border-white/10 rounded-full py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 max-w-[1200px] w-full pb-12">
          {filteredApps.map((app) => (
            <button
              key={app.name}
              onClick={() => setActiveAppId(app.id)}
              className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-3xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:brightness-110 active:scale-95 aspect-square"
              style={{ backgroundColor: app.color }}
            >
              <div className="flex-1 flex items-center justify-center">
                <app.icon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-md transition-transform duration-200 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <span className="text-xs md:text-[14px] font-medium text-white mt-2 tracking-wide text-center">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
