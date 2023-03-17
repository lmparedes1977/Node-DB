// import mongodb from "mongodb";

// function getClient(){
//     const uri = "mongodb+srv://lmparedes:mongo2023@cluster0.krv7pn9.mongodb.net/?retryWrites=true&w=majority";
//     return new mongodb.MongoClient(uri);
// }

// export default { getClient };

import mongoose from "mongoose";

async function connect(){
    const uri = "mongodb+srv://lmparedes:mongo2023@cluster0.krv7pn9.mongodb.net/?retryWrites=true&w=majority";
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}


export default {
    connect,
};
