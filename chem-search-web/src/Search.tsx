import { useState, type SetStateAction } from "react";
//Funktion zum Suchen + Fetchen von Molekülen


export default function Search() {

    const [weight, setWeight] = useState(null); //Veränderbar über setWeight
    const [formula, setFormula] = useState(null); //Veränderbar über setFormula
    const [cid, setCid] = useState("");


    async function receiveData(cid: string) { // Asynchrone Funkton zur Eingabe von cid und Ausgabe von den Dateien in der Konsole über REST-API von PubChem
        alert(`Suche nach dem Molekül mit CID: '${cid}'`);
        try {
            const query = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/MolecularWeight,MolecularFormula/JSON`);
            const data = await query.json();
            console.log(data.PropertyTable.Properties[0].MolecularFormula);
            setWeight(data.PropertyTable.Properties[0].MolecularWeight);
            setFormula(data.PropertyTable.Properties[0].MolecularFormula);

        } catch (e) { // Fehler werden in Konsole ausgegeben
            console.log(e);
            setWeight(null)
            setFormula(null)
            alert('Kein passentes Molekül gefunden')

        }
    }

    const xxx = (e: { target: { value: SetStateAction<string>; }; }) => { setCid(e.target.value) }



    const myComponent = weight !== null && formula !== null ?
        <table>
            <thead>
                <tr>
                    <th>Molekülformel:</th>
                    <th>{formula}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Molekülgewicht:</td>
                    <td>{weight}</td>
                </tr>
            </tbody>
        </table> : null;


    return (
        <>

            <input name="query"
                value={cid}
                onChange={xxx} />
            <button onClick={() => { receiveData(cid) }}>Search</button>



            {myComponent}


        </>


    );


}


