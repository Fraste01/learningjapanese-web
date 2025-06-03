import { useState } from 'react';
import { type Kanji } from '../types/Kanji';


export const KanjiCard = ({character, meaning, kunyomi, onyomi, onAccept, onReject }: Kanji  ) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative h-64 w-48 cursor-pointer transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Flashcard */}
      <div 
        className={`absolute h-full w-full rounded-lg shadow-lg transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleCardClick}
        style={{
          backgroundColor: '#fff8ce',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          color: '#242424'
        }}
      >
        {/* Front Side */}
        <div className={`absolute h-full w-full p-4 flex flex-col items-center justify-center 
                        ${ isFlipped ? 'hidden' : '' }`}
              style={{ backgroundColor: '#fff8ce', backfaceVisibility: 'hidden' }}>
          <div className="text-8xl mb-4 ">{character}</div>
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
            <button className="w-8 h-8 bg-green-500 texcharacter"
                onClick={(e) => {
                e.stopPropagation();
                onAccept();
                }}
            >✓</button>
            <button 
                className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                onClick={(e) => {
                e.stopPropagation();
                onReject();
                }}
            >✕</button>
            </div>
        </div>

        {/* Back Side */}
        <div className={`absolute h-full w-full p-4 flex flex-col items-center justify-center 
                        ${ isFlipped ? '' : 'hidden' }`}
             style={{ backgroundColor: '#fff8ce', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <div className="text-2xl font-bold mb-2">{meaning}</div>
          {kunyomi && (
            <div className="mb-2">
              <span className="font-semibold">Kun:</span> {kunyomi.join(', ')}
            </div>
          )}
          {onyomi && (
            <div>
              <span className="font-semibold">On:</span> {onyomi.join(', ')}
            </div>
          )}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
          <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-green-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onAccept();
            }}
          >✓</button>
          <button 
            className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onReject();
            }}
          >✕</button>
        </div>
        </div>
      </div>
    </div>
  );
};