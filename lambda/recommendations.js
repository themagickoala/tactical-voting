import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    const data = await (await fetch('https://tacticalvote.co.uk/data/recommendations.json', { headers: { Accept: 'application/json'}})).json();
    return {
        statusCode: 200,
        body: data,
    };
};
