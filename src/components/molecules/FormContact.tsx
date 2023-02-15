import React from 'react'
import Button from '../atoms/Button'
import { InputField, TextArea } from '../atoms/InputField'

type props = {
  formData: {
    name: string
    email: string
    phone: string
    company: string
    message: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => void
}

const FormContact = ({ formData, handleChange, handleSubmit }: props) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className='flex'>
          <InputField
            name='name'
            type='text'
            value={formData.name}
            onChange={handleChange}
            label="Name"
            placeHolder={'Jhon Doe'}
          />
          <InputField
            name='email'
            type='text'
            value={formData.email}
            onChange={handleChange}
            label="Email"
            placeHolder={'example@gmail.com'}
          />
        </div>
        <div className='flex'>
          <InputField
            name='phone'
            type='number'
            value={formData.phone}
            onChange={handleChange}
            label="Phone"
            placeHolder={'081223456712'}
          />
          <InputField
            name='company'
            type='text'
            value={formData.company}
            onChange={handleChange}
            label="Company"
            placeHolder={'Google'}
          />
        </div>
        <TextArea
          name='message'
          label='Message'
          value={formData.message}
          onChange={handleChange}
          placeHolder={'Please type your message here...'}
        />
        <Button action={() => { }} title='Send Message' style='px-10 bg-cyan-700 hover:bg-cyan-800 py-2 text-white rounded-3xl mt-8' />
      </form>
    </div>
  )
}
export default FormContact