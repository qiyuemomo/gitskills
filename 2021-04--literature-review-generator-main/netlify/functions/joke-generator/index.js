exports.handler = async function(event, context) {
    const jokes = [
        "Time flies like an arrow. Fruit flies like a banana.",
        "Why can't you play poker on the African Savanna? There's too many cheetahs.",
        "A burger walks into a bar. The bartender says 'Sorry, we don't serve food here'",
        "A plateau is the highest form of flattery.",
        "What’s more amazing than a talking dog? A spelling bee.",
        "Atheism is a non-prophet organization.",
        "What's brown and sticky? A stick.",
        "Orion’s Belt is a huge waist of space.",        
    ]
    return {
        statusCode: 200,
        body: JSON.stringify({joke: jokes[Math.floor(Math.random()*jokes.length)]})
    };
}