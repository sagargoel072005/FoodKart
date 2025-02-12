// // Sample Restaurant Data
// const resList = [
//   {
//     card: {
//       info: {
//         id: "935418",
//         name: "Shree Jee Restaurant",
//         cloudinaryImageId: "xdr27qf1jrc6k22jbmid",
//         costForTwo: "₹500 for two",
//         cuisines: ["Beverages", "Snacks"],
//         avgRating: 4.1,
//         sla: { deliveryTime: 31 },
//       },
//     },
//   },
//   {
//     card: {
//       info: {
//         id: "908479",
//         name: "Chopper's Stop",
//         cloudinaryImageId: "qjyat4pyrngstucw3uox",
//         costForTwo: "₹300 for two",
//         cuisines: ["Chinese", "Snacks", "Fast Food"],
//         avgRating: 4.2,
//         sla: { deliveryTime: 52 },
//       },
//     },
//   },
//   {
//     card: {
//       info: {
//         id: "391413",
//         name: "Grover Mithaivala",
//         cloudinaryImageId: "bba088ec8a7e007024efc7d9cdabd37c",
//         costForTwo: "₹300 for two",
//         cuisines: ["Sweets", "Street Food", "Snacks", "Beverages", "Desserts", "North Indian"],
//         avgRating: 4.5,
//         sla: { deliveryTime: 29 },
//       },
//     },
//   },
//   {
//     card: {
//       info: {
//         id: "769143",
//         name: "LaBash",
//         cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/10/11/d6c8cb63-11ca-403c-84eb-39397a9ec07f_5f82ae8e-746b-43c3-a368-be6efe6eed07.jpg",
//         costForTwo: "₹800 for two",
//         cuisines: ["North Indian", "Pizzas", "Fast Food", "Biryani"],
//         avgRating: 4.0,
//         sla: { deliveryTime: 45 },
//       },
//     },
//   },
//   {
//     card: {
//       info: {
//         id: "344221",
//         name: "New Roti Masala",
//         cloudinaryImageId: "qjyat4pyrngstucw3uox",
//         costForTwo: "₹100 for two",
//         cuisines: ["Tandoor", "Chinese", "North Indian"],
//         avgRating: 3.9,
//         sla: { deliveryTime: 34 },
//       },
//     },
//   },
//   {
//     card: {
//         info: {
//             id: "65797",
//                 name: "Leon's - Burgers & Wings (Leon Grill)",
//                     cloudinaryImageId: "r4ufflqojich0r29efvc",
//                         costForTwo: "₹500 for two",
//                             cuisines: ["Beverages", "Snacks"],
//                                 avgRating: 4.8,
//                                     sla: { deliveryTime: 31 },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "5934",
//                 name: "Burger King",
//                     cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//                         costForTwo: "₹300 for two",
//                             cuisines: ["Chinese", "Snacks", "Fast Food"],
//                                 avgRating: 4.2,
//                                     sla: { deliveryTime: 52 },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "298351",
//                 name: "Gangs Of Goli",
//                     cloudinaryImageId: "spwzgnaextan26doceft",
//                         costForTwo: "₹150 for two",
//                             cuisines: ["Indian"],
//                                 avgRating: 4.1,
//                                     sla: { deliveryTime: 28 },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "23682",
//                 name: "McDonald's",
//                     cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
//                         costForTwo: "₹300 for two",
//                             cuisines: ["Sweets", "Street Food", "Snacks", "Beverages", "Desserts", "North Indian"],
//                                 avgRating: 4.5,
//                                     sla: {
//                 deliveryTime: 29,
//         },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "390621",
//                 name: "The Belgian Waffle Co.",
//                     cloudinaryImageId: "erthy4fufoubazvpbzow",
//                         costForTwo: "₹500 for two",
//                             cuisines: ["Beverages", "Snacks"],
//                                 avgRating: 4.1,
//                                     sla: {
//                 deliveryTime: 31,
//         },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "425",
//                 name: "Hotel Empire",
//                     cloudinaryImageId: "un4omn7rcunkmlw6vikr",
//                         costForTwo: "₹800 for two",
//                             cuisines: ["North Indian", "Pizzas", "Fast Food", "Biryani"],
//                                 avgRating: 4.0,
//                                     sla: {
//                 deliveryTime: 45,
//         },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "93741",
//                 name: "Subway",
//                     cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
//                         costForTwo: "₹100 for two",
//                             cuisines: ["Tandoor", "Chinese", "North Indian"],
//                                 avgRating: 3.9,
//                                     sla: {
//                 deliveryTime: 34,
//         },
//         },
//     },
// }, {
//     card: {
//         info: {
//             id: "10576",
//                 name: "Pizza Hut",
//                     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//                         costForTwo: "₹500 for two",
//                             cuisines: ["Beverages", "Snacks"],
//                                 avgRating: 4.1,
//                                     sla: { deliveryTime: 31 },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "334475",
//                 name: "KFC",
//                     cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//                         costForTwo: "₹300 for two",
//                             cuisines: ["Chinese", "Snacks", "Fast Food"],
//                                 avgRating: 4.2,
//                                     sla: { deliveryTime: 52 },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "75966",
//                 name: "Kaati Zone Rolls & Wraps",
//                     cloudinaryImageId: "ibmfw10arqzrdibq03mt",
//                         costForTwo: "₹150 for two",
//                             cuisines: ["Indian"],
//                                 avgRating: 4.1,
//                                     sla: { deliveryTime: 28 },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "68144",
//                 name: "WarmOven Cake & Desserts",
//                     cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
//                         costForTwo: "₹300 for two",
//                             cuisines: ["Sweets", "Street Food", "Snacks", "Beverages", "Desserts", "North Indian"],
//                                 avgRating: 4.5,
//                                     sla: {
//                 deliveryTime: 29,
//         },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "375041",
//                 name: "Andhra Gunpowder",
//                     cloudinaryImageId: "byilgyrcfz690ryoasww",
//                         costForTwo: "₹500 for two",
//                             cuisines: ["Beverages", "Snacks"],
//                                 avgRating: 4.1,
//                                     sla: {
//                 deliveryTime: 31,
//         },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "506324",
//                 name: "Louis Burger",
//                     cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
//                         costForTwo: "₹800 for two",
//                             cuisines: ["North Indian", "Pizzas", "Fast Food", "Biryani"],
//                                 avgRating: 4.0,
//                                     sla: {
//                 deliveryTime: 45,
//         },
//         },
//     },
// },
// {
//     card: {
//         info: {
//             id: "68142",
//                 name: "Indiana Burgers",
//                     cloudinaryImageId: "sqj2kcjjx6n0ng6te1hp",
//                         costForTwo: "₹100 for two",
//                             cuisines: ["Tandoor", "Chinese", "North Indian"],
//                                 avgRating: 3.9,
//                                     sla: {
//                 deliveryTime: 34,
//         },
//         },
//     },
// },
// ];

// export default resList;
