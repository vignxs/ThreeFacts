import { axiosInstance } from "./AxiosHelper";
import ResponsiveAppBar from "./ResponsiveAppBar"
import Button from '@mui/material/Button';



const ChatApp = () => {

  const handleButtonClick = async () => {
    try {
      const response = await axiosInstance.get('');
      console.log(response.data);
    } catch (error) {
      console.error("There was an error fetching the data", error);
    }
  }
  return (
    <ResponsiveAppBar>
      <>
        

        <div>chatApp</div>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Call API
        </Button>
      </>
    </ResponsiveAppBar>
  );
}

export default ChatApp