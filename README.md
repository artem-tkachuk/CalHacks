## Inspiration
We sat down and thought: okay, we will come back home from CalHacks. And what's the very next action? One of us will want to go play soccer, another teammate may want to go to the bar and talk about Machine Learning with someone. And we understood there are tons of wonderful and interesting people out there (sometimes even in the closest house!), who at a certain point of time want to do the same thing as you want or a complementary one. And today, unfortunately, there is no way we can easily connect with them and find the people we need to be with exactly at the time we need it.  Just because there is a barrier, just because we do not share the "friends of friends" and so on. And doing something together can be a great opportunity to get to know each other better. By the way, 22% of millennials (people just like us) reported that they do not have true friends who know them well. We want to solve this problem.

## Vision 
Our platform is made for everyone regardless of any social criteria and it serves the sole purpose of making people happier by helping them spend their time in the best possible way, eliminating the feeling of loneliness. We believe, our platform can help get people out of their gadgets and bring more "real life" into our lives! We also think that many people are amazing and wonderful, but you did not get a chance to know them yet, and meeting these people any later than right now is a truly huge loss.

## What it does
It lets a host organize an event and accept/decline sign-ups for it regardless of what this event is. All the data is synchronized in real-time made possible by leveraging the enormous power of Firebase triggers and listeners. The event can be anything starting from a study group for EECS class at Berkeley at 7 up to a suite of bass, piano, and drums players for a guitarist in 30 minutes at his house! This project is **global** and will make a huge positive impact on the life of, without exaggeration, every individual. We connect people based on geolocation and not only. We make people happier and increase the quality of their time and entertainment.

## How we built it
We created a Node.js web server on Google Cloud App Engine, deployed it, connected it to a remote cloud CockroachDB cluster, where we store the history of user's searches (including the ones made with his voice, for which we used Google Cloud Speech-To-Text API). We stored events' and users' data in Firebase Real-Time Database. To make it sweet and simple, we used Expo to create the frontend (aka mobile app) and made expo app talk both to our App Engine server and Firebase serverless infrastructure. We hugely rely on the real-time functionality of Firebase. Think of huge chunks of data flying around here and there, empowering people to get the most of their time and to be happier. This is us, yeah :)

## Challenges we ran into
1. Connecting to the remote CockroachDB cluster from an App Engine. The connection string method does not work at all, so we spent some time figuring out we should use separate parameters method for this.
2. Firebase Real-time Database CRUD turned out to be more complicated than we were told it is and we expected it to be
3. Configuring Firebase Social Auth took a lot of time, because of permissions issues in Real-Time Database
4. Understanding React-Native mechanics was very challenging for all of us, but we enjoyed some of its advantages over native apps
5. There was a giant merging conflict happening at night on Saturday, that was very hard to resolve without the loss of someone's work, but we were able to manage with it
6. We were not really able to get much help on Expo and how it is different from just React Native in the beginning of the hackathon
7. Some environmental variables caused problems while working with Google Cloud's Speech-To-Text API and putting the data to CockrouchCloud cluster

## Accomplishments that we are proud of
1. We learned a lot about React-Native and Expo
2. We were able to find agreements and treated each other with respect throughout the event
3. We were able to identify the strongest parts of each teammate's skillset and delegate the tasks properly in order to save time and effort by focusing on the business logic, not technical details
4. We resolved the merging conflict that occurred
5. Finally, We made it! It's actually working! We learned so many APIs, learned cross-platform mobile, became good friends and just had a great time!

## What we learned
1. There are many ready-made solutions out there, and sometimes, if we do not find them, we can spend hours reinventing the wheel ==> a good search prior to the start is a really good practice and almost a necessity
2. Each technology has its advantages and disadvantages. It is always a trade-off
3. A decision, once made, sticks to the hackathon project until the end, since the new integrated components/libraries/frameworks have to be compatible with the existing ones
4. One person can do a good project. A team can do a life-changing product.
5. Ethics of technology is a huge question one should consider when using various tools. Always put people/users first.

## What's next for calhacks
1. Add Image recognition: let's say pointing your phone to guitar, and immediately showing you other musicians seeking for the guitarist right now close to you (as one application of this)
2. We can PROBABLY scale to the digital world too, for example, connecting gamers to play a certain game at a certain time, but this a little bit contradicts with our vision of bringing more "real" aspect to lives..
3. We want to stick to a good performance given the huge stream of new users coming soon (seriously, this is for everyone). 
