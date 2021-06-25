import axios from 'axios';

export async function sendToCloud(files){
    const formData = new FormData();
    formData.append("file", files)
    formData.append("upload_preset", "gczvozlr")
    const res = await axios.post("https://api.cloudinary.com/v1_1/fotonbooks/image/upload", formData)
    return res.data 
}

