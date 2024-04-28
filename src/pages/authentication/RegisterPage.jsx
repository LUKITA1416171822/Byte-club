import AfricanSchool from "../../assets/images/school-Africa.jpg";
import {useState} from "react";
import IndividualRegistration from "./IndividualRegistration.jsx";
import {RegisterAsOrganization} from "./RegisterAsOrganization.jsx";
import StyledSelectInput from "../../components/StyledSelectInput.jsx";



export function RegisterPage(){

    const [registerType, setRegisterType] = useState("");

    const handleRegisterTypeChange = (event) => {
        setRegisterType(event.target.textContent);
    };



    return (
        <div className="w-screen h-screen bg-Midnight-Pine flex flex-row justify-between items-center">
            <div className="w-1/2 h-full">
                <img src={AfricanSchool} alt="School in Africa" className="w-full h-full object-cover"/>
            </div>
            <div className="w-1/2 text-slate-200 h-full flex flex-col justify-center items-center text-white">
                {
                    registerType === "" && <StyledSelectInput title={"Register as"} options={["Individual", "Organization"]} onChange={handleRegisterTypeChange} value={registerType}/>
                }
                {
                    registerType === "Individual" && <IndividualRegistration/>
                }
                {
                    registerType === "Organization" && <RegisterAsOrganization/>
                }
            </div>
        </div>
    );
}


