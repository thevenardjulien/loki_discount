export default async function login(email: string, password: string) {
    const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok && response.status === 200) {
        return response;
    } else if (response.status === 401) {
        return response;
    }

    throw new Error('Something went wrong');
}
