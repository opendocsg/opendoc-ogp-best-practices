# Working with Nectar
## A Collection of Non-Obvious Things About Nectar

Written by @cloudhary. Target audience: SWE unfamiliar with Nectar

## What is Nectar?
Nectar is a Platform-as-a-Service product (it’s actually Redhat’s Openshift Enterprise) that will build and run your docker images

## How do we build products for Nectar?

You need to take into account what you're able to build with so that you architect systems appropriately. You have only two things on Nectar:
- Docker containers (that you specify using a Dockerfile)
- Persistence through either volumes or a managed MySQL DB. 

Do note that each container unit (CU) of Nectar gives you 1Mbps of bandwidth. It can be a bottleneck for data intensive projects. 

## Development
**‼️Containers are run as random user id that is part of root group‼️**  
This is an important departure from what your usual workflow might have been. It is not the same as running as root. Make sure you simulate this in your dev and staging environments by doing the following:
- Run your Docker containers with the user flag, i.e, docker run --user 12345678:0
- Providing appropriate permissions to necessary directories at build time by doing `RUN chmod -R g+rwx <directory of choice>`. 
But be mindful - use the aforementioned command with caution as some important directories will not respect the modification. For example, you cannot modify or change permissions of the /etc/hosts file, or anything in the entire /etc and /var directory

## Building
This is the only phase in the Nectar build process that has internet access. All dependencies should be imported and installed during this phase. 

Building takes time, particularly the scanning and transferring stage. Be patient. If you’re eager to improve the situation, do things that will reduce the size of your image. Use a small base image, use fewer packages, don’t import unnecessary dependencies like nodemon, minimize layers, etc. 

Do not make assumptions when building and deploying for Nectar. Where possible, use the “verbose” option (--verbose, -v etc.) to be sure of what is going on

## Deploying
The easiest step of them all. Just click deploy. 

Have at least two replicas running so that the underlying Kubernetes can evict any one of them without any impact to your service availability.

After clicking deploy, even if Nectar shows that the deploy was a success, be sure to check the logs to figure it out by your own. 

Avoid using the health check endpoint unless you have time to figure it out and monitoring is critical for your application. It is sometimes either a liveness check or a readiness check, and if you set it up wrongly, your code may either never deploy or it may cause a healthy service to continually restart unnecessarily. They already have a monitoring service that will ping your endpoint every 5 mins and send an email to you if it fails. Just rely on that.

You need to use a forward proxy and request for credentials to communicate with any external services. To connect to your other services or the DB tier, use the environment variables

## Debugging 
The Nectar engineers are friendly and helpful. They are keen to see us succeed and are willing to accomodate most requests that are within their paygrade to solve. Raise a service request so that they are able to allocate resources to attend to you. Make friends with them so that you can ask for clarifications. Join the #nectar-warriors channel so that you can ask other OGP engineers who have struggled with

Once you’ve deployed the application, logs don’t show up immediately. They take about 10 seconds to show up. Patiently wait for them and refresh the logs page. 

The terminal is quite useful when debugging. You will have an easier time debugging if you install essential tools need during the build time, especially if you use base images. For example, let’s say you want to check if certain routes in your app are working, you could use curl to call it from the terminal. If you didn’t have it installed in the docker image, you would have to go through the entire build process again before you can continue troubleshooting. That could take about 30 mins. So make sure you install all of the tools you need for debugging. Oh, do remember that since you don't have root privileges, you are unable to run `ping` and `traceroute`. Check the linux man page to figure out if you need to be root. Usually, you're going to want to have `curl` installed and you'll need to make do with just that.

## Some things that don’t yet exist
A couple of things that you might find yourself craving that don’t yet exist: Travis CI, Serverless functions, MongoDB, docker-compose, multi-stage builds, SSH into container from command line, interactive terminal (file editing software like vi don’t work, for example), Auto scaling, Terraform / Infra as Code
