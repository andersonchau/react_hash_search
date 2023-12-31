import { HashTagSearchReq,HashTagSearchResp,HashTagDetails,HashTagUpdateResp } from '../interfaces/AppInterface';
export const DataService = {
    
    searchAllHashTag:  function (req: HashTagSearchReq ) : Promise<HashTagSearchResp>{
      return new Promise<HashTagSearchResp>((resolve, reject) => {
        //saving MyClass using http service
        //return the saved MyClass or error
        var res : HashTagSearchResp = {
            totalNumRecord : 1,
            hashTagDetailList : [
                {
                    htId : 1,
                    label : 'Password',
                    description : 'Working use Password'
                },
                {
                    htId : 2,
                    label : 'Bookmark',
                    description : 'Useful URLs'
                },
                {
                    htId : 3,
                    label : 'TODO',
                    description : 'TODO List'
                },
            ]

        }
        resolve(res);
      
    });
    },
    searchAllHashTagSync :  function (req: HashTagSearchReq ) : HashTagSearchResp {
        var res : HashTagSearchResp = {
            totalNumRecord : 1,
            hashTagDetailList : [
                {
                    htId : 1,
                    label : 'Password',
                    description : 'Working use Password'
                },
                {
                    htId : 2,
                    label : 'Bookmark',
                    description : 'Useful URLs'
                },
                {
                    htId : 3,
                    label : 'TODO',
                    description : 'TODO List'
                },
            ]
        }
        return res;
    },
    deleteHashTagById :  function (req: number ) :  Promise<HashTagUpdateResp> {
        console.log("DataService.deleteHashTagById " + req + " called " );
        return new Promise<HashTagUpdateResp>((resolve, reject) => {
            var res : HashTagUpdateResp = {
                result : "OK"
            };
            resolve(res);     
        });
    },
    
  }
  