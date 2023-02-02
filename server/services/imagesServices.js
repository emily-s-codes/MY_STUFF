import AWS from 'aws-sdk'
const BUCKET_NAME = process.env.BUCKET_NAME
const s3 = new AWS.S3({})

export const upload = async (imageName, base64Image, type) => {
    const params = {
        Bucket: `${BUCKET_NAME}/images`,
        Key: imageName,
        Body: new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        ContentType: type
    }

    let data

    try {
        data = await promiseUpload(params)
    } catch (error) {
        console.error(error)
        return ""
    }
    return data.Location
}

const promiseUpload = (params) => {
    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })

}

