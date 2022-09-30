// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Campaign
 * @dev Implements project crowdfunding platform
 */
 
import "./member.sol";
import "./item.sol";
import "./modifier.sol";


contract Supplychain is  Modifier{
    event itemcreated(uint upc, address _address);
    event openForSale(uint upc);
    event orderPlaced(uint upc , address _address);
    event shipped(uint upc,address _address);
    event checked(uint upc);
    event received(uint upc, address _address);
   

   function addSupplier(string memory _uname , string memory place) public{
       participant memory  newParticipant;
       newParticipant.username =_uname;
       newParticipant.userId = pc;
       newParticipant.utype = user_type.supplier;
       newParticipant.user_address =msg.sender;
       newParticipant.location = place;
       participants[pc]=newParticipant;
       participantsId[msg.sender]=newParticipant;
       pc=pc+1;

   }
   function addretailer(string memory _uname , string memory place) public {
        participant memory newParticipant ;
        newParticipant.username =_uname;
        newParticipant.userId = pc;
        
        newParticipant.utype= user_type.retailer;
        newParticipant.user_address = msg.sender;
        newParticipant.location = place;
        participants[pc]=newParticipant;
        participantsId[msg.sender]=newParticipant;
        pc=pc+1;

    }
    function addManufacturer(string memory _uname , string memory place) public {
        participant memory newParticipant ;
        newParticipant.username =_uname;
        newParticipant.userId = pc;
        
        newParticipant.utype= user_type.manufacturer;
        newParticipant.user_address = msg.sender;
        newParticipant.location = place;
        participants[pc]=newParticipant;
        participantsId[msg.sender]=newParticipant;
        pc=pc+1;

    }
    function addcustomer(string memory _uname , string memory place) public {
        participant memory newParticipant ;
        newParticipant.username =_uname;
        newParticipant.userId = pc;
        
        newParticipant.utype= user_type.manufacturer;
        newParticipant.user_address = msg.sender;
        newParticipant.location = place;
        participants[pc]=newParticipant;
        participantsId[msg.sender]=newParticipant;
        pc=pc+1;
    }
    function addItem(string memory _product_name , uint cost) public 
    {
        item storage newItem = Items[ic];
        newItem.product_name =_product_name;
        newItem.productId = ic;
        newItem.cost = cost;
        newItem.itemOwner = msg.sender;
        // newItem.productState = state.manufacturer;
        // newItem.current_location = msg.sender.location;
        newItem.norders=0;
        newItem.order_history.push(msg.sender);
        // Items[ic]=newItem;
        emit itemcreated(ic ,msg.sender);
        ic=ic+1;
    }
    // change krna hain isko
 
    function moveProduct(uint _id) public {
        Items[_id].norders++;
        Items[_id].itemOwner = msg.sender;
        Items[_id].order_history.push(msg.sender);
    }
    
    function personDetail(uint _id) public view returns(participant memory)
    {
        return participants[_id];
    }
    
    function getOrderHistory(uint _id)public view returns(address [] memory){
        return Items[_id].order_history;
    }
    // function productDetail(uint _id) public view returns (item memory)
    // {
    //     return Items[_id];
    // }
}