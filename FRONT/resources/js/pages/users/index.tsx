import Button from "@/components/Button";
import { fetchUsers, deleteUser } from "@/fetch/users";
import GlobalLayout from "@/layouts/global-layout";
import type { Users } from "@/types/users";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Users() {

    const [users, setUsers] = useState<Users | undefined>(undefined);

    const getUser = async () => {
        const response = await fetchUsers();
        const responseJSON = await response.json();
        setUsers(responseJSON);
    };

    const handleDelete = async (id: number) => {
        const response = await deleteUser(id);
        const responseJSON = await response.json();
        setUsers(responseJSON.users);
        console.log({ response, responseJSON });
    };


    useEffect(() => {
        getUser();
    }, []);

    return (
        <GlobalLayout>
            <Button onClick={() => { router.visit('/users/create') }}>Create New User</Button>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {users && users.map((user) => (
                    <div className="border-2 border-neutral-600 rounded-md p-4" key={user.id}>
                        <ul>
                            <li><strong>{user.name}</strong></li>
                            <li>{user.email}</li>
                            <li>{user.birthday}</li>
                            <li>{user.phone}</li>
                            <li>{user.rating}</li>
                            <li>{user.role}</li>
                        </ul>
                        <div className="flex gap-2 mt-2">
                            <button className="bg-neutral-600 hover:bg-neutral-800 hover:cursor-pointer text-white px-5 py-2 rounded-md w-fit" onClick={() => { router.visit(`/users/${user.id}`) }}>Edit</button>
                            <button className="bg-red-600 hover:bg-red-800 hover:cursor-pointer text-white px-5 py-2 rounded-md w-fit"
                                onClick={() => { handleDelete(user.id) }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </GlobalLayout>
    );
}