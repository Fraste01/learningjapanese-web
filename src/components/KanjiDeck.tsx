import { useState, useRef, useEffect } from 'react';
import { KanjiCard } from './KanjiCard';
import { initialKanjiDeck } from '../data/examples';
import { onAcceptKanjiCard } from '../types/Kanji';

export const KanjiDeck = () => {
  const [deck, setDeck] = useState([...initialKanjiDeck]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [acceptedCards, setAcceptedCards] = useState<any[]>([]);
  const [isDealing, setIsDealing] = useState(false);
  const acceptedPileRef = useRef<HTMLDivElement>(null);

  const handleAccept = (index: number) => {
    const acceptedCard = deck[index];
    setIsDealing(true);
    
    // Add animation class to card
    document.getElementById('current-card')?.classList.add('accepting');

    setTimeout(() => {
        setAcceptedCards([...acceptedCards, acceptedCard]);
        setDeck(deck.filter((_, i) => i !== index));
        setIsDealing(false);
        document.getElementById('current-card')?.classList.remove('accepting');
    }, 600);

    onAcceptKanjiCard(acceptedCard);
  };

  const handleReject = (index: number) => {
    const rejectedCard = deck[index];
    setDeck([...deck.filter((_, i) => i !== index), rejectedCard]);
  };

  useEffect(() => {
    if (acceptedPileRef.current) {
      acceptedPileRef.current.scrollTop = acceptedPileRef.current.scrollHeight;
    }
  }, [acceptedCards]);

  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Title centered */}
      <h2 className="text-3xl font-bold mb-8 text-center w-full">Kanji Flashcards</h2>

      {/* Main deck area - now with accepted pile on left */}
      <div className="flex flex-row items-start gap-8 w-full max-w-5xl">
        {/* Accepted Cards Pile - LEFT SIDE */}
        <div className="flex-1 flex flex-col items-center pl-8">
          <h3 className="text-lg font-semibold mb-2" style={{paddingBottom: `15px`}}>Accepted ({acceptedCards.length})</h3>
          <div 
            ref={acceptedPileRef}
            className={`relative rounded-lg p-6 w-full min-h-[400px] flex items-end justify-center ${
              isDealing ? 'bg-opacity-20 bg-gray-100' : ''
            }`}
            style={{
              border: '2px dashed #C7C000',
              transition: 'background-color 0.3s ease',
              height: '240px',
              width: '200px'
            }}
          >
            {/* Visual container for the pile */}
            <div className="relative w-full h-full flex items-end justify-center">
              {/* Show the last 3 accepted cards in a stack */}
              {acceptedCards.slice(-3).map((card, i) => {
                const zIndex = acceptedCards.length - i;
                const offset = i * 4;
                return (
                  <div 
                    key={`accepted-${zIndex}`}
                    className="absolute"
                    style={{
                      zIndex,
                      bottom: `${offset}px`,
                      left: '50%',
                      transform: `translateX(-50%) rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                    }}
                  >
                    <div 
                      className="h-48 w-36 rounded-lg flex flex-col items-center justify-center p-2"
                      style={{
                        backgroundColor: '#fff8ce',
                        color: '#242424',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        opacity: 1 - (i * 0.2)
                      }}
                    >
                      <div className="text-6xl mb-2">{card.kanji.character}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Deck - RIGHT SIDE */}
        <div className="flex-1 flex flex-col items-center pr-8">
          <h3 className="text-lg font-semibold mb-2" style={{paddingBottom: `15px`}}>Study Deck ({deck.length})</h3>
          {/* Deck Container */}
          { deck.length == 0 ?
            (<div className="relative rounded-lg" 
            style={{border: '2px dashed #C7C000',}}>
                <div className="h-64 w-48 flex items-center justify-center rounded-lg">
                Deck empty!
              </div>
            </div>) : (
              /* Deck Visualization */
              <div className="relative">
              <div className="absolute -top-4 -left-4">
                {deck.slice(1).map((_, i) => (
                  <div 
                    key={`deck-${i}`}
                    className="absolute h-64 w-48 rounded-lg"
                    style={{ backgroundColor: '#fff8ce', top: `${i * 2}px`, left: `${i * 2}px`, zIndex: -i - 1, opacity: 0.7 - (i * 0.1), transform: `rotate(${i * 1}deg)`, transition: 'all 0.3s ease'
                    }}
                  />
                ))}
                {/* Active Card */}
                <KanjiCard 
                    id="current-card"
                    kanji={deck[0].kanji} 
                    onAccept={() => handleAccept(0)}
                    onReject={() => handleReject(0)}
                />
              </div>
              </div>
            )
          }
          </div>
        </div>
      </div>
  );
};