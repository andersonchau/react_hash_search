export interface HashTagDetails {
    htId : number; 
    label : string;
    description : string;
}

export interface HashTagSearchReq {
    searchStr : string; 
    pageNumber : number;
}


export interface HashTagSearchResp {
    totalNumRecord : number;
    hashTagDetailList : HashTagDetails[];
}

export interface HashTagUpdateResp {
    result: string
}



