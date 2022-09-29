// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Campaign
 * @dev Implements project crowdfunding platform
 */
contract Participant{
    uint pc=0;
    enum user_type{
        manufacturer,
        supplier,
        customer,
        retailer
    }

    struct participant{
        string username;
        uint userId;
        user_type utype;
        string location;
        address user_address;
    }
    mapping(uint=>participant) public participants;
    mapping(address=>participant) participantsId;
}