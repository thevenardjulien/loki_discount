import login from "@/fetch/login";
import { toast } from "sonner";

export default function Login() {

    interface LoginForm {
        email: string;
        password: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form: LoginForm = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };

        console.log('Form', form);

        const response = await login(form.email, form.password);
        const responseJSON = await response.json();
        console.log({ response, responseJSON });

        if (response.ok && response.status === 200) {
            localStorage.setItem('token', responseJSON.token);
            localStorage.setItem('user', JSON.stringify(responseJSON.user));
            window.location.href = '/';
        } else if (responseJSON.message === 'Invalid Credentials') {
            toast.error('Invalid Credentials');
        } else {
            toast.error('Login Failed');
        }
    };

    return (
        <div>
            <h1 className="text-3xl mb-4 p-4">Login</h1>
            <form className="flex flex-col gap-4 w-fit p-4" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type='submit' className="bg-neutral-600 hover:bg-neutral-800 hover:cursor-pointer text-white px-10 py-3 rounded-md w-fit">Login</button>
            </form>
        </div>
    );
}