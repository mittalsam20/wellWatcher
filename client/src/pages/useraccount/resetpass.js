import "./reset.css";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
// import bcrypt from "bcryptjs";
// import AlertContext from "../alertcontext";
import axios from "axios";
const ResetPass = ({ user }) => {
  const [oldPass, setOldpass] = useState("");
  const [newPass, setNewpass] = useState("");
  const [newcPass, setNewcpass] = useState("");
  const [alboxcont, setAlboxcont] = useState({
    open: false,
    message: "",
    type: "",
    dur: 1,
  });
  return (
    <>
      <div>
        <h1>Reset Password</h1>
        {
          <AlertContext
            open={alboxcont.open}
            message={alboxcont.message}
            type={alboxcont.type}
            setOpen={setAlboxcont}
            dur={alboxcont.dur}
          />
        }
        <div class="resetcont">
          <div id="resetform">
            <form>
              <input
                type="password"
                placeholder="Old Password"
                name="oldpass"
                value={oldPass}
                onChange={(e) => {
                  setOldpass(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="New Password"
                name="newpass"
                value={newPass}
                onChange={(e) => {
                  setNewpass(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                name="newcpass"
                value={newcPass}
                onChange={(e) => {
                  setNewcpass(e.target.value);
                }}
              />
              <Button
                type="button"
                class="btn extra"
                onClick={async (e) => {
                  e.preventDefault();
                  const salt = await bcrypt.genSalt(10);
                  console.log(oldPass);
                  const hashedoldPass = await bcrypt.hash(oldPass, salt);
                  console.log(hashedoldPass);
                  console.log(user.password);
                  const userLogPass = await bcrypt.compare(
                    oldPass,
                    user.password
                  );
                  console.log(userLogPass);
                  //   if (oldPass === user.password) {
                  if (userLogPass) {
                    if (newPass === newcPass) {
                      const salt = await bcrypt.genSalt(10);
                      const hashednewpass = await bcrypt.hash(newPass, salt);
                      var data = JSON.stringify({
                        password: hashednewpass,
                      });

                      var config = {
                        method: "patch",
                        url: `/app/resetpass/${user._id}`,
                        headers: {
                          "Content-Type": "application/json",
                        },
                        data: data,
                      };

                      axios(config)
                        .then(function (response) {
                          console.log(JSON.stringify(response.data));
                          setAlboxcont({
                            open: true,
                            message: "Password Changed..!!",
                            type: "success",
                            dur: 4000,
                          });
                          setOldpass("");
                          setNewpass("");
                          setNewcpass("");
                        })
                        .catch(function (error) {
                          console.log(error);
                          setAlboxcont({
                            open: true,
                            message: "Server Error..!!",
                            type: "error",
                            dur: 4000,
                          });
                        });
                    } else {
                      console.log("Password Are Not Matching..!!");
                      setAlboxcont({
                        open: true,
                        message: "Password Are Not Matching..!!",
                        type: "error",
                        dur: 4000,
                      });
                    }
                  } else {
                    console.log("Incorrect Old Password..!!");
                    setAlboxcont({
                      open: true,
                      message: "Incorrect Old Password..!!",
                      type: "error",
                      dur: 4000,
                    });
                  }
                }}
              >
                Reset
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
