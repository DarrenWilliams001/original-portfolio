import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbodjgy")
  if (state.succeeded) {
    return <p>Thanks for getting in contact!</p>
  }
  return (
    <div className="contact-container">
      <div className="form-container">
        <h5>Get in touch</h5>
        <form id="contact" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input id="fullname" type="text" name="fullname" />
            <ValidationError
              prefix="Fullname"
              field="fullname"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input id="mobile" type="mobile" name="mobile" />
            <ValidationError
              prefix="Mobile"
              field="mobile"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Leave a message</label>
            <textarea id="message" rows="10" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <div className="details-container">
        <h5>How to get in contact</h5>
        <div>
          <h6 style={{ fontSize: `1em` }}>
            <strong>Mobile:</strong>
            <a style={{ textDecoration: `underline` }} href="tel:+61417204809">
              {" "}
              0417 204 809
            </a>
          </h6>
          <h6 style={{ fontSize: `1em` }}>
            <strong>Email:</strong>
            <a
              style={{ textDecoration: `underline` }}
              href="mailto:dwdevmail17@gmail.com"
            >
              {" "}
              dwdevmail17@gmail.com
            </a>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Contact
