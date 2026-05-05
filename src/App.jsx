import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Database, 
  Zap, 
  Layout, 
  BarChart, 
  CheckCircle2, 
  Calendar, 
  Users, 
  MessageSquare, 
  Video, 
  FileText,
  Clock,
  Play,
  Image as ImageIcon,
  X
} from 'lucide-react';
import { getTransition } from './transitions.js';
import { ParticleField, MetricCard, ScanLine } from './components.jsx';

const LookAndFeelPlayground = () => {
  const [activeColor, setActiveColor] = useState('#663fbf');
  const [hoveredToken, setHoveredToken] = useState(null);

  const colors = [
    { hex: '#323232', name: 'Primary' },
    { hex: '#663fbf', name: 'Accent' },
    { hex: '#000000', name: 'Base' },
    { hex: '#ffffff', name: 'Muted' },
    { hex: '#fbfafa', name: 'Raised' }
  ];

  const spacing = {
    1: '7px', 2: '8px', 3: '12px', 4: '16px', 5: '24px', 6: '40px', 7: '48px'
  };

  const radius = {
    xs: '8px', sm: '24px', md: '50px', lg: '160px', xl: '800px'
  };

  const motionTokens = {
    instant: 0.15, fast: 0.2, normal: 0.4
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center py-4" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
      <div className="space-y-8 w-full">
        <section>
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Interactive Palette</h3>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <motion.button
                key={color.hex}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveColor(color.hex)}
                className={`group relative flex flex-col items-center gap-3 p-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${activeColor === color.hex ? 'bg-white shadow-xl ring-1 ring-black/5' : 'hover:bg-white/40'}`}
                style={{ borderRadius: radius.sm }}
              >
                <div 
                  className="w-12 h-12 shadow-inner border border-black/5 transition-transform"
                  style={{ backgroundColor: color.hex, borderRadius: radius.xs }}
                />
                <span className="text-[10px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap">{color.name}</span>
                {activeColor === color.hex && (
                  <motion.div layoutId="active-swatch" className="absolute -bottom-1 w-1.5 h-1.5 bg-slate-800 rounded-full" />
                )}
              </motion.button>
            ))}
          </div>
        </section>

        <section className="pt-4">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Responsive Typography</h3>
          <motion.div 
            className="space-y-1 group cursor-default transition-all"
            style={{ padding: spacing[4], marginLeft: `-${spacing[4]}`, borderRadius: radius.sm }}
            onHoverStart={() => setHoveredToken('typo')}
            onHoverEnd={() => setHoveredToken(null)}
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
          >
            <motion.p 
              className="font-black tracking-tighter transition-colors"
              style={{ 
                color: hoveredToken === 'typo' ? activeColor : '#323232',
                fontSize: '48px', // Using a larger display size for 'Manrope' (now Jakarta)
                lineHeight: '1.1'
              }}
              whileHover={{ x: 10 }}
            >
              Plus Jakarta Sans
            </motion.p>
            <p className="text-sm font-medium mt-2" style={{ color: '#663fbf' }}>Hierarchy: Display, H1, Body, Label</p>
            <p className="text-xs font-medium mt-1" style={{ color: '#323232', opacity: 0.6 }}>Spacing & rounded corners scale defined.</p>
          </motion.div>
        </section>

        <section className="pt-4">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Button System</h3>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: motionTokens.instant }}
              className="font-bold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group"
              style={{ 
                backgroundColor: activeColor, 
                boxShadow: `0 10px 20px -5px ${activeColor}40`, 
                padding: `${spacing[3]} ${spacing[5]}`,
                borderRadius: radius.md,
                fontSize: '16px'
              }}
            >
              <span className="relative z-10">Primary</span>
              <motion.div className="absolute inset-0 bg-white/20 origin-left" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: motionTokens.fast }} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2, backgroundColor: '#f1f5f9' }}
              whileTap={{ scale: 0.98 }}
              className="font-bold text-slate-700 bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 relative overflow-hidden"
              style={{ padding: `${spacing[3]} ${spacing[5]}`, borderRadius: radius.md, fontSize: '16px' }}
            >
              Secondary
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2, backgroundColor: `${activeColor}10` }}
              whileTap={{ scale: 0.98 }}
              className="font-bold border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent transition-colors" 
              style={{ 
                borderColor: activeColor, 
                color: activeColor, 
                padding: `${spacing[3]} ${spacing[5]}`, 
                borderRadius: radius.md,
                fontSize: '16px'
              }}
            >
              Outline
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(0,0,0,0.02)', color: activeColor }}
              whileTap={{ scale: 0.98 }}
              className="font-bold text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
              style={{ padding: `${spacing[3]} ${spacing[5]}`, borderRadius: radius.md, fontSize: '16px' }}
            >
              Ghost
            </motion.button>
          </div>
        </section>
      </div>

      <div className="relative h-full flex items-center justify-center p-4">
        {/* Breathing backdrop glow */}
        <motion.div 
          className="absolute inset-0 blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: activeColor }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="w-full max-w-md aspect-square relative overflow-hidden flex flex-col shadow-2xl group border backdrop-blur-2xl"
          style={{ 
            backgroundColor: 'rgba(251, 250, 250, 0.6)', // Raised surface with glass
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: radius.sm,
            padding: spacing[5],
            boxShadow: 'rgba(59, 68, 89, 0.16) 0px 4px 30px 0px'
          }}
          whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ScanLine color={activeColor} />
          
          {/* Header Mockup */}
          <div className="flex justify-between items-center z-10" style={{ marginBottom: spacing[5] }}>
            <motion.div 
              className="w-14 h-14 flex items-center justify-center text-white shadow-xl cursor-pointer"
              style={{ backgroundColor: activeColor, borderRadius: radius.xs }}
              whileHover={{ rotate: 180, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              layout
            >
              <Zap size={26} />
            </motion.div>
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <motion.div 
                  key={i}
                  className="w-3 h-3 rounded-full bg-slate-200 cursor-pointer"
                  whileHover={{ scale: 1.5, backgroundColor: activeColor }}
                />
              ))}
            </div>
          </div>

          {/* Interactive Chart/Progress area */}
          <div className="space-y-6 z-10 flex-1 flex flex-col justify-center">
            <motion.div 
              className="space-y-3 bg-white/50 border border-white/50 backdrop-blur-sm shadow-sm"
              style={{ padding: spacing[4], borderRadius: radius.xs }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)" }}
            >
              <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span>System Analytics</span>
                <motion.span style={{ color: activeColor }}>98%</motion.span>
              </div>
              <motion.div 
                className="w-full h-3 rounded-full bg-slate-100 overflow-hidden relative cursor-crosshair"
                whileHover={{ height: 16 }}
              >
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 rounded-full shadow-inner"
                  style={{ backgroundColor: activeColor }}
                  animate={{ width: ["0%", "98%", "95%", "98%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
            
            {/* Draggable floating widgets */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { icon: <BarChart size={20} />, label: "Metrics" },
                 { icon: <Database size={20} />, label: "Storage" }
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   drag
                   dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                   whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
                   className="h-28 bg-white/80 backdrop-blur-md border border-white flex flex-col justify-between shadow-lg cursor-grab hover:shadow-xl relative overflow-hidden"
                   style={{ borderRadius: radius.xs, padding: spacing[3] }}
                   whileHover={{ y: -4, borderColor: activeColor + '80' }}
                 >
                   <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: activeColor }} />
                   <div className="w-10 h-10 flex items-center justify-center relative z-10" style={{ backgroundColor: activeColor + '15', color: activeColor, borderRadius: radius.xs }}>
                     {item.icon}
                   </div>
                   <div className="w-full space-y-2 relative z-10">
                     <p className="text-[10px] font-black text-slate-600 uppercase tracking-wider">{item.label}</p>
                     <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <motion.div 
                         className="h-full rounded-full" 
                         style={{ backgroundColor: activeColor }} 
                         animate={{ width: [`${40 + i * 10}%`, `${80 + i * 10}%`, `${40 + i * 10}%`] }} 
                         transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }} 
                       />
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FigmaDesignsPreview = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { title: "Student Dashboard", desc: "Personalized home for Nawaf – course overview, revision progress, and study plan", src: "/student-v3.png", type: 'image' },
    { title: "Revision Note", desc: "Structured syllabus content with interactive diagrams and key formula highlights", src: "/revision-notes-v3.png", type: 'image' },
    { title: "AI Tutor (RAG Chat)", desc: "Full chat interface with citations and source links", src: "/ai_tutor_real.png", type: 'image' },
    { title: "Course Page", desc: "Detailed syllabus breakdown, topic-wise progress tracking, and resources", src: "/course-v3.png", type: 'image' }
  ];

  return (
    <>
      <div className="flex flex-col h-full space-y-6">
        <div className="flex justify-end">
          <span className="px-4 py-1.5 bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest rounded-full border border-accent/20">
            Interactive prototypes ready
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 flex-1 items-center">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 glass-card p-3 rounded-2xl cursor-pointer hover:border-accent/40 transition-colors group relative"
              onClick={() => setSelectedItem(item)}
            >
              <div className="w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-sm relative">
                <MediaPlaceholder src={item.src} type={item.type} title={item.title} />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                   <div className="bg-white/95 text-primary px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Expand</div>
                </div>
              </div>
              <div className="w-2/3 pr-2">
                <p className="font-bold text-primary text-sm mb-1 group-hover:text-accent transition-colors">{item.title}</p>
                <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-12 bg-slate-900/60 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-6xl max-h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                 <div>
                   <h3 className="font-black text-primary text-xl tracking-tight">{selectedItem.title}</h3>
                   <p className="text-sm text-slate-500 font-medium">{selectedItem.desc}</p>
                 </div>
                 <button 
                   onClick={() => setSelectedItem(null)}
                   className="w-12 h-12 bg-white shadow-sm border border-slate-200 text-slate-500 hover:bg-rose-500 hover:text-white hover:border-rose-500 rounded-2xl flex items-center justify-center transition-all"
                 >
                   <X size={24} />
                 </button>
              </div>
              <div className="flex-1 overflow-hidden bg-slate-100/50 p-8 flex justify-center items-center">
                 {selectedItem.type === 'image' ? (
                   <img src={selectedItem.src} alt={selectedItem.title} className="max-w-full max-h-full object-contain rounded-xl shadow-lg border border-slate-200" />
                 ) : (
                   <video src={selectedItem.src} className="max-w-full max-h-full object-contain rounded-xl shadow-lg border border-slate-200" controls autoPlay loop />
                 )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MediaPlaceholder = ({ src, type = 'image', alt, title }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full h-full bg-black/5 border-2 border-dashed border-black/10 rounded-2xl flex flex-col items-center justify-center text-slate-400 p-6 text-center space-y-3">
        {type === 'video' ? <Play size={40} /> : <ImageIcon size={40} />}
        <div>
          <p className="font-bold text-sm">Missing {type}</p>
          <p className="text-[10px] uppercase tracking-wider">Add to public folder</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl group relative">
      <ScanLine />
      {type === 'image' ? (
        <img 
          src={src} 
          alt={alt || title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={() => setHasError(true)}
        />
      ) : (
        <video 
          src={src} 
          className="w-full h-full object-cover" 
          controls 
          autoPlay 
          muted 
          loop
          onError={() => setHasError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <p className="text-white text-xs font-bold uppercase tracking-widest">{title}</p>
      </div>
    </div>
  );
};

const VideoPreview = ({ src, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="w-full h-full cursor-pointer relative group overflow-hidden rounded-[2.5rem] shadow-2xl border border-white"
      >
        <MediaPlaceholder src={src} type="video" title={title} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Play size={32} className="text-accent ml-1" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-8 md:p-20 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={24} />
              </button>
              <video 
                src={src} 
                className="w-full h-full" 
                controls 
                autoPlay 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-black text-2xl uppercase tracking-tighter">{title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const COLORS = {
  primary: '#0F172A',
  accent: '#29AFB4',
  background: '#F8FAFC',
};

const SLIDES = [
  {
    id: 1,
    title: "SyllabAI – Project Progress",
    subtitle: "AI-powered Edexcel & Cambridge IGCSE/IAL Learning Platform",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-8xl font-black tracking-tighter"
        >
          <span className="text-primary">Syllab</span>
          <span className="text-accent italic">AI</span>
        </motion.div>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-slate-500 max-w-2xl font-medium"
        >
          AI-powered Edexcel & Cambridge IGCSE/IAL Learning Platform
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-12 w-full max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="px-5 py-2 bg-accent/10 text-accent font-black text-sm uppercase tracking-[0.2em] rounded-full border border-accent/20 shadow-lg shadow-accent/5">
              Team: Delulu Agents
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { name: "Nawaf Al Hussain Khondokar", id: "0112420136" },
              { name: "Iqra Hoque", id: "0112420347" },
              { name: "Sabab Sadman", id: "0112420274" },
              { name: "Mahiya Marjan Ame", id: "0112420318" }
            ].map((member, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center hover:border-accent/30 transition-colors group hover:-translate-y-1 duration-300">
                <p className="font-bold text-primary text-xs mb-2 group-hover:text-accent transition-colors">{member.name}</p>
                <p className="text-[10px] text-accent font-mono font-bold bg-accent/5 px-2 py-1 rounded-md tracking-wider border border-accent/10">{member.id}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-slate-400">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Recap: First Presentation",
    content: (
      <div className="grid grid-cols-2 gap-12 h-full items-center">
        <div className="space-y-6">
          {[
            { icon: Layout, text: "Unified LMS", desc: "Past papers, syllabus mapping" },
            { icon: Zap, text: "RAG AI Chatbot + Knowledge Graph", desc: "Core differentiators" },
            { icon: Users, text: "Dual B2C & B2B Model", desc: "Students and Schools/Teachers" },
            { icon: BarChart, text: "Feasibility & Competitor Analysis", desc: "Completed" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 glass-card rounded-2xl"
            >
              <div className="p-3 bg-accent/10 rounded-xl">
                <item.icon className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">{item.text}</h3>
                <p className="text-slate-400 text-xs uppercase tracking-widest">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-5 text-primary">
            <Database size={300} />
          </div>
          <h3 className="text-3xl font-black mb-6 text-gradient">Core Pillars</h3>
          <ul className="space-y-6 relative z-10">
            {[
              "RAG Tutor: Answers from official mark schemes",
              "Knowledge Graph: Maps topic proficiency"
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 shadow-sm shadow-accent/40" />
                <p className="text-slate-600 font-medium">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "What’s New: Expanded Feature Set",
    content: (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 h-full items-center">
        {[
          { icon: Target, title: "Recommendation System", desc: "Personalised study path based on KG and interaction history" },
          { icon: CheckCircle2, title: "Question Attempt Logger", desc: "Track every question, flag doubts, self‑confidence rating" },
          { icon: FileText, title: "Mock Exam Generator", desc: "Creates full exam‑style papers using real past questions, following exam board blueprints" },
          { icon: Video, title: "YouTube‑like Video Library", desc: "Curated educational videos, distraction‑free, with watch tracking and quiz integration" }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center space-y-4 hover:border-accent/30 transition-all group"
          >
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <feature.icon className="text-accent" size={32} />
            </div>
            <h3 className="font-bold text-xl leading-tight text-primary">{feature.title}</h3>
            <p className="text-slate-500 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "SyllabAI Look & Feel",
    content: <LookAndFeelPlayground />
  },
  {
    id: 5,
    title: "Figma Designs: Core Progress",
    content: <FigmaDesignsPreview />
  },
  {
    id: 6,
    title: "Already Working: RAG Chatbot",
    content: (
      <div className="grid grid-cols-2 gap-12 h-full items-center">
         <div className="space-y-6">
            <div className="p-10 glass-card rounded-[3rem] space-y-8 relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                  <Zap size={28} />
                </div>
                <h3 className="font-black text-2xl text-gradient">Live AI Engine</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Question answering with source citations",
                  "Step-by-step explanations",
                  "Handle LaTeX equations & handwritten photos",
                  "Integrated with the question logger"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                    <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
         </div>
         <div className="h-full py-4">
            <VideoPreview 
              title="Live RAG Demo" 
              src="/rag-demo.webm" 
            />
         </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Project Management & Sprints",
    content: (
      <div className="flex flex-col h-full space-y-4 py-2">
        <div className="overflow-hidden rounded-3xl border border-slate-200 glass-card shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-widest text-slate-400">Feature</th>
                <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-widest text-slate-400">Priority</th>
                <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-widest text-slate-400">Complexity</th>
                <th className="px-6 py-3 font-bold text-[10px] uppercase tracking-widest text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { f: "User Auth + Syllabus Graph", p: "P0", c: "High", s: "In Progress" },
                { f: "RAG Chatbot Integration", p: "P0", c: "Medium", s: "Ready" },
                { f: "Question Logger", p: "P1", c: "Medium", s: "Planned" },
                { f: "Recommendation Engine", p: "P1", c: "High", s: "Backlog" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-3 font-bold text-primary text-sm">{row.f}</td>
                  <td className="px-6 py-3"><span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-black rounded uppercase tracking-tighter border border-red-200">{row.p}</span></td>
                  <td className="px-6 py-3 text-slate-400 text-[10px] font-medium">{row.c}</td>
                  <td className="px-6 py-3"><span className={`text-[10px] font-black uppercase tracking-tighter ${row.s === 'Ready' ? 'text-accent' : 'text-slate-300'}`}>{row.s}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-4 gap-4">
           {[1,2,3,4].map(s => (
             <div key={s} className={`p-5 rounded-2xl border transition-all ${s === 1 ? 'border-accent bg-accent/5' : 'border-slate-200 bg-white shadow-sm'}`}>
                <p className="text-[10px] font-black text-slate-300 mb-1 tracking-widest uppercase">SPRINT {s}</p>
                <p className="text-sm font-bold text-primary">Weeks {s*2-1}-{s*2}</p>
             </div>
           ))}
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Next Steps & Current Status",
    content: (
      <div className="grid grid-cols-2 gap-12 h-full items-center">
        <div className="space-y-4">
           {[
             { label: "✅ Figma designs complete", sub: "For all core pages" },
             { label: "✅ Design system documented", sub: "Tokens and guidelines set" },
             { label: "✅ RAG chatbot functional", sub: "Pre-existing, expanded" },
             { label: "🔄 Backend development started", sub: "Neo4j graph, vector DB" },
             { label: "🔄 Sprint 1 in progress", sub: "User auth + syllabus parser" },
             { label: "📅 Expected MVP launch", sub: "3 months from now" }
           ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-3 glass-card rounded-2xl group"
                >
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform shadow-sm shadow-accent/40" />
                  <div>
                     <p className="font-bold text-lg text-primary">{step.label}</p>
                     <p className="text-slate-400 text-[10px] uppercase tracking-widest">{step.sub}</p>
                  </div>
                </motion.div>
            ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
           <MetricCard value={100} suffix="%" label="Figma Designs" delay={0.2} />
           <MetricCard value={1} label="Design System" suffix=" Document" delay={0.3} />
           <MetricCard value={85} suffix="%" label="AI Engine Ready" delay={0.4} />
           <MetricCard value={3} suffix=" Months" label="To MVP" delay={0.5} />
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Q&A / Thank You",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-accent text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-accent/20 rotate-3"
        >
          <MessageSquare size={48} />
        </motion.div>
        <h2 className="text-7xl font-black text-primary tracking-tighter">Thank you – Questions?</h2>
        <p className="text-2xl text-slate-500 font-medium max-w-xl">
          Thank you for your time. Let's discuss how SyllabAI is shaping the future of education.
        </p>
        <div className="pt-12 text-slate-300 space-y-1 font-mono text-sm tracking-widest uppercase">
          <p className="text-accent font-black">syllabai.edu</p>
          <p>contact@syllabai.edu</p>
        </div>
      </div>
    ),
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    if (currentSlide + newDirection >= 0 && currentSlide + newDirection < SLIDES.length) {
      setDirection(newDirection);
      setCurrentSlide(currentSlide + newDirection);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };

    let lastScrollTime = 0;
    const handleWheel = (e) => {
      const now = new Date().getTime();
      // Add a small delay between scroll events to prevent multiple slides from firing at once
      if (now - lastScrollTime < 1000) return;
      
      if (e.deltaY > 30 && currentSlide < SLIDES.length - 1) {
        paginate(1);
        lastScrollTime = now;
      } else if (e.deltaY < -30 && currentSlide > 0) {
        paginate(-1);
        lastScrollTime = now;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 bg-site-bg overflow-hidden flex flex-col select-none text-primary">
      <div className="mesh-bg" />
      <ParticleField count={30} color="203, 213, 225" />
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      {/* Header */}
      <header className="px-12 py-6 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-3 invisible">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-accent/20">S</div>
          <span className="font-black text-2xl tracking-tighter">Syllab<span className="text-accent italic">AI</span></span>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">
            Progress Phase II
          </div>
          <div className="h-6 w-px bg-slate-200" />
          <div className="text-sm font-black font-mono">
            <span className="text-accent">{String(currentSlide + 1).padStart(2, '0')}</span> 
            <span className="text-slate-200 mx-2">/</span> 
            <span className="text-slate-400">{String(SLIDES.length).padStart(2, '0')}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative px-12 pb-32">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={getTransition(currentSlide)}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col"
          >
            {currentSlide > 0 && (
              <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-black mb-6 text-gradient"
              >
                {SLIDES[currentSlide].title}
              </motion.h2>
            )}
            <div className="flex-1">
              {SLIDES[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>




    </div>
  );
}