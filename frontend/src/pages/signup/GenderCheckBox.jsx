import React from 'react'

const GenderCheckBox = ({onCheckboxChange ,selectedGender}) => {
    return (
        <div className='flex flex-col mt-2'>
            <label htmlFor="Gender">Gender</label>

            <div className='flex items-center gap-2'>

                <label className="label">Male</label>
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-primary" 
                    checked={selectedGender === 'male'} 
                    onChange={() => onCheckboxChange('male')} 
                />

                <label className="label">Female</label>
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-primary" 
                    checked={selectedGender === 'female'} 
                    onChange={() => onCheckboxChange('female')} 
                />
            </div>
        </div>
    )
}

export default GenderCheckBox