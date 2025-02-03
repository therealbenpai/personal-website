import { S3, type ObjectCannedACL } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import MIME from 'mime-types';
import crypto from 'crypto';
import {dataUriToBuffer} from 'data-uri-to-buffer';

export default defineEventHandler(async (event) => {
    const RTC = useRuntimeConfig();
    const s3 = new S3({
        region: RTC.aws.region,
        bucketEndpoint: false,
        credentials: {
            accessKeyId: RTC.aws.auth.accessKeyId,
            secretAccessKey: RTC.aws.auth.secretAccessKey,
        },
        endpoint: `https://s3.${RTC.aws.region}.amazonaws.com`,
    });
    const body = await readBody(event) as Record<string, string>
    const originalname = body.filename;
    const baseExtension = originalname.split('.').pop();
    if (!baseExtension) {
        return createError({
            statusCode: 400,
            statusText: 'Bad Request',
            statusMessage: 'Missing file extension',
        })
    }
    const key = `${crypto.randomBytes(16).toString('base64url')}.${baseExtension}`;
    const file = dataUriToBuffer(body.data)
    try {
        const upload = new Upload({
            client: s3,
            params: {
                Bucket: 'maincdnbucket',
                ACL: 'public-read' as ObjectCannedACL,
                Key: key,
                Body: Buffer.from(file.buffer),
                ContentType: MIME.contentType(originalname) || 'application/octet-stream',
            }
        });
        await upload.done();
        return {
            message: 'File uploaded successfully',
            key,
        }
    } catch (error) {
        return createError({
            statusCode: 500,
            statusText: 'Internal Server Error',
            statusMessage: 'Failed to upload file',
        });
    }
});