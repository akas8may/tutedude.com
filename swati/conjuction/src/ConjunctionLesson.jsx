import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronRight, ChevronLeft, Volume2, BookOpen, RotateCcw } from 'lucide-react';
import lessonImg from './assets/lesson.jpeg';
// --- Lesson Data extracted from the image ---
const lessonScript = [
  { 
    id: 'start', 
    type: 'cover', 
    title: "Chapter 19: And, Or", 
    subtitle: "Let's learn about joining words with our friends!",
    // lessonImg: lessonImg 
  },
  { 
    id: 'intro', 
    speaker: 'teacher', 
    char: '👩‍🏫', 
    name: 'Ms. Owl',
    text: "Hello everyone! Today we are looking at the 'Bridge' section to learn about joining words. Let's focus on the word 'And'." ,
     lessonImg: lessonImg 
  },
  { 
    id: 'sachin_1', 
    speaker: 'boy', 
    char: '👦', 
    name: 'Rohan',
    text: "Read these sentences: Sachin loves to dance. Sachin loves to sing." ,
     lessonImg: lessonImg 
  },
  { 
    id: 'sachin_2', 
    speaker: 'girl', 
    char: '👧', 
    name: 'Priya',
    text: "How can we combine these sentences? Sachin loves to dance AND sing!",
    lessonImg: lessonImg
  },
  { 
    id: 'rhea_1', 
    speaker: 'boy', 
    char: '👦', 
    name: 'Rohan',
    text: "Here is another one. Rhea plays football. Rhea plays tennis.",
    props: ['⚽', '🎾'],
    lessonImg: lessonImg
  },
  { 
    id: 'rhea_2', 
    speaker: 'girl', 
    char: '👧', 
    name: 'Priya',
    text: "Combined, it becomes: Rhea plays football AND tennis.", 
    props: ['⚽', '🎾'] ,
    lessonImg: lessonImg
  },
  { 
    id: 'rule_1', 
    speaker: 'teacher', 
    char: '👩‍🏫', 
    name: 'Ms. Owl',
    text: "Great job! 'And' is used to join two or more words. For example: I like bread AND butter.", 
    props: ['🍞', '🧈'] ,
    lessonImg: lessonImg
  },
  { 
    id: 'bharat', 
    speaker: 'boy', 
    char: '👦', 
    name: 'Rohan',
    text: "Bharat plays cricket AND football.", 
    props: ['🏏', '⚽'] ,
    lessonImg: lessonImg
  },
  { 
    id: 'rule_2', 
    speaker: 'teacher', 
    char: '👩‍🏫', 
    name: 'Ms. Owl',
    text: "'And' can also be used to join two full sentences. Let's look at an example." ,
      lessonImg: lessonImg
  },
  { 
    id: 'giraffe_1', 
    speaker: 'girl', 
    char: '👧', 
    name: 'Priya',
    text: "The giraffe has a long neck. The giraffe has four legs.", 
    props: ['🦒'] ,
    lessonImg: lessonImg
  },
  { 
    id: 'giraffe_2', 
    speaker: 'boy', 
    char: '👦', 
    name: 'Rohan',
    text: "Let's join them! The giraffe has a long neck AND four legs.", 
    props: ['🦒'] ,
    lessonImg: lessonImg
  },
  { 
    id: 'end', 
    speaker: 'teacher', 
    char: '👩‍🏫', 
    name: 'Ms. Owl',
    text: "Excellent! The highlighted word 'And' is a joining word. You did a great job today!" ,
      lessonImg: lessonImg
  }
];

const lessonImages = [
  { id: 1, x: 0, y: 0 },
  { id: 2, x: 50, y: 0 },
  { id: 3, x: 0, y: 25 },
  { id: 4, x: 50, y: 25 },
  { id: 5, x: 0, y: 50 },
  { id: 6, x: 50, y: 50 },
  { id: 7, x: 0, y: 75 },
  { id: 8, x: 50, y: 75 },
  { id: 9, x: 0, y: 100 },
  { id: 10, x: 50, y: 100 }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synthRef = useRef(window.speechSynthesis);



useEffect(() => {
  if (hasStarted && currentStep < lessonScript.length - 1) {
    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 4500); // 4.5 sec per slide

    return () => clearTimeout(timer);
  }
}, [currentStep, hasStarted]);

const ImageSlice = ({ x, y }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundImage: `url(${lessonImg})`,
        backgroundSize: "200% 500%",  // IMPORTANT
        backgroundPosition: `${x}% ${y}%`,
        backgroundRepeat: "no-repeat"
      }}
      className="rounded-xl shadow-lg"
    />
  );
};

  // Function to handle speaking the text
  const speakText = (text, speakerType) => {
    if (!synthRef.current) return;
    
    // Cancel any ongoing speech
    synthRef.current.cancel();
    
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Adjust pitch and rate to give characters different "voices"
    if (speakerType === 'boy') {
      utterance.pitch = 1.2;
      utterance.rate = 0.95;
    } else if (speakerType === 'girl') {
      utterance.pitch = 1.6;
      utterance.rate = 1.05;
    } else {
      utterance.pitch = 0.9;
      utterance.rate = 0.9;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  // Trigger speech when the step changes (if lesson has started)
  useEffect(() => {
    if (hasStarted && lessonScript[currentStep].type !== 'cover') {
      speakText(lessonScript[currentStep].text, lessonScript[currentStep].speaker);
    }
    
    // Cleanup speech on unmount
    return () => {
      if (synthRef.current) synthRef.current.cancel();
    };
  }, [currentStep, hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
    setCurrentStep(1); // Move to first lesson slide
  };

  const nextStep = () => {
    if (currentStep < lessonScript.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const replayAudio = () => {
    const current = lessonScript[currentStep];
    if (current.type !== 'cover') {
      speakText(current.text, current.speaker);
    }
  };

  // Helper to highlight the word "AND" or "and" in the text
  const formatText = (text) => {
    if (!text) return null;
    const parts = text.split(/(and)/i);
    return parts.map((part, index) => 
      part.toLowerCase() === 'and' ? 
        <strong key={index} className="text-pink-600 bg-pink-100 px-1 rounded uppercase animate-pulse inline-block">{part}</strong> : 
        part
    );
  };

  const currentSlide = lessonScript[currentStep];

  return (
    <div className="min-h-screen bg-sky-100 p-4 md:p-8 flex items-center justify-center font-sans">
      Class 1 English Grammar | Use of AND | Fun Animated Lesson
      {/* Inject custom animation for talking characters */}
      <style>{`
        @keyframes talkWobble {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .speaking-animation {
          animation: talkWobble 0.4s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-wide">English Grammar: Joining Words</h1>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
            Slide {currentStep} of {lessonScript.length - 1}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="h-[450px] md:h-[500px] flex flex-col relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-sky-50">
          
          {!hasStarted || currentSlide.type === 'cover' ? (
            // COVER SCREEN
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-sky-50 to-sky-200">
              <div className="text-8xl mb-6">📚</div>
              <h2 className="text-5xl font-extrabold text-sky-800 mb-4">{currentSlide.title}</h2>
              <p className="text-2xl text-sky-600 mb-8 font-medium">{currentSlide.subtitle}</p>
              <button 
                onClick={handleStart}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-pink-500 text-white font-bold text-2xl rounded-full hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1"
              >
                <Play className="w-8 h-8 fill-current" />
                Start Lesson!
                <div className="absolute -inset-1 rounded-full border-2 border-pink-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </button>
              <p className="mt-4 text-sm text-gray-500 flex items-center gap-1">
                <Volume2 className="w-4 h-4" /> Ensure your device volume is on
              </p>
            </div>
          ) : (
            // LESSON SCREEN
            <div className="flex-1 flex flex-col h-full">
              
              {/* Stage Area (Characters and Props) */}
              <div className="flex-1 flex items-end justify-center relative">
                {hasStarted && (
                    <ImageSlice 
                      x={lessonImages[currentStep]?.x} 
                      y={lessonImages[currentStep]?.y} 
                    />
                  )}
                {/* Decorative background elements */}
                <div className="absolute top-4 left-4 text-4xl opacity-50">☁️</div>
                <div className="absolute top-12 right-12 text-5xl opacity-50">☀️</div>

                {/* Props Display */}
                {currentSlide.props && (
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 bg-white/80 p-6 rounded-3xl shadow-lg border-2 border-dashed border-gray-300">
                    {currentSlide.props.map((prop, idx) => (
                      <div key={idx} className="text-7xl animate-bounce" style={{ animationDelay: `${idx * 0.2}s` }}>
                        {prop}
                      </div>
                    ))}
                  </div>
                )}
                {/* <ImageSlice x={lessonImages[currentStep].x} y={lessonImages[currentStep].y} />
                {currentSlide.lessonImg && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={currentSlide.lessonImg} 
                      alt="lesson"
                      className="w-full h-full object-cover opacity-30"
                    />
                  </div>
                )} */}

                {/* Character Display */}
                <div className="flex flex-col items-center z-10">
                  <div 
                    className={`text-[120px] leading-none drop-shadow-2xl transition-all duration-300
                      ${isSpeaking ? 'speaking-animation' : 'hover:-translate-y-2'}`}
                  >
                    {currentSlide.char}
                  </div>
                  <div className="bg-white/90 px-4 py-1 rounded-full text-lg font-bold text-gray-700 shadow-sm mt-2 border-2 border-gray-100">
                    {currentSlide.name}
                  </div>
                </div>

              </div>

              {/* Dialogue Box */}
              <div className="bg-white m-4 md:m-6 rounded-2xl p-6 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] border border-gray-100 relative min-h-[140px] flex items-center justify-center">
                {/* Speech Bubble Tail */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 border-l border-t border-gray-100"></div>
                
                <div className="text-2xl md:text-3xl text-center text-gray-800 font-medium leading-relaxed">
                  {formatText(currentSlide.text)}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Controls / Footer */}
        {hasStarted && (
          <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center justify-between">
            <button 
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all
                ${currentStep === 1 
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
                  : 'text-sky-700 bg-sky-100 hover:bg-sky-200 active:scale-95'}`}
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </button>

            <button 
              onClick={replayAudio}
              className="flex items-center justify-center p-3 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 hover:rotate-180 transition-all duration-500 active:scale-95"
              title="Replay Audio"
            >
              <RotateCcw className="w-6 h-6" />
            </button>

            <button 
              onClick={nextStep}
              disabled={currentStep === lessonScript.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all
                ${currentStep === lessonScript.length - 1 
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
                  : 'text-white bg-green-500 hover:bg-green-600 shadow-md shadow-green-200 active:scale-95'}`}
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}