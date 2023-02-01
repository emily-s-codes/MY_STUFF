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
    const config = {
        bucketName: albumBucketName,
        region: bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
        })
    }

    const uploadImage = (e) => {
        S3FileUpload.uploadFile(e.target.files[0], config)
            .then(data => console.log(data.location))
            .catch(err => alert(err))
    }

    return (
        <>
            <input type="file" onChange={uploadImage} />
        </>
    );
}

export default UploadImages;