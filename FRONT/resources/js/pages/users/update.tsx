import Button from "@/components/Button";
import { fetchOneUser, updateUser } from "@/fetch/users";
import GlobalLayout from "@/layouts/global-layout";
import { User } from "@/types/users";
import { useEffect, useState } from "react";

export default function UpdateUser() {

    const location = window.location.href;
    const id = location.split('/').pop();

    const [user, setUser] = useState<User | undefined>(undefined);

    const getUser = async () => {
        const response = await fetchOneUser(id);
        const responseJSON = await response.json();
        console.log({ response, responseJSON });
        setUser(responseJSON.user);
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form: User = {
            id: user?.id,
            name: e.currentTarget.name.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            birthday: e.currentTarget.birthday.value,
            phone: e.currentTarget.phone.value,
            role: e.currentTarget.role?.value,
        };

        console.log(form);

        await updateUser(form);
    }

    return (
        <GlobalLayout>
            {user && <form className="flex flex-col gap-4 w-fit" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={user?.name} required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" defaultValue={user?.email} required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" name="birthday" value={user?.birthday} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" defaultValue={user?.phone} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="role">Role</label>
                    <select name="role">
                        {user.role[0] === 'admin' && <option value="admin" selected>Admin</option>}
                        {user.role[0] === 'user' && <option value="user" selected>User</option>}
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>

                <Button type="submit">Edit User</Button>
            </form>}
        </GlobalLayout>
    );
}