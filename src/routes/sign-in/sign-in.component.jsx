
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"

const SignIn = () => {

    const logGoogleUserPopup = async () => {
        const {user} = await signInWithGooglePopup();
        console.log("user google login", user)
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUserPopup}>Sign in with Google Popup</button>  
            <SignUpForm />
        </div>
    )
}

export default SignIn