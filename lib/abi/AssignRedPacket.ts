
export const AssignRedPacketAddress = "0x6F0AF3Bdd53A55cc0dCeAD7dC80137EC0bF84223"
export const AssignRedPacketAbi = {
    "contractName": "AssignRedPacket",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_count",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_isEqual",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "count",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "totalAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "payable": true
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "payable": true
        },
        {
            "inputs": [],
            "name": "grabRedPacket",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
            "payable": true
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_count\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_isEqual\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"count\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"grabRedPacket\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/redpacket.sol\":\"AssignRedPacket\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/redpacket.sol\":{\"keccak256\":\"0x2bab5e595f747351cb8fc505c0983cb155012525073327cccc01cf1907826f56\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dcc5cb35862b91e376247981d6ac49b4ec67db01048d01ba9a47dd449e5fcbc1\",\"dweb:/ipfs/Qmcwac7AGqw1oQqebH6VBUPWkDMugoErrmvsg4bSP2sAHz\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b5060405162000cbd38038062000cbd8339818101604052810190610034919061010f565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028190555080600360006101000a81548160ff021916908315150217905550505061014f565b600080fd5b6000819050919050565b6100b4816100a1565b81146100bf57600080fd5b50565b6000815190506100d1816100ab565b92915050565b60008115159050919050565b6100ec816100d7565b81146100f757600080fd5b50565b600081519050610109816100e3565b92915050565b600080604083850312156101265761012561009c565b5b6000610134858286016100c2565b9250506020610145858286016100fa565b9150509250929050565b610b5e806200015f6000396000f3fe608060405260043610610072576000357c01000000000000000000000000000000000000000000000000000000009004806306661abd1461007757806312065fe0146100a25780631a39d8ef146100cd5780633ccfd60b146100f8578063c4712e2114610102578063d0e30db01461010c575b600080fd5b34801561008357600080fd5b5061008c610116565b6040516100999190610678565b60405180910390f35b3480156100ae57600080fd5b506100b761011c565b6040516100c49190610678565b60405180910390f35b3480156100d957600080fd5b506100e261013b565b6040516100ef9190610678565b60405180910390f35b610100610141565b005b61010a61029c565b005b610114610601565b005b60025481565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c6906106f0565b60405180910390fd5b600060015411610214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020b9061075c565b60405180910390fd5b600060018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610299573d6000803e3d6000fd5b50565b6000600154116102e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d89061075c565b60405180910390fd5b600060025411610326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031d906107c8565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103aa90610834565b60405180910390fd5b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160025403610463573373ffffffffffffffffffffffffffffffffffffffff166108fc6001549081150290604051600060405180830381858888f1935050505015801561045d573d6000803e3d6000fd5b506105e7565b600360009054906101000a900460ff16156104f257600060025460015461048a91906108b2565b9050806001600082825461049e91906108e3565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104eb573d6000803e3d6000fd5b50506105e6565b6000600160083360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254600154426040516020016105359594939291906109f9565b60405160208183030381529060405280519060200120600190046105599190610a58565b6105639190610a89565b90506000600a826001546105779190610abd565b61058191906108b2565b9050806001600082825461059591906108e3565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156105e2573d6000803e3d6000fd5b5050505b5b600260008154809291906105fa90610aff565b9190505550565b60003411610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b9061075c565b60405180910390fd5b34600160008282546106569190610a89565b92505081905550565b6000819050919050565b6106728161065f565b82525050565b600060208201905061068d6000830184610669565b92915050565b600082825260208201905092915050565b7f6e6f7420746865206f776e657200000000000000000000000000000000000000600082015250565b60006106da600d83610693565b91506106e5826106a4565b602082019050919050565b60006020820190508181036000830152610709816106cd565b9050919050565b7f6e6f7420656e6f75676800000000000000000000000000000000000000000000600082015250565b6000610746600a83610693565b915061075182610710565b602082019050919050565b6000602082019050818103600083015261077581610739565b9050919050565b7f6e6f207265647061636b657473206c6566740000000000000000000000000000600082015250565b60006107b2601283610693565b91506107bd8261077c565b602082019050919050565b600060208201905081810360008301526107e1816107a5565b9050919050565b7f616c726561647920677261622069742100000000000000000000000000000000600082015250565b600061081e601083610693565b9150610829826107e8565b602082019050919050565b6000602082019050818103600083015261084d81610811565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108bd8261065f565b91506108c88361065f565b9250826108d8576108d7610854565b5b828204905092915050565b60006108ee8261065f565b91506108f98361065f565b925082820390508181111561091157610910610883565b5b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061094282610917565b9050919050565b60006c0100000000000000000000000082029050919050565b600061096d82610949565b9050919050565b600061097f82610962565b9050919050565b61099761099282610937565b610974565b82525050565b60006109a882610917565b9050919050565b60006109ba82610962565b9050919050565b6109d26109cd8261099d565b6109af565b82525050565b6000819050919050565b6109f36109ee8261065f565b6109d8565b82525050565b6000610a058288610986565b601482019150610a1582876109c1565b601482019150610a2582866109e2565b602082019150610a3582856109e2565b602082019150610a4582846109e2565b6020820191508190509695505050505050565b6000610a638261065f565b9150610a6e8361065f565b925082610a7e57610a7d610854565b5b828206905092915050565b6000610a948261065f565b9150610a9f8361065f565b9250828201905080821115610ab757610ab6610883565b5b92915050565b6000610ac88261065f565b9150610ad38361065f565b9250828202610ae18161065f565b91508282048414831517610af857610af7610883565b5b5092915050565b6000610b0a8261065f565b915060008203610b1d57610b1c610883565b5b60018203905091905056fea26469706673582212209974066f5df34d4863e4200ab628e330092c3f9e25e3a83d04912059e357f2eb64736f6c63430008130033",
    "deployedBytecode": "0x608060405260043610610072576000357c01000000000000000000000000000000000000000000000000000000009004806306661abd1461007757806312065fe0146100a25780631a39d8ef146100cd5780633ccfd60b146100f8578063c4712e2114610102578063d0e30db01461010c575b600080fd5b34801561008357600080fd5b5061008c610116565b6040516100999190610678565b60405180910390f35b3480156100ae57600080fd5b506100b761011c565b6040516100c49190610678565b60405180910390f35b3480156100d957600080fd5b506100e261013b565b6040516100ef9190610678565b60405180910390f35b610100610141565b005b61010a61029c565b005b610114610601565b005b60025481565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c6906106f0565b60405180910390fd5b600060015411610214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020b9061075c565b60405180910390fd5b600060018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610299573d6000803e3d6000fd5b50565b6000600154116102e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d89061075c565b60405180910390fd5b600060025411610326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031d906107c8565b60405180910390fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103aa90610834565b60405180910390fd5b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160025403610463573373ffffffffffffffffffffffffffffffffffffffff166108fc6001549081150290604051600060405180830381858888f1935050505015801561045d573d6000803e3d6000fd5b506105e7565b600360009054906101000a900460ff16156104f257600060025460015461048a91906108b2565b9050806001600082825461049e91906108e3565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104eb573d6000803e3d6000fd5b50506105e6565b6000600160083360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254600154426040516020016105359594939291906109f9565b60405160208183030381529060405280519060200120600190046105599190610a58565b6105639190610a89565b90506000600a826001546105779190610abd565b61058191906108b2565b9050806001600082825461059591906108e3565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156105e2573d6000803e3d6000fd5b5050505b5b600260008154809291906105fa90610aff565b9190505550565b60003411610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b9061075c565b60405180910390fd5b34600160008282546106569190610a89565b92505081905550565b6000819050919050565b6106728161065f565b82525050565b600060208201905061068d6000830184610669565b92915050565b600082825260208201905092915050565b7f6e6f7420746865206f776e657200000000000000000000000000000000000000600082015250565b60006106da600d83610693565b91506106e5826106a4565b602082019050919050565b60006020820190508181036000830152610709816106cd565b9050919050565b7f6e6f7420656e6f75676800000000000000000000000000000000000000000000600082015250565b6000610746600a83610693565b915061075182610710565b602082019050919050565b6000602082019050818103600083015261077581610739565b9050919050565b7f6e6f207265647061636b657473206c6566740000000000000000000000000000600082015250565b60006107b2601283610693565b91506107bd8261077c565b602082019050919050565b600060208201905081810360008301526107e1816107a5565b9050919050565b7f616c726561647920677261622069742100000000000000000000000000000000600082015250565b600061081e601083610693565b9150610829826107e8565b602082019050919050565b6000602082019050818103600083015261084d81610811565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108bd8261065f565b91506108c88361065f565b9250826108d8576108d7610854565b5b828204905092915050565b60006108ee8261065f565b91506108f98361065f565b925082820390508181111561091157610910610883565b5b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061094282610917565b9050919050565b60006c0100000000000000000000000082029050919050565b600061096d82610949565b9050919050565b600061097f82610962565b9050919050565b61099761099282610937565b610974565b82525050565b60006109a882610917565b9050919050565b60006109ba82610962565b9050919050565b6109d26109cd8261099d565b6109af565b82525050565b6000819050919050565b6109f36109ee8261065f565b6109d8565b82525050565b6000610a058288610986565b601482019150610a1582876109c1565b601482019150610a2582866109e2565b602082019150610a3582856109e2565b602082019150610a4582846109e2565b6020820191508190509695505050505050565b6000610a638261065f565b9150610a6e8361065f565b925082610a7e57610a7d610854565b5b828206905092915050565b6000610a948261065f565b9150610a9f8361065f565b9250828201905080821115610ab757610ab6610883565b5b92915050565b6000610ac88261065f565b9150610ad38361065f565b9250828202610ae18161065f565b91508282048414831517610af857610af7610883565b5b5092915050565b6000610b0a8261065f565b915060008203610b1d57610b1c610883565b5b60018203905091905056fea26469706673582212209974066f5df34d4863e4200ab628e330092c3f9e25e3a83d04912059e357f2eb64736f6c63430008130033",
    "immutableReferences": {},
    "generatedSources": [
        {
            "ast": {
                "nodeType": "YulBlock",
                "src": "0:1559:2",
                "statements": [
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "47:35:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "57:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "73:2:2",
                                                "type": "",
                                                "value": "64"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "67:5:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "67:9:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "memPtr",
                                            "nodeType": "YulIdentifier",
                                            "src": "57:6:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "allocate_unbounded",
                        "nodeType": "YulFunctionDefinition",
                        "returnVariables": [
                            {
                                "name": "memPtr",
                                "nodeType": "YulTypedName",
                                "src": "40:6:2",
                                "type": ""
                            }
                        ],
                        "src": "7:75:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "177:28:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "194:1:2",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "197:1:2",
                                                "type": "",
                                                "value": "0"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nodeType": "YulIdentifier",
                                            "src": "187:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "187:12:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "187:12:2"
                                }
                            ]
                        },
                        "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                        "nodeType": "YulFunctionDefinition",
                        "src": "88:117:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "300:28:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "317:1:2",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "320:1:2",
                                                "type": "",
                                                "value": "0"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nodeType": "YulIdentifier",
                                            "src": "310:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "310:12:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "310:12:2"
                                }
                            ]
                        },
                        "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                        "nodeType": "YulFunctionDefinition",
                        "src": "211:117:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "379:32:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "389:16:2",
                                    "value": {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "400:5:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulIdentifier",
                                            "src": "389:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "361:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nodeType": "YulTypedName",
                                "src": "371:7:2",
                                "type": ""
                            }
                        ],
                        "src": "334:77:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "460:79:2",
                            "statements": [
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "517:16:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "526:1:2",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "529:1:2",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "519:6:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "519:12:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "519:12:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "483:5:2"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "508:5:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_uint256",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "490:17:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "490:24:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "eq",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "480:2:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "480:35:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nodeType": "YulIdentifier",
                                            "src": "473:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "473:43:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "470:63:2"
                                }
                            ]
                        },
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "453:5:2",
                                "type": ""
                            }
                        ],
                        "src": "417:122:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "608:80:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "618:22:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "offset",
                                                "nodeType": "YulIdentifier",
                                                "src": "633:6:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "627:5:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "627:13:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "618:5:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "676:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "validator_revert_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "649:26:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "649:33:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "649:33:2"
                                }
                            ]
                        },
                        "name": "abi_decode_t_uint256_fromMemory",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "586:6:2",
                                "type": ""
                            },
                            {
                                "name": "end",
                                "nodeType": "YulTypedName",
                                "src": "594:3:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "602:5:2",
                                "type": ""
                            }
                        ],
                        "src": "545:143:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "736:48:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "746:32:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "771:5:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "iszero",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "764:6:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "764:13:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nodeType": "YulIdentifier",
                                            "src": "757:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "757:21:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulIdentifier",
                                            "src": "746:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_bool",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "718:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nodeType": "YulTypedName",
                                "src": "728:7:2",
                                "type": ""
                            }
                        ],
                        "src": "694:90:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "830:76:2",
                            "statements": [
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "884:16:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "893:1:2",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "896:1:2",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "886:6:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "886:12:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "886:12:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "853:5:2"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "875:5:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_bool",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "860:14:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "860:21:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "eq",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "850:2:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "850:32:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nodeType": "YulIdentifier",
                                            "src": "843:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "843:40:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "840:60:2"
                                }
                            ]
                        },
                        "name": "validator_revert_t_bool",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "823:5:2",
                                "type": ""
                            }
                        ],
                        "src": "790:116:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "972:77:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "982:22:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "offset",
                                                "nodeType": "YulIdentifier",
                                                "src": "997:6:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "991:5:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "991:13:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "982:5:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "1037:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "validator_revert_t_bool",
                                            "nodeType": "YulIdentifier",
                                            "src": "1013:23:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1013:30:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1013:30:2"
                                }
                            ]
                        },
                        "name": "abi_decode_t_bool_fromMemory",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "950:6:2",
                                "type": ""
                            },
                            {
                                "name": "end",
                                "nodeType": "YulTypedName",
                                "src": "958:3:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "966:5:2",
                                "type": ""
                            }
                        ],
                        "src": "912:137:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "1146:410:2",
                            "statements": [
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "1192:83:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1194:77:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1194:79:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "1194:79:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "dataEnd",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1167:7:2"
                                                    },
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1176:9:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sub",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1163:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1163:23:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1188:2:2",
                                                "type": "",
                                                "value": "64"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "slt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1159:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1159:32:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "1156:119:2"
                                },
                                {
                                    "nodeType": "YulBlock",
                                    "src": "1285:128:2",
                                    "statements": [
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "1300:15:2",
                                            "value": {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1314:1:2",
                                                "type": "",
                                                "value": "0"
                                            },
                                            "variables": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulTypedName",
                                                    "src": "1304:6:2",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1329:74:2",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "headStart",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1375:9:2"
                                                            },
                                                            {
                                                                "name": "offset",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1386:6:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1371:3:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1371:22:2"
                                                    },
                                                    {
                                                        "name": "dataEnd",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1395:7:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "abi_decode_t_uint256_fromMemory",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1339:31:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1339:64:2"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "value0",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1329:6:2"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulBlock",
                                    "src": "1423:126:2",
                                    "statements": [
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "1438:16:2",
                                            "value": {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1452:2:2",
                                                "type": "",
                                                "value": "32"
                                            },
                                            "variables": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulTypedName",
                                                    "src": "1442:6:2",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1468:71:2",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "headStart",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1511:9:2"
                                                            },
                                                            {
                                                                "name": "offset",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1522:6:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1507:3:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1507:22:2"
                                                    },
                                                    {
                                                        "name": "dataEnd",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1531:7:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "abi_decode_t_bool_fromMemory",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1478:28:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1478:61:2"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "value1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1468:6:2"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_decode_tuple_t_uint256t_bool_fromMemory",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nodeType": "YulTypedName",
                                "src": "1108:9:2",
                                "type": ""
                            },
                            {
                                "name": "dataEnd",
                                "nodeType": "YulTypedName",
                                "src": "1119:7:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "value0",
                                "nodeType": "YulTypedName",
                                "src": "1131:6:2",
                                "type": ""
                            },
                            {
                                "name": "value1",
                                "nodeType": "YulTypedName",
                                "src": "1139:6:2",
                                "type": ""
                            }
                        ],
                        "src": "1055:501:2"
                    }
                ]
            },
            "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_uint256t_bool_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
            "id": 2,
            "language": "Yul",
            "name": "#utility.yul"
        }
    ],
    "deployedGeneratedSources": [
        {
            "ast": {
                "nodeType": "YulBlock",
                "src": "0:8472:2",
                "statements": [
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "52:32:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "62:16:2",
                                    "value": {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "73:5:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulIdentifier",
                                            "src": "62:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "34:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nodeType": "YulTypedName",
                                "src": "44:7:2",
                                "type": ""
                            }
                        ],
                        "src": "7:77:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "155:53:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "172:3:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "195:5:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "177:17:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "177:24:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "165:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "165:37:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "165:37:2"
                                }
                            ]
                        },
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "143:5:2",
                                "type": ""
                            },
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "150:3:2",
                                "type": ""
                            }
                        ],
                        "src": "90:118:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "312:124:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "322:26:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "headStart",
                                                "nodeType": "YulIdentifier",
                                                "src": "334:9:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "345:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "330:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "330:18:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "322:4:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value0",
                                                "nodeType": "YulIdentifier",
                                                "src": "402:6:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "415:9:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "426:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "411:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "411:17:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "358:43:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "358:71:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "358:71:2"
                                }
                            ]
                        },
                        "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nodeType": "YulTypedName",
                                "src": "284:9:2",
                                "type": ""
                            },
                            {
                                "name": "value0",
                                "nodeType": "YulTypedName",
                                "src": "296:6:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "tail",
                                "nodeType": "YulTypedName",
                                "src": "307:4:2",
                                "type": ""
                            }
                        ],
                        "src": "214:222:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "538:73:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "555:3:2"
                                            },
                                            {
                                                "name": "length",
                                                "nodeType": "YulIdentifier",
                                                "src": "560:6:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "548:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "548:19:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "548:19:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "576:29:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "595:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "600:4:2",
                                                "type": "",
                                                "value": "0x20"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "591:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "591:14:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "updated_pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "576:11:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "510:3:2",
                                "type": ""
                            },
                            {
                                "name": "length",
                                "nodeType": "YulTypedName",
                                "src": "515:6:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "updated_pos",
                                "nodeType": "YulTypedName",
                                "src": "526:11:2",
                                "type": ""
                            }
                        ],
                        "src": "442:169:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "723:57:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "memPtr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "745:6:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "753:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "741:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "741:14:2"
                                            },
                                            {
                                                "hexValue": "6e6f7420746865206f776e6572",
                                                "kind": "string",
                                                "nodeType": "YulLiteral",
                                                "src": "757:15:2",
                                                "type": "",
                                                "value": "not the owner"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "734:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "734:39:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "734:39:2"
                                }
                            ]
                        },
                        "name": "store_literal_in_memory_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "memPtr",
                                "nodeType": "YulTypedName",
                                "src": "715:6:2",
                                "type": ""
                            }
                        ],
                        "src": "617:163:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "932:220:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "942:74:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "1008:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1013:2:2",
                                                "type": "",
                                                "value": "13"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "949:58:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "949:67:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "942:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "1114:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "store_literal_in_memory_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219",
                                            "nodeType": "YulIdentifier",
                                            "src": "1025:88:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1025:93:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1025:93:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "1127:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "1138:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1143:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1134:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1134:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "end",
                                            "nodeType": "YulIdentifier",
                                            "src": "1127:3:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "920:3:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "end",
                                "nodeType": "YulTypedName",
                                "src": "928:3:2",
                                "type": ""
                            }
                        ],
                        "src": "786:366:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "1329:248:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "1339:26:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "headStart",
                                                "nodeType": "YulIdentifier",
                                                "src": "1351:9:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1362:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "1347:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1347:18:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "1339:4:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1386:9:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1397:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1382:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1382:17:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1405:4:2"
                                                    },
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1411:9:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sub",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1401:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1401:20:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "1375:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1375:47:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1375:47:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "1431:139:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "tail",
                                                "nodeType": "YulIdentifier",
                                                "src": "1565:4:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219_to_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "1439:124:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1439:131:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "1431:4:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_tuple_t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219__to_t_string_memory_ptr__fromStack_reversed",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nodeType": "YulTypedName",
                                "src": "1309:9:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "tail",
                                "nodeType": "YulTypedName",
                                "src": "1324:4:2",
                                "type": ""
                            }
                        ],
                        "src": "1158:419:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "1689:54:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "memPtr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1711:6:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1719:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1707:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1707:14:2"
                                            },
                                            {
                                                "hexValue": "6e6f7420656e6f756768",
                                                "kind": "string",
                                                "nodeType": "YulLiteral",
                                                "src": "1723:12:2",
                                                "type": "",
                                                "value": "not enough"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "1700:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1700:36:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1700:36:2"
                                }
                            ]
                        },
                        "name": "store_literal_in_memory_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "memPtr",
                                "nodeType": "YulTypedName",
                                "src": "1681:6:2",
                                "type": ""
                            }
                        ],
                        "src": "1583:160:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "1895:220:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "1905:74:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "1971:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "1976:2:2",
                                                "type": "",
                                                "value": "10"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "1912:58:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1912:67:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "1905:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "2077:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "store_literal_in_memory_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                                            "nodeType": "YulIdentifier",
                                            "src": "1988:88:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1988:93:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1988:93:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "2090:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "2101:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "2106:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "2097:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2097:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "end",
                                            "nodeType": "YulIdentifier",
                                            "src": "2090:3:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "1883:3:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "end",
                                "nodeType": "YulTypedName",
                                "src": "1891:3:2",
                                "type": ""
                            }
                        ],
                        "src": "1749:366:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "2292:248:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "2302:26:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "headStart",
                                                "nodeType": "YulIdentifier",
                                                "src": "2314:9:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "2325:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "2310:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2310:18:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "2302:4:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2349:9:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2360:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2345:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2345:17:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2368:4:2"
                                                    },
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2374:9:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sub",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2364:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2364:20:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "2338:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2338:47:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "2338:47:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "2394:139:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "tail",
                                                "nodeType": "YulIdentifier",
                                                "src": "2528:4:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56_to_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "2402:124:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2402:131:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "2394:4:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_tuple_t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56__to_t_string_memory_ptr__fromStack_reversed",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nodeType": "YulTypedName",
                                "src": "2272:9:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "tail",
                                "nodeType": "YulTypedName",
                                "src": "2287:4:2",
                                "type": ""
                            }
                        ],
                        "src": "2121:419:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "2652:62:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "memPtr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2674:6:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2682:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2670:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2670:14:2"
                                            },
                                            {
                                                "hexValue": "6e6f207265647061636b657473206c656674",
                                                "kind": "string",
                                                "nodeType": "YulLiteral",
                                                "src": "2686:20:2",
                                                "type": "",
                                                "value": "no redpackets left"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "2663:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2663:44:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "2663:44:2"
                                }
                            ]
                        },
                        "name": "store_literal_in_memory_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "memPtr",
                                "nodeType": "YulTypedName",
                                "src": "2644:6:2",
                                "type": ""
                            }
                        ],
                        "src": "2546:168:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "2866:220:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "2876:74:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "2942:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "2947:2:2",
                                                "type": "",
                                                "value": "18"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "2883:58:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2883:67:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "2876:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "3048:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "store_literal_in_memory_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972",
                                            "nodeType": "YulIdentifier",
                                            "src": "2959:88:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2959:93:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "2959:93:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "3061:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "3072:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "3077:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "3068:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3068:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "end",
                                            "nodeType": "YulIdentifier",
                                            "src": "3061:3:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "2854:3:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "end",
                                "nodeType": "YulTypedName",
                                "src": "2862:3:2",
                                "type": ""
                            }
                        ],
                        "src": "2720:366:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "3263:248:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "3273:26:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "headStart",
                                                "nodeType": "YulIdentifier",
                                                "src": "3285:9:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "3296:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "3281:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3281:18:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "3273:4:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3320:9:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "3331:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3316:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3316:17:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3339:4:2"
                                                    },
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3345:9:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sub",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3335:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3335:20:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "3309:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3309:47:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "3309:47:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "3365:139:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "tail",
                                                "nodeType": "YulIdentifier",
                                                "src": "3499:4:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972_to_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "3373:124:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3373:131:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "3365:4:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_tuple_t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972__to_t_string_memory_ptr__fromStack_reversed",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nodeType": "YulTypedName",
                                "src": "3243:9:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "tail",
                                "nodeType": "YulTypedName",
                                "src": "3258:4:2",
                                "type": ""
                            }
                        ],
                        "src": "3092:419:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "3623:60:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "memPtr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3645:6:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "3653:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3641:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3641:14:2"
                                            },
                                            {
                                                "hexValue": "616c7265616479206772616220697421",
                                                "kind": "string",
                                                "nodeType": "YulLiteral",
                                                "src": "3657:18:2",
                                                "type": "",
                                                "value": "already grab it!"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "3634:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3634:42:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "3634:42:2"
                                }
                            ]
                        },
                        "name": "store_literal_in_memory_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "memPtr",
                                "nodeType": "YulTypedName",
                                "src": "3615:6:2",
                                "type": ""
                            }
                        ],
                        "src": "3517:166:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "3835:220:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "3845:74:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "3911:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "3916:2:2",
                                                "type": "",
                                                "value": "16"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "3852:58:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3852:67:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "3845:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "4017:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "store_literal_in_memory_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7",
                                            "nodeType": "YulIdentifier",
                                            "src": "3928:88:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3928:93:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "3928:93:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "4030:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "4041:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4046:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4037:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4037:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "end",
                                            "nodeType": "YulIdentifier",
                                            "src": "4030:3:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "3823:3:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "end",
                                "nodeType": "YulTypedName",
                                "src": "3831:3:2",
                                "type": ""
                            }
                        ],
                        "src": "3689:366:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "4232:248:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "4242:26:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "headStart",
                                                "nodeType": "YulIdentifier",
                                                "src": "4254:9:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4265:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4250:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4250:18:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "4242:4:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4289:9:2"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "4300:1:2",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4285:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4285:17:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4308:4:2"
                                                    },
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4314:9:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sub",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4304:3:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4304:20:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "4278:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4278:47:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4278:47:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "4334:139:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "tail",
                                                "nodeType": "YulIdentifier",
                                                "src": "4468:4:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7_to_t_string_memory_ptr_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "4342:124:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4342:131:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulIdentifier",
                                            "src": "4334:4:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_tuple_t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7__to_t_string_memory_ptr__fromStack_reversed",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nodeType": "YulTypedName",
                                "src": "4212:9:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "tail",
                                "nodeType": "YulTypedName",
                                "src": "4227:4:2",
                                "type": ""
                            }
                        ],
                        "src": "4061:419:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "4514:152:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4531:1:2",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4534:77:2",
                                                "type": "",
                                                "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "4524:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4524:88:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4524:88:2"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4628:1:2",
                                                "type": "",
                                                "value": "4"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4631:4:2",
                                                "type": "",
                                                "value": "0x12"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "4621:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4621:15:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4621:15:2"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4652:1:2",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4655:4:2",
                                                "type": "",
                                                "value": "0x24"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nodeType": "YulIdentifier",
                                            "src": "4645:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4645:15:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4645:15:2"
                                }
                            ]
                        },
                        "name": "panic_error_0x12",
                        "nodeType": "YulFunctionDefinition",
                        "src": "4486:180:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "4700:152:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4717:1:2",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4720:77:2",
                                                "type": "",
                                                "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "4710:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4710:88:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4710:88:2"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4814:1:2",
                                                "type": "",
                                                "value": "4"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4817:4:2",
                                                "type": "",
                                                "value": "0x11"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "4807:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4807:15:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4807:15:2"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4838:1:2",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4841:4:2",
                                                "type": "",
                                                "value": "0x24"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nodeType": "YulIdentifier",
                                            "src": "4831:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4831:15:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4831:15:2"
                                }
                            ]
                        },
                        "name": "panic_error_0x11",
                        "nodeType": "YulFunctionDefinition",
                        "src": "4672:180:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "4900:143:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "4910:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "4933:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "4915:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4915:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "4910:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "4944:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "4967:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "4949:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4949:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "y",
                                            "nodeType": "YulIdentifier",
                                            "src": "4944:1:2"
                                        }
                                    ]
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "4991:22:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "panic_error_0x12",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4993:16:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4993:18:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "4993:18:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "4988:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nodeType": "YulIdentifier",
                                            "src": "4981:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4981:9:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "4978:35:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5023:14:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "5032:1:2"
                                            },
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "5035:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "div",
                                            "nodeType": "YulIdentifier",
                                            "src": "5028:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5028:9:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "r",
                                            "nodeType": "YulIdentifier",
                                            "src": "5023:1:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "checked_div_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "x",
                                "nodeType": "YulTypedName",
                                "src": "4889:1:2",
                                "type": ""
                            },
                            {
                                "name": "y",
                                "nodeType": "YulTypedName",
                                "src": "4892:1:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "r",
                                "nodeType": "YulTypedName",
                                "src": "4898:1:2",
                                "type": ""
                            }
                        ],
                        "src": "4858:185:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "5094:149:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5104:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "5127:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "5109:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5109:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "5104:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5138:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "5161:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "5143:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5143:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "y",
                                            "nodeType": "YulIdentifier",
                                            "src": "5138:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5172:17:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "5184:1:2"
                                            },
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "5187:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "sub",
                                            "nodeType": "YulIdentifier",
                                            "src": "5180:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5180:9:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "diff",
                                            "nodeType": "YulIdentifier",
                                            "src": "5172:4:2"
                                        }
                                    ]
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "5214:22:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "panic_error_0x11",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5216:16:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "5216:18:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "5216:18:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "name": "diff",
                                                "nodeType": "YulIdentifier",
                                                "src": "5205:4:2"
                                            },
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "5211:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "5202:2:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5202:11:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "5199:37:2"
                                }
                            ]
                        },
                        "name": "checked_sub_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "x",
                                "nodeType": "YulTypedName",
                                "src": "5080:1:2",
                                "type": ""
                            },
                            {
                                "name": "y",
                                "nodeType": "YulTypedName",
                                "src": "5083:1:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "diff",
                                "nodeType": "YulTypedName",
                                "src": "5089:4:2",
                                "type": ""
                            }
                        ],
                        "src": "5049:194:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "5294:81:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5304:65:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "5319:5:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "5326:42:2",
                                                "type": "",
                                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "and",
                                            "nodeType": "YulIdentifier",
                                            "src": "5315:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5315:54:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulIdentifier",
                                            "src": "5304:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5276:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nodeType": "YulTypedName",
                                "src": "5286:7:2",
                                "type": ""
                            }
                        ],
                        "src": "5249:126:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "5426:51:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5436:35:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "5465:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint160",
                                            "nodeType": "YulIdentifier",
                                            "src": "5447:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5447:24:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulIdentifier",
                                            "src": "5436:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_address",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5408:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nodeType": "YulTypedName",
                                "src": "5418:7:2",
                                "type": ""
                            }
                        ],
                        "src": "5381:96:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "5525:78:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5535:61:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "5560:5:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "5567:28:2",
                                                "type": "",
                                                "value": "0x01000000000000000000000000"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mul",
                                            "nodeType": "YulIdentifier",
                                            "src": "5556:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5556:40:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "newValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "5535:8:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "shift_left_96",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5506:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "newValue",
                                "nodeType": "YulTypedName",
                                "src": "5516:8:2",
                                "type": ""
                            }
                        ],
                        "src": "5483:120:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "5656:47:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5666:31:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "5691:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "shift_left_96",
                                            "nodeType": "YulIdentifier",
                                            "src": "5677:13:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5677:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "aligned",
                                            "nodeType": "YulIdentifier",
                                            "src": "5666:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "leftAlign_t_uint160",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5638:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "aligned",
                                "nodeType": "YulTypedName",
                                "src": "5648:7:2",
                                "type": ""
                            }
                        ],
                        "src": "5609:94:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "5756:53:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "5766:37:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "5797:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "leftAlign_t_uint160",
                                            "nodeType": "YulIdentifier",
                                            "src": "5777:19:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5777:26:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "aligned",
                                            "nodeType": "YulIdentifier",
                                            "src": "5766:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "leftAlign_t_address",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5738:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "aligned",
                                "nodeType": "YulTypedName",
                                "src": "5748:7:2",
                                "type": ""
                            }
                        ],
                        "src": "5709:100:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "5898:74:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "5915:3:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5958:5:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_address",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "5940:17:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "5940:24:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "leftAlign_t_address",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5920:19:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5920:45:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "5908:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5908:58:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5908:58:2"
                                }
                            ]
                        },
                        "name": "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5886:5:2",
                                "type": ""
                            },
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "5893:3:2",
                                "type": ""
                            }
                        ],
                        "src": "5815:157:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "6031:51:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "6041:35:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "6070:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint160",
                                            "nodeType": "YulIdentifier",
                                            "src": "6052:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6052:24:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulIdentifier",
                                            "src": "6041:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_address_payable",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "6013:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nodeType": "YulTypedName",
                                "src": "6023:7:2",
                                "type": ""
                            }
                        ],
                        "src": "5978:104:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "6143:53:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "6153:37:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "6184:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "leftAlign_t_uint160",
                                            "nodeType": "YulIdentifier",
                                            "src": "6164:19:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6164:26:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "aligned",
                                            "nodeType": "YulIdentifier",
                                            "src": "6153:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "leftAlign_t_address_payable",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "6125:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "aligned",
                                "nodeType": "YulTypedName",
                                "src": "6135:7:2",
                                "type": ""
                            }
                        ],
                        "src": "6088:108:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "6301:90:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "6318:3:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6377:5:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_address_payable",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6351:25:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "6351:32:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "leftAlign_t_address_payable",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6323:27:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "6323:61:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "6311:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6311:74:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6311:74:2"
                                }
                            ]
                        },
                        "name": "abi_encode_t_address_payable_to_t_address_payable_nonPadded_inplace_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "6289:5:2",
                                "type": ""
                            },
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "6296:3:2",
                                "type": ""
                            }
                        ],
                        "src": "6202:189:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "6444:32:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "6454:16:2",
                                    "value": {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "6465:5:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "aligned",
                                            "nodeType": "YulIdentifier",
                                            "src": "6454:7:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "leftAlign_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "6426:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "aligned",
                                "nodeType": "YulTypedName",
                                "src": "6436:7:2",
                                "type": ""
                            }
                        ],
                        "src": "6397:79:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "6565:74:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "6582:3:2"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6625:5:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_uint256",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "6607:17:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "6607:24:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "leftAlign_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6587:19:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "6587:45:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nodeType": "YulIdentifier",
                                            "src": "6575:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6575:58:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6575:58:2"
                                }
                            ]
                        },
                        "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "6553:5:2",
                                "type": ""
                            },
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "6560:3:2",
                                "type": ""
                            }
                        ],
                        "src": "6482:157:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "6889:608:2",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value0",
                                                "nodeType": "YulIdentifier",
                                                "src": "6962:6:2"
                                            },
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "6971:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "6900:61:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6900:75:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6900:75:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "6984:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "6995:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7000:2:2",
                                                "type": "",
                                                "value": "20"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "6991:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6991:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "6984:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value1",
                                                "nodeType": "YulIdentifier",
                                                "src": "7091:6:2"
                                            },
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7100:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_address_payable_to_t_address_payable_nonPadded_inplace_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "7013:77:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7013:91:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7013:91:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7113:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7124:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7129:2:2",
                                                "type": "",
                                                "value": "20"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "7120:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7120:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "7113:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value2",
                                                "nodeType": "YulIdentifier",
                                                "src": "7204:6:2"
                                            },
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7213:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "7142:61:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7142:75:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7142:75:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7226:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7237:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7242:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "7233:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7233:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "7226:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value3",
                                                "nodeType": "YulIdentifier",
                                                "src": "7317:6:2"
                                            },
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7326:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "7255:61:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7255:75:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7255:75:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7339:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7350:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7355:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "7346:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7346:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "7339:3:2"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value4",
                                                "nodeType": "YulIdentifier",
                                                "src": "7430:6:2"
                                            },
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7439:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                                            "nodeType": "YulIdentifier",
                                            "src": "7368:61:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7368:75:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7368:75:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7452:19:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nodeType": "YulIdentifier",
                                                "src": "7463:3:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "7468:2:2",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "7459:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7459:12:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulIdentifier",
                                            "src": "7452:3:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7481:10:2",
                                    "value": {
                                        "name": "pos",
                                        "nodeType": "YulIdentifier",
                                        "src": "7488:3:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "end",
                                            "nodeType": "YulIdentifier",
                                            "src": "7481:3:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_encode_tuple_packed_t_address_t_address_payable_t_uint256_t_uint256_t_uint256__to_t_address_t_address_payable_t_uint256_t_uint256_t_uint256__nonPadded_inplace_fromStack_reversed",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "pos",
                                "nodeType": "YulTypedName",
                                "src": "6836:3:2",
                                "type": ""
                            },
                            {
                                "name": "value4",
                                "nodeType": "YulTypedName",
                                "src": "6842:6:2",
                                "type": ""
                            },
                            {
                                "name": "value3",
                                "nodeType": "YulTypedName",
                                "src": "6850:6:2",
                                "type": ""
                            },
                            {
                                "name": "value2",
                                "nodeType": "YulTypedName",
                                "src": "6858:6:2",
                                "type": ""
                            },
                            {
                                "name": "value1",
                                "nodeType": "YulTypedName",
                                "src": "6866:6:2",
                                "type": ""
                            },
                            {
                                "name": "value0",
                                "nodeType": "YulTypedName",
                                "src": "6874:6:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "end",
                                "nodeType": "YulTypedName",
                                "src": "6885:3:2",
                                "type": ""
                            }
                        ],
                        "src": "6645:852:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "7537:142:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7547:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "7570:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "7552:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7552:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "7547:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7581:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "7604:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "7586:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7586:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "y",
                                            "nodeType": "YulIdentifier",
                                            "src": "7581:1:2"
                                        }
                                    ]
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "7628:22:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "panic_error_0x12",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7630:16:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7630:18:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "7630:18:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "7625:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nodeType": "YulIdentifier",
                                            "src": "7618:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7618:9:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "7615:35:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7659:14:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "7668:1:2"
                                            },
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "7671:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mod",
                                            "nodeType": "YulIdentifier",
                                            "src": "7664:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7664:9:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "r",
                                            "nodeType": "YulIdentifier",
                                            "src": "7659:1:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "mod_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "x",
                                "nodeType": "YulTypedName",
                                "src": "7526:1:2",
                                "type": ""
                            },
                            {
                                "name": "y",
                                "nodeType": "YulTypedName",
                                "src": "7529:1:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "r",
                                "nodeType": "YulTypedName",
                                "src": "7535:1:2",
                                "type": ""
                            }
                        ],
                        "src": "7503:176:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "7729:147:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7739:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "7762:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "7744:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7744:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "7739:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7773:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "7796:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "7778:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7778:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "y",
                                            "nodeType": "YulIdentifier",
                                            "src": "7773:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7807:16:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "7818:1:2"
                                            },
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "7821:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "7814:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7814:9:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "sum",
                                            "nodeType": "YulIdentifier",
                                            "src": "7807:3:2"
                                        }
                                    ]
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "7847:22:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "panic_error_0x11",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7849:16:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "7849:18:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "7849:18:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "7839:1:2"
                                            },
                                            {
                                                "name": "sum",
                                                "nodeType": "YulIdentifier",
                                                "src": "7842:3:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "7836:2:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7836:10:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "7833:36:2"
                                }
                            ]
                        },
                        "name": "checked_add_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "x",
                                "nodeType": "YulTypedName",
                                "src": "7716:1:2",
                                "type": ""
                            },
                            {
                                "name": "y",
                                "nodeType": "YulTypedName",
                                "src": "7719:1:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "sum",
                                "nodeType": "YulTypedName",
                                "src": "7725:3:2",
                                "type": ""
                            }
                        ],
                        "src": "7685:191:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "7930:362:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7940:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "7963:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "7945:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7945:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "x",
                                            "nodeType": "YulIdentifier",
                                            "src": "7940:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "7974:25:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "7997:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "7979:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "7979:20:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "y",
                                            "nodeType": "YulIdentifier",
                                            "src": "7974:1:2"
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "8008:28:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "x",
                                                "nodeType": "YulIdentifier",
                                                "src": "8031:1:2"
                                            },
                                            {
                                                "name": "y",
                                                "nodeType": "YulIdentifier",
                                                "src": "8034:1:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mul",
                                            "nodeType": "YulIdentifier",
                                            "src": "8027:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "8027:9:2"
                                    },
                                    "variables": [
                                        {
                                            "name": "product_raw",
                                            "nodeType": "YulTypedName",
                                            "src": "8012:11:2",
                                            "type": ""
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "8045:41:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "product_raw",
                                                "nodeType": "YulIdentifier",
                                                "src": "8074:11:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "8056:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "8056:30:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "product",
                                            "nodeType": "YulIdentifier",
                                            "src": "8045:7:2"
                                        }
                                    ]
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "8263:22:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "panic_error_0x11",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8265:16:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8265:18:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "8265:18:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "x",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8196:1:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "iszero",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "8189:6:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "8189:9:2"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "y",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8219:1:2"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "product",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8226:7:2"
                                                                    },
                                                                    {
                                                                        "name": "x",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8235:1:2"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "div",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8222:3:2"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "8222:15:2"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "eq",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "8216:2:2"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "8216:22:2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "or",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8169:2:2"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8169:83:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nodeType": "YulIdentifier",
                                            "src": "8149:6:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "8149:113:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "8146:139:2"
                                }
                            ]
                        },
                        "name": "checked_mul_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "x",
                                "nodeType": "YulTypedName",
                                "src": "7913:1:2",
                                "type": ""
                            },
                            {
                                "name": "y",
                                "nodeType": "YulTypedName",
                                "src": "7916:1:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "product",
                                "nodeType": "YulTypedName",
                                "src": "7922:7:2",
                                "type": ""
                            }
                        ],
                        "src": "7882:410:2"
                    },
                    {
                        "body": {
                            "nodeType": "YulBlock",
                            "src": "8341:128:2",
                            "statements": [
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "8351:33:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "8378:5:2"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "cleanup_t_uint256",
                                            "nodeType": "YulIdentifier",
                                            "src": "8360:17:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "8360:24:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "8351:5:2"
                                        }
                                    ]
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "8412:22:2",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "panic_error_0x11",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8414:16:2"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8414:18:2"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "8414:18:2"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "8399:5:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "8406:4:2",
                                                "type": "",
                                                "value": "0x00"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "eq",
                                            "nodeType": "YulIdentifier",
                                            "src": "8396:2:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "8396:15:2"
                                    },
                                    "nodeType": "YulIf",
                                    "src": "8393:41:2"
                                },
                                {
                                    "nodeType": "YulAssignment",
                                    "src": "8443:20:2",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "8454:5:2"
                                            },
                                            {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "8461:1:2",
                                                "type": "",
                                                "value": "1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "sub",
                                            "nodeType": "YulIdentifier",
                                            "src": "8450:3:2"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "8450:13:2"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "ret",
                                            "nodeType": "YulIdentifier",
                                            "src": "8443:3:2"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "decrement_t_uint256",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "8327:5:2",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "ret",
                                "nodeType": "YulTypedName",
                                "src": "8337:3:2",
                                "type": ""
                            }
                        ],
                        "src": "8298:171:2"
                    }
                ]
            },
            "contents": "{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219(memPtr) {\n\n        mstore(add(memPtr, 0), \"not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 13)\n        store_literal_in_memory_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56(memPtr) {\n\n        mstore(add(memPtr, 0), \"not enough\")\n\n    }\n\n    function abi_encode_t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 10)\n        store_literal_in_memory_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972(memPtr) {\n\n        mstore(add(memPtr, 0), \"no redpackets left\")\n\n    }\n\n    function abi_encode_t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 18)\n        store_literal_in_memory_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7(memPtr) {\n\n        mstore(add(memPtr, 0), \"already grab it!\")\n\n    }\n\n    function abi_encode_t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 16)\n        store_literal_in_memory_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        diff := sub(x, y)\n\n        if gt(diff, x) { panic_error_0x11() }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function shift_left_96(value) -> newValue {\n        newValue :=\n\n        mul(value, 0x01000000000000000000000000)\n\n    }\n\n    function leftAlign_t_uint160(value) -> aligned {\n        aligned := shift_left_96(value)\n    }\n\n    function leftAlign_t_address(value) -> aligned {\n        aligned := leftAlign_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_address(cleanup_t_address(value)))\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function leftAlign_t_address_payable(value) -> aligned {\n        aligned := leftAlign_t_uint160(value)\n    }\n\n    function abi_encode_t_address_payable_to_t_address_payable_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_address_payable(cleanup_t_address_payable(value)))\n    }\n\n    function leftAlign_t_uint256(value) -> aligned {\n        aligned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_uint256(cleanup_t_uint256(value)))\n    }\n\n    function abi_encode_tuple_packed_t_address_t_address_payable_t_uint256_t_uint256_t_uint256__to_t_address_t_address_payable_t_uint256_t_uint256_t_uint256__nonPadded_inplace_fromStack_reversed(pos , value4, value3, value2, value1, value0) -> end {\n\n        abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value0,  pos)\n        pos := add(pos, 20)\n\n        abi_encode_t_address_payable_to_t_address_payable_nonPadded_inplace_fromStack(value1,  pos)\n        pos := add(pos, 20)\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value2,  pos)\n        pos := add(pos, 32)\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value3,  pos)\n        pos := add(pos, 32)\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value4,  pos)\n        pos := add(pos, 32)\n\n        end := pos\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function decrement_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0x00) { panic_error_0x11() }\n        ret := sub(value, 1)\n    }\n\n}\n",
            "id": 2,
            "language": "Yul",
            "name": "#utility.yul"
        }
    ],
    "sourceMap": "61:1949:1:-:0;;;243:143;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;313:10;297:5;;:27;;;;;;;;;;;;;;;;;;343:6;335:5;:14;;;;370:8;360:7;;:18;;;;;;;;;;;;;;;;;;243:143;;61:1949;;88:117:2;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:143::-;602:5;633:6;627:13;618:22;;649:33;676:5;649:33;:::i;:::-;545:143;;;;:::o;694:90::-;728:7;771:5;764:13;757:21;746:32;;694:90;;;:::o;790:116::-;860:21;875:5;860:21;:::i;:::-;853:5;850:32;840:60;;896:1;893;886:12;840:60;790:116;:::o;912:137::-;966:5;997:6;991:13;982:22;;1013:30;1037:5;1013:30;:::i;:::-;912:137;;;;:::o;1055:501::-;1131:6;1139;1188:2;1176:9;1167:7;1163:23;1159:32;1156:119;;;1194:79;;:::i;:::-;1156:119;1314:1;1339:64;1395:7;1386:6;1375:9;1371:22;1339:64;:::i;:::-;1329:74;;1285:128;1452:2;1478:61;1531:7;1522:6;1511:9;1507:22;1478:61;:::i;:::-;1468:71;;1423:126;1055:501;;;;;:::o;61:1949:1:-;;;;;;;",
    "deployedSourceMap": "61:1949:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;154:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;394:99;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;121:26;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;626:225;;;:::i;:::-;;857:1150;;;:::i;:::-;;499:121;;;:::i;:::-;;154:20;;;;:::o;394:99::-;437:7;472:4;464:21;;;457:28;;394:99;:::o;121:26::-;;;;:::o;626:225::-;692:5;;;;;;;;;;680:17;;:10;:17;;;672:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;745:1;733:11;;:13;725:35;;;;;;;;;;;;:::i;:::-;;;;;;;;;785:1;771:11;:15;;;;805:5;;;;;;;;;;797:23;;:46;829:4;821:21;;;797:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;626:225::o;857:1150::-;930:1;916:11;;:15;908:38;;;;;;;;;;;;:::i;:::-;;;;;;;;;973:1;965:5;;:9;957:40;;;;;;;;;;;;:::i;:::-;;;;;;;;;1017:9;:21;1027:10;1017:21;;;;;;;;;;;;;;;;;;;;;;;;;1016:22;1008:51;;;;;;;;;;;;:::i;:::-;;;;;;;;;1094:4;1070:9;:21;1080:10;1070:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;1122:1;1113:5;;:10;1109:873;;1148:10;1140:28;;:41;1169:11;;1140:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1109:873;;;1218:7;;;;;;;;;;;1214:757;;;1246:14;1277:5;;1263:11;;:19;;;;:::i;:::-;1246:36;;1316:6;1301:11;;:21;;;;;;;:::i;:::-;;;;;;;;1349:10;1341:28;;:36;1370:6;1341:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1227:166;1214:757;;;1418:14;1796:1;1791;1549:10;1590:5;;;;;;;;;;1626;;1662:11;;1704:15;1502:244;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1466:303;;;;;;1436:352;;;:356;;;;:::i;:::-;1435:362;;;;:::i;:::-;1418:379;;1816:14;1858:2;1848:6;1834:11;;:20;;;;:::i;:::-;1833:27;;;;:::i;:::-;1816:44;;1894:6;1879:11;;:21;;;;;;;:::i;:::-;;;;;;;;1927:10;1919:28;;:36;1948:6;1919:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1399:572;;1214:757;1109:873;1992:5;;:7;;;;;;;;;:::i;:::-;;;;;;857:1150::o;499:121::-;562:1;552:9;:11;544:33;;;;;;;;;;;;:::i;:::-;;;;;;;;;603:9;588:11;;:24;;;;;;;:::i;:::-;;;;;;;;499:121::o;7:77:2:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:169::-;526:11;560:6;555:3;548:19;600:4;595:3;591:14;576:29;;442:169;;;;:::o;617:163::-;757:15;753:1;745:6;741:14;734:39;617:163;:::o;786:366::-;928:3;949:67;1013:2;1008:3;949:67;:::i;:::-;942:74;;1025:93;1114:3;1025:93;:::i;:::-;1143:2;1138:3;1134:12;1127:19;;786:366;;;:::o;1158:419::-;1324:4;1362:2;1351:9;1347:18;1339:26;;1411:9;1405:4;1401:20;1397:1;1386:9;1382:17;1375:47;1439:131;1565:4;1439:131;:::i;:::-;1431:139;;1158:419;;;:::o;1583:160::-;1723:12;1719:1;1711:6;1707:14;1700:36;1583:160;:::o;1749:366::-;1891:3;1912:67;1976:2;1971:3;1912:67;:::i;:::-;1905:74;;1988:93;2077:3;1988:93;:::i;:::-;2106:2;2101:3;2097:12;2090:19;;1749:366;;;:::o;2121:419::-;2287:4;2325:2;2314:9;2310:18;2302:26;;2374:9;2368:4;2364:20;2360:1;2349:9;2345:17;2338:47;2402:131;2528:4;2402:131;:::i;:::-;2394:139;;2121:419;;;:::o;2546:168::-;2686:20;2682:1;2674:6;2670:14;2663:44;2546:168;:::o;2720:366::-;2862:3;2883:67;2947:2;2942:3;2883:67;:::i;:::-;2876:74;;2959:93;3048:3;2959:93;:::i;:::-;3077:2;3072:3;3068:12;3061:19;;2720:366;;;:::o;3092:419::-;3258:4;3296:2;3285:9;3281:18;3273:26;;3345:9;3339:4;3335:20;3331:1;3320:9;3316:17;3309:47;3373:131;3499:4;3373:131;:::i;:::-;3365:139;;3092:419;;;:::o;3517:166::-;3657:18;3653:1;3645:6;3641:14;3634:42;3517:166;:::o;3689:366::-;3831:3;3852:67;3916:2;3911:3;3852:67;:::i;:::-;3845:74;;3928:93;4017:3;3928:93;:::i;:::-;4046:2;4041:3;4037:12;4030:19;;3689:366;;;:::o;4061:419::-;4227:4;4265:2;4254:9;4250:18;4242:26;;4314:9;4308:4;4304:20;4300:1;4289:9;4285:17;4278:47;4342:131;4468:4;4342:131;:::i;:::-;4334:139;;4061:419;;;:::o;4486:180::-;4534:77;4531:1;4524:88;4631:4;4628:1;4621:15;4655:4;4652:1;4645:15;4672:180;4720:77;4717:1;4710:88;4817:4;4814:1;4807:15;4841:4;4838:1;4831:15;4858:185;4898:1;4915:20;4933:1;4915:20;:::i;:::-;4910:25;;4949:20;4967:1;4949:20;:::i;:::-;4944:25;;4988:1;4978:35;;4993:18;;:::i;:::-;4978:35;5035:1;5032;5028:9;5023:14;;4858:185;;;;:::o;5049:194::-;5089:4;5109:20;5127:1;5109:20;:::i;:::-;5104:25;;5143:20;5161:1;5143:20;:::i;:::-;5138:25;;5187:1;5184;5180:9;5172:17;;5211:1;5205:4;5202:11;5199:37;;;5216:18;;:::i;:::-;5199:37;5049:194;;;;:::o;5249:126::-;5286:7;5326:42;5319:5;5315:54;5304:65;;5249:126;;;:::o;5381:96::-;5418:7;5447:24;5465:5;5447:24;:::i;:::-;5436:35;;5381:96;;;:::o;5483:120::-;5516:8;5567:28;5560:5;5556:40;5535:61;;5483:120;;;:::o;5609:94::-;5648:7;5677:20;5691:5;5677:20;:::i;:::-;5666:31;;5609:94;;;:::o;5709:100::-;5748:7;5777:26;5797:5;5777:26;:::i;:::-;5766:37;;5709:100;;;:::o;5815:157::-;5920:45;5940:24;5958:5;5940:24;:::i;:::-;5920:45;:::i;:::-;5915:3;5908:58;5815:157;;:::o;5978:104::-;6023:7;6052:24;6070:5;6052:24;:::i;:::-;6041:35;;5978:104;;;:::o;6088:108::-;6135:7;6164:26;6184:5;6164:26;:::i;:::-;6153:37;;6088:108;;;:::o;6202:189::-;6323:61;6351:32;6377:5;6351:32;:::i;:::-;6323:61;:::i;:::-;6318:3;6311:74;6202:189;;:::o;6397:79::-;6436:7;6465:5;6454:16;;6397:79;;;:::o;6482:157::-;6587:45;6607:24;6625:5;6607:24;:::i;:::-;6587:45;:::i;:::-;6582:3;6575:58;6482:157;;:::o;6645:852::-;6885:3;6900:75;6971:3;6962:6;6900:75;:::i;:::-;7000:2;6995:3;6991:12;6984:19;;7013:91;7100:3;7091:6;7013:91;:::i;:::-;7129:2;7124:3;7120:12;7113:19;;7142:75;7213:3;7204:6;7142:75;:::i;:::-;7242:2;7237:3;7233:12;7226:19;;7255:75;7326:3;7317:6;7255:75;:::i;:::-;7355:2;7350:3;7346:12;7339:19;;7368:75;7439:3;7430:6;7368:75;:::i;:::-;7468:2;7463:3;7459:12;7452:19;;7488:3;7481:10;;6645:852;;;;;;;;:::o;7503:176::-;7535:1;7552:20;7570:1;7552:20;:::i;:::-;7547:25;;7586:20;7604:1;7586:20;:::i;:::-;7581:25;;7625:1;7615:35;;7630:18;;:::i;:::-;7615:35;7671:1;7668;7664:9;7659:14;;7503:176;;;;:::o;7685:191::-;7725:3;7744:20;7762:1;7744:20;:::i;:::-;7739:25;;7778:20;7796:1;7778:20;:::i;:::-;7773:25;;7821:1;7818;7814:9;7807:16;;7842:3;7839:1;7836:10;7833:36;;;7849:18;;:::i;:::-;7833:36;7685:191;;;;:::o;7882:410::-;7922:7;7945:20;7963:1;7945:20;:::i;:::-;7940:25;;7979:20;7997:1;7979:20;:::i;:::-;7974:25;;8034:1;8031;8027:9;8056:30;8074:11;8056:30;:::i;:::-;8045:41;;8235:1;8226:7;8222:15;8219:1;8216:22;8196:1;8189:9;8169:83;8146:139;;8265:18;;:::i;:::-;8146:139;7930:362;7882:410;;;;:::o;8298:171::-;8337:3;8360:24;8378:5;8360:24;:::i;:::-;8351:33;;8406:4;8399:5;8396:15;8393:41;;8414:18;;:::i;:::-;8393:41;8461:1;8454:5;8450:13;8443:20;;8298:171;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.19;\r\n\r\ncontract AssignRedPacket {\r\n    address payable owner;\r\n    uint256 public totalAmount;\r\n    uint256 public count;\r\n    bool isEqual;\r\n    mapping(address => bool) isGrabbed;\r\n\r\n    constructor(uint256 _count, bool _isEqual) {\r\n        owner = payable(msg.sender);\r\n        count = _count;\r\n        isEqual = _isEqual;\r\n    }\r\n\r\n    function getBalance() public view returns (uint256) {\r\n        return address(this).balance;\r\n    }\r\n    function deposit() public payable {\r\n        require(msg.value>0,\"not enough\");\r\n        totalAmount += msg.value;\r\n    }\r\n    function withdraw() public payable {\r\n        require(msg.sender==owner,'not the owner');\r\n        require(totalAmount>0,\"not enough\");\r\n        totalAmount = 0;\r\n        payable(owner).transfer(address(this).balance);\r\n    }\r\n    function grabRedPacket() public payable {\r\n        require(totalAmount > 0, \"not enough\");\r\n        require(count > 0, \"no redpackets left\");\r\n        require(!isGrabbed[msg.sender], \"already grab it!\");\r\n        isGrabbed[msg.sender] = true;\r\n        if (count == 1) {\r\n            payable(msg.sender).transfer(totalAmount);\r\n        } else {\r\n            if (isEqual) {\r\n                uint256 amount = totalAmount / count;\r\n                totalAmount -= amount;\r\n                payable(msg.sender).transfer(amount);\r\n            } else {\r\n                uint256 random = (uint256(\r\n                    keccak256(\r\n                        abi.encodePacked(\r\n                            msg.sender,\r\n                            owner,\r\n                            count,\r\n                            totalAmount,\r\n                            block.timestamp\r\n                        )\r\n                    )\r\n                ) % 8) + 1;\r\n                uint256 amount = (totalAmount * random) / 10;\r\n                totalAmount -= amount;\r\n                payable(msg.sender).transfer(amount);\r\n            }\r\n        }\r\n        count--;\r\n    }\r\n}",
    "sourcePath": "D:\\workspace\\marjor\\truffle-demo\\contracts\\redpacket.sol",
    "ast": {
        "absolutePath": "project:/contracts/redpacket.sol",
        "exportedSymbols": {
            "AssignRedPacket": [
                411
            ]
        },
        "id": 412,
        "license": "MIT",
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 190,
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".19"
                ],
                "nodeType": "PragmaDirective",
                "src": "33:24:1"
            },
            {
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "AssignRedPacket",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "id": 411,
                "linearizedBaseContracts": [
                    411
                ],
                "name": "AssignRedPacket",
                "nameLocation": "70:15:1",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 192,
                        "mutability": "mutable",
                        "name": "owner",
                        "nameLocation": "109:5:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 411,
                        "src": "93:21:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                        },
                        "typeName": {
                            "id": 191,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "93:15:1",
                            "stateMutability": "payable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "functionSelector": "1a39d8ef",
                        "id": 194,
                        "mutability": "mutable",
                        "name": "totalAmount",
                        "nameLocation": "136:11:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 411,
                        "src": "121:26:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 193,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "121:7:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "functionSelector": "06661abd",
                        "id": 196,
                        "mutability": "mutable",
                        "name": "count",
                        "nameLocation": "169:5:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 411,
                        "src": "154:20:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 195,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "154:7:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 198,
                        "mutability": "mutable",
                        "name": "isEqual",
                        "nameLocation": "186:7:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 411,
                        "src": "181:12:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 197,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "181:4:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 202,
                        "mutability": "mutable",
                        "name": "isGrabbed",
                        "nameLocation": "225:9:1",
                        "nodeType": "VariableDeclaration",
                        "scope": 411,
                        "src": "200:34:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 201,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 199,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "208:7:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "200:24:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 200,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "219:4:1",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 225,
                            "nodeType": "Block",
                            "src": "286:100:1",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 215,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 209,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 192,
                                            "src": "297:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 212,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "313:3:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 213,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "317:6:1",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "313:10:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                ],
                                                "id": 211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "305:8:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_payable_$",
                                                    "typeString": "type(address payable)"
                                                },
                                                "typeName": {
                                                    "id": 210,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "305:8:1",
                                                    "stateMutability": "payable",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 214,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "305:19:1",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "src": "297:27:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        }
                                    },
                                    "id": 216,
                                    "nodeType": "ExpressionStatement",
                                    "src": "297:27:1"
                                },
                                {
                                    "expression": {
                                        "id": 219,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 217,
                                            "name": "count",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 196,
                                            "src": "335:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 218,
                                            "name": "_count",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 204,
                                            "src": "343:6:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "335:14:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 220,
                                    "nodeType": "ExpressionStatement",
                                    "src": "335:14:1"
                                },
                                {
                                    "expression": {
                                        "id": 223,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 221,
                                            "name": "isEqual",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 198,
                                            "src": "360:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 222,
                                            "name": "_isEqual",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 206,
                                            "src": "370:8:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "360:18:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 224,
                                    "nodeType": "ExpressionStatement",
                                    "src": "360:18:1"
                                }
                            ]
                        },
                        "id": 226,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 207,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 204,
                                    "mutability": "mutable",
                                    "name": "_count",
                                    "nameLocation": "263:6:1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 226,
                                    "src": "255:14:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 203,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "255:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 206,
                                    "mutability": "mutable",
                                    "name": "_isEqual",
                                    "nameLocation": "276:8:1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 226,
                                    "src": "271:13:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 205,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "271:4:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "254:31:1"
                        },
                        "returnParameters": {
                            "id": 208,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "286:0:1"
                        },
                        "scope": 411,
                        "src": "243:143:1",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 237,
                            "nodeType": "Block",
                            "src": "446:47:1",
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "id": 233,
                                                    "name": "this",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967268,
                                                    "src": "472:4:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_AssignRedPacket_$411",
                                                        "typeString": "contract AssignRedPacket"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_AssignRedPacket_$411",
                                                        "typeString": "contract AssignRedPacket"
                                                    }
                                                ],
                                                "id": 232,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "464:7:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 231,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "464:7:1",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 234,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "464:13:1",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 235,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "478:7:1",
                                        "memberName": "balance",
                                        "nodeType": "MemberAccess",
                                        "src": "464:21:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 230,
                                    "id": 236,
                                    "nodeType": "Return",
                                    "src": "457:28:1"
                                }
                            ]
                        },
                        "functionSelector": "12065fe0",
                        "id": 238,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBalance",
                        "nameLocation": "403:10:1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 227,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "413:2:1"
                        },
                        "returnParameters": {
                            "id": 230,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 229,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 238,
                                    "src": "437:7:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 228,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "437:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "436:9:1"
                        },
                        "scope": 411,
                        "src": "394:99:1",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 254,
                            "nodeType": "Block",
                            "src": "533:87:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 245,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 242,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "552:3:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 243,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "556:5:1",
                                                    "memberName": "value",
                                                    "nodeType": "MemberAccess",
                                                    "src": "552:9:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 244,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "562:1:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "552:11:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "6e6f7420656e6f756768",
                                                "id": 246,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "564:12:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                                                    "typeString": "literal_string \"not enough\""
                                                },
                                                "value": "not enough"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                                                    "typeString": "literal_string \"not enough\""
                                                }
                                            ],
                                            "id": 241,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "544:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 247,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "544:33:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 248,
                                    "nodeType": "ExpressionStatement",
                                    "src": "544:33:1"
                                },
                                {
                                    "expression": {
                                        "id": 252,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 249,
                                            "name": "totalAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 194,
                                            "src": "588:11:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 250,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4294967281,
                                                "src": "603:3:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 251,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "607:5:1",
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "src": "603:9:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "588:24:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 253,
                                    "nodeType": "ExpressionStatement",
                                    "src": "588:24:1"
                                }
                            ]
                        },
                        "functionSelector": "d0e30db0",
                        "id": 255,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deposit",
                        "nameLocation": "508:7:1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 239,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "515:2:1"
                        },
                        "returnParameters": {
                            "id": 240,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "533:0:1"
                        },
                        "scope": 411,
                        "src": "499:121:1",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 289,
                            "nodeType": "Block",
                            "src": "661:190:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 262,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 259,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "680:3:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 260,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "684:6:1",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "680:10:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "id": 261,
                                                    "name": "owner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 192,
                                                    "src": "692:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "src": "680:17:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "6e6f7420746865206f776e6572",
                                                "id": 263,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "698:15:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219",
                                                    "typeString": "literal_string \"not the owner\""
                                                },
                                                "value": "not the owner"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219",
                                                    "typeString": "literal_string \"not the owner\""
                                                }
                                            ],
                                            "id": 258,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "672:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 264,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "672:42:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 265,
                                    "nodeType": "ExpressionStatement",
                                    "src": "672:42:1"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 269,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 267,
                                                    "name": "totalAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 194,
                                                    "src": "733:11:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 268,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "745:1:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "733:13:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "6e6f7420656e6f756768",
                                                "id": 270,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "747:12:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                                                    "typeString": "literal_string \"not enough\""
                                                },
                                                "value": "not enough"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                                                    "typeString": "literal_string \"not enough\""
                                                }
                                            ],
                                            "id": 266,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "725:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 271,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "725:35:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 272,
                                    "nodeType": "ExpressionStatement",
                                    "src": "725:35:1"
                                },
                                {
                                    "expression": {
                                        "id": 275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 273,
                                            "name": "totalAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 194,
                                            "src": "771:11:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "30",
                                            "id": 274,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "785:1:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "771:15:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "771:15:1"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 284,
                                                            "name": "this",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4294967268,
                                                            "src": "829:4:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_AssignRedPacket_$411",
                                                                "typeString": "contract AssignRedPacket"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_contract$_AssignRedPacket_$411",
                                                                "typeString": "contract AssignRedPacket"
                                                            }
                                                        ],
                                                        "id": 283,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "821:7:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": {
                                                            "id": 282,
                                                            "name": "address",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "821:7:1",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 285,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "821:13:1",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "id": 286,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "835:7:1",
                                                "memberName": "balance",
                                                "nodeType": "MemberAccess",
                                                "src": "821:21:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 279,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 192,
                                                        "src": "805:5:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 278,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "797:8:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_payable_$",
                                                        "typeString": "type(address payable)"
                                                    },
                                                    "typeName": {
                                                        "id": 277,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "797:8:1",
                                                        "stateMutability": "payable",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 280,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "797:14:1",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            },
                                            "id": 281,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "812:8:1",
                                            "memberName": "transfer",
                                            "nodeType": "MemberAccess",
                                            "src": "797:23:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256)"
                                            }
                                        },
                                        "id": 287,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "797:46:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 288,
                                    "nodeType": "ExpressionStatement",
                                    "src": "797:46:1"
                                }
                            ]
                        },
                        "functionSelector": "3ccfd60b",
                        "id": 290,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "withdraw",
                        "nameLocation": "635:8:1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 256,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "643:2:1"
                        },
                        "returnParameters": {
                            "id": 257,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "661:0:1"
                        },
                        "scope": 411,
                        "src": "626:225:1",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 409,
                            "nodeType": "Block",
                            "src": "897:1110:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 296,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 294,
                                                    "name": "totalAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 194,
                                                    "src": "916:11:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 295,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "930:1:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "916:15:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "6e6f7420656e6f756768",
                                                "id": 297,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "933:12:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                                                    "typeString": "literal_string \"not enough\""
                                                },
                                                "value": "not enough"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_3babbd11c73bab7b719fecdd156739310b31ddf276e563dd1f6744864622ba56",
                                                    "typeString": "literal_string \"not enough\""
                                                }
                                            ],
                                            "id": 293,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "908:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 298,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "908:38:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 299,
                                    "nodeType": "ExpressionStatement",
                                    "src": "908:38:1"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 303,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 301,
                                                    "name": "count",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 196,
                                                    "src": "965:5:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 302,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "973:1:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "965:9:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "6e6f207265647061636b657473206c656674",
                                                "id": 304,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "976:20:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972",
                                                    "typeString": "literal_string \"no redpackets left\""
                                                },
                                                "value": "no redpackets left"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_f19f8d5fcf98d35b012d2787299701aea8faf2ce3a2f0fda2b47eb861b507972",
                                                    "typeString": "literal_string \"no redpackets left\""
                                                }
                                            ],
                                            "id": 300,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "957:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 305,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "957:40:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 306,
                                    "nodeType": "ExpressionStatement",
                                    "src": "957:40:1"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 312,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "1016:22:1",
                                                "subExpression": {
                                                    "baseExpression": {
                                                        "id": 308,
                                                        "name": "isGrabbed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 202,
                                                        "src": "1017:9:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 311,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 309,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4294967281,
                                                            "src": "1027:3:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 310,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1031:6:1",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1027:10:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1017:21:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "616c7265616479206772616220697421",
                                                "id": 313,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1040:18:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7",
                                                    "typeString": "literal_string \"already grab it!\""
                                                },
                                                "value": "already grab it!"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_149985bb4f95f7ebae8491c1b46147149e484ba37f7ea7a19c2b9f0cc21000c7",
                                                    "typeString": "literal_string \"already grab it!\""
                                                }
                                            ],
                                            "id": 307,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1008:7:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 314,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1008:51:1",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 315,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1008:51:1"
                                },
                                {
                                    "expression": {
                                        "id": 321,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 316,
                                                "name": "isGrabbed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 202,
                                                "src": "1070:9:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 319,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 317,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "1080:3:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 318,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1084:6:1",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1080:10:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "1070:21:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 320,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1094:4:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "1070:28:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 322,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1070:28:1"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 325,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 323,
                                            "name": "count",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 196,
                                            "src": "1113:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 324,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1122:1:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "1113:10:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 404,
                                        "nodeType": "Block",
                                        "src": "1199:783:1",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "id": 336,
                                                    "name": "isEqual",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 198,
                                                    "src": "1218:7:1",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 402,
                                                    "nodeType": "Block",
                                                    "src": "1399:572:1",
                                                    "statements": [
                                                        {
                                                            "assignments": [
                                                                358
                                                            ],
                                                            "declarations": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 358,
                                                                    "mutability": "mutable",
                                                                    "name": "random",
                                                                    "nameLocation": "1426:6:1",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 402,
                                                                    "src": "1418:14:1",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "default",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 357,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1418:7:1",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "id": 379,
                                                            "initialValue": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 378,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "components": [
                                                                        {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 375,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "expression": {
                                                                                                            "id": 364,
                                                                                                            "name": "msg",
                                                                                                            "nodeType": "Identifier",
                                                                                                            "overloadedDeclarations": [],
                                                                                                            "referencedDeclaration": 4294967281,
                                                                                                            "src": "1549:3:1",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_magic_message",
                                                                                                                "typeString": "msg"
                                                                                                            }
                                                                                                        },
                                                                                                        "id": 365,
                                                                                                        "isConstant": false,
                                                                                                        "isLValue": false,
                                                                                                        "isPure": false,
                                                                                                        "lValueRequested": false,
                                                                                                        "memberLocation": "1553:6:1",
                                                                                                        "memberName": "sender",
                                                                                                        "nodeType": "MemberAccess",
                                                                                                        "src": "1549:10:1",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_address",
                                                                                                            "typeString": "address"
                                                                                                        }
                                                                                                    },
                                                                                                    {
                                                                                                        "id": 366,
                                                                                                        "name": "owner",
                                                                                                        "nodeType": "Identifier",
                                                                                                        "overloadedDeclarations": [],
                                                                                                        "referencedDeclaration": 192,
                                                                                                        "src": "1590:5:1",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_address_payable",
                                                                                                            "typeString": "address payable"
                                                                                                        }
                                                                                                    },
                                                                                                    {
                                                                                                        "id": 367,
                                                                                                        "name": "count",
                                                                                                        "nodeType": "Identifier",
                                                                                                        "overloadedDeclarations": [],
                                                                                                        "referencedDeclaration": 196,
                                                                                                        "src": "1626:5:1",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_uint256",
                                                                                                            "typeString": "uint256"
                                                                                                        }
                                                                                                    },
                                                                                                    {
                                                                                                        "id": 368,
                                                                                                        "name": "totalAmount",
                                                                                                        "nodeType": "Identifier",
                                                                                                        "overloadedDeclarations": [],
                                                                                                        "referencedDeclaration": 194,
                                                                                                        "src": "1662:11:1",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_uint256",
                                                                                                            "typeString": "uint256"
                                                                                                        }
                                                                                                    },
                                                                                                    {
                                                                                                        "expression": {
                                                                                                            "id": 369,
                                                                                                            "name": "block",
                                                                                                            "nodeType": "Identifier",
                                                                                                            "overloadedDeclarations": [],
                                                                                                            "referencedDeclaration": 4294967292,
                                                                                                            "src": "1704:5:1",
                                                                                                            "typeDescriptions": {
                                                                                                                "typeIdentifier": "t_magic_block",
                                                                                                                "typeString": "block"
                                                                                                            }
                                                                                                        },
                                                                                                        "id": 370,
                                                                                                        "isConstant": false,
                                                                                                        "isLValue": false,
                                                                                                        "isPure": false,
                                                                                                        "lValueRequested": false,
                                                                                                        "memberLocation": "1710:9:1",
                                                                                                        "memberName": "timestamp",
                                                                                                        "nodeType": "MemberAccess",
                                                                                                        "src": "1704:15:1",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_uint256",
                                                                                                            "typeString": "uint256"
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "expression": {
                                                                                                    "argumentTypes": [
                                                                                                        {
                                                                                                            "typeIdentifier": "t_address",
                                                                                                            "typeString": "address"
                                                                                                        },
                                                                                                        {
                                                                                                            "typeIdentifier": "t_address_payable",
                                                                                                            "typeString": "address payable"
                                                                                                        },
                                                                                                        {
                                                                                                            "typeIdentifier": "t_uint256",
                                                                                                            "typeString": "uint256"
                                                                                                        },
                                                                                                        {
                                                                                                            "typeIdentifier": "t_uint256",
                                                                                                            "typeString": "uint256"
                                                                                                        },
                                                                                                        {
                                                                                                            "typeIdentifier": "t_uint256",
                                                                                                            "typeString": "uint256"
                                                                                                        }
                                                                                                    ],
                                                                                                    "expression": {
                                                                                                        "id": 362,
                                                                                                        "name": "abi",
                                                                                                        "nodeType": "Identifier",
                                                                                                        "overloadedDeclarations": [],
                                                                                                        "referencedDeclaration": 4294967295,
                                                                                                        "src": "1502:3:1",
                                                                                                        "typeDescriptions": {
                                                                                                            "typeIdentifier": "t_magic_abi",
                                                                                                            "typeString": "abi"
                                                                                                        }
                                                                                                    },
                                                                                                    "id": 363,
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": false,
                                                                                                    "isPure": true,
                                                                                                    "lValueRequested": false,
                                                                                                    "memberLocation": "1506:12:1",
                                                                                                    "memberName": "encodePacked",
                                                                                                    "nodeType": "MemberAccess",
                                                                                                    "src": "1502:16:1",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                                                    }
                                                                                                },
                                                                                                "id": 371,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": false,
                                                                                                "kind": "functionCall",
                                                                                                "lValueRequested": false,
                                                                                                "nameLocations": [],
                                                                                                "names": [],
                                                                                                "nodeType": "FunctionCall",
                                                                                                "src": "1502:244:1",
                                                                                                "tryCall": false,
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                                                    "typeString": "bytes memory"
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "expression": {
                                                                                            "argumentTypes": [
                                                                                                {
                                                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                                                    "typeString": "bytes memory"
                                                                                                }
                                                                                            ],
                                                                                            "id": 361,
                                                                                            "name": "keccak256",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 4294967288,
                                                                                            "src": "1466:9:1",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                            }
                                                                                        },
                                                                                        "id": 372,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "1466:303:1",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes32",
                                                                                            "typeString": "bytes32"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_bytes32",
                                                                                            "typeString": "bytes32"
                                                                                        }
                                                                                    ],
                                                                                    "id": 360,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                                    "src": "1436:7:1",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                                        "typeString": "type(uint256)"
                                                                                    },
                                                                                    "typeName": {
                                                                                        "id": 359,
                                                                                        "name": "uint256",
                                                                                        "nodeType": "ElementaryTypeName",
                                                                                        "src": "1436:7:1",
                                                                                        "typeDescriptions": {}
                                                                                    }
                                                                                },
                                                                                "id": 373,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "typeConversion",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "1436:352:1",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "%",
                                                                            "rightExpression": {
                                                                                "hexValue": "38",
                                                                                "id": 374,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "1791:1:1",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_8_by_1",
                                                                                    "typeString": "int_const 8"
                                                                                },
                                                                                "value": "8"
                                                                            },
                                                                            "src": "1436:356:1",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 376,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "1435:358:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "+",
                                                                "rightExpression": {
                                                                    "hexValue": "31",
                                                                    "id": 377,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1796:1:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_1_by_1",
                                                                        "typeString": "int_const 1"
                                                                    },
                                                                    "value": "1"
                                                                },
                                                                "src": "1435:362:1",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "VariableDeclarationStatement",
                                                            "src": "1418:379:1"
                                                        },
                                                        {
                                                            "assignments": [
                                                                381
                                                            ],
                                                            "declarations": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 381,
                                                                    "mutability": "mutable",
                                                                    "name": "amount",
                                                                    "nameLocation": "1824:6:1",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 402,
                                                                    "src": "1816:14:1",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "default",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 380,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1816:7:1",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "id": 388,
                                                            "initialValue": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 387,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "components": [
                                                                        {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 384,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "id": 382,
                                                                                "name": "totalAmount",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 194,
                                                                                "src": "1834:11:1",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "*",
                                                                            "rightExpression": {
                                                                                "id": 383,
                                                                                "name": "random",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 358,
                                                                                "src": "1848:6:1",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "1834:20:1",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 385,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "1833:22:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "/",
                                                                "rightExpression": {
                                                                    "hexValue": "3130",
                                                                    "id": 386,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1858:2:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_10_by_1",
                                                                        "typeString": "int_const 10"
                                                                    },
                                                                    "value": "10"
                                                                },
                                                                "src": "1833:27:1",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "VariableDeclarationStatement",
                                                            "src": "1816:44:1"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 391,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 389,
                                                                    "name": "totalAmount",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 194,
                                                                    "src": "1879:11:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "-=",
                                                                "rightHandSide": {
                                                                    "id": 390,
                                                                    "name": "amount",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 381,
                                                                    "src": "1894:6:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "1879:21:1",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 392,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1879:21:1"
                                                        },
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 399,
                                                                        "name": "amount",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 381,
                                                                        "src": "1948:6:1",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "arguments": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 395,
                                                                                    "name": "msg",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 4294967281,
                                                                                    "src": "1927:3:1",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_magic_message",
                                                                                        "typeString": "msg"
                                                                                    }
                                                                                },
                                                                                "id": 396,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "1931:6:1",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "1927:10:1",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            ],
                                                                            "id": 394,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "1919:8:1",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_payable_$",
                                                                                "typeString": "type(address payable)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 393,
                                                                                "name": "address",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "1919:8:1",
                                                                                "stateMutability": "payable",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 397,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "1919:19:1",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        }
                                                                    },
                                                                    "id": 398,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "1939:8:1",
                                                                    "memberName": "transfer",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "1919:28:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                                        "typeString": "function (uint256)"
                                                                    }
                                                                },
                                                                "id": 400,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1919:36:1",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 401,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1919:36:1"
                                                        }
                                                    ]
                                                },
                                                "id": 403,
                                                "nodeType": "IfStatement",
                                                "src": "1214:757:1",
                                                "trueBody": {
                                                    "id": 356,
                                                    "nodeType": "Block",
                                                    "src": "1227:166:1",
                                                    "statements": [
                                                        {
                                                            "assignments": [
                                                                338
                                                            ],
                                                            "declarations": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 338,
                                                                    "mutability": "mutable",
                                                                    "name": "amount",
                                                                    "nameLocation": "1254:6:1",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 356,
                                                                    "src": "1246:14:1",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "default",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 337,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1246:7:1",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "id": 342,
                                                            "initialValue": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 341,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 339,
                                                                    "name": "totalAmount",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 194,
                                                                    "src": "1263:11:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "/",
                                                                "rightExpression": {
                                                                    "id": 340,
                                                                    "name": "count",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 196,
                                                                    "src": "1277:5:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "1263:19:1",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "VariableDeclarationStatement",
                                                            "src": "1246:36:1"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 345,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 343,
                                                                    "name": "totalAmount",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 194,
                                                                    "src": "1301:11:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "-=",
                                                                "rightHandSide": {
                                                                    "id": 344,
                                                                    "name": "amount",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 338,
                                                                    "src": "1316:6:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "1301:21:1",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 346,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1301:21:1"
                                                        },
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 353,
                                                                        "name": "amount",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 338,
                                                                        "src": "1370:6:1",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "arguments": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 349,
                                                                                    "name": "msg",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 4294967281,
                                                                                    "src": "1349:3:1",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_magic_message",
                                                                                        "typeString": "msg"
                                                                                    }
                                                                                },
                                                                                "id": 350,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "1353:6:1",
                                                                                "memberName": "sender",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "1349:10:1",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            ],
                                                                            "id": 348,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "1341:8:1",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_payable_$",
                                                                                "typeString": "type(address payable)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 347,
                                                                                "name": "address",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "1341:8:1",
                                                                                "stateMutability": "payable",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 351,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "1341:19:1",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        }
                                                                    },
                                                                    "id": 352,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "1361:8:1",
                                                                    "memberName": "transfer",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "1341:28:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                                        "typeString": "function (uint256)"
                                                                    }
                                                                },
                                                                "id": 354,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1341:36:1",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 355,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "1341:36:1"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "id": 405,
                                    "nodeType": "IfStatement",
                                    "src": "1109:873:1",
                                    "trueBody": {
                                        "id": 335,
                                        "nodeType": "Block",
                                        "src": "1125:68:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 332,
                                                            "name": "totalAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 194,
                                                            "src": "1169:11:1",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 328,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 4294967281,
                                                                        "src": "1148:3:1",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 329,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "1152:6:1",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "1148:10:1",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                ],
                                                                "id": 327,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1140:8:1",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_payable_$",
                                                                    "typeString": "type(address payable)"
                                                                },
                                                                "typeName": {
                                                                    "id": 326,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1140:8:1",
                                                                    "stateMutability": "payable",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 330,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1140:19:1",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        "id": 331,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1160:8:1",
                                                        "memberName": "transfer",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1140:28:1",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                                                            "typeString": "function (uint256)"
                                                        }
                                                    },
                                                    "id": 333,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1140:41:1",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 334,
                                                "nodeType": "ExpressionStatement",
                                                "src": "1140:41:1"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 407,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "--",
                                        "prefix": false,
                                        "src": "1992:7:1",
                                        "subExpression": {
                                            "id": 406,
                                            "name": "count",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 196,
                                            "src": "1992:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 408,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1992:7:1"
                                }
                            ]
                        },
                        "functionSelector": "c4712e21",
                        "id": 410,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "grabRedPacket",
                        "nameLocation": "866:13:1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 291,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "879:2:1"
                        },
                        "returnParameters": {
                            "id": 292,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "897:0:1"
                        },
                        "scope": 411,
                        "src": "857:1150:1",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "scope": 412,
                "src": "61:1949:1",
                "usedErrors": []
            }
        ],
        "src": "33:1977:1"
    },
    "compiler": {
        "name": "solc",
        "version": "0.8.19+commit.7dd6d404.Emscripten.clang"
    },
    "networks": {
        "5777": {
            "events": {},
            "links": {},
            "address": "0xF37500308042fCcE17f43B6D126a464a206A5Bd8",
            "transactionHash": "0x51843b7496483a5f92d4f90672cb7a08d6fc59b497ba2c67395a6a4dd6284805"
        }
    },
    "schemaVersion": "3.4.16",
    "updatedAt": "2025-06-05T05:51:47.131Z",
    "networkType": "ethereum",
    "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
    },
    "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
    }
}