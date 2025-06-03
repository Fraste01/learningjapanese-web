export type Kanji = {
  character: string;
  meaning: string;
  kunyomi?: string[];
  onyomi?: string[];
  jlpt?: number;
  accepted?: boolean;
  onAccept: () => void;
  onReject: () => void;
};

export const onAcceptKanjiCard = (kanjicard: Kanji) => {
  kanjicard.accepted = true;
}

export const onRejectKanjiCard = (kanjicard: Kanji) => {
  kanjicard.accepted = false;
}

//TODO: settings like number of kanji to learn before doing a quiz (later to be implemented and configured by the user)