import React from "react"
import "../styles/Base_styles.css"
import { useNavigate } from 'react-router-dom';

export const ProjectLogo = (props: { width: any }) => {
    const navigate = useNavigate();

    return(
        <img style={{cursor:"pointer"}} onClick={() => navigate('/', {replace:true})} alt="Wordsmemo logo" id="project-logo" src="images/WordsMemo.png" />
    )
}