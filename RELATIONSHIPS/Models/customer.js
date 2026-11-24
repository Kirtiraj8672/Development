//mongoose
const mongoose = require("mongoose");

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
            ref: "Order"
        }
    ]
})

const Order = mongoose.model("Order" , orderSchema);

const Customer = mongoose.model("Customer" , customerSchema);

// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name : "Raju bro",
//     });
//     //extracting or finding order and pushing it
//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);

// }

// addCustomer();


//find customer 
const findCustomer = async ()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}


findCustomer();


// add a customer in Data base 
    const addCust = async() => {
        let newCust = new Customer ({
            name : " Shyam "
        });

        let newOrder = new Order ({
            item : "Pizza",
            price : 250 
        });

        newCust.orders.push(newOrder);

        await newCust.save();
        await newOrder.save();

        console.log("added new customer");

    }

    //addCust();


// delete a customer froma a Database 

const delCust = async () =>{
    let data = await Customer.findByIdAndDelete("6b059a4de142372479663ac5");
    console.log(data);
}

delCust();

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