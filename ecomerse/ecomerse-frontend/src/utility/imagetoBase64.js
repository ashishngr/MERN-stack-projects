export default function ImageToBase64(file){
    const reader = new FileReader(); 
    if(!file){
        return null
    }
    reader.readAsDataURL(file);


    const data = new Promise((resolve, reject)=>{
        reader.onload = () => resolve(reader.result); 
        reader.onerror = err => reject(err);
    })
    return data
}
