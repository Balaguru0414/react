// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// =========== Complex State ===========
function State() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const updateFirstName = function (e) {
    const first = e.target.value;
    setFirstName(first);
  };

  const updateLastName = function (e) {
    const last = e.target.value;
    setLastName(last);
  };

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          onChange={updateFirstName}
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={updateLastName}
          placeholder="Last Name"
          value={lastName}
        />
      </form>
    </div>
  );
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function State() {
  const [fullName, setFullName] = useState({
    fistName: "",
    lastName: "",
  });

  const handleChange = function (e) {
    const newValue = e.target.value;
    const inputName = e.target.name;

    // First==============

    if (inputName === "fistName") {
      setFullName({ fistName: newValue });
    } else if (inputName === "lastName") {
      setFullName({ lastName: newValue });
    }

    // Second ==============

    setFullName((prevValue) => console.log(prevValue)); // error also come

    // Third ==============
    const { value, name } = e.target;

    setFullName((preValue) => {
      if (name === "fistName") {
        return {
          fistName: value,
          lastName: preValue.lastName,
        };
      } else if (name === "lastName") {
        return {
          fistName: preValue.fistName,
          lastName: value,
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.fistName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fistName"
          placeholder="First Name"
          value={fullName.fistName}
        />
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
      </form>
    </div>
  );
}
