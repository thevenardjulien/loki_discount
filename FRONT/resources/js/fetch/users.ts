import { User } from '@/types/users';

export async function fetchUsers() {
    const response = await fetch('http://localhost:8000/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok && response.status === 200) {
        return response;
    }

    throw new Error('Something went wrong');
}

export async function fetchOneUser(token: string, id: string | undefined) {
    const response = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (response.ok && response.status === 200) {
        return response;
    }

    throw new Error('Something went wrong');
}

export async function createUser(user: User) {
    const response = await fetch('http://localhost:8000/api/users/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(user),
    });

    if (response.ok && response.status === 201) {
        return response;
    } else {
        console.error(response);
        throw new Error('Something went wrong');
    }
}

export async function updateUser(user: User) {
    const response = await fetch(`http://localhost:8000/api/users/update/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(user),
    });

    if (response.ok && response.status === 200) {
        return response;
    } else {
        console.error(response);
        throw new Error('Something went wrong');
    }
}

export async function deleteUser(id: number) {
    const response = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    if (response.ok && response.status === 200) {
        return response;
    } else if (response.ok && response.status === 404) {
        return response;
    } else {
        console.error(response);
        throw new Error('Something went wrong');
    }
}
