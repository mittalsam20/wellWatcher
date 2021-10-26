import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import bcrypt from "bcryptjs";
import axios from "axios";

import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import AlertContext from "../alertcontext";
import { userData } from "../context";
import "./logsign.scss";
import Car from "./car";

const LogSign = () => {
  //---------------------USESTATES--------------------------
  const { rootUser, setRootUser } = useContext(userData);
  console.log("inside login page", rootUser);

  const history = useHistory();
  const [InputEmail, setInputEmail] = useState("");
  const [InputPass, setInputPass] = useState("");
  const [InputConfirmPass, setInputConfirmPass] = useState("");
  const [fullName, setFullName] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const [emailVal, setEmailval] = useState(true);
  const [passCheck, setpasscheck] = useState(false);
  const [alboxcont, setAlboxcont] = useState({
    open: false,
    message: "",
    type: "",
    dur: 1,
  });

  const callSignPage = async () => {
    try {
      const res = await axios.get("/app/main", {
        withCredentials: true,
      });
      const userdata = await res.data;
      setRootUser(userdata);
      console.log("LOGIN KE ANDAR", rootUser);
      if (userdata) {
        console.log("userdata is there..!!");
        // history.push("/home");
      }
    } catch (err) {
      console.log("error i am finding", err);
      // history.push("/login");
    }
  };

  useEffect(() => {
    callSignPage();
  }, []);

  // -----------------------EMAIL VALIDATION------------------------

  const EmailApi = async (Email) => {
    const res = await axios.post(`/app/selfproxy/${Email}`);
    // console.log("ressssss", res.data);
    // console.log("status", res.status);
    const data = await res.data;
    // console.log("parser", data.message);
    if (data.message === "Email is Correct") {
      setEmailval(true);
      return 1;
    } else {
      setEmailval(false);
      setAlboxcont({
        open: true,
        message: "Please Use a Valid Email..!!",
        type: "error",
        dur: 5000,
      });
      return 0;
    }
  };

  // -----------------------PASSWORD CHECKER------------------------

  const passwordChecker = (a, b) => {
    if (a === "" || b === "" || a === " " || b === " ") {
      setAlboxcont({
        open: true,
        message: "Please Fill All The Details..!!",
        type: "error",
        dur: 2000,
      });
    }
    if (a === b && a !== "") {
      setpasscheck(true);
      console.log("matched");
      setAlboxcont({
        open: true,
        message: "Password's are matching..!!",
        type: "success",
        dur: 1000,
      });
      if (a.length < 8) {
        setpasscheck(false);

        console.log("sss", a.length);
        setAlboxcont({
          open: true,
          message: "Minimum Password length is 8 Charaters",
          type: "error",
          dur: 4000,
        });
      }
      return 1;
    } else if (a !== "") {
      setpasscheck(false);

      console.log("not matched");
      setAlboxcont({
        open: true,
        message: "Password's are not matching..!!",
        type: "error",
        dur: 20000,
      });
      return 0;
    }
  };

  //   useEffect(() => {
  //     // console.log(validator);
  //     if (validator === 0) {
  //       setError("Please Use a Valid Email-Id");
  //     }
  //   }, [validator]);

  //----------------------------------RANDOM PASSWORD GENERATOR---------------------------------------
  const passgen = () => {
    const length = 9;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };

  //----------------------------------RETURN FUNCTION---------------------------------------
  const [forgotOpen, setForgotopen] = useState(false);
  const [forEmail, setForemail] = useState("");
  const [otp, setotp] = useState("");
  const [forUser, setforuser] = useState({});
  const [mailedotp, setMailedotp] = useState(
    Math.floor(100000 + Math.random() * 900000)
  );
  const [newPass, setNewpass] = useState(passgen());

  useEffect(() => {}, [mailedotp, otp, newPass, forEmail, forUser]);
  const forgotpass = () => {
    console.log(forgotOpen);
    return (
      <div>
        <Dialog
          open={forgotOpen}
          onClose={() => {
            setForgotopen(false);
          }}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Reset Password via Email-Id
          </DialogTitle>
          <DialogContent>
            <TextField
              onChange={(e) => {
                setForemail(e.target.value);
              }}
              autoFocus
              margin="dense"
              id="foremail"
              label="Email-Id"
              type="email"
              fullWidth
              autoComplete="off"
              value={forEmail}
            />
            <DialogActions>
              <Button
                onClick={(e) => {
                  // setMailedotp(Math.floor(100000 + Math.random() * 900000));
                  e.preventDefault();
                  console.log(mailedotp);
                  axios
                    .get(`/app/forgotpass/${forEmail}`)
                    .then(function (response) {
                      setforuser(response.data);
                      console.log(JSON.stringify(response.data));
                      emailjs
                        .send(
                          "service_9bpsy9c",
                          "template_v545mxb",
                          {
                            from_name: "Script To Growth",
                            to_name: forUser.fullName,
                            message: mailedotp,
                            user: forEmail,
                          },
                          "user_JvU7IPyDjI1J1OCd53U8i"
                        )
                        .then(
                          (response) => {
                            setAlboxcont({
                              open: true,
                              message: "OTP HAS BEEN MAILED..!!",
                              type: "success",
                              dur: 7000,
                            });
                            console.log(
                              "SUCCESS!",
                              response.status,
                              response.text
                            );
                          },
                          (err) => {
                            console.log("FAILED...", err);
                          }
                        );
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
                color="primary"
              >
                SEND OTP
              </Button>
            </DialogActions>
          </DialogContent>

          <DialogContent>
            <TextField
              onChange={(e) => {
                setotp(e.target.value);
              }}
              margin="dense"
              id="forotp"
              label="OTP"
              type="text"
              fullWidth
              autoComplete="off"
              value={otp}
            />
            <DialogActions>
              <Button
                onClick={async (e) => {
                  e.preventDefault();
                  console.log(mailedotp, otp);
                  if (mailedotp === Number(otp)) {
                    const salt = await bcrypt.genSalt(10);
                    const hashednewpass = await bcrypt.hash(newPass, salt);
                    var data = JSON.stringify({
                      password: hashednewpass,
                    });

                    var config = {
                      method: "patch",
                      url: `/app/resetpass/${forUser._id}`,
                      headers: {
                        "Content-Type": "application/json",
                      },
                      data: data,
                    };

                    axios(config)
                      .then(function (response) {
                        console.log(JSON.stringify(response.data));
                        // setAlboxcont({
                        //   open: true,
                        //   message: "Password Changed..!!",
                        //   type: "success",
                        //   dur: 4000,
                        // });
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

                    emailjs
                      .send(
                        "service_9bpsy9c",
                        "template_iibcj0f",
                        {
                          to_name: forUser.fullName,
                          message: newPass,
                          user: forEmail,
                        },
                        "user_JvU7IPyDjI1J1OCd53U8i"
                      )
                      .then(
                        (response) => {
                          setAlboxcont({
                            open: true,
                            message: "NEW PASSWORD HAS BEEN MAILED..!!",
                            type: "success",
                            dur: 7000,
                          });
                          console.log(
                            "SUCCESS!",
                            response.status,
                            response.text
                          );
                        },
                        (err) => {
                          console.log("FAILED...", err);
                        }
                      );
                  } else {
                    setAlboxcont({
                      open: true,
                      message: "OTP ENTERED IS WRONG..!!",
                      type: "error",
                      dur: 7000,
                    });
                  }
                  setForemail("");
                  setotp("");
                  setForgotopen(false);
                }}
                color="primary"
              >
                Verify OTP
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  return (
    <>
      <div className="main-container">
        <div id="sign-up" className="left-container sign-up ">
          <Link to="/" exact>
            <Button className="backarr">
              <ArrowBackRoundedIcon style={{ fontSize: 40 }} />
            </Button>
          </Link>
          {
            <AlertContext
              open={alboxcont.open}
              message={alboxcont.message}
              type={alboxcont.type}
              setOpen={setAlboxcont}
              dur={alboxcont.dur}
            />
          }
          {forgotpass()}

          <h1>WellWatcher</h1>
          {/* <h5>That you need!</h5> */}
          <section className="main">
            <div className="form_wrapper">
              <input
                type="radio"
                className="radio"
                name="radio"
                id="login"
                defaultChecked
              />
              <input type="radio" className="radio" name="radio" id="signup" />
              <label className="tab login_tab" for="login">
                Login
              </label>
              <label className="tab signup_tab" for="signup">
                Signup
              </label>
              <span className="shape"> </span>
              <div className="form_wrap">
                <div className="form_fild login_form">
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setLogEmail(ev.target.value);
                      }}
                      value={logEmail}
                      type="email"
                      className="input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setLogPass(ev.target.value);
                      }}
                      value={logPass}
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setForgotopen(true);
                    }}
                  >
                    Forgot password ?
                  </Button>
                  <input
                    type="submit"
                    className="btn"
                    value="Login"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("login clicked");
                      // EmailApi(InputEmail, InputPass);
                      const loginreg = {
                        logEmail: logEmail,
                        logPass: logPass,
                      };
                      console.log(loginreg);
                      axios
                        .post("/app/login", loginreg, {
                          withCredentials: true,
                        })
                        .then((res) => {
                          console.log("sam var", res.data);
                          if (res.status === 200) {
                            // callSignPage();
                            history.push("/home");
                            setAlboxcont({
                              open: true,
                              message: res.data.message,
                              type: "success",
                              dur: 6000,
                            });
                          }
                          setAlboxcont({
                            open: true,
                            message: res.data.message,
                            type: "error",
                            dur: 6000,
                          });
                        })
                        .catch((err) => {
                          console.log(
                            "okokokokok",
                            err.message,
                            err.response.data.message,
                            "dsdsds",
                            err.request
                          );

                          setAlboxcont({
                            open: true,
                            message: err.response.data.message,
                            type: "error",
                            dur: 6000,
                          });
                        });
                    }}
                  />
                  <div className="not_mem"></div>
                </div>
                <div className="form_fild signup_form">
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setFullName(ev.target.value);
                      }}
                      value={fullName}
                      type="text"
                      className="input"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setInputEmail(ev.target.value);
                      }}
                      value={InputEmail}
                      type="email"
                      className="input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="input_group">
                    <input
                      value={InputPass}
                      onChange={(ev) => {
                        setInputPass(ev.target.value);
                        passwordChecker(InputConfirmPass, ev.target.value);
                      }}
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="input_group">
                    <input
                      value={InputConfirmPass}
                      onChange={(ev) => {
                        setInputConfirmPass(ev.target.value);
                        passwordChecker(InputPass, ev.target.value);
                      }}
                      type="password"
                      className="input"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn"
                    value="Signup"
                    onClick={(e) => {
                      e.preventDefault();
                      // console.log("clicked");
                      // EmailApi(InputEmail);
                      console.log(emailVal, passCheck);
                      if (
                        emailVal &&
                        passCheck
                        // passwordChecker(InputPass, InputConfirmPass)
                      ) {
                        const reg = {
                          emailId: InputEmail,
                          password: InputPass,
                          fullName: fullName,
                        };
                        console.log(reg);
                        axios
                          .post("/app/signup", reg)
                          .then((res) => {
                            console.log(
                              "seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                              res.status,
                              res.data,
                              // JSON.parse(res.data)
                              res.data.message
                            );
                            if (res.status !== 200) {
                              var temptype = "error";
                            }
                            setAlboxcont({
                              open: true,
                              message: res.data.message,
                              type: temptype || "success",
                              dur: 6000,
                            });
                            if (res.status === 200) {
                              setInputEmail("");
                              setInputPass("");
                              setFullName("");
                              setInputConfirmPass("");
                            }
                          })
                          .catch((err) => {
                            console.log(
                              "okokokokok",
                              err.message,
                              err.response.data.message,
                              "dsdsds",
                              err.request
                            );
                            if (err.status !== 200) {
                              var temptype = "error";
                            }
                            setAlboxcont({
                              open: true,
                              message: err.response.data.message,
                              type: temptype || "success",
                              dur: 6000,
                            });
                          });
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="right-container">
          <Car className="right-in" />
        </div>
      </div>
    </>
  );
};

export default LogSign;
