import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex flex-col mt-2'>
            <label htmlFor="Gender">Gender</label>

            <div className='flex items-center gap-2'>

                <label className="label">Male</label>
                <input type="checkbox" className="checkbox checkbox-primary" />

                <label className="label">Female</label>
                <input type="checkbox" className="checkbox checkbox-primary" />
            </div>
        </div>
    )
}

export default GenderCheckBox