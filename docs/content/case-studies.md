## Y2Notion

### Problem

I use a lot of YouTube and sometimes I come across useful information that I want to save for a later time. What I usually do is copy the transcription of the YouTube video, give it to AI to summarize it and then save it to my Notion workspace. But after doing this multiple times I had the idea to create a tool that would automate these 3 steps. That is how Y2Notion was born, a Next.js application that converts YouTube videos to Markdown summaries and allowing you to save them directly to your Notion Workspace with the click of a button.

### Approach

I took a documentation first approach by creating a Notion page describing the tool I want to build, the core features and the step-by-step implementation. The features I identified were the YouTube-to-markdown converter and the button to save a summary to Notion.

After writing the MVP I started thinking about the tech-stack I was going to use. I went wih Next.js because it combines both the frontend and backend in one application, and its the framework I'm the most familiar with. For the AI summarized I went with Groq because you don't have to pay for a monthly subscription.

For tracking my tasks I used a simple todo file in my /docs folder. Every session I determine 2-4 todos and implement them until I'm done. Afterwards I move them to the `Done` section and write the next batch of todos. It's simple system but it allows me to work uninterrupted for a longer time, making it easier to concentrate.

### Challenge

Along the way I also faced some technical issues. For retrieving YouTube video transcripts, I was originally using a tool called `transcript-plus` but after using it in production, I started getting a error. This error happend because YouTube only allows requests from browsers. To fix this I used an alternative tool called `Supadata`, which unlike the previous tool worked perfectly in a production environment. 

### Result

Y2Notion ended up becoming exactly the tool that I had envisioned. By simply pasting a URL you can generate a concise summary with the option to save it to your Notion workspace. Now each time I need a video summarized I open my shortcut to Y2Notion and let it generate a summary. Aside from having a new useful app, I also take some important lessons with me. Firstly, It's always necessary to test in a production environment. There could be features that work while developing but break when published. Secondly, don't over plan, by just doing you will find that everything will click. Lastly, split large functions into smaller parts, so when debugging you can find solutions faster.

## Hairsalon booking system

### Problem

For this project I determined to create a reservation system for a  conceptual barbershop. Many barbers handle their appointments manually using WhatsApp or phone calls. This approach works for a small number of clients, but once you start to get more calls it can get quite difficult. It's also difficult for the customer because he needs to make the time to book an appointment and wait for a confirmation. With a reservation system both these problems can get solved.

### Approach

Like usual I took a documentation first approach. I first wrote a project description and determined the MVP. But this time I let a `features` file get generated. This is just a file that contains all the core `features` with a acceptance criterium. Using this `features` file I can easily determine what I need to work on and know exactly when a feature is finished.

One of the features were e-mail notifications for both the customer and barber when a booking is made. I implemented this feature using resend. Which is a library that makes it easy to send e-mails with a template. Furthermore I used Supabase as my Postgres database. In I created a table called reservations, it contains every important property including the booking status. In addition, I created a rate_limits table to avoid spam. I normally use Upstash Redis but the free tier only allows you to create one project, which was already taken.

### Challenge

A problem where I spend a lot of time on was an issue with RLS (Row-Level Security). I made the decision to completely neglect this while working on my project. This ended up becoming a disadvantage since it blocked my queries from working after I had enabled it. And the problem is that it didn't even give a error message, It just gave a empty array back. From this I take with me to always plan out your RLS policies before working on the database layer of your application.

### Result

After finishing every feature and implementing a conceptual website called The Blade I got a fully working reservation system with a intuitive protected dashboard. Customers can make an appointment on their preferred timeslot, and afterwards the barber gets a notification saying who made a reservation and for when it is. On the server side the barber can view every reservation and their details, filter them on state and/or date, and cancel them if necessary.

## Warehouse Insights

### Problem

Most Warehouses work with multiple systems, for example for managing their orders and inventory. This spreads data across differente locations, making it difficult to compare and perform important actions, like reducing the stock when a order is made. In addition, most Warehouses don't have a concise interface where they can view their Warehouse information live. These are all problems that I solved with Warehouse Insights.

### Approach

For the MVP of this project I determined to implement 7 features. The dashboard with important KPI's, orders and stocks overview pages, product detail page, authentication, realtime data and notifications. Along the way I implemented two forms for creating a stock and an order to make the project more realistic.

For almost each feature I created a feature spec file. This is a new concept I learned, basically its a description of a feature you want to implement with at least two sections: the user story and the acceptance criteria. Using feature specs I could clearly know when a certain feature is finished saving me from wasting time golden plating. Aside from that I kept a `backlog.md` to have a overview of every core feature. It keeps me motivated because it shows I'm actually progressing.

Pusher is a library that allows you to add realtime functionality to your application. I used this tool for implementing realtime data and notifications. Also I used auth.js for handling the authentication. This library makes logging in easier since it used other platforms like Google and GitHub to authenticate.

I didn't focus on UI in the beginning...

### Challenge

A problem I faced while working on this problem is the lack of documentation for Pusher. They don't have tutorials specifically for Next.js applications, eventually using Claude I setup everything properly. Furthermore I noticed a bad habit of myself while working on the inventory and orders overview pages. It's that I love to refactor code and make it more efficient. While this isn't directly bad, it can take a lot of time which would better be spend finishing up the MVP. 

### Result

The end result for Warehouse Insights was better then expected. After finishing every task and feature I had a intuitive Dashboard application that shows real time data. Another thing I'm content about is the structure of the application. Everything is organized cleanly under Dashboard, you can easily navigate between different overviews using the sidebar. Warehouse Insights truly allows Warehouse managers to make better and faster decisions using real-time data. Managers never miss out on a opportunity because of the notifications.