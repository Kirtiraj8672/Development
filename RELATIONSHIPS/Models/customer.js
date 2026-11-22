//mongoose
const mongoose = require("mongoose");
const { type } = require("node:os");
const { ref } = require("node:process");
const {Schema} = mongoose;

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

//schema 
const orderSchema = new Schema({
    item :{
        type : String,
    },
    price : {
        type : Number,
    }

});

const customerSchema = new Schema ({
    name : String , 
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref: "order"
        }
    ]
})

const Order = mongoose.model("Order" , orderSchema);

const Customer = mongoose.model("Customer" , customerSchema);

const addCustomer = async () => {
    let cust1 = new Customer({
        name : "Raju bro",
    });
    //extracting or finding order and pushing it
    let order1 = await Order.findOne({item: "Chips"});
    let order2 = await Order.findOne({item: "Chocolate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);

}

addCustomer();

//order adding 
// const addOrder = async ()=> {
//     let res = await Order.insertMany([
//         {item : "Samosa" , price: 12},
//         {item : "Chips", price: 10},
//         {item : "Chocolate", price: 40},
//     ]);
//     console.log(res);
// };

// addOrder();