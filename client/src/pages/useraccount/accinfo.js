import "./info.css";
const AccInfo = ({ user }) => {
  return (
    <>
      <div className="infocont">
        <h1>Account Info</h1>
        <div className="infoinside">
          <div className="infoentry">
            <strong>
              <p>Name:</p>
            </strong>
            {/* <p>{user.fullName}</p> */}
          </div>
          <div className="infoentry">
            <strong>
              <p>Email:</p>
            </strong>
            {/* <p>{user.emailId}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccInfo;
