function callFriend() {
    return new Promise((resolve) => {
        console.log("You called Friend successfully");
        resolve();
    });
}

function talkFriend() {
    return new Promise((resolve) => {
        console.log("He agreed for the travel");
        resolve();
    });
}

function wayToSkd() {
    return new Promise((resolve) => {
        console.log("Now we are going to SKD");
        resolve();
    });
}

async function trythings() {
    await callFriend();
    await talkFriend();
    await wayToSkd();
}

trythings();