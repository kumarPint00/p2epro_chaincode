#!/bin/bash

echo "************ Package Loan chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/Loan/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer lifecycle chaincode package Loan.tar.gz --path /opt/gopath/src/github.com/chaincode/Loan/ --lang golang --label Loan_1.0

echo "***************** Install Loan chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer lifecycle chaincode install Loan.tar.gz


echo "************ Package Shipment chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/Shipment/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer lifecycle chaincode package Shipment.tar.gz --path /opt/gopath/src/github.com/chaincode/Shipment/ --lang golang --label Shipment_1.0

echo "***************** Install Shipment chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer lifecycle chaincode install Shipment.tar.gz


echo "************ Package MineTrace chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/MineTrace/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer lifecycle chaincode package MineTrace.tar.gz --path /opt/gopath/src/github.com/chaincode/MineTrace/ --lang golang --label Shipment_1.0

echo "***************** Install MineTrace chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/users/Admin@org2.test.com/msp CORE_PEER_ADDRESS=peer0.org2.test.com:7051 CORE_PEER_LOCALMSPID="org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt 
peer lifecycle chaincode install MineTrace.tar.gz
