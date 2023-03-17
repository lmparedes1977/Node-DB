import mongo from "./mongo.db.js";
import ProductInfoSchema from "../schemas/productInfo.schema.js"

async function createProductInfo(productInfo){
    try{
        const mongoose = await mongo.connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        productInfo = new ProductInfo(productInfo);
        await productInfo.save();
    } catch(err){
        throw err
    }
    // const client = mongo.getClient();
    // try{
    //     await client.connect();
    //     return await client.db("store").collection("productInfo").insertOne(productInfo);
    // }catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }
}

async function updateProductInfo(productInfo){
    try{
        const mongoose = await mongo.connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        
        await ProductInfo.findOneAndUpdate({productId: productInfo.productId}, productInfo);
    } catch(err){
        throw err
    }
    // const client = mongo.getClient();
    // try{
    //     await client.connect();
    //     return await client.db('store').collection("productInfo").updateOne(
    //         {procuctId: procuctInfo.procuctId},
    //         {$set: {...procuctInfo}}
    //         );
    // } catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }
}

async function getProductInfo(productId){
    try{
        const mongoose = await mongo.connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.findOne({productId});
        await query.exec();
    } catch(err){
        throw err
    }
    // const client = mongo.getClient();
    // try{
    //     await client.connect();
    //     return await client.db("store").collection("productInfo").findOne({productId});
    // } catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }
}

async function createReview(review, productId){
    try{
        const productInfo = await getProductInfo(productId);
        productInfo.reviews.push(review);
        await updateProductInfo(productInfo);
    } catch(err){
        throw err;
    }
}

async function deleteReview(productId, index){
    try{
        const productInfo = await getProductInfo(parseInt(productId));
        productInfo.reviews.splice(parseInt(index), 1);
        await updateProductInfo(productInfo);
    } catch(err){
        throw err;
    }
}

async function getAllProductsInfo(){
    try{
        const mongoose = await mongo.connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.find({}); 
        return await query.exec();
    } catch(err){
        throw err
    }
    // const client = mongo.getClient();
    // try{
    //     await client.connect();
    //     const teste = await client.db("store").collection("productInfo").find({}).toArray();
    //     return teste
    // } catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }
}

export default {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    createReview,
    deleteReview,
    getAllProductsInfo,
};