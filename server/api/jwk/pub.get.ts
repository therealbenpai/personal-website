// server/api/jwt/keys/pub.get.ts

export default defineEventHandler(async () => {
    return Buffer.from(
        "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFQnRIZmJldmk0WnUwdlNqdzhqcEorQ3JBaFM5bQptVVB0L2dQNTBrSEhQaXhZenM0Tk5mUlVFS0tnSGtHOWg5SERvQmlnS05pRWlQY0kxaGNxTHZ6dkFRPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
        "base64"
    ).toString('utf-8');
});
