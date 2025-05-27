export type DictionaryProps = {
    id: number;
    type: string;
    name: string; //In romanji
    meaning: string;
    example?: string; //An example of use in a phrase in english/language selected
    exampleJp?: string; //TODO: Example in japanese with kanji + furigana (search how to do furigana using kanji + hiragana on top of it)
    kanji?: string;
    hiragana?: string;
    katakana?: string;
    accepted?: boolean;
    onAccept: () => void;
    onReject: () => void;
};

export const onAcceptDictionary = (dictionary: DictionaryProps) => {
  dictionary.accepted = true;
}

export const onRejectDictionary = (dictionary: DictionaryProps) => {
  dictionary.accepted = false;
}

//TODO: settings like number of dictionary to learn before doing a quiz (later to be implemented and configured by the user)