const { CustomError } = require("./HandleResponseError");
const { CHAINCODE_NAMES } = require("./helper");


const Loan_SCHEMA = [
  { "name": "Id" },
  { "name": "CreatedOn" },
  { "name": "CreatedBy" },
  { "name": "IsDelete" },
  { "name": "IsProcessed" },
  { "name": "LoanId" },
  { "name": "FirstName" },
  { "name": "LastName" },
  { "name": "DateOfBirth" },
  { "name": "Gender" },
  { "name": "MobileNum" },
  { "name": "EmailId" },
  { "name": "AadharCard" },
  { "name": "PanCard" },
  { "name": "LoanAmount" },
  { "name": "LoanType" },
  { "name": "IssuerName" },
  { "name": "CIBIL" },
];

const Shipment_SCHEMA = [
  { "name": "Id" },
  { "name": "CreatedOn" },
  { "name": "CreatedBy" },
  { "name": "IsDelete" },
  { "name": "IsHidden" },
  { "name": "IsProcessed" },
  { "name": "CurrentLocation" },
  { "name": "ShipmentId" },
  { "name": "Product" },
  { "name": "StartDate" },
  { "name": "Quantity" },
  { "name": "Value" },
];

const MineTrace_SCHEMA = [
  { "name": "Id" },
  { "name": "CreatedOn" },
  { "name": "CreatedBy" },
  { "name": "IsDelete" },
  { "name": "IsHidden" },
  { "name": "State" },
  { "name": "Coordinates" },
  { "name": "Severity" },
  { "name": "TypeOfMine" },
  { "name": "MineFoundDate" },
  { "name": "Time" },
  { "name": "Description" },
];

exports.getSchema = (chaincodeName) => {
  switch (chaincodeName) {
    case CHAINCODE_NAMES.LOAN:
      return Loan_SCHEMA;
    case CHAINCODE_NAMES.SHIPMENT:
      return Shipment_SCHEMA;
    case CHAINCODE_NAMES.MINETRACE:
        return MineTrace_SCHEMA;

    default:
      throw new CustomError({
        code: 404,
        message: `Schema for chaincodename : ${chaincodeName} does not exists`,
      });
  }
};
