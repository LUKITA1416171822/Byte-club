import PropTypes from "prop-types";
import {useState} from "react";
import Icon from '@mdi/react';
import { mdiMenuUpOutline } from '@mdi/js';
import {StyledFileInput} from "./styled-inputs/StyledFileInput.jsx";



export default function OrganizationSubmissionsCard(props){
    const [isExpanded,setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }

    return (
        <div className={"bg-teal-700 flex flex-col justify-around items-start shadow-sm px-2 py-2 w-2/3 rounded-md"}>
            <div className={"flex flex-row justify-between px-1 w-full text-slate-100"}>
                <h2 className={"font-medium text-3xl"}>
                    {props.request.first_name} {props.request.last_name}
                </h2>
                <button onClick={handleExpand}>
                    <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}
                          className={"transition-transform duration-300 text-white"}/>
                </button>
            </div>
            <div className={"font-mono text-xl text-slate-100"}>
                Type : Organization
            </div>

            {
                isExpanded &&
                <div className="font-mono text-xl text-slate-100 flex flex-row justify-between w-full" >
                    <div className="flex-col ">
                        <div>Email: {props.request.email}</div>
                        <div>Gender: {props.request.gender}</div>
                        <div>OrganizationName: {props.request.organization.name}</div>
                        <div>Organization Address: {props.request.organization.address}</div>
                        <div>Organization Governorate: {props.request.organization.governorate}</div>
                        <div><StyledFileInput/></div>
                    </div>
                    <div className="flex-col ">
                        <div>Password:{props.request.password}</div>
                        <div>Contact number: {props.request.contact_number}</div>
                        <div>Organization Type: {props.request.organization.type}</div>
                        <div>Organization Area: {props.request.organization.area}</div>

                        <div className="flex flex-row justify-between">
                            <button
                                className=" bg-green-400 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                            >
                                Accept
                            </button>
                            <button
                                className="w-1/3 bg-red-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                            >
                                Reject
                            </button>
                        </div>
                    </div>


                </div>
            }
        </div>
    );

}


OrganizationSubmissionsCard.propTypes = {
    request: PropTypes.object,
}