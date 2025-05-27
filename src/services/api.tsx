import { onAcceptKanjiCard, onRejectKanjiCard, type Kanji,type KanjiCardProps } from "../types/Kanji";

export const fetchKanjiDeck = async (): Promise<KanjiCardProps[]> => {
    //TODO: Activate when the API is being made
    const response = await fetch('/api/kanji');
    const data: Kanji[] = await response.json();
    
    return data.map(kanji => ({
        id: kanji.character,
        kanji,
        accepted: false,
        onAccept: () => onAcceptKanjiCard,
        onReject: () => onRejectKanjiCard
    }));
};