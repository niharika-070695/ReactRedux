import { useEffect } from "react";
import axios from "axios";
function Users({ getUsers, users, setIsNewUser, setNewUser }) {
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3000/result/${id}`)
      .then((res) => {
        alert("User deleted successfully");
        getUsers();
      })
      .catch((error) => {
        alert("Failed to remove user");
        console.log(error);
      });
  };

  const updateUser = (element) => {
    setIsNewUser(false);
    setNewUser(element);
  };
  return (
    <div style={{ marginTop: "50px auto", width: "500px" }}>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Users Information
      </h2>
      {users.length > 0 && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((element) => {
                return (
                  <tr>
                    <td>{element.name}</td>
                    <td>{element.city}</td>
                    <td>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          updateUser(element);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          deleteUser(element.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
