# wazan

Wazan is a web application built using Next.js, TypeScript, React, Tailwind CSS, Supabase, and a PostgreSQL database. Wazan allows users to track their main lifts, such as deadlifts, bench press, and squats, as well as monitor their body weight over time. It provides a simple and intuitive interface for users to log their workouts and visualize their progress.

You can access the live website at https://wazan.vercel.app/.


https://github.com/faizanraso/wazan/assets/59986120/cce865fb-f503-4dc3-afff-ffab60980740



## Features

- User authentication and authorization using Supabase
- Recording and tracking of main lifts
- Tracking of body weight over time
- Intuitive user interface with responsive design
- Interactive charts to visualize progress
- Database persistence using PostgreSQL

## Getting Started

1. Clone the repository
```
https://github.com/faizanraso/wazan.git
```

2. Navigate to the project directory:
```
cd wazan
```

3. Install the dependencies:
```
npm install
```

4. Set up your environment variables:
Create a .env.local file in the project root and add the following environment variables:
``` 
NEXT_PUBLIC_SUPABASE_URL=<YOUR_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<YOUR_SUPABASE_ANON_KEY> 
```

5. Start the development server:
```
npm run dev
```

## License
This project is licensed under the MIT License.


