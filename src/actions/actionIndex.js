import axios from 'axios';

export const POST_EVENT = 'post_event';

export function signupEvent(values) {
    const request = axios.post('http://localhost:3000/api/events', values);

    return {
        type: POST_EVENT,
        payload: request
    };
};