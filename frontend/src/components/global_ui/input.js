import React from 'react';
import './input.css'


/**
 * 
<<<<<<< HEAD
 * @param {*} props value,placeholder,name,type,onChange,error,maxLength are the supported props
=======
 * @param {*} props textAlign,size,minLength,value,placeholder,name,type,onChange,error,maxLength are the supported props
>>>>>>> master
 * You can pass an error msg to show an error below input field
 * @returns a custom styled input component.
 */
const InputField = ({textAlign,size,minLength,value,placeholder,name,type,onChange,error,maxLength}) => {

    return ( 

        <div className="input-field">
            <input size={size} style={{textAlign:textAlign}} className={error?"error-field":"normal-field"} type={type} name={name} value={value} minLength={minLength} maxLength={maxLength} onChange={onChange} required/>
            <label className="label" htmlFor={name}>{placeholder}</label>
            <br />
            {error && <span className="error-msg" >{error}</span>}
            {error && <div style={{ height: 1 + 'rem' }} ></div>}

        </div>


     );
}
 
export default InputField;