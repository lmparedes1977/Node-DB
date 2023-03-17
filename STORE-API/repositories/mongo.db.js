

// export default { getClient };

import mongoose from "mongoose";

async function connect(){
    const uri = "string de conexão";
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}


export default {
    connect,
};
