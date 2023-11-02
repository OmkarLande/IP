// function dataFetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { message: "data fetched , yeah!!!" }
//             if (data) {
//                 console.log("Promise Resolved");
//                 resolve(data);
//             } else {
//                 console.log("Promise Reject");
//                 reject("error");
//             } 

//         }, 2000);
//     })
// }
const data =() => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const hari = "Harry The God"
            if(hari) {
                console.log(hari)
                res(hari)
            }
            else{
                console.log("reject")
                rej("error")
            }
        }, 5000);
    })
}

async function asynx() {
    try {
        const hari = await data();
        // console.log("await pratice");
        console.log(hari)
    } catch (err) {
        console.error(err)
    }
}

asynx();