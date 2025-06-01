import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 space-y-2">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm text-gray-700">📧 {email}</p>
      <p className="text-sm text-gray-700">📞 {phone}</p>
      <p className="text-sm text-gray-700">🌐 {website}</p>
      <p className="text-sm text-gray-700">
        🏢 {company.name} – {company.catchPhrase}
      </p>
      <p className="text-sm text-gray-700">
        📍 {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
