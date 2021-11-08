import { useState } from "react";
import styleContact from "./contact.module.scss";
import Image from 'next/image'
import Contact_svg from '../../assets/shake.svg';
import Axios from "axios";
function Contact() {
  const [message, setMessage] = useState(false);
  const [NoNameError, setNoNameError] = useState(false);
  const [NoEmailError, setNoEmailError] = useState(false);
  const [WrongEmailError, setWrongEmailError] = useState(false);
  const [NoMessageError, setNoMessageError] = useState(false);
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });
  function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    if (mailerState.name === "") {
      setNoNameError(true)
    } else if (mailerState.email === "") {
      setWrongEmailError(false)
      setNoNameError(false)
      setNoEmailError(true)
    } else if (mailerState.message === "") {
      setNoNameError(false)
      setNoEmailError(false)
      setNoMessageError(true)
    } else {
      if (ValidateEmail(mailerState.email.toString()) === true) {
        setNoNameError(false)
        setNoEmailError(false)
        setNoMessageError(false)
        setWrongEmailError(false)
        setMessage(true)
        /*const response = */
        Axios.post(`${NEXT_URL}/api/email/`, {
          'Name': mailerState.name,
          'Email': mailerState.email,
          'Message': mailerState.message,
        },
          {
            headers: {
              "Content-Type": 'application/json',
              'X-CSRFTOKEN': "csrftoken"
            }
          }
        )
          .then(res => console.log(res))
          .catch(error => console.log("error"))
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
      } else {
        setNoNameError(false)
        setNoEmailError(false)
        setNoMessageError(false)
        setWrongEmailError(true)
      }
    }
  };
  return (
    <div className={styleContact.contact} id="contact">
      <div className={styleContact.leftc}>
        <Image src={Contact_svg} alt="Two hands shaking in minimalistic art style" />
      </div>
      <div className={styleContact.rightc}>
        <form onSubmit={submitEmail}>
          <h2>Contact</h2>
          <div className={NoNameError ? [styleContact.error_organizer, styleContact.error].join(" ") : styleContact.error_organizer}>
            <h3 className={NoNameError ? [styleContact.Name, styleContact.error].join(" ") : styleContact.Name}>Please Enter a Name</h3>
          </div>
          <input className={NoNameError ? [styleContact.Name, styleContact.error].join(" ") : styleContact.Name}
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <div className={styleContact.error_organizer}>
            <h3 className={NoEmailError ? [styleContact.Email, styleContact.error].join(" ") : styleContact.Email}> Please Enter an Email</h3>
            <h3 className={WrongEmailError ? [styleContact.Email, styleContact.error].join(" ") : styleContact.Email}> Please Enter a Valid Email</h3>
          </div>
          <input className={NoEmailError || WrongEmailError ? [styleContact.Email, styleContact.error].join(" ") : styleContact.Email}
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <div className={styleContact.error_organizer}>
            <h3 className={NoMessageError ? [styleContact.Message, styleContact.error].join(" ") : styleContact.Message}>Please Enter a Message </h3>
          </div>
          <textarea className={NoMessageError ? [styleContact.Message, styleContact.error].join(" ") : styleContact.Message}
            style={{ minHeight: "200px" }}
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <button>Send Email</button>
          {message && <span>Thank you! I'll reply ASAP</span>}
          
        </form>
      </div>
    </div>
  );
}

export default Contact;
/*<button><a href="" target="_blank" rel="noreferrer">Download My Resume</a></button>*/