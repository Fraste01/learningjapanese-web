/* eslint-disable @typescript-eslint/no-explicit-any */
import { onAcceptDictionary, onRejectDictionary, type DictionaryProps } from "../types/Dictionary";
import { onAcceptGrammar, onRejectGrammar, type GrammarProps } from "../types/Grammar";
import { onAcceptKanjiCard, onRejectKanjiCard, type Kanji } from "../types/Kanji";

export const fetchKanjiDeck = async (): Promise<Kanji[]> => {
    const response = await fetch('http://localhost:5000/api/kanji');
    
    const responseJson: any = await response.json();
    const data: Kanji[] = responseJson.data;

    return data.map(kanji => ({
        character: kanji.character,
        meaning: kanji.meaning,
        kunyomi: kanji.kunyomi,
        onyomi: kanji.onyomi,
        jlpt: kanji.jlpt,
        accepted: false,
        onAccept: () => onAcceptKanjiCard,
        onReject: () => onRejectKanjiCard
    }));
};

export const fetchGrammar = async (): Promise<GrammarProps[]> => {
    const response = await fetch('http://localhost:5000/api/grammar');
    
    const responseJson: any = await response.json();
    const data: GrammarProps[] = responseJson.data;

    return data.map(grammar => ({
        type: grammar.type,
        name: grammar.name,
        description: grammar.description,
        accepted: grammar.accepted ? grammar.accepted : false,
        onAccept: () => onAcceptGrammar,
        onReject: () => onRejectGrammar
    }));
}

export const fetchDictionary = async (): Promise<DictionaryProps[]> => {
    const response = await fetch('http://localhost:5000/api/dictionary');
    
    const responseJson: any = await response.json();
    const data: DictionaryProps[] = responseJson.data;

    return data.map(grammar => ({
        type: grammar.type,
        name: grammar.name, //In romanji
        meaning: grammar.meaning,
        example: grammar.example, //An example of use in a phrase in english/language selected
        exampleJp: grammar.exampleJp, //TODO: grammar. in japanese with kanji + furigana (search how to do furigana using kanji + hiragana on top of it)
        kanji: grammar.kanji,
        hiragana: grammar.hiragana,
        katakana: grammar.katakana, 
        accepted: grammar.accepted,
        onAccept: () => onAcceptDictionary,
        onReject: () => onRejectDictionary
    }));
}
//TODO: add other api endpoints for grammar and dictionary and then implement the env variables