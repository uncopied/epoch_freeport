console.log(algosdk);
 function createEpochNft(name,params,approvalProgram,clearProgram,price,from){
    let unitName = "EPOCH";
    let nftUrl = "epoch.gallery";
    // let from = "VTAUB5LOVTWKXICWEDBO5UG2JNNGEW7ULRB4PQB23DGRKSAXDVPORQNZJE";
    let appArgs =[algosdk.encodeUint64(price),algosdk.encodeUint64(5),new Uint8Array(algosdk.encodeAddress("YGCKHAG4H3WDUQSAY5J4MK5ZIWLGIF7W6ZYO5EZY3OGZJB5FWGDNBX7BUA")),new Uint8Array(algosdk.encodeAddress("IKEPBSW7RSPN4TXYC3AV6FOOGZ6PJLTJKEB2PVCTPSRFNB3CANZ5JJRZPY")), new Uint8Array(algosdk.encodeAddress("2FSBHE3XAXJHBFFUABPPBBU3ZL4PQAHI6BB3KTHJKL5IZCC7BG4LR6GRT4")), new Uint8Array(algosdk.encodeAddress("UONII5HLZPHGDCBCETVTFGX42I5MJWEYKM5NUIFQW3A47CSDIHZN74AYUA")), new Uint8Array(algosdk.encodeAddress("EMMEIOWLZPMUCXSLGB5QOR33HCQZAQT6KSRGCXHBO54W7LNLQCJXSGJ4IQ")), new Uint8Array(algosdk.encodeAddress("UNH443RNFL4NWFCP5AI3N34C6IK6SWDEPZRLFKXGWYTXBZ5BTLJJLGWLRQ")), new Uint8Array(algosdk.encodeAddress("QPNWTRS3FLRUICYYLVPQV7QZIJPBNM2EV6S5BF6JOFQL7DGCLU5HKQSUK4"))];
    console.log(appArgs);
    let globalBytes =10;
    let globalInts = 3;
    let localBytes =1;
    let localInts = 1;
    let assetCreateTxn = createAsa(params,from,name,unitName,0,1,nftUrl,from,from,from,true);
    let applicationCreateTxn = createApplicationTransaction(params,from,approvalProgram,clearProgram,localInts,localBytes,globalInts,globalBytes,appArgs);
    let txns = [assetCreateTxn,applicationCreateTxn];
    let groupId = algosdk.computeGroupID(txns);
    txns = txns.map((el)=>{
        el.group=groupId;
        return el;
        });
    return txns;
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

function createApplicationTransaction(params,sender,appApprovalProgram,appClearProgram,appLocalInts,appLocalByteSlices,appGlobalInts,appGlobalByteSlices,appArgs){
    let txn = {
        type: "appl",
        appOnComplete: 0,
        from: sender,
        fee: 1000,
        flatFee: true,
        ...params,
        appApprovalProgram,
        appClearProgram,
        appLocalInts,
        appLocalByteSlices,
        appGlobalInts,
        appGlobalByteSlices,
        appArgs
};
console.log(txn);
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

    async function compileFreeportContract(client){
        const freeportSource=`#pragma version 3
        int 0
        txn ApplicationID
        ==
        bnz creation
        
        
        int UpdateApplication
        txn OnCompletion
        ==
        bnz updateApp
        
        
        int DeleteApplication
        txn OnCompletion
        ==
        bnz DeleteApp
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        byte "Neil"
        app_global_get
        gtxn 0 AssetReceiver
        ==
        &&
        bnz txToArtist
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        byte "Sarah"
        app_global_get
        gtxn 0 AssetReceiver
        ==
        &&
        bnz txToArtist
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        byte "Alice"
        app_global_get
        gtxn 0 AssetReceiver
        ==
        &&
        bnz txToArtist
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        byte "Juan"
        app_global_get
        gtxn 0 AssetReceiver
        ==
        &&
        bnz txToArtist
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        byte "Alexandra"
        app_global_get
        gtxn 0 AssetReceiver
        ==
        &&
        bnz txToArtist
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        byte "Amanda"
        app_global_get
        gtxn 0 AssetReceiver
        ==
        &&
        bnz txToArtist
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        byte "Hirad"
        app_global_get
        gtxn 0 AssetReceiver
        ==
        &&
        bnz txToArtist
        
        byte "Creator"
        app_global_get
        gtxn 0 AssetSender
        ==
        bnz txSentFromCreator
        
        global GroupSize
        int 11
        ==
        gtxn 3 AssetAmount
        int 1 
        ==
        &&
        byte "Creator"
        app_global_get
        gtxn 0 Receiver
        ==
        &&
        byte "Neil"
        app_global_get
        gtxn 4 Receiver
        ==
        &&
        byte "Sarah"
        app_global_get
        gtxn 5 Receiver
        ==
        &&
        byte "Alice"
        app_global_get
        gtxn 6 Receiver
        ==
        &&
        byte "Juan"
        app_global_get
        gtxn 7 Receiver
        ==
        &&
        byte "Alexandra"
        app_global_get
        gtxn 8 Receiver
        ==
        &&
        byte "Amanda"
        app_global_get
        gtxn 9 Receiver
        ==
        &&
        byte "Hirad"
        app_global_get
        gtxn 10 Receiver
        ==
        &&
        gtxn 4 Amount
        gtxn 5 Amount
        +
        gtxn 6 Amount
        +
        gtxn 7 Amount
        +
        gtxn 8 Amount
        +
        gtxn 9 Amount
        +
        gtxn 10 Amount
        +
        gtxn 1 Amount
        +
        gtxn 0 Amount
        +
        store 11
        load 11
        int 20
        *
        int 100
        /
        store 12
        gtxn 0 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        gtxn 4 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        gtxn 5 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        gtxn 6 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        gtxn 7 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        gtxn 8 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        gtxn 9 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        gtxn 10 Amount
        int 1000
        *
        load 12
        /
        int 125
        ==
        &&
        return
        
        
        
        
        
        
        
        txSentFromCreator:
        global GroupSize
        int 10
        ==
        gtxn 0 AssetAmount
        int 1 
        ==
        &&
        gtxn 1 Receiver
        gtxn 0 AssetSender
        ==
        &&
        byte "Neil"
        app_global_get
        gtxn 3 Receiver
        ==
        &&
        byte "Sarah"
        app_global_get
        gtxn 4 Receiver
        ==
        &&
        byte "Alice"
        app_global_get
        gtxn 5 Receiver
        ==
        &&
        byte "Juan"
        app_global_get
        gtxn 6 Receiver
        ==
        &&
        byte "Alexandra"
        app_global_get
        gtxn 7 Receiver
        ==
        &&
        byte "Amanda"
        app_global_get
        gtxn 8 Receiver
        ==
        &&
        byte "Hirad"
        app_global_get
        gtxn 9 Receiver
        ==
        &&
        gtxn 3 Amount
        gtxn 4 Amount
        +
        gtxn 5 Amount
        +
        gtxn 6 Amount
        +
        gtxn 7 Amount
        +
        gtxn 8 Amount
        +
        gtxn 9 Amount
        +
        gtxn 1 Amount
        +
        store 10
        gtxn 3 Amount
        int 100
        *
        load 10
        /
        int 10
        ==
        &&
        gtxn 4 Amount
        int 100
        *
        load 10
        /
        int 10
        ==
        &&
        gtxn 5 Amount
        int 100
        *
        load 10
        /
        int 10
        ==
        &&
        gtxn 6 Amount
        int 100
        *
        load 10
        /
        int 10
        ==
        &&
        gtxn 7 Amount
        int 100
        *
        load 10
        /
        int 10
        ==
        &&
        gtxn 8 Amount
        int 100
        *
        load 10
        /
        int 10
        ==
        &&
        gtxn 9 Amount
        int 100
        *
        load 10
        /
        int 10
        ==
        &&
        gtxn 1 Amount
        int 100
        *
        load 10
        /
        int 30
        ==
        &&
        byte "Price"
        app_global_get
        load 10
        ==
        &&
        byte "edition"
        app_global_get
        int 1
        +
        store 13
        byte "edition"
        load 13
        app_global_put
        load 13
        int 5
        <=
        &&
        return
        
        creation:
        byte "Creator"
        txn Sender
        app_global_put
        byte "Neil"
        gtxna 1 ApplicationArgs 2
        app_global_put
        byte "Sarah"
        gtxna 1 ApplicationArgs 3
        app_global_put
        byte "Alice"
        gtxna 1 ApplicationArgs 4
        app_global_put
        byte "Juan"
        gtxna 1 ApplicationArgs 5
        app_global_put
        byte "Alexandra"
        gtxna 1 ApplicationArgs 6
        app_global_put
        byte "Amanda"
        gtxna 1 ApplicationArgs 7 
        app_global_put
        byte "Hirad"
        gtxna 1 ApplicationArgs 8
        app_global_put
        byte "Price"
        gtxna 1 ApplicationArgs 0
        btoi
        app_global_put
        byte "edition"
        int 0
        app_global_put
        
        
        
        global GroupSize
        int 2
        >=
        gtxn 0 TypeEnum
        int acfg
        ==
        &&
        gtxn 0 ConfigAssetDefaultFrozen
        int 1
        ==
        &&
        
        return
        
        updateApp:
        byte "Creator"
        app_global_get
        txn Sender
        ==
        return
        
        DeleteApp:
        byte "Creator"
        app_global_get
        txn Sender
        ==
        return
        
        
        txToArtist:
        int 1
        return `
        return new Promise(async(resolve,reject)=>{
            try{
                const results = await client.compile(freeportSource).do();
                resolve(results)
            }catch(error){
               reject(error) 
            }
           
        });
    }

    async function compileClearProgram(client){
        var clearProgramSource=`#pragma version 3
        int 1`
        return new Promise(async(resolve,reject)=>{
            try{
                const results = await client.compile(clearProgramSource).do();
                resolve(results)
            }catch(error){
               reject(error) 
            }
           
        })
    }