import Button from "@/components/Button";
import { createUser } from "@/fetch/users";
import GlobalLayout from "@/layouts/global-layout";
import { User } from "@/types/users";
import { router } from "@inertiajs/react";

export default function CreateUser() {


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const form: User = {
            name: e.currentTarget.name.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            birthday: e.currentTarget.birthday.value,
            phone: e.currentTarget.phone.value,
            role: e.currentTarget.role?.value,
        };

        await createUser(form);
        router.visit('/users');
    }

    return (
        <GlobalLayout>
            <form className="flex flex-col gap-4 w-fit" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" name="birthday" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="role">Role</label>
                    <select name="role">
                        <option value="user"></option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>

                <Button type="submit">Create User</Button>
            </form>
        </GlobalLayout>
    );
}