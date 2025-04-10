import slugify from 'slugify';
import { S3 } from '@aws-sdk/client-s3';

interface Image {
  fileName: string;
  file: File;
  originalName: string;
}

const s3 = new S3({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const SendS3Bucket = async (images: Image[]) => {
  const nameImages: string[] = [];
  const uploadPromises = images.map(async (img) => {
    try {
      const extension = img.originalName.split('.').pop();
      const fileName = `${slugify(img.fileName, { lower: true })}.${extension}`;

      if (img.file instanceof File) {
        const bufferImage = await img.file.arrayBuffer();
        const params = {
          Bucket: 'mevaro',
          Key: fileName,
          Body: Buffer.from(bufferImage),
          ContentType: `image/${extension}`,
        };
        await s3.putObject(params);
        nameImages.push(fileName);
      } else {
        console.error('img.file is not a File');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  });
  await Promise.all(uploadPromises);
  return nameImages;
};

export default SendS3Bucket;
