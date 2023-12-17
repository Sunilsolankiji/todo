import "./UserProfile.css";

const Profile = () => {
  return (
    <>
      <div className="head d-flex justify-content-between">
        <h1 className="m-0">Profile</h1>
      </div>
      <div className="panel-body inf-content">
        <div className="row">
          <div className="col-md-4 col-lg-2 m-auto d-flex">
            <div className="user-icon m-auto">U</div>
          </div>
          <div className="col-md-6 col-lg-10 m-auto">
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-user text-primary"></span>
                        Name
                      </strong>
                    </td>
                    <td className="text-color">UserName</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-cloud text-primary"></span>
                        Email
                      </strong>
                    </td>
                    <td className="text-color">UserName.email.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
