import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithEmailAndPasswordMethod } from "../../utils/firebase.utils"
import './sign-in-form.styles.scss'
import { useState, useContext } from "react"
import { UserContext } from "../../contexts/user.context"

const initialFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(initialFormField)
    const { email, password } = formFields
    const { setCurrentUser } = useContext(UserContext)
    const resetFormFields = () => setFormFields(initialFormField)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInWithEmailAndPasswordMethod(email, password);
            console.log("user successfully logged in")
            setCurrentUser(user)
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case "auth/wrong password":
                    alert("incorrect password for email")
                    break
                case "auth/user-not-found":
                    alert("no user assocatied with this email")
                    break
                default:
                    alert(error.code)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        console.log("user google login", user)
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span> Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='text'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                >
                </FormInput>
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                >
                </FormInput>
                <div className="sign-in-form-button-container">
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" buttonType={'google'} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>

        </div>
    )
}

export default SignInForm