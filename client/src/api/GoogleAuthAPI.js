import axios from 'axios'

export default function PostAPI() {

    const googleSignInAPI = (url) => axios.get(url).then((res) => { return res.data}).catch((err) => {return err});


    return { googleSignInAPI }
  
}
