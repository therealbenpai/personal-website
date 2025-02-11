import { S3, PutObjectCommand } from '@aws-sdk/client-s3';
import MIME from 'mime-types';
import crypto from 'crypto';
import { dataUriToBuffer } from 'data-uri-to-buffer';

export default defineEventHandler(async (event) => {
    const RTC = useRuntimeConfig();
    const s3 = new S3({
        bucketEndpoint: false,
        credentials: {
            accessKeyId: RTC.cloudflare.auth.accessKeyId,
            secretAccessKey: RTC.cloudflare.auth.secretAccessKey,
        },
        endpoint: `https://41cdb69f198920b7940bbd93f0192ee8.r2.cloudflarestorage.com`,
    });
    const body = await readBody(event) as Record<string, string>
    const originalname = body.filename!;
    if (!originalname) {
        return createError({
            statusCode: 400,
            statusText: 'Bad Request',
            statusMessage: 'Missing file name',
        })
    }
    const baseExtension = originalname.split('.').pop()!;
    const key = `${crypto.randomBytes(16).toString('base64url')}.${baseExtension}`;
    const file = dataUriToBuffer(body.data!)
    try {
        const command = new PutObjectCommand({
            Bucket: 'cdn',
            Key: key,
            Body: Buffer.from(file.buffer),
            ContentType: MIME.contentType(originalname) || 'application/octet-stream',
        });
        await s3.send(command);
        return {
            message: 'File uploaded successfully',
            key,
        }
    } catch (error) {
        console.error(error);
        return createError((error as Error).message);
    }
});