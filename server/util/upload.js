import AWS from 'aws-sdk'

export const config = {
    bucketName: albumBucketName,
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
}

export const uploadImage = (e) => {
    S3FileUpload.uploadFile(e.target.files[0], config)
        .then(data => console.log(data.location))
        .catch(err => alert(err))
}