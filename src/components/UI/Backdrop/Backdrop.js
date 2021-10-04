import React from 'react'
import classes from './backdrop.module.css'

export default function Backdrop(props) {
    return (
        <div className={classes.Backdrop} onClick={props.onClick}>
            
        </div>
    )
}
