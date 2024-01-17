import axios from "axios"; 


export const convertoken = (access_token) => {

    axios.post("http://127.0.0.1:8000/api/auth/convert-token/", {
      token: access_token,
      backend: "facebook",
      grant_type: "convert_token",
      client_id: "2eTlSN910YobgMQHLKqSJpC0Do9QptymlZ9ksmBD",
      client_secret:
        "36Ao8iYmiNFJ8ePGTNQLV2JitKBWApr1avVrV0SoIN6B3ZioSwjV6PCNbaA2nnYnAv8E2DVXNecO9kkoEDFrVXtofaIcHZ9HAuC9LDct5S7jD9OCahjd2jv4Qu5yKepf",
    })
    .then((res) => { 
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        return res.data.access_token;  
    });
};
