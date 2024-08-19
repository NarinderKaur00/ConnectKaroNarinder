import multer from "multer";
const upload = multer({
    storage:multer.memoryStorage(), //ab multer internally kase implement kiya gya h vo toh multer wala hi jane because multer is a package and joki kisi developer ne banaya but as a backend developer i just need to know ki file upload karwani h toh kase kya code h bs itna hi janana hota h bs ki multer ko use krna h 
});
export default upload;