import React from 'react';
import { useDispatch } from "react-redux";
import { authLogin } from '../store/actions/auth';
import {useHistory} from "react-router-dom";

export default function AuthHelper() {
    const [isSignup, setIsSignup] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const histroy = useHistory()
    const dispatch = useDispatch();

    const hanldeSubmit = (e) => {
        e.preventDefaults();
    };


    const responseGoogleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try{
            dispatch(authLogin(result,token))
            histroy.push("/")
        } catch (error) {
            console.log(res)
        };
      };

    const responseGoogleFailure = async (res) => {
        try{
            console.log(res)
        } catch (error) {
            console.log(res)
        }
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
