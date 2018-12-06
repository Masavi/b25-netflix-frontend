export default () => {
    let token = localStorage.getItem("NETFLIX_TOKEN");
    let base64Uri = token.split('.')[1];
    let base64 = base64Uri.replace('-', '+').replace("_", "/");
    const payload = JSON.parse(window.atob(base64)); 
    console.log(payload);
    return payload;
}