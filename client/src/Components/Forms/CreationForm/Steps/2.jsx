import { useEffect } from "react";
import { useStepperContext } from "../../../../contexts/StepperContext";
import { isNom } from '../../../../functions/VerifData'

export default function Form({ setIsValid, step, setErrorMessage }) {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    useEffect(() => {
        if (userData["typeGerant"]) {

            if (userData["typeGerant"] === "Un particulier") {
                if (!userData["nomGerant"]) {
                    setErrorMessage("Veuillez verifier le nom du gérant")
                } else {
                    setErrorMessage("")
                    setIsValid(step);
                }
            }

            if (userData["typeGerant"] === "Une société") {

                if (!userData["rs"] || !userData["forme"] || !userData["gerant"]) {
                    setErrorMessage("Veuillez remplir tous les champs demandés")

                } else {
                    setErrorMessage("")
                    setIsValid(step);
                }
            }

        } else {
            if (!userData["typeGerant"]) {
                setErrorMessage("Veuillez sélectionner le type du gérant")
            }
        }

    }, [userData])


    return (
        <div className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
                <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Qui sera Gérant de la société ?
                </h1>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <select
                        id="typeGerant"
                        name="typeGerant"
                        required
                        value={userData["typeGerant"] || ""}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={handleChange}>
                        <option></option>
                        <option>Un particulier</option>
                        <option>Une société</option>

                    </select>
                </div>


                <div>
                    {userData.typeGerant === "Un particulier" &&
                        <div >
                            <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                                Nom & Prénom du gérant
                            </h1>
                            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                                <input
                                    onChange={handleChange}
                                    value={userData["nomGerant"] || ""}
                                    name="nomGerant"
                                    required
                                    placeholder="Foulen ben foulen"
                                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                                />
                            </div>
                        </div>}

                    {userData.typeGerant === "Une société" &&
                        <div >
                            <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                                Raison sociale
                            </h1>
                            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                                <input
                                    onChange={handleChange}
                                    value={userData["rs"] || ""}
                                    name="rs"
                                    required
                                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                                />
                            </div>

                            <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                                Forme juridique de la société
                            </h1>
                            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                                <input
                                    onChange={handleChange}
                                    value={userData["forme"] || ""}
                                    name="forme"
                                    required
                                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                                />
                            </div>

                            <h1 className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                                Numéro RCS (SIREN)
                            </h1>
                            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                                <input
                                    onChange={handleChange}
                                    value={userData["gerant"] || ""}
                                    name="gerant"
                                    required
                                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                                />
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
}