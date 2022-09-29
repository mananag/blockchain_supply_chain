// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Campaign
 * @dev Implements project crowdfunding platform
 */
contract Item{
   uint ic=0;
//    enum state{
//        starting,
//        Ordered,
//        shipped,
//        atqualitycheck,
//        returnedback,
//        recievedByManufacture
//    }
   struct item{
       string product_name;
       uint productId;
       address itemOwner;
       string current_location;
       mapping(uint =>address) order_history;
       uint norders;
       uint cost;
       
   }
   mapping(uint=>item) public Items;
}