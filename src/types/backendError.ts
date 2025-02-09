type BackendError = {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export default BackendError;