import { type DictionaryProps } from "../types/Dictionary";
import type { GrammarProps } from "../types/Grammar";
import { type Kanji, type KanjiCardProps } from "../types/Kanji";

//Examples of grammars (used to grammar page)
export const initialGrammar: GrammarProps[] = [
  {id: 1, type: "verb", name: "ます form", description: "The conjugation of verbs using the ます form", onAccept: () => {}, onReject: () => {}},
  {id: 2, type: "verb", name: "て form", description: "The conjugation of verbs using the て form", onAccept: () => {}, onReject: () => {}},
  {id: 3, type: "verb", name: "る form", description: "The conjugation of verbs using the る form", onAccept: () => {}, onReject: () => {}},
  {id: 4, type: "verb", name: "れる form", description: "The conjugation of verbs using the れる form", onAccept: () => {}, onReject: () => {}},
  {id: 5, type: "adjective", name: "形容詞", description: "How to use adjectives", onAccept: () => {}, onReject: () => {}},
  {id: 6, type: "adverb", name: "副詞", description: "How to use adverbs", onAccept: () => {}, onReject: () => {}},
];

//Examples of kanji (used to kanji cards page)
export const initialKanji: Kanji[] = [
  { character: '日', meaning: 'sun, day', kunyomi: ['ひ', '-び'], onyomi: ['ニチ', 'ジツ'] },
  { character: '月', meaning: 'moon, month', kunyomi: ['つき'], onyomi: ['ゲツ', 'ガツ'] },
  { character: '水', meaning: 'water', kunyomi: ['みず'], onyomi: ['スイ'] },
  { character: '火', meaning: 'fire', kunyomi: ['ひ'], onyomi: ['カ'] },
  { character: '木', meaning: 'tree', kunyomi: ['き'], onyomi: ['モク'] },
];

export const createTestDeck = (): KanjiCardProps[] => {
  return initialKanji.map((kanji, index) => ({
    id: `test-${index}`,
    kanji,
    accepted: false,
    onAccept: () => {},
    onReject: () => {}
  }));
};

export const initialKanjiDeck: KanjiCardProps[] = createTestDeck();

//Examples of dictionary (used to dictionary page)
export const initialDictionary: DictionaryProps[] = [
  {id: 1, type: "verb", name: "au", meaning: "to meet", example: "I met my friend", kanji: "会う", hiragana: "あう", accepted: false, onAccept: () => {}, onReject: () => {}},
  {id: 2, type: "verb", name: "asobu", meaning: "to play", example: "I play soccer", kanji: "遊ぶ", hiragana: "あそぶ", accepted: false, onAccept: () => {}, onReject: () => {}},
  {id: 3, type: "adjective", name: "tanoshii", meaning: "happy", example: "I am happy", kanji: "楽しい", hiragana: "たのしい", accepted: false, onAccept: () => {}, onReject: () => {}},
  {id: 4, type: "adjective", name: "oishii", meaning: "good like food", example: "This ramen is good", kanji: "美味しい", hiragana: "おいしい", accepted: false, onAccept: () => {}, onReject: () => {}},
]
