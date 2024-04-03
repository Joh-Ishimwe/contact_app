const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI || "mongodb+srv://jishimwe24:tOdtY7imhqwkLI7S@cluster0.vypevxm.mongodb.net/ContactApp1",
    secret: process.env.SECRET ||'mysecret'
}

export default configs;