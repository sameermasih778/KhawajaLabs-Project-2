export const authors = [
  {
    id: 'tom-white',
    name: 'Tom White',
    role: 'Software Developer',
    handle: '@tomw94',
    bio: 'Developer with a knack for building efficient software solutions.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'rachel-green',
    name: 'Rachel Green',
    role: 'UX Designer',
    handle: '@rachelg41',
    bio: 'Enthusiastic about creating user-friendly and impactful designs.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'michael-brown',
    name: 'Michael Brown',
    role: 'Business Analyst',
    handle: '@michaelb36',
    bio: 'Focused on data-driven insights for effective decision-making.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'emily-clark',
    name: 'Emily Clark',
    role: 'Content Writer',
    handle: '@emilyc74',
    bio: 'Skilled in crafting engaging content for diverse audiences.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'david-smith',
    name: 'David Smith',
    role: 'Marketing Specialist',
    handle: '@davids82',
    bio: 'Passionate about innovative marketing techniques and digital strategies.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Senior Project Manager',
    handle: '@sarah52',
    bio: 'Expert in project management and team collaboration strategies.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
  },
];

export const blogPosts = [
  {
    slug: 'enhance-workflow-efficiency-with-custom-filters',
    title: 'Enhance Workflow Efficiency with Custom Filters',
    bannerTitle: 'Workflow\nEfficiency',
    category: 'Efficiency',
    categoryColor: 'text-emerald-400',
    categoryBg: 'bg-emerald-500/10 border-emerald-500/20',
    date: 'Nov 30, 2024',
    readTime: '5 min read',
    author: authors[0], // Tom White
    featured: true,
    excerpt: 'Discover how custom filters can transform your project workflows and save hours of repetitive searching.',
    sections: [
      {
        heading: 'Prioritize Tasks Effectively',
        content: 'Identify critical tasks based on deadlines and importance to streamline your workflow. Use customizable filter queries to categorize tasks into urgent, in-progress, and backlog tiers. Communicate priorities clearly across distributed teams to ensure complete alignment on sprint targets.',
      },
      {
        heading: 'Utilize Project Management Tools',
        content: 'Efficient task management requires the right tools. Implementing smart filter presets helps engineering and product teams track progress, set clear milestones, and eliminate noise. Tools like Suprema automate repetitive triage so you never miss high-impact blockers.',
      },
      {
        heading: 'Foster Team Collaboration',
        content: 'Encourage open communication and transparent updates across workspaces. Create a culture where feedback loops are instant and customized views allow every stakeholder to see relevant real-time progress.',
      },
      {
        heading: 'Set Clear Goals and Expectations',
        content: 'Establish specific, measurable, achievable, relevant, and time-bound (SMART) targets. Break complex initiatives into manageable epics with linked sub-tasks and automated status transitions.',
      }
    ]
  },
  {
    slug: 'mastering-time-management-for-maximum-efficiency',
    title: 'Mastering Time Management for Maximum Efficiency',
    bannerTitle: 'Mastering Time\nManagement',
    category: 'Productivity',
    categoryColor: 'text-amber-400',
    categoryBg: 'bg-amber-500/10 border-amber-500/20',
    date: 'Oct 18, 2024',
    readTime: '6 min read',
    author: authors[4], // David Smith
    featured: true,
    excerpt: 'Effective task management is crucial for busy teams to enhance productivity and ensure smooth workflow. Here are essential tips to stay organized.',
    sections: [
      {
        heading: 'Prioritize Tasks Effectively',
        content: 'Identify critical tasks based on deadlines and importance to streamline your workflow. Use the Eisenhower Matrix to categorize tasks into urgent and important tiers. Regularly review and adjust priorities based on ongoing project developments.',
      },
      {
        heading: 'Utilize Project Management Software',
        content: 'Efficient time tracking empowers individuals to identify hidden bottlenecks. Suprema provides integrated time tracking and automated timesheets directly within your issue kanban boards.',
      },
      {
        heading: 'Establish Focus Blocks',
        content: 'Minimize context switching by scheduling focused deep-work blocks. Combine keyboard-first shortcuts with quick command palette actions to log tasks without breaking flow state.',
      }
    ]
  },
  {
    slug: 'boost-team-collaboration-with-effective-task-management',
    title: 'Boost Team Collaboration with Effective Task Management',
    bannerTitle: 'Team\nCollaboration',
    category: 'Collaboration',
    categoryColor: 'text-blue-400',
    categoryBg: 'bg-blue-500/10 border-blue-500/20',
    date: 'Oct 15, 2024',
    readTime: '4 min read',
    author: authors[5], // Sarah Johnson
    featured: true,
    excerpt: 'Foster open communication and transparent ownership across distributed teams to ship faster.',
    sections: [
      {
        heading: 'Create Single Sources of Truth',
        content: 'Eliminate silos by centralizing documentation, task dependencies, and design feedback in one synchronized hub.',
      },
      {
        heading: 'Automate Status Broadcasts',
        content: 'Reduce status meetings with automated activity feeds that notify relevant contributors whenever tasks progress.',
      }
    ]
  },
  {
    slug: 'maximize-your-team-s-productivity-with-suprema',
    title: "Maximize Your Team's Productivity with Suprema",
    bannerTitle: 'Team\nProductivity',
    category: 'Productivity',
    categoryColor: 'text-amber-400',
    categoryBg: 'bg-amber-500/10 border-amber-500/20',
    date: 'Oct 18, 2024',
    readTime: '5 min read',
    author: authors[1], // Rachel Green
    featured: false,
    excerpt: 'Explore the core features of Suprema that help modern teams eliminate clutter and focus on what moves the needle.',
    sections: [
      {
        heading: 'Smart Task Assignment',
        content: 'Dynamically allocate work items based on capacity, current workload, and domain expertise.',
      },
      {
        heading: 'Real-Time Insights',
        content: 'Gain instant visibility into velocity, burndown rates, and completion trajectories across all ongoing sprints.',
      }
    ]
  },
  {
    slug: 'how-to-streamline-projects-for-maximum-efficiency',
    title: 'How to Streamline Projects for Maximum Efficiency',
    bannerTitle: 'Streamline\nProjects',
    category: 'Efficiency',
    categoryColor: 'text-emerald-400',
    categoryBg: 'bg-emerald-500/10 border-emerald-500/20',
    date: 'Oct 15, 2024',
    readTime: '7 min read',
    author: authors[2], // Michael Brown
    featured: false,
    excerpt: 'Step-by-step framework to audit project pipelines, eliminate bottlenecks, and accelerate delivery.',
    sections: [
      {
        heading: 'Identify and Remove Friction',
        content: 'Analyze cycle times to spot review bottlenecks and streamline handoffs between design, engineering, and QA.',
      },
      {
        heading: 'Standardize Sprint Cadences',
        content: 'Adopt uniform sprint planning and retrospective templates that scale effortlessly as your headcount expands.',
      }
    ]
  },
  {
    slug: 'top-task-management-tips-for-busy-teams',
    title: 'Top Task Management Tips for Busy Teams',
    bannerTitle: 'Task Management\nTips',
    category: 'Task Management',
    categoryColor: 'text-purple-400',
    categoryBg: 'bg-purple-500/10 border-purple-500/20',
    date: 'Sep 21, 2024',
    readTime: '4 min read',
    author: authors[3], // Emily Clark
    featured: false,
    excerpt: 'Proven habits and strategies top-performing engineering and product teams use every day.',
    sections: [
      {
        heading: 'Decompose Large Epics',
        content: 'Granular task decomposition clarifies acceptance criteria and maintains steady psychological momentum.',
      },
      {
        heading: 'Enforce WIP Limits',
        content: 'Cap work-in-progress tasks to prevent cognitive overload and ensure active deliverables cross the finish line.',
      }
    ]
  }
];
