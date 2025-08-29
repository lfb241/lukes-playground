import { Compound } from '@/constants/Types';
import { useState } from 'react';

export const useCompoundSearch = () => {
    const [results, setResults] = useState<Compound[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)


    /*
    asynch. function that fetches from PUBCHEM-API and returns an array
    */
    const fetchCompounds = async (searchTerm: string) => {
        
        setLoading(true);
        setError(null);
        alert(`Searching for: '${searchTerm}'`)


        try{
            let query =await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${searchTerm}/property/MolecularWeight,MolecularFormula/JSON`);
            let data = await query.json()
            setResults(data.PropertyTable.Properties)
            console.log(results)
        } catch (err) {
            setError('No molecule was found')
            console.error(err)
            alert(error)
        } finally{
            setLoading (false)
        }
    }
    const resetResults = () => {
        setResults([])
    }

  return {
    results,
    loading,
    error,
    fetchCompounds,
    resetResults
  }
}