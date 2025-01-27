// export async function getVans() {

//     const res = await fetch("api/vans")
    
    
//     const data = await res.json();

//     return data.vans;
// }

// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getVans(id) {
    const url = ?  `/api/vans/${id}` : `/api/vans`;
    const res = await fetch(url);
    id (!res.ok) {
        throw {
            message: "Failed to fetch van",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.van;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login", 
        {
            method: "post" , body: JSON.stringify(creds)
        }
    )
    const dtaa = await res.json();

    if(!res.ok) {
        throw {
            message: dtaa.message,
            statusText: res.statusText,
            status: res.status
        }
    }

}