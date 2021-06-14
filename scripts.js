
async function createEpochNft(name,params,approvalProgram,clearProgram){
    let unitName = "EPOCH";
    let nftUrl = "epoch.gallery";
    let from = "";
    let appArgs =[];
    let globalBytes =10;
    let globalInts = 3;
    let localBytes =1;
    let localInts = 1;
    let assetCreateTxn = createAsa(params,from,name,unitName,0,1,nftUrl,from,from,from,true);
    let applicationCreateTxn = createApplicationTransaction(params,from,approvalProgram,clearProgram,localInts,localBytes,globalInts,globalBytes,appArgs) ;
    let txns = [assetCreateTxn,applicationCreateTxn];
    let groupId = algosdk.computeGroupID(txns);
    txns = txns.map((el)=>{
        el.group=groupId;
        return el;
        });
    await myalgoConnect.signTransaction(txns);
}

async function createUncopiedNft(name,params){
    return new Promise(async(resolve,reject)=>{
        let from = "UNCOPIEDXXXXXXNUFKZLQQETOWHXEA3AM335B5NQKYHSFVEY";
        let nftUrl = "uncopied.art/c/v/AK";
        let unitName = "UNCOPIED";
        let assetCreateTxn = createAsa(params,from,name,unitName,0,1,nftUrl,from,from,from,true);
        try{
           let signedTxn = await myAlgoWallet.signTransaction(assetCreateTxn);
           let result = await algodClient.sendRawTransaction(signedTxn.blob).do();
           resolve(result)
        }catch(error){
            reject(error);
        }
    });
    }

    


async function clawbackEpochNft(assetIndex,params,assetClawback){
    return new Promise(async(resolve,reject)=>{
        let from = "";
        let clawbackTxn = clawbackAsa(params,from,assetIndex,from,from,from,assetClawback);
        try{
            let signedTxn = await myAlgoWallet.signTransaction(clawbackTxn);
           let result = await algodClient.sendRawTransaction(signedTxn.blob).do();
           resolve(result)
        }catch(error){
            reject(error);
        }
    }); 
}


async function optInEpochNft(assetId,sender){
    return new Promise(async(resolve,reject)=>{
        let optInTxn = optInAddress(assetId,sender);
        try{
            let signedTxn = myalgoConnect.signTransaction(optInTxn);
            let result = await algodClient.sendRawTransaction(signedTxn.blob).do();
            resolve(result)
        }catch(error){
            reject(error);
        }
    });
}


function sendNftToArtist(){

}


function createAsa(params,from,assetName, assetUnitName,assetDecimals,assetTotal,assetUrl,assetFreeze,assetManager,assetReserve,assetDefaultFrozen){
   let  txn = {
      ...params,
      fee: 1000,
      flatFee: true,
      type: 'acfg',
      from: from,
      assetName: assetName,
      assetUnitName: assetUnitName,
      assetDecimals: assetDecimals,
      assetTotal: assetTotal,
      assetURL: assetUrl,
      assetFreeze: assetFreeze,
      assetManager: assetManager,
      assetReserve: assetReserve,
      assetDefaultFrozen: assetDefaultFrozen
    };
  return txn;
    // let signedTxn = await myAlgoWallet.signTransaction(txn);
    // console.log(signedTxn.txID);
  
    // await algodClient.sendRawTransaction(signedTxn.blob).do(); 
}

function clawbackAsa(params,sender,assetIndex,assetFreeze,assetManager,assetReserve,assetClawback){
   let  txn = {
        ...params,
        fee: 1000,
        flatFee: true,
        type: 'acfg',
        from: sender,
        assetIndex: assetIndex,
        assetFreeze: assetFreeze,
        assetManager: assetManager,
        assetReserve: assetReserve,
        assetClawback:assetClawback
      };

      return txn;
}

function updateAsa(params,from,assetIndex,assetFreeze,assetManager,assetReserve){
    txn = {
        ...params,
        fee: 1000,
        flatFee: true,
        type: 'acfg',
        from: from,
        assetIndex: assetIndex,
        assetFreeze: assetFreeze,
        assetManager: assetManager,
        assetReserve: assetReserve,
      };
      return txn;
}

function createApplicationTransaction(params,sender,approvalProgram,clearProgram,localInts,localBytes,globalInts,globalBytes,appArgs){
    let txn = {
        type: "appl",
        appOnComplete: 0,
        from: sender,
        fee: 1000,
        flatFee: true,
        ...params,
        approvalProgram,
        clearProgram,
        localInts,
        localBytes,
        globalInts,
        globalBytes
};
    return txn;
}

function makeApplicationCallTransaction(sender,appId,appArgs){
    let txn = {
        type: "appl",
        appOnComplete: 0,
        from: sender,
        appIndex: appId,
        fee: 1000,
        flatFee: true,
        ...params
};
    return txn;
}

async function compileProgram(client, programSource) {
    let encoder = new TextEncoder();
    let programBytes = encoder.encode(programSource);
    let compileResponse = await client.compile(programBytes).do();
    let compiledBytes = new Uint8Array(Buffer.from(compileResponse.result, "base64"));
    return compiledBytes;
}


function optInAddress(assetID,address,params){
    let sender = address;
    let recipient = sender;
    amount = 0;
    let opttxn = {
      ...params,
      fee: 1000,
      flatFee: true,
      type: 'axfer',
      assetIndex: assetID,
      from: sender,
      to:  recipient,
      amount: 0,
      note: new Uint8Array(Buffer.from('Opting in to Epoch NFT'))
    };
        return opttxn;
}

async function compileEpochClawbackAddress(appId,client){
    var epochProgramSource = `#pragma version 3
    gtxn 0 RekeyTo
    global ZeroAddress
    ==
    gtxn 1 RekeyTo
    global ZeroAddress
    ==
    &&
    gtxn 2 RekeyTo
    global ZeroAddress
    ==
    &&
    gtxn 0 CloseRemainderTo
    global ZeroAddress
    ==
    && 
    gtxn 1 CloseRemainderTo
    global ZeroAddress
    ==
    && 
    gtxn 2 CloseRemainderTo
    global ZeroAddress
    ==
    && 
    gtxn 0 AssetCloseTo
    global ZeroAddress
    ==
    &&
    gtxn 1 AssetCloseTo
    global ZeroAddress
    ==
    &&
    gtxn 2 AssetCloseTo
    global ZeroAddress
    ==
    &&
    txn Fee
    int 10000
    <=
    &&
    gtxn 2 TypeEnum
    int appl
    ==
    &&
    gtxn 2 ApplicationID
    int ${appId}
    ==
    &&`;
    
    return new Promise(async(resolve,reject)=>{
        try{
            const results = await client.compile(epochProgramSource).do();
            resolve(results)
        }catch(error){
           reject(error) 
        }
       
    })
    
    }