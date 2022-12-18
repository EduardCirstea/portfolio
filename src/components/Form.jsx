import React, { useState, useRef } from 'react'
import './style/form.css'
import emailjs from '@emailjs/browser'

export const Form = () => {
  const service_id = process.env.REACT_APP_SERVICE_ID
  const template_id = process.env.REACT_APP_TEMPLATE_ID
  const public_key = process.env.REACT_APP_PUBLIC_KEY
  const form = useRef()
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (!user || !email || !text) return console.log('failed')

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <input
          type="text"
          placeholder="Name Here*"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          name="user_name"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Here*"
          name="user_email"
        />

        <textarea
          name="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="7"
          placeholder="Message Here*"
        />

        <button type="submit" className="btn btn-email">
          Send Message
        </button>
      </form>
    </div>
  )
}
