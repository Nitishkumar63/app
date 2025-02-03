import { TextField, Button } from "@mui/material";
const MyProfile = () => {
  return (
    <>
      <div className=" px-5 ">
        <h3 className="text-xl font-semibold mb-4">My Profile</h3>
        <form className="space-y-4">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            size="small"
          />
          <TextField fullWidth label="Email" variant="outlined" size="small" />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            size="small"
          />
          <div className="flex space-x-4">
            <Button variant="contained" color="primary">
              Save
            </Button>
            <Button variant="outlined" color="error">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyProfile;
