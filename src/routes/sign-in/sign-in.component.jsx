
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"
import Button from "../../components/button/button.component";
import '../../components/button/button.styles.scss'
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const SignIn = () => {

    const logGoogleUserPopup = async () => {
        const {user} = await signInWithGooglePopup();
        console.log("user google login", user)
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <SignInForm></SignInForm>
            <Button buttonType={'google'} onClick={logGoogleUserPopup}>Sign in with Google Popup</Button>  
            <SignUpForm />
        </div>
    )
}

export default SignIn