# Personal Website 4.0

# using gulp

# playing around with parallax - i.e., trying to find the delicate balance between cool and nauseating.

view at www.daviddcheng.com


using S3 and Cloudfront to host:
thanks to: https://stormpath.com/blog/ultimate-guide-deploying-static-site-aws

Create S3 Bucket
`$ aws s3 mb s3://www.davcheng.com
$ aws s3 website s3://www.davcheng.com --index-document index.html --error-document error.html`

Deploy website
`$ aws s3 sync --acl public-read --sse --delete /path/to/static/site/ s3://www.davcheng.com`


Cloudfront

Put www.mywebsite.com.s3-website-us-east-1.amazonaws.com into the Origin Domain Name box. Don’t forget to substitute www.mywebsite.com with your S3 bucket name.
Under the Viewer Protocol Policy section, select Redirect HTTP to HTTPS (because we plan on serving this site over SSL).
Under Object Caching, click Customize then input 31536000 for all of the 3 input boxes: Minimum TTL, Maximum TTL, and Default TTL.
Under the Compress Objects Automatically section, select the Yes bubble. This will turn CloudFront compression on for us automatically.
Under the Alternate Domain Names section, input your real domain name. For instance: www.mywebsite.com
Under the Default Root Object section, input index.html into the box. This tells CloudFront to render your index.html by default when a user visits your website directly.
Under the SSL Certificate section, select the Custom SSL Certificate button. This is where we’ll generate a new SSL Certificate.
Next, click the Request or Import a Certificate with ACM button (this will open a new window).
Enter your domain name (www.mywebsite.com), then click the Review and Request button. Then confirm the request.
Now, go check your email that is registered for that domain (whoever the admin of the domain is should receive an email), and click the verification link Amazon sends you. This lets Amazon know you are the owner of the domain and generates a new SSL cert for your website.
Now, go back to the CloudFront configuration page you were on, and click the little refresh icon in the Custom SSL Certificate section. You can now select your SSL certificate from the drop down menu.
Finally: click the Create Distribution button at the very bottom of the page!
