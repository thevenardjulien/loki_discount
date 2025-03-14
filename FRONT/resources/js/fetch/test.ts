export async function fetchTest() {
    const response = await fetch('http://localhost:8000/api/test', {
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
