import React, { useState, useEffect } from 'react';
import { Card, Input, TextArea, Button, Modal } from './components/ui';
import { Play, Mic, Upload, Settings, Send, Plus, Video, MessageSquare, Activity, FileAudio, Presentation, Network, MessagesSquare, Code2, Bot, MicVocal, CheckSquare, Trash2, Bell, Users, Cpu, Brain, Server, Search, Pause, StopCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

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

export const TTSShowcasePage = () => {
  const voices = [
    { name: 'Nova (Female)', id: 'nova', preview: 'https://example.com/nova.mp3' },
    { name: 'Echo (Male)', id: 'echo', preview: 'https://example.com/echo.mp3' },
    { name: 'Alloy (Neutral)', id: 'alloy', preview: 'https://example.com/alloy.mp3' },
    { name: 'Fable (Male)', id: 'fable', preview: 'https://example.com/fable.mp3' },
    { name: 'Onyx (Male)', id: 'onyx', preview: 'https://example.com/onyx.mp3' },
    { name: 'Shimmer (Female)', id: 'shimmer', preview: 'https://example.com/shimmer.mp3' },
  ];

  const [selectedVoice, setSelectedVoice] = useState(voices[0].id);

  const playPreview = (url: string) => {
    const audio = new Audio(url);
    audio.play().catch(e => console.error("Preview playback failed:", e));
  };

  return (
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
          <div className="flex gap-2">
            <select 
              className="bg-[#1c1c1e] border border-white/10 rounded-lg px-3 py-2 text-sm md:text-base text-white w-full"
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
            >
              {voices.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
            </select>
            <Button 
              variant="secondary" 
              className="!p-2" 
              onClick={() => playPreview(voices.find(v => v.id === selectedVoice)?.preview || '')}
            >
              <Play size={18} />
            </Button>
          </div>
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
};

export const ChatbotPage = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Hello! I'm your AI assistant. How can I help you today?"}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, {role: 'user', text: userMessage}]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
      });
      setMessages(prev => [...prev, {role: 'bot', text: response.text || "No response."}]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {role: 'bot', text: "Sorry, I encountered an error."}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-full min-h-[500px] flex flex-col w-full">
      <Card className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 md:space-y-6 p-2 md:p-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 md:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'bot' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                {msg.role === 'bot' ? <Bot size={16} /> : 'U'}
              </div>
              <div className={`p-3 md:p-4 rounded-2xl text-sm md:text-base ${msg.role === 'bot' ? 'bg-[#1c1c1e] rounded-tl-sm text-gray-200' : 'bg-blue-600 rounded-tr-sm text-white'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && <div className="text-gray-500 text-sm p-4">Assistant is thinking...</div>}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
          <Input 
            placeholder="Message Chatbot..." 
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
            onKeyPress={(e: any) => e.key === 'Enter' && sendMessage()}
          />
          <Button onClick={sendMessage} disabled={isLoading}><Send size={18} /></Button>
        </div>
      </Card>
    </div>
  );
};

export const TasksPage = () => {
  const [tasks, setTasks] = useState<{id: number, text: string, completed: boolean, dueDate?: string}[]>([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toISOString();
      tasks.forEach(task => {
        if (task.dueDate && task.dueDate <= now && !task.completed) {
          new Notification('Task Reminder', { body: `Task "${task.text}" is due!` });
          // Prevent multiple notifications for the same task
          setTasks(prev => prev.map(t => t.id === task.id ? {...t, dueDate: undefined} : t));
        }
      });
    }, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) {
      alert('Please enter a task description.');
      return;
    }
    setTasks([...tasks, {id: Date.now(), text: input.trim(), completed: false, dueDate: dueDate || undefined}]);
    setInput('');
    setDueDate('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto h-full flex flex-col w-full">
      <Card className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <div className="flex gap-2 mb-6">
          <Input placeholder="Add a new task..." value={input} onChange={(e: any) => setInput(e.target.value)} onKeyPress={(e: any) => e.key === 'Enter' && addTask()} />
          <Input type="datetime-local" value={dueDate} onChange={(e: any) => setDueDate(e.target.value)} className="w-40" />
          <Button onClick={addTask}><Plus size={18} /></Button>
        </div>
        <div className="space-y-2 flex-1 overflow-y-auto">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-3 p-3 bg-[#1c1c1e] rounded-lg border border-white/5">
              <button onClick={() => toggleTask(task.id)} className={`w-6 h-6 rounded border flex items-center justify-center ${task.completed ? 'bg-green-600 border-green-600' : 'border-gray-500'}`}>
                {task.completed && <CheckSquare size={16} />}
              </button>
              <div className="flex-1">
                <span className={`block ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>{task.text}</span>
                {task.dueDate && <span className="text-xs text-blue-400 flex items-center gap-1"><Bell size={10} /> {new Date(task.dueDate).toLocaleString()}</span>}
              </div>
              <button onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-300"><Trash2 size={18} /></button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export const AgentsPage = () => {
  const [logs, setLogs] = useState<Record<string, string[]>>({});
  const [activeLogAgent, setActiveLogAgent] = useState<string | null>(null);
  const [eventSources, setEventSources] = useState<Record<string, EventSource>>({});

  const toggleLogs = (agentId: string) => {
    if (activeLogAgent === agentId) {
      setActiveLogAgent(null);
      if (eventSources[agentId]) {
        eventSources[agentId].close();
        setEventSources(prev => {
          const next = { ...prev };
          delete next[agentId];
          return next;
        });
      }
    } else {
      setActiveLogAgent(agentId);
      if (!eventSources[agentId]) {
        const eventSource = new EventSource(`/api/agents/${agentId}/logs`);
        eventSource.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setLogs(prev => ({
            ...prev,
            [agentId]: [...(prev[agentId] || []), data.message]
          }));
        };
        setEventSources(prev => ({ ...prev, [agentId]: eventSource }));
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(eventSources).forEach(es => es.close());
    };
  }, [eventSources]);

  return (
    <div className="flex flex-col gap-4 md:gap-6 h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-semibold">Active Agents</h2>
        <Button className="text-sm md:text-base"><Plus size={18} /> <span className="hidden sm:inline">Create Agent</span></Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {['Research Agent', 'Coding Assistant', 'Data Analyst'].map((name, i) => {
          const agentId = name.toLowerCase().replace(' ', '-');
          return (
            <Card key={i} className="flex flex-col group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center"><Bot size={20} /></div>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active</span>
              </div>
              <h3 className="font-medium text-lg mb-1">{name}</h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">Autonomous agent configured for specific tasks and workflows.</p>
              
              {activeLogAgent === agentId ? (
                <div className="mb-4 bg-black p-2 rounded text-xs font-mono h-32 overflow-y-auto">
                  {(logs[agentId] || []).map((log, idx) => <div key={idx}>{log}</div>)}
                </div>
              ) : null}

              <div className="relative h-9">
                <div className="absolute inset-0 flex gap-2 opacity-100 group-hover:opacity-0 transition-opacity">
                  <Button variant="secondary" className="flex-1 text-xs md:text-sm py-1.5">Configure</Button>
                  <Button variant="secondary" className="flex-1 text-xs md:text-sm py-1.5" onClick={() => toggleLogs(agentId)}>Logs</Button>
                </div>
                <div className="absolute inset-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" className="flex-1 text-xs md:text-sm py-1.5"><Pause size={14} className="mr-1" /> Pause</Button>
                  <Button variant="secondary" className="flex-1 text-xs md:text-sm py-1.5 text-red-400 hover:text-red-300"><StopCircle size={14} className="mr-1" /> Stop</Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export const MMMPage = () => {
  const ideas = [
    "Vertical AI customer support agent",
    "AI voice receptionist / appointment setter",
    "AI lead capture and qualification bot",
    "AI outbound personalization + follow-up engine",
    "Internal team copilot for Slack / CRM / tickets / docs",
    "Meeting summary + CRM update + action-item agent",
    "Content operations agency-in-a-box",
    "Programmatic SEO page factory",
    "Local SEO + review-response autopilot",
    "Ecommerce shopping assistant + post-purchase support bot",
    "Knowledge-base-to-chatbot SaaS",
    "Single-workflow subscription micro-SaaS",
    "Paid niche newsletter",
    "Newsletter-as-a-service for founders and brands",
    "Digital product store: templates, prompts, SOPs, toolkits, mini-courses",
    "Creator repurposing engine",
    "Self-service calculators, quote tools, and audit bots",
    "Churn recovery / reactivation automation",
    "Agent setup + maintenance retainers for SMBs",
    "Hybrid agency + SaaS wedge"
  ];

  return (
    <div className="max-w-4xl mx-auto h-full w-full">
      <Card className="h-full flex flex-col">
        <h2 className="text-2xl font-semibold mb-6">Money Making Machine (MMM) Ideas</h2>
        <div className="flex-1 overflow-y-auto space-y-3">
          {ideas.map((idea, i) => (
            <div key={i} className="p-4 bg-[#1c1c1e] rounded-xl border border-white/5 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </div>
              <p className="text-gray-200">{idea}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

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

export const CodemaxPage = () => {
  const [html, setHtml] = useState(localStorage.getItem('codemax_html') || '<h1>Hello World</h1>');
  const [css, setCss] = useState(localStorage.getItem('codemax_css') || 'h1 { color: blue; }');
  
  // Debounced state for preview
  const [debouncedHtml, setDebouncedHtml] = useState(html);
  const [debouncedCss, setDebouncedCss] = useState(css);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedHtml(html);
      setDebouncedCss(css);
      localStorage.setItem('codemax_html', html);
      localStorage.setItem('codemax_css', css);
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [html, css]);

  const previewContent = `
    <html>
      <head>
        <style>${debouncedCss}</style>
      </head>
      <body>${debouncedHtml}</body>
    </html>
  `;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 h-full min-h-[600px]">
      <Card className="hidden lg:flex lg:col-span-1 flex-col p-0 overflow-hidden">
        <div className="p-3 md:p-4 border-b border-white/10 font-medium text-sm text-gray-400">Explorer</div>
        <div className="p-2 space-y-1 text-sm">
          <div className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-gray-300">src/</div>
          <div className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-blue-400 bg-blue-500/10 ml-4">index.html</div>
          <div className="px-2 py-1 hover:bg-white/5 rounded cursor-pointer text-gray-300 ml-4">style.css</div>
        </div>
      </Card>
      <div className="lg:col-span-3 flex flex-col gap-4 md:gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          <Card className="p-0 overflow-hidden flex flex-col">
            <div className="p-2 border-b border-white/10 font-medium text-xs text-gray-400 bg-[#1c1c1e]">index.html</div>
            <textarea
              className="flex-1 p-3 font-mono text-xs text-gray-300 bg-transparent border-none outline-none resize-none"
              value={html}
              onChange={(e) => setHtml(e.target.value)}
            />
          </Card>
          <Card className="p-0 overflow-hidden flex flex-col">
            <div className="p-2 border-b border-white/10 font-medium text-xs text-gray-400 bg-[#1c1c1e]">style.css</div>
            <textarea
              className="flex-1 p-3 font-mono text-xs text-gray-300 bg-transparent border-none outline-none resize-none"
              value={css}
              onChange={(e) => setCss(e.target.value)}
            />
          </Card>
        </div>
        <Card className="h-64 p-0 overflow-hidden flex flex-col">
          <div className="p-2 border-b border-white/10 font-medium text-xs text-gray-400 bg-[#1c1c1e]">Preview</div>
          <iframe
            className="flex-1 w-full h-full bg-white"
            srcDoc={previewContent}
            title="preview"
          />
        </Card>
      </div>
    </div>
  );
};

export const ToolsPage = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [keys, setKeys] = useState({ zapier: '', make: '', rapidapi: '' });
  const [toolSearchQuery, setToolSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/keys').then(res => res.json()).then(setKeys);
  }, []);

  const saveKeys = async () => {
    await fetch('/api/keys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(keys)
    });
    alert('Keys saved!');
  };

  const tools = [
    { name: 'JSON Formatter', icon: Code2 },
    { name: 'Regex Tester', icon: Activity },
    { name: 'Base64 Encode', icon: FileAudio },
    { name: 'Color Picker', icon: Presentation },
    { name: 'Hash Generator', icon: Network },
    { name: 'Diff Viewer', icon: MessagesSquare },
    { name: 'Social Connect', icon: Users },
    { name: 'MCP', icon: Cpu },
    { name: 'LLM Models', icon: Brain },
    { name: 'Services', icon: Server },
  ];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(toolSearchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <Input 
          placeholder="Search tools..." 
          value={toolSearchQuery} 
          onChange={(e: any) => setToolSearchQuery(e.target.value)} 
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredTools.map((tool, i) => (
          <Card 
            key={i} 
            className={`flex flex-col items-center justify-center p-4 md:p-8 hover:bg-[#3a3a3c] transition-colors group relative cursor-pointer ${selectedTool === tool.name ? 'ring-2 ring-white bg-[#3a3a3c]' : ''}`}
            onClick={() => setSelectedTool(tool.name)}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedTool(tool.name); }}
              className="absolute top-2 right-2 p-2 rounded-full hover:bg-white/10"
            >
              <Settings size={16} className="text-gray-400 hover:text-white" />
            </button>
            <tool.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-3 md:mb-4 group-hover:text-white transition-colors" />
            <h3 className="font-medium text-center text-sm md:text-base">{tool.name}</h3>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="font-medium text-lg mb-4">API Keys Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input placeholder="Zapier API Key" value={keys.zapier} onChange={(e: any) => setKeys({...keys, zapier: e.target.value})} />
          <Input placeholder="Make API Key" value={keys.make} onChange={(e: any) => setKeys({...keys, make: e.target.value})} />
          <Input placeholder="RapidAPI Key" value={keys.rapidapi} onChange={(e: any) => setKeys({...keys, rapidapi: e.target.value})} />
        </div>
        <Button onClick={saveKeys}>Save API Keys</Button>
      </Card>

      <Modal 
        isOpen={!!selectedTool} 
        onClose={() => setSelectedTool(null)} 
        title={`${selectedTool} Settings`}
      >
        <p className="text-gray-400 mb-4">Configure settings for {selectedTool} here.</p>
        <Button className="w-full">Save Changes</Button>
      </Modal>
    </div>
  );
};
