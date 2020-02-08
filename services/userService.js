const request = require('request')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
fetchUser = async(reqData) => {
    try {
        console.log(reqData);
        const data = await new Promise((resolve,reject) => {
              request.get("https://jsonplaceholder.typicode.com/users",(error,response,body) => {
              if (error) {return reject({success :false,message :"Something went wrong"});}
              return resolve(JSON.parse(body));   
        });})

        const usersSchema = new Schema ({
            "id": Number,
            "name": String,
            "username": String,
            "email": String,
            "address": {
                "street": String,
                "suite": String,
                "city": String,
                "zipcode": String,
                "geo": {
                    "lat": Number,
                    "lng": Number
                }
            },
            "phone": String,
            "website": String,
            "company": {
                "name": String,
                "catchPhrase": String,
                "bs": String
            },
            "pwd": String,
            "role": String
        })
        const role = ["admin","viewer"];
        data.forEach(userData => {
            userData["pwd"] = Math.floor(Math.random()*1000);
            userData["role"] = role[(Math.floor(Math.random()*2))];
        })
        const Model = mongoose.model('master', usersSchema);
        const response = await new Promise((resolve,reject) => 
            Model.insertMany(data,(error,docs)=> { 
            if (error) return reject(error); 
            return resolve(docs)}));
        return response;
    } catch (error) {
        console.log(error);
        return {success :false,message :"Something went wrong"}
    }
}

fetchPosts = async(reqData) => {

    try {
        return await new Promise((resolve,reject) => {
              request.get("https://jsonplaceholder.typicode.com/posts",(error,response,body) => {
              if (error) {return reject({success :false,message :"Something went wrong"});}
              return resolve(JSON.parse(body));   
        });})
    } catch (error) {
        return {success :false,message :"Something went wrong"}
    }
}

fetchComments = async(reqData) => {
    try {
        return await new Promise((resolve,reject) => {
              request.get("https://jsonplaceholder.typicode.com/comments",(error,response,body) => {
              if (error) {return reject({success :false,message :"Something went wrong"});}
              return resolve(JSON.parse(body));   
        });})
    } catch (error) {
        return {success :false,message :"Something went wrong"}
    }
}

module.exports = {
    fetchUser,
    fetchComments,
    fetchPosts
}