import S3FileUpload from "react-s3/lib/ReactS3";

var albumBucketName = import.meta.env.BUCKET_NAME;
var bucketRegion = import.meta.env.BUCKET_REGION;
var IdentityPoolId = import.meta.env.IDENTITY_POOL_ID;

// AWS.config.update({
//     region: bucketRegion,
//     credentials: new AWS.CognitoIdentityCredentials({
//         IdentityPoolId: IdentityPoolId
//     })
// });

// var s3 = new AWS.S3({
//     apiVersion: "2006-03-01",
//     params: { Bucket: albumBucketName }
// });

const UploadImages = () => {

    const onSelectFile = async (e) => {
        const file = e.target.files[0]
        const convertedFile = await convertToBase64(file)

        const s3URL = await fetch(`${import.meta.env.VITE_BASE_URL}api/uploadphoto`, {
            image: convertedFile,
            imageName: file.name
        })
    }

    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader()

            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result)
            }
        })
    }

    return (
        <>
            <input type="file" accept="image/*" onChange={onSelectFile} />
        </>
    );
}

export default UploadImages;