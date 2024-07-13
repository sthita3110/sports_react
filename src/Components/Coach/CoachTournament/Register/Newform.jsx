import Input from "../../../../Shared/Input";

const Newform = () => {
  return (
    <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <p className="mr-3 w-24">Name:</p>
          <Input type="text" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Gender:</p>
          <Input type="text" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Height:</p>
          <Input type="number" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">District:</p>
          <Input type="text" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Email:</p>
          <Input type="email" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Club Name:</p>
          <Input type="text" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Date of Birth:</p>
          <Input type="date" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Experience:</p>
          <Input type="number" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Weight:</p>
          <Input type="number" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">State:</p>
          <Input type="text" placeholder="Type here" />
        </div>
        <div className="flex items-center">
          <p className="mr-3 w-24">Contact:</p>
          <Input type="number" placeholder="Type here" />
        </div>
      </div>
    </div>
  );
};

export default Newform;
