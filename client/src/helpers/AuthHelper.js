import React from 'react'

export default function AuthHelper() {
    const [isSignup, setIsSignup] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const hanldeSubmit = (e) => {
        e.preventDefaults();
    };

    const responseGoogleSuccess = async (response) => {
        console.log(response);
      }

    const responseGoogleFailure = async (response) => {
        console.log(response);
      }


    const handleChange = (e) => {

    };

    const handleShowPassword = (prevShowPassword) => {
        return setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const handleToggleForms = (prevIsSignup) => {
        return setIsSignup( (prevIsSignup) => !prevIsSignup )
    }

    return { hanldeSubmit, handleChange , isSignup, showPassword, responseGoogleSuccess, responseGoogleFailure ,  handleShowPassword, handleToggleForms}
}
