module.exports = (uri) => {
    return {
        connect,
    }

    async function connect () {
        return await require('mongoose').connect(uri);
    }
}
