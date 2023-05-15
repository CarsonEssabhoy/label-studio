// import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class AnnotationAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket = s3.Bucket.fromBucketName(
      this,
      'virufy-annotation-app',
      'virufy-annotation-app'
    );

    console.log(s3Bucket.bucketName);
    console.log(s3Bucket.bucketArn);
  }
}
