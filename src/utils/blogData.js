import { posts as aiPosts } from '../data/blog/ai';
import { posts as cicdPosts } from '../data/blog/cicd';
import { posts as engineeringPosts } from '../data/blog/engineering';
import { posts as hardwarePosts } from '../data/blog/hardware';
import { posts as protocolsPosts } from '../data/blog/protocols';
import { posts as softwarePosts } from '../data/blog/software';

// Combine all posts for the listing page and metadata lookup
export const blogPosts = [
  ...aiPosts,
  ...cicdPosts,
  ...engineeringPosts,
  ...hardwarePosts,
  ...protocolsPosts,
  ...softwarePosts
];

// Map categories to dynamic import functions for lazy-loading full post contents
export const categoryLoaders = {
  ai: () => import('../data/blog/ai.js'),
  cicd: () => import('../data/blog/cicd.js'),
  engineering: () => import('../data/blog/engineering.js'),
  hardware: () => import('../data/blog/hardware.js'),
  protocols: () => import('../data/blog/protocols.js'),
  software: () => import('../data/blog/software.js'),
};
