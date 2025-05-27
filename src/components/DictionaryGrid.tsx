import { useState } from "react";
import { initialDictionary } from "../data/examples";
import type { DictionaryProps } from "../types/Dictionary";

export const DictionaryGrid = () => {
    const [dictionary] = useState([...initialDictionary]);
    const [dictionaryFiltered, setDictionaryFiltered] = useState<DictionaryProps[]>();
    const [selectedDictionary, setSelectedDictionary] = useState<DictionaryProps>();

    const getDistinctTypes = () => {
        return [...new Map(dictionary.map(item => [item["type"], item])).values()];
    }
    const setSelectedType = (type: string) => {
        setDictionaryFiltered(dictionary.filter((dictionary) => dictionary.type === type));
    }

    const setWordSelected = (selected: DictionaryProps) => {
      if (!selected) return;
      setSelectedDictionary(selected);
    }

    return <div className="grid grid-flow-col grid-rows-1 gap-4">
             <div className="w-1/4" >
                <h1>Type</h1>
                {dictionary.length > 0 &&
                (
                    <div className="grid grid-flow-row grid-rows-1 gap-4 width-full">
                        {getDistinctTypes().map((type) => (
                          <div key={type.type} className="grid-rows-1 gap-4 width-full p-4 hover:bg-gray-800 cursor-pointer " onClick={() => setSelectedType(type.type)}>
                            {type.type} <button className="float-right">→</button>
                          </div>  
                        ))}
                    </div>
                )}
             </div>
             <div className="w-1/4">
                <h1>Words</h1>
                {!dictionaryFiltered && dictionaryFiltered == undefined && (
                    <p>Select a type</p>
                ) || dictionaryFiltered!.length > 0 &&
                (
                    <div className="grid grid-flow-row grid-rows-1 gap-4 width-full">
                        {dictionaryFiltered!.map((dictionaryElement) => (
                          <div key={dictionaryElement.id} className="grid-rows-1 gap-4 width-full p-4 hover:bg-gray-800 cursor-pointer " onClick={() => setWordSelected(dictionaryElement)}>
                            {dictionaryElement.name} <button className="float-right">→</button>
                          </div>  
                        ))}
                    </div>
                )}
             </div>
             <div className="w-3/4">
                {!selectedDictionary && (
                    <p>Select a word</p>
                ) || (selectedDictionary != null && selectedDictionary != undefined &&(
                    <div key={selectedDictionary.id} className="grid grid-flow-row grid-rows-1 gap-4 width-full">
                        <h1>Word: {selectedDictionary.name}</h1>
                        Meaning: {selectedDictionary.meaning}
                        <br/>
                        { selectedDictionary.kanji && (<div>Kanji: { selectedDictionary.kanji } </div>) }
                        { selectedDictionary.hiragana && (<div>Hiragana: { selectedDictionary.hiragana } </div>)}
                        { selectedDictionary.katakana && (<div>Katakana: { selectedDictionary.katakana } </div>)}
                        <br/>
                        Example in a sentence (ENG): {selectedDictionary.example}<br/>
                        Example in a sentence (JP): {selectedDictionary.exampleJp}
                    </div>
                ))}
             </div>
           </div>
}