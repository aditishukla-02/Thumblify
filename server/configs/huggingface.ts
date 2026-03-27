import axios from "axios";

const hf = axios.create({
  baseURL:
    "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0",
  headers: {
    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "image/png", // 🔥 THIS FIXES 400
  },
  responseType: "arraybuffer", // image bytes
  timeout: 120000,
});

export default hf;
