import React from 'react'


import "../components/Components Css/ResearchPage.css"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const ResearchCard = (props) => {
    return (
        <>
            <div className="service">
                <Link to={props.action}>
                    <div className="icon-holder">
                        <img className='icon' src={props.photo} alt='' />
                    </div>
                    <Typography className="heading" variant='h5'>
                        {props.specialisation}
                    </Typography>
                    <Typography className="description">
                        {props.description}
                    </Typography>

                </Link>
            </div>
        </>
    )
}

export default ResearchCard