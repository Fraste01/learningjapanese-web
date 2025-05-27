import { useState } from "react";
import type { GrammarProps } from "../types/Grammar";
import { initialGrammar } from "../data/examples";

export const GrammarGrid = () => {
  const [grammar,setGrammarSelected] = useState<GrammarProps>();
  const [types, setTypeSelected] = useState<GrammarProps[]>();
  const [grammars] = useState([...initialGrammar]);
  //TODO: Use setGrammars when I have the API for the call to get the data.

  const setSelectionGrammar = (selected: string) => {
    if (!selected) return;
    const filtered = grammars.filter((grammar) => grammar.type === selected);
    if (filtered.length > 0) {
      setTypeSelected(filtered);
    }
    setGrammarSelected(undefined);
  }

  const setSelectionType = (grammarSelected: GrammarProps) => {
    if (!types) return;
    const filtered = grammars.filter((grammar) => grammar.id === grammarSelected
.id);
    if (filtered.length > 0) {
      setGrammarSelected(filtered[0]);
    }
  }

  const getDistinctGrammars = () => {
    return [...new Map(grammars.map(item => [item["type"], item])).values()];
  }


  //TODO: Move to the class
  const onAccept = () => {
    //TODO: do something
  }

  const onReject = () => {
    //TODO: do something
  }

  //return <div>Grammar Content Here</div>;
  //The application will have a schema of multicolumns: 1st column: will be the type of grammar like "conjugation of verbs", 
  //second columns after selecting the argoment will be the various type of conjugations like "て form" and in the last column after the selected conjugation will be the explanation and examples
  //the user can also "accept" or "disable" and it will be registered for the quiz to be built and shown.
  //TODO: Add also a filter on top of the grid so the user can select various type of grammars based on level (N5, N4, N3, N2, N1) and other factors.
  //TODO: Add a search bar to filter the grammar and types or other things like て form, ます form etc.

  return <div className="grid grid-flow-col grid-rows-1 gap-4">
          <div className="w-1/4" >
            <h1 className="text-3xl font-bold mb-6">Grammar</h1>
            {/* Show the list of the grammars from the grammar, after selection I will show the types */}
            {grammars.length > 0 &&
            (
              <div className="grid grid-flow-row grid-rows-1 gap-4 width-full">
                {getDistinctGrammars().map((grammar) => (
                  <div key={grammar.id} className="grid-rows-1 gap-4 width-full p-4 hover:bg-gray-800 cursor-pointer " onClick={() => setSelectionGrammar(grammar.type)}>
                    {grammar.type} <button className="float-right" onClick={() => setSelectionGrammar(grammar.type)}>→</button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-1/4"  >
            <h1 className="text-3xl font-bold mb-6">Types</h1>
            {
              !types && (
                <p>Please select a grammar</p>
              ) || (
                <div className="grid grid-flow-row grid-rows-1 gap-4 width-full">
                  {types!.map((grammar) => (
                    <div key={grammar.id} className="grid-rows-1 gap-4 width-full p-4 hover:bg-gray-800 cursor-pointer " onClick={() => setSelectionType(grammar)}>
                      {grammar.name} <button className="float-right" onClick={() => setSelectionType(grammar)}>→</button>
                    </div>
                  ))}
                </div>
              )
            }
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-6">Explanation and examples</h1>
            {
              grammar && (
                <div>
                  <div className="flex">
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
                  <div className="grid grid-flow-col grid-rows-1 gap-4">
                    <p>{grammar.description}</p>
                  </div>
                </div>
              ) || (
                !types && (
                  <p>Please select a type</p>
                )
              )
            }
            
          </div>
         </div>
}