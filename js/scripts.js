console.log(algosdk);
    let epochAsaInfo =[
        {
            name:"EPOCH, \"FREEPORT\", 2021; 1/5",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/C",
            total:1,
            metadataHash:("73cd943cc7ef72d65d754662985412a4"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599509"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 2/5",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/D",
            total:1,
            metadataHash:("ddea2b97093aeff0f5c2b262eb562322"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599550"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 3/5",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/E",
            total:1,
            metadataHash:("aaede09d0799f5693e9dd627a0e22ec4"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599602"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 4/5",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/F",
            total:1,
            metadataHash:("bd2964d746eda8f42da3cdf21883bef3"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599627"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 5/5",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/G",
            total:1,
            metadataHash:("2cfc7e5bcb47fa235c1480c0b991fa76"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599673"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 1/8 AP",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/H",
            total:1,
            metadataHash:("6099c8bd6d3e9db82a72cbd40c8a1771"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599716"))

        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 2/8 AP",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/I",
            total:1,
            metadataHash:("4bb069bf9c6bcc6b728217d9b2851926"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599759"))

        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 3/8 AP",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/J",
            total:1,
            metadataHash:("afabe9c45b609bcf4382f8e624174ebb"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599805"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 4/8 AP",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/K",
            total:1,
            metadataHash:("d457a5ba58fb2e6cb09ab76dee991165"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599860"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 5/8 AP",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/L",
            total:1,
            metadataHash:("0bff9605a2874529628bfa681a8dc586"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599905"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 6/8 AP" ,
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/M",
            total:1,
            metadataHash:("603dbf8fff0239be23d3984e0bb152d5"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599951"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 7/8 AP",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/N",
            total:1,
            metadataHash:("b13f3cd280641cbe6055ab33341aef2e"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599983"))
        },
        {
            name:"EPOCH, \"FREEPORT\", 2021; 8/8 AP",
            unit:"EPOCH",
            url:"https://api.uncopied.art/c/v/O",
            total:1,
            metadataHash:("41bd0ef4a8589852c83f2ca5d2e39da1"),
            decimals:0,
            note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243600015"))
        },

    ]
    console.log(epochAsaInfo);
 function createEpochNft(name,params,approvalProgram,clearProgram,price,from){
    let unitName = "EPOCH";
    let nftUrl = "epoch.gallery";
    // let from = "VTAUB5LOVTWKXICWEDBO5UG2JNNGEW7ULRB4PQB23DGRKSAXDVPORQNZJE";
    let appArgs =[algosdk.encodeUint64(price),algosdk.encodeUint64(5),algosdk.decodeAddress("YGCKHAG4H3WDUQSAY5J4MK5ZIWLGIF7W6ZYO5EZY3OGZJB5FWGDNBX7BUA").publicKey,algosdk.decodeAddress("IKEPBSW7RSPN4TXYC3AV6FOOGZ6PJLTJKEB2PVCTPSRFNB3CANZ5JJRZPY").publicKey, algosdk.decodeAddress("2FSBHE3XAXJHBFFUABPPBBU3ZL4PQAHI6BB3KTHJKL5IZCC7BG4LR6GRT4").publicKey, algosdk.decodeAddress("UONII5HLZPHGDCBCETVTFGX42I5MJWEYKM5NUIFQW3A47CSDIHZN74AYUA").publicKey, algosdk.decodeAddress("EMMEIOWLZPMUCXSLGB5QOR33HCQZAQT6KSRGCXHBO54W7LNLQCJXSGJ4IQ").publicKey, algosdk.decodeAddress("UNH443RNFL4NWFCP5AI3N34C6IK6SWDEPZRLFKXGWYTXBZ5BTLJJLGWLRQ").publicKey, algosdk.decodeAddress("QPNWTRS3FLRUICYYLVPQV7QZIJPBNM2EV6S5BF6JOFQL7DGCLU5HKQSUK4").publicKey];
    
    let globalBytes =10;
    let globalInts = 3;
    let localBytes =1;
    let localInts = 1;
    let assetCreateTxn = createAsa(params,from,epochAsaInfo[0].name,epochAsaInfo[0].unit,0,epochAsaInfo[0].total,epochAsaInfo[0].url,from,from,from,true,epochAsaInfo[0].metadataHash,epochAsaInfo[0].note);
    let applicationCreateTxn = createApplicationTransaction(params,from,approvalProgram,clearProgram,localInts,localBytes,globalInts,globalBytes,appArgs);
    let otherAsaArray = [];
    for (let i = 0; i<=11;i++){
        let otherAsaName="";
        if(i<=3){
            otherAsaName= `Epoch ${i+2}/5`
        }else{
            otherAsaName= `Epoch ${i+2}/8`
        }
        otherAsaArray.push( createAsa(params,from,epochAsaInfo[i+1].name,epochAsaInfo[i+1].unit,0,epochAsaInfo[i+1].total,epochAsaInfo[i+1].url,from,from,from,true,epochAsaInfo[i+1].metadataHash,epochAsaInfo[i+1].note));
    }
    let txns = [assetCreateTxn,applicationCreateTxn,...otherAsaArray];
    console.log(otherAsaArray);
    let groupId = algosdk.computeGroupID(txns);
    console.log(otherAsaArray);
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


function createAsa(params,from,assetName, assetUnitName,assetDecimals,assetTotal,assetUrl,assetFreeze,assetManager,assetReserve,assetDefaultFrozen,assetMetadataHash,note){
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
      assetDefaultFrozen: assetDefaultFrozen,
      assetClawback:from,
      assetMetadataHash,
      note
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

function updateAsa(params,from,assetIndex,assetFreeze,assetManager,assetReserve,assetClawback){
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
        assetClawback
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


function updateApplication(appId, approvalProgram,clearProgram,params,from){
  return{
      ...params,
      fee:1000,
      flatFee: true,
      type: "appl",
      from,
    appIndex: appId,
	appOnComplete: 4,
	appApprovalProgram: approvalProgram,
	appClearProgram: clearProgram,

  }
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
        int 9494000000
        load 11
        <=
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
        int 9494000000
        load 10
        ==
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