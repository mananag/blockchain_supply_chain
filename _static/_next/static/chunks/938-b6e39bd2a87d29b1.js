(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{83544:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(85893);c(67294);var e=c(63272),f=c(11163);function g(){var a=function(a,c){var d=c.name;b.push(d)},b=(0,f.useRouter)();return(0,d.jsxs)(e.Z,{pointing:!0,secondary:!0,style:{marginTop:"10px"},children:[(0,d.jsx)(e.Z.Item,{name:"/",active:""===b.pathname,onClick:a,children:"Crowd Coin"}),(0,d.jsxs)(e.Z.Menu,{position:"right",children:[(0,d.jsx)(e.Z.Item,{name:"/",active:"/"===b.pathname,onClick:a,children:"Items"}),(0,d.jsx)(e.Z.Item,{name:"/campaigns/new",active:"/campaigns/new"===b.pathname,onClick:a,children:"+"})]})]})}var h=c(95712),i=c(9008),j=c.n(i),k=function(a){var b=a.children,c=a.title;return(0,d.jsxs)("div",{children:[(0,d.jsx)(j(),{children:(0,d.jsx)("title",{children:void 0===c?"Default":c})}),(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(g,{}),b]})]})}},6189:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(1508),e=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"upc","type":"uint256"}],"name":"checked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"upc","type":"uint256"},{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"itemcreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"upc","type":"uint256"}],"name":"openForSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"upc","type":"uint256"},{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"orderPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"upc","type":"uint256"},{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"received","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"upc","type":"uint256"},{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"shipped","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Items","outputs":[{"internalType":"string","name":"product_name","type":"string"},{"internalType":"uint256","name":"productId","type":"uint256"},{"internalType":"address","name":"itemOwner","type":"address"},{"internalType":"string","name":"current_location","type":"string"},{"internalType":"uint256","name":"norders","type":"uint256"},{"internalType":"uint256","name":"cost","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_product_name","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"}],"name":"addItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uname","type":"string"},{"internalType":"string","name":"place","type":"string"}],"name":"addManufacturer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uname","type":"string"},{"internalType":"string","name":"place","type":"string"}],"name":"addSupplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uname","type":"string"},{"internalType":"string","name":"place","type":"string"}],"name":"addcustomer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uname","type":"string"},{"internalType":"string","name":"place","type":"string"}],"name":"addretailer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getOrderHistory","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"moveProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"participants","outputs":[{"internalType":"string","name":"username","type":"string"},{"internalType":"uint256","name":"userId","type":"uint256"},{"internalType":"enum Participant.user_type","name":"utype","type":"uint8"},{"internalType":"string","name":"location","type":"string"},{"internalType":"address","name":"user_address","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"personDetail","outputs":[{"components":[{"internalType":"string","name":"username","type":"string"},{"internalType":"uint256","name":"userId","type":"uint256"},{"internalType":"enum Participant.user_type","name":"utype","type":"uint8"},{"internalType":"string","name":"location","type":"string"},{"internalType":"address","name":"user_address","type":"address"}],"internalType":"struct Participant.participant","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]}'),f=c(51181),g=e.Mt,h=new d.Z.eth.Contract(g,f.Lk)},1508:function(a,b,c){"use strict";var d,e=c(3283),f=c.n(e),g=c(51181);d=new(f())(void 0!==window.web3?f().givenProvider:g.c2),b.Z=d},62859:function(){},75304:function(){},88677:function(){},62808:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},52361:function(){},94616:function(){},6567:function(){},43503:function(){},55896:function(){},87500:function(){},51181:function(a){"use strict";a.exports=JSON.parse('{"c2":"https://eth-goerli.g.alchemy.com/v2/zrhu_HMKw7FMA40FRoB3CeRkT2bsLOlq","Lk":"0x052E3CcA9b549Dcf83A3aC30259B9518743E6D83"}')}}])