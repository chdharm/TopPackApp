let utils = require('./Utils');

class Helpers {
    async searchRepoHelper(context) {
        let repoName=context.name;
        let payload = {
            url: "https://api.github.com/search/repositories?q="+repoName+"+language:javascript&sort=stars+forks&order=desc",
            method: 'get'
        };
        let resp = await utils.apiCall(payload).catch(e => {
            console.log("Error in API call- searchRepoHelper function");
        });
        if (resp && resp.status == 200) {
            return resp.data;
        } else {
            throw new Error("Error in API call- searchRepoHelper function");
        }
    }
    async getContentHelper(context) {
        let ownerName="";
        let repoName="";

        let payload = {
            url: "https://api.github.com/repos/"+ownerName+"/"+repoName+"+/contents/package.json",
            method: 'get'
        };
        let resp = await utils.apiCall(payload).catch(e => {
            console.log("Error in API first call- getContentHelper function1",e);

            let payload = {
                url: "https://raw.githubusercontent.com/"+ownerName+"/"+repoName+"/master/package.json",
                method: 'get'
            };

            let resp2 = await utils.apiCall(payload).catch(e => {
                console.log("Error in second API call- getContentHelper function1",e);
            });
            if (resp2 && resp2.status == 200) {
                return resp2.data;
            } else {
                console.log("Printing response=",res2);
                throw new Error("Package.json file do not exist");
            }
        });
        if (resp && resp.status == 200) {
            return resp.data;
        } else {
            console.log("Printing response=",res);
            throw new Error("Error in API call- getContentHelper function2");
        }
    }
    async getTopTenPacakges(context) {
        let packageJSONList=context;
        let occurences={};
        packageJSONList.forEach((pj)=>{
            let packages=pj.dependencies;
            console.log("each packages:",packages);
            packages.forEach((pac)=>{
                if(pac in occurences.keys()){
                    occurences[pac]=occurences[pac]+1;
                }else{
                    occurences[pac]=1;
                }
            });
        });
        //Now as we have occurences of each pacakges stored in occurences object 
        //So now we can sort and take the first 10 and return
        return occurences;
    }
}
module.exports = new Helpers();