let helpers=require('../helpers/helper')
class GitHubAPI{
    async searchRepo(ctx){
        console.log("Request for searchRepo:",ctx.request);
        let resp = await helpers.searchRepoHelper({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for searchRepo:",ctx.body);
        }
    }
    async getContent(ctx){
        
        console.log("Request for getContent:",ctx.request);
        let resp = await helpers.getContentHelper({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for getContent:",ctx.body);
        }
    }
    async getTopTenPacakges(ctx){
        console.log("Request for getTopTenPacakges:",ctx.request);
        let resp = await helpers.getTopTenPacakges({requestParam:ctx.request.body}).catch(e=>{
            ctx.body = { status: 'false' , message:e.message}
        });
        if(resp){
            ctx.body = { status: 'true' ,data:resp}
            console.log("Response for getTopTenPacakges:",ctx.body);
        }
    }
}

module.exports = new GitHubAPI();