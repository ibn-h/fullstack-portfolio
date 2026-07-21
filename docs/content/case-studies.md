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

For this project I determined to create a reservation system for a  conceptual barbershop. Many barbers handle their appointments manually using WhatsApp or phone calls. This approach works for a small number of clients, but once you start to get more calls it can get quite difficult. It's also difficult for the customer because he needs to make the time to book an appointment and wait for a confirmation. With a reservation system both these problems could get solved.

### Approach

### Challenge

### Result

## Warehouse Insights

### Problem

### Approach

### Challenge

### Result