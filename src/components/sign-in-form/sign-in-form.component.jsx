import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"

const SignInForm = () => {

    const handleSubmit = () => {}
    const handleChange = () => {}

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
                    value={'email@gmail.com'}
                >
                </FormInput>
                <Button >Sign In</Button>
            </form>

        </div>
    )
}

export default SignInForm