function protocolo() {
    let data = new Date();
    return ("0" + data.getDate()).substr(-2)+("0" + (data.getMonth() + 1)).substr(-2)+data.getFullYear()+Math.floor(1000 + Math.random() * 9000);
}

console.log(protocolo())