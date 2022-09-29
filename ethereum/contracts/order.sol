// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Campaign
 * @dev Implements project crowdfunding platform
 */

import "./item.sol";
import "./member.sol";

contract order is Item, Participant{
    uint on =0 ;
    enum Order_state{
       order_placed,
       order_cancelled,
       order_delivered
   }

   struct Order{
      uint orderId ;
      item orderItem;
      address buyer ;
      Order_state order_state;

   }
   mapping(uint=>Order) orders;
}