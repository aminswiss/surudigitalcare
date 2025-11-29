
SURU Digital Care — ready-to-deploy Next.js (pages) site
-------------------------------------------------------

Files included (ready to push to GitHub & deploy on Vercel):

- pages/index.js         -> Landing page + contact form (posts to /api/contact)
- pages/api/contact.js   -> Serverless API endpoint using SENDGRID_API_KEY env var
- components/Pyramid.js  -> Gold pyramid SVG component
- package.json

IMPORTANT: Before deploying, set these environment variables in Vercel (Project -> Settings -> Environment Variables):

- SENDGRID_API_KEY      = <your sendgrid API key>
- FROM_EMAIL            = SuruDigitalCare@gmail.com
- TO_EMAIL              = SuruDigitalCare@gmail.com
- WEBSITE_URL           = https://surudigitalcare.vercel.app   (optional)

How to deploy:
1. Create a new GitHub repo and push the contents of this folder (or upload ZIP and unpack).
2. In Vercel, import the GitHub repo and deploy.
3. In Vercel Project Settings, add the environment variables listed above.
4. Redeploy.

Notes:
- The contact API validates required fields and uses SendGrid to send an email to TO_EMAIL.
- If you do not want to use SendGrid, the endpoint will still validate and return 200 for demo mode if SENDGRID_API_KEY is not set.
