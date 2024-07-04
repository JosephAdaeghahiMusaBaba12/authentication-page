import Header from "../components/Header";
import SignUp from "../components/SignUp";

const SignupPage = () => {
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <SignUp/>
        </>
    )
}

export default SignupPage