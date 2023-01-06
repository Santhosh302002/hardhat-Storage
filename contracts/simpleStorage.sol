// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.8;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
contract simpleStorage{
    uint256 public number;
    address sender;

    struct information{
        string name;
        uint256 regNo;
    }
    information[] public people;

    function storeNumber(uint256 Number) public{
        number=Number;
    }
    function reteiveNumver() public view returns(uint256){
        return number;
    }
    function storeInformation(string memory Name,uint256 REG_NO) public {
      people.push(information(Name,REG_NO));
    }
    function reteiveInfoName(uint256 INDEX) public view returns(string memory){
       return (people[INDEX].name);
    }
    function reteiveInfoReg(uint256 INDEX) public view returns(uint256){
       return (people[INDEX].regNo);
    }
}