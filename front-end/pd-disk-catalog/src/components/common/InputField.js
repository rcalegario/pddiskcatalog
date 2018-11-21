import React from 'react'

export default function InputField({ 
  id = `field-${Math.ceil(Math.random() * 100)}`, 
  type = 'text', 
  onChange = (e) => { console.log('on change action'); },
  name = 'Name', 
  value = '',
  className = '',
}) {

  const hadleInputChage = (e) => {
    const { id, value } = e.target;
    onChange({ id, value })
  }

  return (
    <div className="input-field">
      <label htmlFor={ id }>{ name }</label>
      <input type={ type } id={ id } className={className} onChange={ hadleInputChage } defaultValue={value} />
    </div>
  )
}
