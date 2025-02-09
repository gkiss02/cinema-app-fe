const hourFormatter = (minutes: number | undefined) =>{
    if (!minutes) {
        return '';
    }
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

export default hourFormatter;