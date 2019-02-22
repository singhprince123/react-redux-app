import React from 'react'

const renderField = ({ input, label, type, meta }) => (
  <div >
    <label>{label}</label>
    <div className={[meta.error && meta.touched ? 'error': '',
     meta.active ? 'active' : ''
  ]}>
      <input {...input} placeholder={label} type={type}/>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  </div>
)

export default renderField