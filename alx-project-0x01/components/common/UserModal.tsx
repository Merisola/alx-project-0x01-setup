import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nestedPath?: string[]
  ) => {
    const { name, value } = e.target;
    if (nestedPath) {
      setUser((prev) => {
        const updated = { ...prev };
        let ref: any = updated;
        for (let i = 0; i < nestedPath.length - 1; i++) {
          ref = ref[nestedPath[i]];
        }
        ref[nestedPath[nestedPath.length - 1]] = value;
        return updated;
      });
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="space-y-2">
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 w-full"
          />
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="border p-2 w-full"
          />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 w-full"
          />
          <input
            value={user.address.street}
            onChange={(e) => handleChange(e, ["address", "street"])}
            placeholder="Street"
            className="border p-2 w-full"
          />
          <input
            value={user.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Phone"
            className="border p-2 w-full"
          />
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white px-4 py-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
