import Input from "../../../../Shared/Input";
const Newform = () => {
  return (
    <>
      <div className="new-form bg-gray-300">
        <div className="flex">
          <div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Name: </p>
              <Input type={"text"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Gender: </p>
              <Input type={"text"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Height: </p>
              <Input type={"number"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">District: </p>
              <Input type={"text"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Email: </p>
              <Input type={"email"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Club Name: </p>
              <Input type={"text"} placeholder={"Type here"} />
            </div>
          </div>
          <div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Date of Birth: </p>
              <Input type={"date"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Experience: </p>
              <Input type={"number"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Weight: </p>
              <Input type={"number"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">State: </p>
              <Input type={"text"} placeholder={"Type here"} />
            </div>
            <div className="flex items-center new-form-coach">
              <p className="mr-3">Contact: </p>
              <Input type={"number"} placeholder={"Type here"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newform;
