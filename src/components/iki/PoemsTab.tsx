import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const POEMS = [
  {
    id: 1,
    title: "Oh, Sun.",
    date: "2024",
    body: `Oh, sun.
If you could see yourself in the mirror
That shine
That power
That glory
The victory
Will be the end of our history
Unfortunately

Oh, sun.
If someone could show the picture of yourself
That beauty
That loneliness
That duty
Will be the end of your story
Finally

Oh, sun.
If you could talk to somebody
If they could listen to
Would you say that keyword to save the mystery
The maze
The last piece of puzzle
That unrequited love story
You may complete,
If somebody could dare like me.
Will be the end of our journey,
Burn us.
Return us to yourself.`
  },
  {
    id: 2,
    title: "We Are One",
    date: "2024",
    body: `We are one,
We are full of expectations.
See what is summarizing hopeful sounds below
Find something never gonna fail those seasons
Feel when Idea comes to love...
Kneel down in front of the beginning!
Pleased tears, near fears go away!
Inside insider its happening.. ;)
Be love when it shows you the way...`
  },
  {
    id: 3,
    title: "Thus, This Story Has to Tell",
    date: "2023",
    body: `Thus, this story has to tell
Focus goes to next line
Its kinda parallel
Perfect timing
Once upon a time
There were no minutes
No seconds
No moments
No borders
No limits
No numbers
Once upon that time
There were no humans
Existence wanted to create
Something precious
Us`
  },
  {
    id: 4,
    title: "Do You Want to Feel the Same?",
    date: "2023",
    body: `Do you want to feel the same?
Do you want someone to blame?
Do you sometimes imagine the game?
Do you want to play?
As yesterday was tomorrow 2 days ago
Today is the yesterday of tomorrow and the day before
Life is not a story.. Its a history.
Comes from the first day til today, along.
All alone, twins with the mystery
Open your mind
Close your eyes
Don't even think to open and blink through the sight
Be dark.
Rhythm is your heartbeat
Rule will be said by blood.
When you catch the best moment of your memory
Lock it, throw and let it fly
Let somebody else catch and continue the game.
Now you can blame
Be the history.
Complete your task as you came here to be.
Wanna play again?`
  },
  {
    id: 5,
    title: "I Can See It From Your Sight",
    date: "2023",
    body: `I can see it from your sight
I want to shine within your eyes light
Days might get longer, there may be doors
I will talk about this when its good night, and more
No doubts darling
Dance like there is no tomorrow
I will surrender
No doubts darling anymore
You are not a step less not a step more
You are a bless and above
Don't give up singing while you dancing
There are beautiful places we need to go`
  },
  {
    id: 6,
    title: "You Must Be Messed Up Honey",
    date: "2023",
    body: `You must be messed up honey with that weights on your shoulders
Bring that familiar feeling with you, we will find the holders
Be honest, trust me up
You cant be alone with truth borders
Count the stars that touch you gently
Im spelling the spells honey
Wear your most beautiful dress
We will take a journey without anything
Wait for the bless
How could you be that good enough for me
Even the idea is breathing in my soul
Be me my love, be my crazy mind
Try your best to enter in
Try to see whats going on in me
Every second, step by step, time by time`
  },
  {
    id: 7,
    title: "Lets Ride the Night Above the Stars",
    date: "2022",
    body: `Lets ride the night above the stars
Time is a moment there, heals the hearts
We will come back soon to our welcome scars
Who we are?
When we are?
Then we are
Gonna fly
Try anyway`
  },
  {
    id: 8,
    title: "Across the Ocean",
    date: "2022",
    body: `Across the ocean
What's near the edge
Why all of this motion
Why I have this fear

Let's play fetch
All around this round world
Why surrounding emptiness
An interesting loneliness
An impressive huge

Lets play hide and seek
Lets wait for someone come to see us
Lets close our eyes
Until light gets in our sight in the dark`
  }
];

const PoemsTab = () => {
  const [search, setSearch] = useState('');

  const filtered = POEMS.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-full">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="relative z-10 px-5 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <h1 className="font-display text-5xl font-bold text-primary mb-1">Poetry</h1>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">{filtered.length} poems</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative mb-6"
        >
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search poems..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-card/80 backdrop-blur-xl border border-border rounded-xl py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
        </motion.div>

        {/* Poems */}
        <div className="space-y-4">
          {filtered.map((poem, i) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              className="bg-card/80 backdrop-blur-xl rounded-2xl p-5 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="text-base font-bold text-primary leading-tight">{poem.title}</h2>
                <span className="text-xs text-muted-foreground ml-3 shrink-0">{poem.date}</span>
              </div>
              <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">
                {poem.body}
              </p>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-12">No poems found</p>
        )}

        {/* Instagram follow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 mb-2"
        >
          <a
            href="https://www.instagram.com/siir2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-card/80 backdrop-blur-xl border border-border hover:border-primary/40 text-foreground font-medium py-3 rounded-xl transition-all duration-300 text-sm"
          >
            Follow @siir2.0 on Instagram
            <ExternalLink size={14} className="text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PoemsTab;
